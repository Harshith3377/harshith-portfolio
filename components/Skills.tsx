"use client";

import { profile } from "@/data/profile";

const skillCategories = [
  { key: "backend", label: "Backend", color: "blue" },
  { key: "frontend", label: "Frontend", color: "cyan" },
  { key: "distributedSystems", label: "Distributed Systems", color: "purple" },
  { key: "cloud", label: "Cloud & Infra", color: "orange" },
  { key: "databases", label: "Databases", color: "green" },
  { key: "aiml", label: "AI / ML", color: "pink" },
  { key: "devops", label: "DevOps / CI-CD", color: "yellow" },
  { key: "monitoring", label: "Monitoring", color: "red" },
  { key: "architecture", label: "Architecture", color: "indigo" },
  { key: "testing", label: "Testing", color: "teal" },
] as const;

const colorMap: Record<string, string> = {
  blue: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
  purple: "text-purple-400 border-purple-500/30 bg-purple-500/5",
  orange: "text-orange-400 border-orange-500/30 bg-orange-500/5",
  green: "text-green-400 border-green-500/30 bg-green-500/5",
  pink: "text-pink-400 border-pink-500/30 bg-pink-500/5",
  yellow: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5",
  red: "text-red-400 border-red-500/30 bg-red-500/5",
  indigo: "text-indigo-400 border-indigo-500/30 bg-indigo-500/5",
  teal: "text-teal-400 border-teal-500/30 bg-teal-500/5",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">04 — Skills</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map(({ key, label, color }) => {
            const skills = profile.skills[key as keyof typeof profile.skills];
            const colorClasses = colorMap[color];

            return (
              <div
                key={key}
                className="p-5 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-colors"
              >
                <div className={`text-xs font-mono font-semibold uppercase tracking-widest mb-4 ${colorClasses.split(" ")[0]}`}>
                  {label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(skills as string[]).map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 text-xs border rounded-md ${colorClasses}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
