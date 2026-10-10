interface Email {
  to: string;
  subject: string;
  html: string;
  text: string;
}

// Sends through Resend's HTTP API; returns false (never throws) so callers can fall back
export async function sendEmail(email: Email) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[Email] RESEND_API_KEY is not set; email not sent.");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.MAIL_FROM || "Aarambha <onboarding@resend.dev>", ...email }),
    });
    if (!response.ok) console.error("[Email] Resend rejected the email:", await response.text());
    return response.ok;
  } catch (error) {
    console.error("[Email] Failed to reach Resend:", error);
    return false;
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export function accessEmail(options: { name: string; email: string; password: string; loginUrl: string; reset: boolean }) {
  const { name, email, password, loginUrl, reset } = options;
  const intro = reset
    ? "An administrator has reset your password for the Aarambha website admin."
    : "You have been given access to the Aarambha website admin.";

  return {
    to: email,
    subject: reset ? "Your Aarambha admin password was reset" : "Welcome to the Aarambha admin",
    text: `Hi ${name},\n\n${intro}\n\nSign in: ${loginUrl}\nEmail: ${email}\nTemporary password: ${password}\n\nYou will be asked to choose a new password after signing in.`,
    html: `<p>Hi ${escapeHtml(name)},</p><p>${intro}</p><p><a href="${escapeHtml(loginUrl)}">Sign in to the admin</a><br>Email: ${escapeHtml(email)}<br>Temporary password: <code>${escapeHtml(password)}</code></p><p>You will be asked to choose a new password after signing in.</p>`,
  };
}
