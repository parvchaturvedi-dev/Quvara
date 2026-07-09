import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const {
    name = "",
    email = "",
    company = "",
    message = "",
    website = "", // honeypot — real users never fill this
  } = body ?? {};

  // Spam bots fill the hidden honeypot field. Pretend success, send nothing.
  if (website.trim()) {
    return Response.json({ ok: true });
  }

  // Validation
  if (
    !name.trim() ||
    !EMAIL_RE.test(email.trim()) ||
    message.trim().length < 5
  ) {
    return Response.json(
      { ok: false, error: "Please add your name, a valid email, and a short message." },
      { status: 400 }
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    return Response.json(
      { ok: false, error: "Email isn't configured yet. Please try again shortly." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const safe = (s) => String(s).replace(/[<>]/g, "");
  const subject = `New enquiry — ${safe(name)}${company ? ` · ${safe(company)}` : ""}`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0a0a0a;line-height:1.6">
      <h2 style="margin:0 0 16px">New enquiry from the Quvara site</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#6b6b6b">Name</td><td><strong>${safe(name)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#6b6b6b">Email</td><td>${safe(email)}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#6b6b6b">Company</td><td>${safe(company) || "—"}</td></tr>
      </table>
      <p style="margin:16px 0 4px;color:#6b6b6b">Message</p>
      <p style="white-space:pre-wrap;margin:0;padding:12px 16px;background:#f6f6f6;border-radius:8px">${safe(message)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Quvara Website" <${user}>`,
      to,
      replyTo: `${safe(name)} <${email}>`,
      subject,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\n${message}`,
      html,
    });
  } catch (err) {
    console.error("contact sendMail failed:", err?.message);
    return Response.json(
      { ok: false, error: "Couldn't send right now — please email us directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
