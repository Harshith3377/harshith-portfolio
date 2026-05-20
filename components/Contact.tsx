"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission — wire up to Resend/Formspree/EmailJS in production
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">07 — Contact</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Let's build something together.</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              I'm actively exploring new opportunities in backend engineering, full stack, and AI/backend systems roles. Feel free to reach out for positions, collaborations, or just a technical conversation.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-muted-foreground/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-blue-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm group-hover:text-blue-400 transition-colors">{profile.email}</div>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-muted-foreground/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-blue-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm group-hover:text-blue-400 transition-colors">linkedin.com/in/harshithchowdary</div>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-muted-foreground/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-blue-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="text-sm group-hover:text-blue-400 transition-colors">github.com/harshithmullapudi</div>
                </div>
              </a>

              <a
                href={profile.resumeUrl}
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-muted-foreground/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-blue-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Resume</div>
                  <div className="text-sm group-hover:text-blue-400 transition-colors">Download PDF</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-card border border-border rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-card border border-border rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-card border border-border rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-muted-foreground/50 resize-none"
                placeholder="Hi Harshith, we'd love to discuss a Backend Engineer role at..."
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full py-2.5 text-sm font-medium bg-foreground text-background rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Harshith Mullapudi. All rights reserved.</span>
          <span className="font-mono">Authorized to work in the United States</span>
        </div>
      </div>
    </section>
  );
}
