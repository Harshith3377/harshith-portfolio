"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function Experience() {
  const [activeId, setActiveId] = useState<string>("att");

  const active = profile.experience.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">02 — Experience</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col gap-2">
            {profile.experience.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`text-left px-4 py-3 rounded-xl border transition-all text-sm ${
                  activeId === exp.id
                    ? "border-blue-500/50 bg-blue-500/10 text-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                }`}
              >
                <div className="font-medium">{exp.company}</div>
                <div className="text-xs opacity-70 mt-0.5">{exp.period}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="rounded-xl border border-border bg-card p-6">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{active.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-blue-400 font-medium text-sm">{active.company}</span>
                    <span className="text-muted-foreground text-sm">·</span>
                    <span className="text-muted-foreground text-sm">{active.location}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                  {active.period}
                </span>
              </div>
              <div className="text-xs text-muted-foreground italic mt-2 pb-4 border-b border-border">
                Project: {active.project}
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 mb-6">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="pt-4 border-t border-border">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {active.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono border border-border rounded-md bg-muted/30 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
