"use client";

import React from "react";

const TICKER_ITEMS = [
  "⚡ 2,847 Leads Generated for our clients this month via AI",
  "🔥 New: AI Voice Agents now available in Telugu, Tamil & Hindi",
  "✅ 94% Client Retention Rate — We deliver verifiable results",
  "✨ Just booked: Site visit in Greater Noida • 2 mins ago",
  "🚀 Dhanteras Special: WhatsApp Catalog Bot live in 48 hours",
  "💡 Save ₹42,000/month by replacing after-hours manual sales calls",
];

export default function LiveProofTicker() {
  return (
    <div className="bg-primary text-on-primary font-label-md text-xs sm:text-sm fixed top-0 left-0 w-full z-50 h-8 flex items-center overflow-hidden whitespace-nowrap shadow-md border-b border-black/10">
      <div className="flex animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] items-center">
        {/* Double array for seamless infinite scrolling */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="font-bold px-4 flex items-center gap-1.5">
              {item}
            </span>
            <span className="text-on-primary/40 font-light mx-2">|</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
