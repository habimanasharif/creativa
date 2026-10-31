"use client";

import { useId, useState } from "react";
import { ArrowRight, Paperclip } from "lucide-react";

export default function CareerApplicationForm({ jobTitle }) {
  const formId = useId().replace(/:/g, "");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const resume = form.elements.resume?.files?.[0];

    if (!resume) {
      setError("Please attach your résumé before submitting.");
      return;
    }
    if (resume.size > 4 * 1024 * 1024) {
      setError("Your résumé must be 4 MB or smaller.");
      return;
    }

    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || "We couldn’t submit your application. Please try again.");
      }
      form.reset();
      setSent(true);
    } catch (submitError) {
      setError(submitError.message || "We couldn’t submit your application. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <details className="career-application">
      <summary>Apply for this position <ArrowRight size={16} /></summary>
      {sent ? (
        <div className="career-application-success" role="status">
          <strong>Application submitted successfully.</strong>
          <p>Thank you for your interest in joining Creativa Care. Our team will review your application.</p>
          <button type="button" className="career-application-reset" onClick={() => setSent(false)}>Submit another application</button>
        </div>
      ) : (
        <form className="career-application-form" onSubmit={handleSubmit}>
          <input type="hidden" name="jobTitle" value={jobTitle} />
          <div className="career-application-fields">
            <div className="field">
              <label htmlFor={formId + "-applicant-name"}>Full name *</label>
              <input id={formId + "-applicant-name"} name="name" required maxLength={120} autoComplete="name" placeholder="Your full name" />
            </div>
            <div className="field">
              <label htmlFor={formId + "-applicant-email"}>Email address *</label>
              <input id={formId + "-applicant-email"} name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor={formId + "-applicant-phone"}>Phone number *</label>
              <input id={formId + "-applicant-phone"} name="phone" type="tel" required maxLength={40} autoComplete="tel" placeholder="Your phone number" />
            </div>
            <div className="field career-application-full">
              <label htmlFor={formId + "-applicant-resume"}>Résumé (PDF, DOC or DOCX; max 4 MB) *</label>
              <input id={formId + "-applicant-resume"} name="resume" type="file" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
            </div>
            <div className="field career-application-full">
              <label htmlFor={formId + "-applicant-message"}>Cover letter or message</label>
              <textarea id={formId + "-applicant-message"} name="message" rows={5} maxLength={5000} placeholder="Tell us a little about yourself and why you’re interested in this role." />
            </div>
          </div>
          <p className="career-application-privacy"><Paperclip size={14} /> Your résumé and details will be emailed to Creativa Care for recruitment review.</p>
          <button className="btn career-application-submit" type="submit" disabled={sending}>
            {sending ? "Submitting..." : "Submit Application"} <ArrowRight size={16} />
          </button>
          {error && <p className="career-application-error" role="alert">{error}</p>}
        </form>
      )}
    </details>
  );
}
