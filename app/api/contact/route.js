import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Please submit the form again." }, { status: 400 }); }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const care = String(body.care || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !phone || !care || !message) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  if (!EMAIL_RE.test(email) || email.length > 254) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if ([name, phone, care].some((value) => value.length > 200) || message.length > 10000) return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipients = [
    "florence.nibagwire@creativacare.ca",
    "jeanpaul.mugwaneza@creativacare.ca",
  ];
  const sender = "Creativa Care <info@creativacare.ca>";
  if (!apiKey) {
    console.error("Contact email is not configured: RESEND_API_KEY is required.");
    return NextResponse.json({ error: "The contact form is temporarily unavailable. Please email info@creativacare.ca or call 613-583-7320." }, { status: 503 });
  }

  const submittedAt = new Date().toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Toronto" });
  const safe = {
    name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone),
    care: escapeHtml(care), message: escapeHtml(message).replace(/\r?\n/g, "<br />"),
    submittedAt: escapeHtml(submittedAt),
  };

  const html = [
    '<div style="font-family:Arial,sans-serif;color:#173f3a;max-width:680px;margin:0 auto">',
    '<div style="background:#07574f;padding:24px 28px;border-radius:12px 12px 0 0;color:#fff"><p style="margin:0 0 8px;text-transform:uppercase;letter-spacing:2px;font-size:12px">Creativa Care • Website inquiry</p><h1 style="margin:0;font-size:25px">New contact request</h1></div>',
    '<div style="padding:24px 28px;border:1px solid #dce9e4;border-top:0;border-radius:0 0 12px 12px">',
    '<p style="margin-top:0">A new message was submitted through the Creativa Care contact page.</p><h2 style="font-size:17px;margin:24px 0 12px">Contact details</h2>',
    '<table role="presentation" style="border-collapse:collapse;width:100%">',
    '<tr><td style="padding:10px;background:#f5f8f5;width:150px"><strong>Full name</strong></td><td style="padding:10px">' + safe.name + '</td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Email address</strong></td><td style="padding:10px"><a href="mailto:' + safe.email + '" style="color:#07574f">' + safe.email + '</a></td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Phone number</strong></td><td style="padding:10px">' + safe.phone + '</td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Interested in</strong></td><td style="padding:10px">' + safe.care + '</td></tr>',
    '<tr><td style="padding:10px;background:#f5f8f5"><strong>Submitted</strong></td><td style="padding:10px">' + safe.submittedAt + ' (Kingston time)</td></tr></table>',
    '<h2 style="font-size:17px;margin:24px 0 12px">Message</h2><div style="background:#f8faf8;border-left:3px solid #0a7167;padding:16px;line-height:1.6">' + safe.message + '</div>',
    '<p style="font-size:12px;color:#657873;margin:24px 0 0">Reply directly to this email to respond to ' + safe.name + '.</p></div></div>',
  ].join("");

  const text = ["NEW CREATIVA CARE WEBSITE INQUIRY", "", "Full name: " + name, "Email address: " + email, "Phone number: " + phone, "Interested in: " + care, "Submitted: " + submittedAt + " (Kingston time)", "", "MESSAGE", message, "", "Reply directly to this email to respond to the sender."].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ from: sender, to: recipients, reply_to: email, subject: "New website inquiry: " + name + " — " + care, html, text }),
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend email request failed:", response.status, detail);
      return NextResponse.json({ error: "We couldn’t send your message right now. Please try again or contact us by phone." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email delivery error:", error);
    return NextResponse.json({ error: "We couldn’t send your message right now. Please try again or contact us by phone." }, { status: 502 });
  }
}
