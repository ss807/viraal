"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppWidget() {
  const pathname = usePathname();

  // Dynamically generate context-aware pre-filled WhatsApp message
  const getWhatsAppMessage = () => {
    if (pathname?.includes("real-estate")) {
      return "Hi Viraal, I'm interested in the Real Estate Lead Automation package. Please share demo details.";
    }
    if (pathname?.includes("jewellery")) {
      return "Hi Viraal, I want to explore WhatsApp catalog & AI automation for my Jewellery store.";
    }
    if (pathname?.includes("pricing")) {
      return "Hi Viraal, I'd like to discuss transparent pricing and bundle packages for my business.";
    }
    if (pathname?.includes("solutions")) {
      return "Hi Viraal, I want to learn more about your AI automation solutions and get a free trial.";
    }
    return "Hi Viraal, I want to explore 24/7 AI lead generation & WhatsApp automation for my business.";
  };

  const phone = "919876543210"; // Sample official WhatsApp business number
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Widget (Bottom-Right) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-2 group">
        {/* Tooltip bubble */}
        <div className="bg-surface border border-outline/40 shadow-xl px-4 py-2 rounded-2xl rounded-br-none text-xs text-on-surface font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          💬 Need instant answers? Chat with AI!
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 flex items-center justify-center w-16 h-16 border-2 border-white/20 group hover:shadow-[#25D366]/40"
        >
          {/* Unread notification badge */}
          <span className="absolute -top-1 -right-1 bg-primary text-on-primary font-mono text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-background animate-bounce">
            1
          </span>
          <span className="material-symbols-outlined text-[32px]">chat</span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar (Always Visible on Mobile) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-xl border-t border-outline/40 p-3 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0 border border-[#25D366]/30">
            <span className="material-symbols-outlined text-[#25D366] text-[22px]">smart_toy</span>
          </div>
          <div className="flex flex-col truncate">
            <span className="text-xs font-bold text-on-surface flex items-center gap-1">
              AI Growth Bot <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block"></span>
            </span>
            <span className="text-[11px] text-tertiary truncate">Online • Replies in 30s</span>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary-fixed text-on-primary font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2 shrink-0 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px] text-on-primary">chat</span>
          <span>Chat Now</span>
        </a>
      </div>
    </>
  );
}
