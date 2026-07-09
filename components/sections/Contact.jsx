"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { founders } from "@/lib/siteData";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Parv Chaturvedi" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "company", label: "Company", type: "text", placeholder: "Acme Pvt Ltd" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "", // honeypot
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setSent(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error — please try again, or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faint">
                <span className="h-px w-6 bg-line-strong" aria-hidden />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Let&apos;s build your system
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Tell us about your business and where AI could take the load off.
                We&apos;ll get back within two working days.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-col gap-1.5">
                {founders.map((f) => (
                  <a
                    key={f.email}
                    href={`mailto:${f.email}`}
                    className="text-sm font-medium text-ink underline underline-offset-4 hover:text-muted"
                  >
                    {f.email}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-line bg-mist p-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  Thanks, {form.name || "there"}!
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  Your message is in. We&apos;ll be in touch at{" "}
                  {form.email || "your email"} shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
              >
                <div className="space-y-4">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="mb-1.5 block text-xs font-medium text-muted"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.name !== "company"}
                        value={form[field.name]}
                        onChange={onChange}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-ink"
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-muted"
                    >
                      What do you need?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={onChange}
                      placeholder="We run a chain of cafes and want to automate invoicing…"
                      className="w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-ink"
                    />
                  </div>
                </div>

                {/* Honeypot — hidden from real users, catches bots */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={onChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send message"}
                  {!sending && <ArrowRight className="h-4 w-4" />}
                </button>

                {error && (
                  <p
                    role="alert"
                    className="mt-4 rounded-xl border border-line-strong bg-mist px-4 py-3 text-sm text-ink"
                  >
                    {error}
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
