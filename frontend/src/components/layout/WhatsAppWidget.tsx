import React from "react";

export function WhatsAppWidget() {
  return (
    <a href="#" className="fixed bottom-0 left-0 w-full md:w-auto md:left-auto md:bottom-6 md:right-6 bg-[#25D366] text-white flex items-center justify-center gap-2 p-4 md:px-6 md:py-3 md:rounded-full z-50 hover:bg-[#1ebd5a] hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.5)] font-bold text-sm group">
      <iconify-icon icon="solar:phone-calling-linear" class="text-2xl group-hover:scale-110 transition-transform"></iconify-icon>
      <span className="md:block">Chat Now</span>
    </a>
  );
}
