"use server";

import { db } from "@/db";
import { submissions } from "@/db/schema";
import { FORM_TYPE_LABELS, LIMITS, isFormType, type ContactFormState } from "@/lib/contact";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import { createFormToken, hasTooManyLinks, isHumanPaced } from "@/lib/spam";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR = "Something went wrong while sending your message. Please try again or email us directly.";

// Issued when the form mounts; submissions must arrive at a human pace after this
export async function getFormToken() {
  return createFormToken();
}

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users never see or fill this field
  if (field(formData, "company")) {
    return { status: "success", message: "Thank you! We will contact you soon." };
  }

  const formType = formData.get("formType");
  const name = field(formData, "name");
  const email = field(formData, "email");
  const message = field(formData, "message");

  if (!isFormType(formType)) {
    return { status: "error", message: "Please choose what you are contacting us about." };
  }

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) fieldErrors.name = `Name must be under ${LIMITS.name} characters.`;
  if (!EMAIL_PATTERN.test(email) || email.length > LIMITS.email) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (formType === "query" && !message) fieldErrors.message = "Please tell us how we can help.";
  else if (message.length > LIMITS.message) {
    fieldErrors.message = `Message must be under ${LIMITS.message} characters.`;
  }
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "", fieldErrors };
  }

  if (!isHumanPaced(field(formData, "formToken"))) {
    return { status: "error", message: "That was very quick. Please wait a moment and send again." };
  }
  if (hasTooManyLinks(message)) {
    return { status: "error", message: "Please remove some links from your message and try again." };
  }

  try {
    if (await isRateLimited("contact", await getClientIp())) {
      return { status: "error", message: "Too many messages from your connection. Please try again later." };
    }
    await db.insert(submissions).values({ formType, name, email, message });
  } catch (err) {
    console.error("[contact] Failed to save submission:", err);
    return { status: "error", message: GENERIC_ERROR };
  }

  return {
    status: "success",
    message: `Thank you, ${name}! Your ${FORM_TYPE_LABELS[formType].toLowerCase()} request has been received. We will contact you soon.`,
  };
}
