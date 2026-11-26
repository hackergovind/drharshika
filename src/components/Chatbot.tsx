"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import {
  findIntent,
  WELCOME_MESSAGE,
  BotMessage,
  QuickReply,
} from "@/lib/chatbot-data";
import { whatsappUrl } from "@/lib/contact";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = "user" | "bot";

type Message = {
  id: string;
  role: Role;
  text: string;
  quickReplies?: QuickReply[];
  action?: BotMessage["action"];
  timestamp: Date;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

/** Convert basic **bold** and \n to JSX */
function parseText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i}>
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return <span key={j}>{part}</span>;
        })}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

// ─── Typing indicator ────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5 mb-4">
      {/* Avatar */}
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="chat-bubble-bot px-4 py-3">
        <div className="flex items-center gap-1 h-4">
          <span className="typing-dot" style={{ animationDelay: "0ms" }} />
          <span className="typing-dot" style={{ animationDelay: "160ms" }} />
          <span className="typing-dot" style={{ animationDelay: "320ms" }} />
        </div>
      </div>
    </div>
  );
}

// ─── Single message ───────────────────────────────────────────────────────────

function ChatMessage({
  msg,
  onQuickReply,
  isLatest,
}: {
  msg: Message;
  onQuickReply: (qr: QuickReply) => void;
  isLatest: boolean;
}) {
  const isBot = msg.role === "bot";

  return (
    <div
      className={`flex items-end gap-2.5 mb-4 ${isBot ? "" : "flex-row-reverse"}`}
    >
      {/* Avatar */}
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 mb-0.5">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
      )}

      <div className={`flex flex-col gap-2 max-w-[85%] ${isBot ? "items-start" : "items-end"}`}>
        {/* Bubble */}
        <div className={isBot ? "chat-bubble-bot" : "chat-bubble-user"}>
          <p className="text-sm leading-relaxed">{parseText(msg.text)}</p>
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-slate-400 px-1">
          {formatTime(msg.timestamp)}
        </span>

        {/* Quick replies — only on latest bot message */}
        {isBot && isLatest && msg.quickReplies && msg.quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {msg.quickReplies.map((qr) => {
              if (qr.value === "whatsapp") {
                return (
                  <a
                    key={qr.value}
                    href={whatsappUrl("Hello Dr. Harshika! I'd like to inquire about a consultation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-reply-btn"
                  >
                    {qr.label}
                  </a>
                );
              }
              if (qr.value === "go book") {
                return (
                  <Link
                    key={qr.value}
                    href="/book"
                    className="quick-reply-btn quick-reply-btn--primary"
                  >
                    {qr.label}
                  </Link>
                );
              }
              return (
                <button
                  key={qr.value}
                  onClick={() => onQuickReply(qr)}
                  className="quick-reply-btn"
                >
                  {qr.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Inline CTA action buttons */}
        {isBot && isLatest && msg.action === "book" && (
          <Link
            href="/book"
            className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors"
          >
            📋 Open Booking Form
          </Link>
        )}
      </div>
    </div>
  );
}

// ─── Main Chatbot Component ───────────────────────────────────────────────────

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ── Scroll helpers ──────────────────────────────────────────────────────────
  const scrollToBottom = useCallback((smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "instant",
    });
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, isMinimized, scrollToBottom]);

  // ── Detect scroll position ──────────────────────────────────────────────────
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      setShowScrollDown(distFromBottom > 80);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  // ── Welcome message on first open ───────────────────────────────────────────
  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0);

    if (!hasOpened) {
      setHasOpened(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: uid(),
            role: "bot",
            text: WELCOME_MESSAGE.text,
            quickReplies: WELCOME_MESSAGE.quickReplies,
            timestamp: new Date(),
          },
        ]);
        setTimeout(() => inputRef.current?.focus(), 100);
      }, 800);
    } else {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // ── Bot response logic ──────────────────────────────────────────────────────
  const sendBotResponse = useCallback((userText: string) => {
    const botMsg = findIntent(userText);

    setIsTyping(true);
    const delay = 600 + Math.min(userText.length * 12, 900);

    setTimeout(() => {
      setIsTyping(false);
      const newMsg: Message = {
        id: uid(),
        role: "bot",
        text: botMsg.text,
        quickReplies: botMsg.quickReplies,
        action: botMsg.action,
        timestamp: new Date(),
      };
      setMessages((prev) => [
        ...prev.map((m): Message => ({ ...m, quickReplies: undefined, action: undefined })),
        newMsg,
      ]);

      if (!isOpen || isMinimized) {
        setUnreadCount((n) => n + 1);
      }
    }, delay);
  }, [isOpen, isMinimized]);

  // ── Send message ────────────────────────────────────────────────────────────
  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg: Message = {
        id: uid(),
        role: "user",
        text: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [
        ...prev.map((m): Message => ({ ...m, quickReplies: undefined, action: undefined })),
        userMsg,
      ]);
      setInput("");

      sendBotResponse(trimmed);
    },
    [sendBotResponse]
  );

  const handleQuickReply = useCallback(
    (qr: QuickReply) => {
      sendMessage(qr.value);
    },
    [sendMessage]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const latestBotMsgId = messages.filter((m) => m.role === "bot").at(-1)?.id;

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Chat Window ── */}
      {isOpen && (
        <div
          className={`chat-window ${isMinimized ? "chat-window--minimized" : ""}`}
          role="dialog"
          aria-label="Dr. Harshika Wellness chat assistant"
          aria-modal="true"
        >
          {/* Header */}
          <div className="chat-header">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  Dr. Harshika Wellness
                </p>
                <p className="text-[11px] text-white/75 leading-tight">
                  {isTyping ? "Typing…" : "Online · Usually replies instantly"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <a
                href={whatsappUrl("Hello Dr. Harshika! I would like to inquire about a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="chat-header-btn text-[#25D366] hover:text-white"
                title="Chat with Doctor on WhatsApp"
                aria-label="Chat with Doctor on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <button
                onClick={() => setIsMinimized((v) => !v)}
                className="chat-header-btn"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="chat-header-btn"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div
                ref={scrollRef}
                className="chat-body"
                aria-live="polite"
                aria-atomic="false"
              >
                {/* Intro banner */}
                <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 mb-4">
                  <p className="text-xs text-primary-700 text-center leading-relaxed">
                    🌿 This is an automated assistant. For medical advice, please book a consultation with Dr. Harshika.
                  </p>
                </div>

                {messages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    msg={msg}
                    onQuickReply={handleQuickReply}
                    isLatest={msg.id === latestBotMsgId}
                  />
                ))}

                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* Scroll-down button */}
              {showScrollDown && (
                <button
                  onClick={() => scrollToBottom()}
                  className="scroll-down-btn"
                  aria-label="Scroll to latest message"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="chat-footer">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message…"
                  className="chat-input"
                  maxLength={300}
                  aria-label="Chat input"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="chat-send-btn"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Powered-by strip */}
              <div className="px-4 py-1.5 text-center border-t border-slate-100 bg-white">
                <p className="text-[10px] text-slate-400">
                  Automated assistant · For medical queries, book a consultation
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── FAB ── */}
      <button
        onClick={handleOpen}
        className={`chatbot-fab ${isOpen ? "chatbot-fab--hidden" : ""}`}
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        {/* Pulse ring */}
        <span className="chatbot-fab-ring" />
        {/* Unread badge */}
        {unreadCount > 0 && !isOpen && (
          <span className="chatbot-fab-badge">{unreadCount}</span>
        )}
      </button>
    </>
  );
}
