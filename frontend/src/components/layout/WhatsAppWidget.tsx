"use client";

import React, { useState } from "react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "919876543210"; // Default business phone
    const text = encodeURIComponent(message || "Hi Agnostic AI team, I want a free demo for my business.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-secondary text-on-secondary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-base shadow-sm">
                AI
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Agnostic AI Assistant</h4>
                <div className="flex items-center gap-1.5 text-xs opacity-90">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span>Online | Reply in 30s</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-black/10 rounded-lg transition-colors text-on-secondary"
              aria-label="Close chat"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-surface-container-low min-h-[180px] space-y-3 font-sans text-sm">
            <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-on-background">
              <p className="font-semibold text-primary mb-1">Agnostic AI Bot ⚡</p>
              <p className="text-xs leading-relaxed text-on-surface-variant">
                Namaste! Welcome to Viraal. How can we automate your lead generation or customer support today?
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-on-background">
              <p className="text-xs text-on-surface-variant">
                Want a free AI Growth Audit for your business?
              </p>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-surface-container-lowest border-t border-outline-variant/20 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-xl px-3 py-2 text-xs text-on-background focus:outline-none focus:border-secondary transition-colors"
            />
            <button
              type="submit"
              className="bg-secondary text-on-secondary px-3 py-2 rounded-xl text-xs font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-1"
            >
              <span>Send</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary text-on-secondary w-14 h-14 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-primary/50 group relative"
        aria-label="Open WhatsApp Chat"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">
          {isOpen ? "close" : "chat"}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-on-primary rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
            1
          </span>
        )}
      </button>
    </div>
  );
}
