"use client";

interface SuggestedQuestionsProps {
  onSelect: (q: string) => void;
}

const questions = [
  "Tell me about Harshith's background",
  "What are his strongest technical skills?",
  "Explain his Java and Spring Boot experience",
  "What AI/ML experience does he have?",
  "What projects has he worked on?",
  "Is he a good fit for backend roles?",
  "Is he a good fit for AI Engineer roles?",
  "What cloud experience does he have?",
  "What is his Kafka experience?",
  "How can I contact Harshith?",
];

export default function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="px-4 py-3 border-t border-border/50">
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-mono">
        Suggested questions
      </p>
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="text-xs px-2.5 py-1.5 rounded-lg border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:border-blue-500/40 hover:bg-blue-500/5 transition-all text-left"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
