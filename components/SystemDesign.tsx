"use client";

const diagrams = [
  {
    id: "microservices",
    title: "Microservices Architecture",
    description: "Service decomposition with API Gateway, inter-service REST/gRPC, and event-driven communication.",
    nodes: [
      { label: "API Gateway", x: 50, y: 10, type: "gateway" },
      { label: "Auth Service", x: 10, y: 42, type: "service" },
      { label: "User Service", x: 38, y: 42, type: "service" },
      { label: "Order Service", x: 66, y: 42, type: "service" },
      { label: "Kafka Bus", x: 38, y: 72, type: "kafka" },
      { label: "PostgreSQL", x: 10, y: 88, type: "db" },
      { label: "Redis Cache", x: 66, y: 88, type: "cache" },
    ],
    edges: [
      [50, 18, 22, 42], [50, 18, 50, 42], [50, 18, 78, 42],
      [22, 52, 50, 72], [50, 52, 50, 72], [78, 52, 50, 72],
      [22, 62, 22, 88], [78, 62, 78, 88],
    ],
  },
  {
    id: "kafka",
    title: "Kafka Event Pipeline",
    description: "Event-driven data flow for real-time processing, reducing latency by 25%.",
    nodes: [
      { label: "Producers", x: 8, y: 42, type: "service" },
      { label: "Kafka Topics", x: 38, y: 42, type: "kafka" },
      { label: "Consumers", x: 68, y: 18, type: "service" },
      { label: "Stream Proc.", x: 68, y: 52, type: "service" },
      { label: "Data Store", x: 68, y: 80, type: "db" },
    ],
    edges: [
      [20, 50, 38, 50], [50, 30, 68, 25], [50, 50, 68, 58], [50, 68, 68, 86],
    ],
  },
  {
    id: "ai-workflow",
    title: "AI / NLP Workflow",
    description: "NLP log analysis and AI-assisted diagnostics using embeddings and event streams.",
    nodes: [
      { label: "Log Ingestion", x: 5, y: 42, type: "service" },
      { label: "NLP Pipeline", x: 35, y: 20, type: "ai" },
      { label: "Embeddings", x: 35, y: 60, type: "ai" },
      { label: "Inference API", x: 65, y: 42, type: "ai" },
      { label: "Diagnostics", x: 88, y: 42, type: "output" },
    ],
    edges: [
      [18, 42, 35, 28], [18, 58, 35, 68], [47, 28, 65, 50], [47, 68, 65, 54], [77, 50, 88, 50],
    ],
  },
];

const nodeColors: Record<string, string> = {
  gateway: "fill-blue-500/20 stroke-blue-500/60 text-blue-300",
  service: "fill-slate-700/60 stroke-slate-500/60 text-slate-300",
  kafka: "fill-orange-500/20 stroke-orange-500/60 text-orange-300",
  db: "fill-green-500/20 stroke-green-500/60 text-green-300",
  cache: "fill-red-500/20 stroke-red-500/60 text-red-300",
  ai: "fill-purple-500/20 stroke-purple-500/60 text-purple-300",
  output: "fill-cyan-500/20 stroke-cyan-500/60 text-cyan-300",
};

export default function SystemDesign() {
  return (
    <section id="system-design" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">06 — System Design</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {diagrams.map((diagram) => (
            <div
              key={diagram.id}
              className="rounded-xl border border-border bg-card p-5 hover:border-muted-foreground/40 transition-colors"
            >
              <h3 className="text-sm font-semibold mb-1">{diagram.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{diagram.description}</p>

              {/* SVG Diagram */}
              <div className="rounded-lg bg-muted/30 border border-border overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full" style={{ height: "160px" }}>
                  {/* Edges */}
                  {diagram.edges.map(([x1, y1, x2, y2], i) => (
                    <line
                      key={i}
                      x1={`${x1}%`} y1={`${y1}%`}
                      x2={`${x2}%`} y2={`${y2}%`}
                      stroke="rgba(148,163,184,0.3)" strokeWidth="0.5"
                      strokeDasharray="2,2"
                    />
                  ))}

                  {/* Nodes */}
                  {diagram.nodes.map((node) => {
                    const colors = nodeColors[node.type] ?? nodeColors.service;
                    const fillClass = colors.split(" ")[0];
                    const strokeClass = colors.split(" ")[1];

                    return (
                      <g key={node.label}>
                        <rect
                          x={`${node.x - 10}%`} y={`${node.y - 6}%`}
                          width="20%" height="12%"
                          rx="1.5"
                          className={`${fillClass} ${strokeClass}`}
                          strokeWidth="0.5"
                        />
                        <text
                          x={`${node.x}%`} y={`${node.y + 2}%`}
                          textAnchor="middle"
                          fontSize="4"
                          className="fill-slate-300"
                          fontFamily="monospace"
                        >
                          {node.label.length > 10 ? node.label.slice(0, 9) + "…" : node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
