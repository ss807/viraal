"use client";

import React from "react";

export function LiveProofTicker() {
  return (
    <>
      <style jsx>{`
        .ticker-wrap {
          overflow: hidden;
          white-space: nowrap;
          box-sizing: border-box;
        }
        .ticker {
          display: inline-block;
          animation: ticker 35s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
      <div className="bg-primary text-on-primary py-2 w-full z-50 fixed top-0 left-0 ticker-wrap font-sans text-xs md:text-sm font-semibold shadow-xs">
        <div className="ticker">
          <span className="mx-6">🔥 5 new leads generated for TechCorp in the last hour.</span>
          <span className="mx-6">✅ Sarah's Boutique increased conversions by 22% this week.</span>
          <span className="mx-6">📈 $10k+ revenue recovered by our AI agents yesterday.</span>
          <span className="mx-6">🚀 Next-Gen AI audit completed for global manufacturing firm.</span>
          <span className="mx-6">💡 New Feature: Hinglish Voice Support Active across India.</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="mx-6">🔥 5 new leads generated for TechCorp in the last hour.</span>
          <span className="mx-6">✅ Sarah's Boutique increased conversions by 22% this week.</span>
          <span className="mx-6">📈 $10k+ revenue recovered by our AI agents yesterday.</span>
          <span className="mx-6">🚀 Next-Gen AI audit completed for global manufacturing firm.</span>
          <span className="mx-6">💡 New Feature: Hinglish Voice Support Active across India.</span>
        </div>
      </div>
    </>
  );
}
