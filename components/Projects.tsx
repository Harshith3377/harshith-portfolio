"use client";

import { profile } from "@/data/profile";

const categoryColors: Record<string, string> = {
  "AI/NLP": "text-purple-400 border-purple-500/30 bg-purple-500/10",
  "ML Systems": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">03 — Projects</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-muted-foreground/40 transition-all duration-300 overflow-hidden"
            >
              {/* Top glow on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category badge */}
              <span
                className={`inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-md border mb-4 ${
                  categoryColors[project.category] ?? "text-muted-foreground border-border"
                }`}
              >
                {project.category}
              </span>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <span className="text-blue-400 flex-shrink-0 mt-0.5">·</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono border border-border rounded bg-muted/30 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
