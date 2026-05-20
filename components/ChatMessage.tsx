"use client";

import type { ChatMessage as ChatMessageType } from "@/lib/chatbot";

interface Props {
  message: ChatMessageType;
}

// Very lightweight markdown-to-JSX renderer
function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <p key={key++} className="font-semibold text-foreground mt-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (/^\*\*(.+)\*\*/.test(line)) {
      const rendered = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p key={key++} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: rendered }} />
      );
    } else if (line.startsWith("- ") || line.startsWith("• ") || line.startsWith("✅ ")) {
      elements.push(
        <li key={key++} className="ml-3 flex gap-1.5 leading-relaxed">
          <span>·</span>
          <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
        </li>
      );
    } else if (line.startsWith("→ ") || line.startsWith("✓ ")) {
      elements.push(
        <li key={key++} className="ml-3 flex gap-1.5 leading-relaxed text-green-400/80">
          <span>✓</span>
          <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.+?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
        </li>
      );
    } else if (line === "") {
      elements.push(<div key={key++} className="h-1.5" />);
    } else {
      elements.push(
        <p key={key++} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
      );
    }
  }

  return elements;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-blue-400 text-[10px] font-bold">AI</span>
        </div>
      )}

      <div
        className={`max-w-[85%] rounded-xl px-3 py-2.5 text-xs ${
          isUser
            ? "bg-blue-500/20 border border-blue-500/30 text-foreground"
            : "bg-card border border-border text-muted-foreground"
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="space-y-0.5">{renderMarkdown(message.content)}</div>
        )}
      </div>

      {isUser && (
        <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-muted-foreground text-[10px] font-bold">You</span>
        </div>
      )}
    </div>
  );
}
