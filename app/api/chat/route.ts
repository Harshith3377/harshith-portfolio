import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt, getLocalResponse } from "@/lib/chatbot";
import type { ChatMessage } from "@/lib/chatbot";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const apiKey = (process.env.ANTHROPIC_API_KEY || "").trim();

    // ── Fallback: local keyword matching ────────────────────────────────────
    if (!apiKey) {
      const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
      const reply = lastUserMessage
        ? getLocalResponse(lastUserMessage.content)
        : "How can I help you learn about Harshith?";
      return NextResponse.json({ content: reply, mode: "local" });
    }

    // ── Anthropic API ────────────────────────────────────────────────────────
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: buildSystemPrompt(),
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Anthropic API error:", error);
      // Graceful degradation to local
      const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
      const reply = lastUserMessage
        ? getLocalResponse(lastUserMessage.content)
        : "How can I help you?";
      return NextResponse.json({ content: reply, mode: "local" });
    }

    const data = await response.json();
    const content = data.content?.[0]?.text ?? "I couldn't generate a response. Please try again.";

    return NextResponse.json({ content, mode: "ai" });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
