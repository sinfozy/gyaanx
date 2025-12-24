"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Loader2 } from "lucide-react";

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm GyaanX AI. How can I help you with your studies today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      const data = await res.json();
      
      if (data.text) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
      } else {
        throw new Error("No response text");
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting to the brain. Try again?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-slate-200 text-slate-900 rotate-90" : "bg-indigo-600 text-white"
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-indigo-600 p-5 text-white flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm">GyaanX AI Assistant</h3>
              <div className="flex items-center gap-1 text-[10px] opacity-80 uppercase tracking-widest font-bold">
                <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Online Now
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm whitespace-pre-wrap ${
                  msg.role === "user" 
                    ? "bg-indigo-600 text-white rounded-tr-none shadow-md" 
                    : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-2 text-slate-400 text-sm">
                  <Loader2 size={16} className="animate-spin" /> GyaanX AI is typing...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-grow bg-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-900"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="h-11 w-11 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-all disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}