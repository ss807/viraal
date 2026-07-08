"use client";

import React, { useState } from "react";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToBuilder = () => {
    const el = document.getElementById("pricing") || document.getElementById("builder");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-white via-[#f8f9fa] to-white py-20 px-4 border-b border-border">
      {/* Subtle modern ambient background glow & decorative particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-teal-500/10 via-amber-400/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Pill Badge matching hero.png */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBFBF7] border border-[#A7E8D8] text-[#006A6A] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm hover:scale-105 transition-transform duration-300">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          For Indian MSMEs
        </div>

        {/* Hero Headline matching hero.png exactly */}
        <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-charcoal tracking-tight leading-[1.12]">
          AI-Powered Digital <br />
          Marketing. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006A6A] via-[#0B8B6D] to-[#10B981] drop-shadow-sm">
            Real Results.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans font-medium text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
          Complete AI Digital Marketing & Automation tailored for small and medium businesses. Starting at just{" "}
          <span className="text-charcoal font-bold">₹4,999/month</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={scrollToBuilder}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-charcoal font-bold uppercase text-sm px-8 min-h-[3.25rem] rounded-xl hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-[0_8px_25px_rgba(245,158,11,0.35)] group"
          >
            <span>Build Your AI Package</span>
            <iconify-icon icon="solar:arrow-right-linear" class="text-lg transition-transform group-hover:translate-x-1"></iconify-icon>
          </button>

          <a
            href="https://wa.me/919876543210?text=Hi%20Viraal,%20I%20want%20to%20know%20more%20about%20AI%20Digital%20Marketing%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white text-charcoal border-2 border-border font-bold uppercase text-sm px-8 min-h-[3.25rem] rounded-xl hover:border-[#006A6A] hover:text-[#006A6A] hover:shadow-md active:scale-[0.98] transition-all"
          >
            <iconify-icon icon="solar:chat-round-dots-bold" class="text-lg text-[#25D366]"></iconify-icon>
            <span>Chat with our AI Now</span>
          </a>
        </div>

        {/* Zero Risk Guarantee Badge below buttons */}
        <div className="mt-8 pt-6 border-t border-border/80 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-[#006A6A]">
              <iconify-icon icon="solar:shield-check-bold" class="text-2xl"></iconify-icon>
              <span className="font-extrabold tracking-wide uppercase text-sm">
                Zero Risk Guarantee
              </span>
            </div>
            <p className="text-slate text-xs sm:text-sm max-w-md font-medium leading-relaxed">
              No advance money. We only accept payment if you are completely satisfied with our first fulfillment. Pay only after we deliver what we promised.
            </p>
          </div>
        </div>
      </div>

      {/* 90-Second AI Video Sales Letter Card matching hero.png */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-14 px-4">
        <div
          onClick={() => setIsVideoOpen(true)}
          className="aspect-video w-full rounded-3xl border border-border/80 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,106,106,0.12)] hover:border-[#006A6A]/40"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-white/40 to-transparent" />
          
          {/* Subtle Grid overlay inside frame */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

          {/* Glowing Gold Play Button */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FFC107] text-charcoal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_35px_rgba(245,158,11,0.5)] relative z-10">
            <iconify-icon icon="solar:play-bold" class="text-3xl ml-1"></iconify-icon>
          </div>

          <span className="text-charcoal font-heading font-bold tracking-tight relative z-10 text-lg md:text-xl group-hover:text-[#006A6A] transition-colors">
            90-Second AI Video Sales Letter
          </span>
          <span className="text-slate font-medium text-sm mt-1.5 relative z-10">
            See how we transform businesses like yours
          </span>

          <div className="absolute bottom-4 right-4 bg-white/90 border border-border px-3 py-1 rounded-full text-2xs font-bold text-slate uppercase tracking-wider shadow-sm z-10">
            ⚡ HD Audio / Hindi & English
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal border border-gray-700 rounded-2xl max-w-3xl w-full p-6 text-center text-white relative shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
            <div className="w-16 h-16 rounded-full bg-[#006A6A]/20 text-[#10B981] flex items-center justify-center mx-auto mb-4 animate-spin">
              <iconify-icon icon="solar:video-frame-linear" class="text-3xl"></iconify-icon>
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">90-Second AI Explainer Video</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
              Simulating live high-definition AI Video Sales Letter. Watch how our custom AI agents double lead conversion rates for Indian MSMEs.
            </p>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="bg-gold text-charcoal font-bold px-6 py-2.5 rounded-lg text-sm hover:brightness-110"
            >
              Close Video Preview
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
