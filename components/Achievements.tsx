"use client";

import { profile } from "@/data/profile";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">05 — Impact</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight mb-2">Measurable results.</h2>
          <p className="text-muted-foreground text-sm">Engineering decisions backed by real numbers.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.achievements.map((a) => (
            <div
              key={a.metric}
              className="group p-6 rounded-xl border border-border bg-card hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl font-bold tracking-tighter text-blue-400 mb-2 group-hover:scale-105 transition-transform inline-block">
                {a.metric}
              </div>
              <div className="text-sm font-semibold mb-2">{a.label}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{a.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
