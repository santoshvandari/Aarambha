import sanitizeHtml from 'sanitize-html';
import { config } from './storage';

const imageBase = `${config.publicEndpoint}/${config.bucketName}/`;

// Only what the article editor can produce survives; images must come from our own bucket
export function sanitizeArticle(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      'p',
      'h2',
      'h3',
      'strong',
      'em',
      'u',
      's',
      'a',
      'ul',
      'ol',
      'li',
      'blockquote',
      'hr',
      'br',
      'img',
    ],
    allowedAttributes: { a: ['href'], img: ['src', 'alt'] },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { target: '_blank', rel: 'noopener noreferrer' }),
    },
    exclusiveFilter: (frame) => frame.tag === 'img' && !frame.attribs.src?.startsWith(imageBase),
  });
}
