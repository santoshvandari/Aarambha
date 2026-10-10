import {
  CreateBucketCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
  PutBucketPolicyCommand,
  PutObjectCommand,
  S3Client,
  type S3ClientConfig,
  type S3ServiceException,
} from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";

interface StorageConfig {
  endpoint: string;
  publicEndpoint: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucketName: string;
  regionName: string;
}

// Environment variables
const getStorageConfig = (): StorageConfig => {
  const {
    OBJECT_STORAGE_ENDPOINT,
    OBJECT_STORAGE_PUBLIC_ENDPOINT,
    OBJECT_STORAGE_ACCESS_KEY,
    OBJECT_STORAGE_SECRET_KEY,
    OBJECT_STORAGE_BUCKET,
    OBJECT_STORAGE_REGION,
  } = process.env;

  if (!OBJECT_STORAGE_ENDPOINT || !OBJECT_STORAGE_ACCESS_KEY || !OBJECT_STORAGE_SECRET_KEY) {
    throw new Error("Missing required OBJECT_STORAGE environment variables");
  }

  return {
    endpoint: OBJECT_STORAGE_ENDPOINT,
    publicEndpoint: (OBJECT_STORAGE_PUBLIC_ENDPOINT || OBJECT_STORAGE_ENDPOINT).replace(/\/+$/, ""),
    accessKeyId: OBJECT_STORAGE_ACCESS_KEY,
    secretAccessKey: OBJECT_STORAGE_SECRET_KEY,
    bucketName: OBJECT_STORAGE_BUCKET || "aarambha",
    regionName: OBJECT_STORAGE_REGION || "us-east-1",
  };
};

const config = getStorageConfig();

// Initialize the client config
const s3ClientConfig: S3ClientConfig = {
  endpoint: config.endpoint,
  region: config.regionName,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
  },
  forcePathStyle: true,
  requestHandler: new NodeHttpHandler({
    connectionTimeout: 3000,
    socketTimeout: 5000,
  }),
};

// Initialize the client
const s3Client = new S3Client(s3ClientConfig);

// Anyone can read objects (site images); only the server can write
const publicReadPolicy = JSON.stringify({
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Principal: { AWS: ["*"] },
      Action: ["s3:GetObject"],
      Resource: [`arn:aws:s3:::${config.bucketName}/*`],
    },
  ],
});

// Ensures the bucket exists and is publicly readable; called once at server start
async function initializeBucket(): Promise<void> {
  try {
    // Check whether the bucket exists
    await s3Client.send(new HeadBucketCommand({ Bucket: config.bucketName }));
    console.info(`[Storage] Bucket "${config.bucketName}" already exists.`);
  } catch (error) {
    const s3Error = error as S3ServiceException;
    // Bucket doesn't exist
    if (s3Error.$metadata?.httpStatusCode === 404) {
      try {
        await s3Client.send(new CreateBucketCommand({ Bucket: config.bucketName }));
        console.info(`[Storage] Bucket "${config.bucketName}" created successfully.`);
      } catch (createError) {
        const cError = createError as S3ServiceException;
        if (cError.name !== "BucketAlreadyOwnedByYou" && cError.name !== "BucketAlreadyExists") {
          throw cError;
        }
      }
    } else {
      // Access denied or other errors
      console.error(`[Storage] Critical error accessing bucket: ${s3Error.message}`);
      throw s3Error;
    }
  }

  await s3Client.send(new PutBucketPolicyCommand({ Bucket: config.bucketName, Policy: publicReadPolicy }));
}

function publicUrl(key: string) {
  return `${config.publicEndpoint}/${config.bucketName}/${key}`;
}

async function uploadObject(key: string, body: Uint8Array, contentType: string) {
  await s3Client.send(
    new PutObjectCommand({ Bucket: config.bucketName, Key: key, Body: body, ContentType: contentType })
  );
}

async function deleteObject(key: string) {
  await s3Client.send(new DeleteObjectCommand({ Bucket: config.bucketName, Key: key }));
}

export { s3Client, config, initializeBucket, publicUrl, uploadObject, deleteObject };
