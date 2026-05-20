"use client";

import { profile } from "@/data/profile";

const highlights = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: "Backend Systems",
    desc: "Distributed microservices handling millions of events daily",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: "Event-Driven Architecture",
    desc: "Kafka pipelines, async processing, real-time data flows",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "AI/ML Integration",
    desc: "NLP workflows, ML inference APIs, vector embeddings in production",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z" />
      </svg>
    ),
    label: "Cloud-Native",
    desc: "AWS EKS, Docker, Kubernetes — production-ready deployments",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: "Observability",
    desc: "ELK Stack, Prometheus, Grafana, CloudWatch at scale",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    label: "Reliability Focus",
    desc: "Circuit breakers, retries, fault-tolerant distributed patterns",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">01 — About</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Engineering systems that scale,{" "}
              <span className="text-muted-foreground">with AI at the core.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                I'm a Java Full Stack Engineer with 4+ years of experience building high-throughput
                distributed systems at scale. Currently at AT&T, I design microservices architecture
                that handles thousands of daily telecom provisioning workflows.
              </p>
              <p>
                My work sits at the intersection of backend engineering and applied AI — integrating
                NLP-based log analysis, ML inference pipelines, and vector embedding workflows into
                production systems that measurably improve operational efficiency.
              </p>
              <p>
                I hold an M.S. in Artificial Intelligence from the University of North Texas, which
                gives me a principled understanding of the ML systems I help build and deploy.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "2", label: "Companies" },
                { value: "3", label: "Certifications" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-colors group"
              >
                <div className="text-blue-400 mb-2 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <div className="text-sm font-medium mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 p-5 rounded-xl border border-border bg-card">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Certifications</div>
          <div className="flex flex-wrap gap-2">
            {profile.certifications.map((cert) => (
              <span
                key={cert}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-lg bg-muted/30"
              >
                <span className="text-green-400">✓</span>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
