import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Please submit the application form again." }, { status: 400 });
  }

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const jobTitle = String(form.get("jobTitle") || "").trim();
  const message = String(form.get("message") || "").trim();
  const resume = form.get("resume");

  if (!name || !email || !phone || !jobTitle || !resume || typeof resume.arrayBuffer !== "function") {
    return NextResponse.json({ error: "Please complete the required fields and attach your résumé." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (name.length > 120 || phone.length > 40 || jobTitle.length > 160 || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }
  if (resume.size <= 0 || resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: "Your résumé must be a non-empty file of 4 MB or smaller." }, { status: 400 });
  }

  const filename = String(resume.name || "resume").replace(/[\\/\r\n"]/g, "_");
  const extension = filename.toLowerCase().slice(filename.lastIndexOf("."));
  if (!ALLOWED_EXTENSIONS.has(extension)) {
    return NextResponse.json({ error: "Please upload your résumé as a PDF, DOC or DOCX file." }, { status: 400 });
  }
  const allowedMimeTypes = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream",
  ]);
  if (resume.type && !allowedMimeTypes.has(resume.type)) {
    return NextResponse.json({ error: "The résumé file type is not supported. Please upload a PDF, DOC or DOCX file." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Career application email is not configured: RESEND_API_KEY is required.");
    return NextResponse.json({ error: "The application form is temporarily unavailable. Please email info@creativacare.ca." }, { status: 503 });
  }

  const recipients = ["info@creativacare.ca"];
  const sender = "Creativa Care <info@creativacare.ca>";
  const submittedAt = new Date().toLocaleString("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Toronto",
  });

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    jobTitle: escapeHtml(jobTitle),
    filename: escapeHtml(filename),
    message: escapeHtml(message || "No additional message provided.").replace(/\r?\n/g, "<br />"),
    submittedAt: escapeHtml(submittedAt),
  };

  const html = [
    '<div style="font-family:Arial,sans-serif;color:#173f3a;max-width:680px;margin:0 auto">',
    '<div style="background:#07574f;padding:24px 28px;border-radius:12px 12px 0 0;color:#fff">',
    '<p style="margin:0 0 8px;text-transform:uppercase;letter-spacing:2px;font-size:12px">Creativa Care • Careers</p>',
    '<h1 style="margin:0;font-size:25px">New job application</h1></div>',
    '<div style="padding:24px 28px;border:1px solid #dce9e4;border-top:0;border-radius:0 0 12px 12px">',
    '<p>A candidate submitted an application through the Creativa Care Careers page.</p>',
    '<table role="presentation" style="border-collapse:collapse;width:100%">',
    '<tr><td style="padding:10px;background:#f5f8f5;width:150px"><strong>Position</strong></td><td style="padding:10px">' + safe.jobTitle + '</td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Applicant</strong></td><td style="padding:10px">' + safe.name + '</td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Email</strong></td><td style="padding:10px"><a href="mailto:' + safe.email + '" style="color:#07574f">' + safe.email + '</a></td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Phone</strong></td><td style="padding:10px">' + safe.phone + '</td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Résumé</strong></td><td style="padding:10px">' + safe.filename + ' (attached)</td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Submitted</strong></td><td style="padding:10px">' + safe.submittedAt + ' (Kingston time)</td></tr>',
    '</table><h2 style="font-size:17px;margin:24px 0 12px">Cover letter / message</h2>',
    '<div style="background:#f8faf8;border-left:3px solid #0a7167;padding:16px;line-height:1.6">' + safe.message + '</div>',
    '<p style="font-size:12px;color:#657873;margin:24px 0 0">Reply directly to this email to contact ' + safe.name + '.</p>',
    '</div></div>',
  ].join("");

  const text = [
    "NEW CREATIVA CARE JOB APPLICATION",
    "",
    "Position: " + jobTitle,
    "Applicant: " + name,
    "Email: " + email,
    "Phone: " + phone,
    "Résumé: " + filename + " (attached)",
    "Submitted: " + submittedAt + " (Kingston time)",
    "",
    "COVER LETTER / MESSAGE",
    message || "No additional message provided.",
    "",
    "Reply directly to this email to contact the applicant.",
  ].join("\n");

  try {
    const resumeBase64 = Buffer.from(await resume.arrayBuffer()).toString("base64");
    const contentTypeByExtension = {
      ".pdf": "application/pdf",
      ".doc": "application/msword",
      ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    };
    const contentType = contentTypeByExtension[extension];
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: recipients,
        reply_to: email,
        subject: "Job application: " + jobTitle.replace(/[\r\n]+/g, " ").slice(0, 160) + " — " + name.replace(/[\r\n]+/g, " ").slice(0, 120),
        html,
        text,
        attachments: [{ filename, content: resumeBase64, content_type: contentType }],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend career application request failed:", response.status, detail);
      return NextResponse.json({ error: "We couldn’t send your application right now. Please try again or email info@creativacare.ca." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Career application email delivery error:", error);
    return NextResponse.json({ error: "We couldn’t send your application right now. Please try again." }, { status: 502 });
  }
}
