"use client";

import React, { useState } from "react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToCalculator = () => {
    const el = document.getElementById("roi-calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-outline/20">
      {/* Subtle animated background gradient / particle mesh effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/15 to-secondary/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-primary/30 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono font-bold text-on-surface uppercase tracking-wider">
                India&apos;s #1 AI Growth Engine for MSMEs
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-on-background tracking-tight leading-[1.15]">
              AI-Powered Growth. <br className="hidden sm:inline" />
              <span className="text-primary relative inline-block">
                Real Revenue Results.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/40" fill="none" viewBox="0 0 200 9">
                  <path d="M2.00035 6.3888C43.239 3.03212 119.82 -2.1488 198.001 5.92211" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-tertiary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We deploy custom WhatsApp AI bots and autonomous voice agents that qualify leads, book site visits, and recover lost sales <strong className="text-on-background font-semibold">24/7/365 in Hindi & English</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToCalculator}
                className="w-full sm:w-auto bg-primary hover:bg-primary-fixed text-on-primary font-display font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Build Your AI Package</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%20Viraal,%20I%20want%20to%20see%20a%20live%20demo%20of%20your%20WhatsApp%20AI%20bot."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-surface hover:bg-surface-container-high text-on-surface border border-outline/50 hover:border-primary font-display font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[#25D366]">chat</span>
                <span>Chat with our AI Now</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-outline/20 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-on-background">₹4,999/mo</div>
                <div className="text-[11px] sm:text-xs text-tertiary">Starting Package</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-success">40% Less</div>
                <div className="text-[11px] sm:text-xs text-tertiary">Cost Per Lead (CPL)</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-secondary">7 Days</div>
                <div className="text-[11px] sm:text-xs text-tertiary">Average Go-Live Time</div>
              </div>
            </div>
          </div>

          {/* Right Column: VSL Video Player (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[9/10] sm:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl border border-primary/30 group">
              {/* Video Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-surface-container-lowest flex items-center justify-center">
                {!isVideoPlaying ? (
                  <>
                    {/* Thumbnail placeholder with AI Avatar image */}
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                      alt="AI Avatar Video Sales Letter"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl shadow-primary/50 hover:scale-110 active:scale-95 transition-all duration-300 mb-4 animate-bounce"
                        aria-label="Play 90-second AI Demo Video"
                      >
                        <span className="material-symbols-outlined text-[40px] ml-1">play_arrow</span>
                      </button>
                      <span className="font-display font-bold text-base sm:text-lg text-white drop-shadow-md">
                        ▶ Watch 90-Sec AI Demo in Hindi
                      </span>
                      <span className="text-xs text-white/80 font-mono mt-1 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                        ⚡ See how AI generates 50+ daily leads
                      </span>
                    </div>

                    {/* Bottom Floating Stats Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-3.5 rounded-xl border border-outline/40 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-success text-[18px]">verified</span>
                        <span className="font-bold text-on-surface">100% Autonomous Bot</span>
                      </div>
                      <span className="font-mono text-primary font-bold">Zero Human Intervention</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-black flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 animate-spin">
                      <span className="material-symbols-outlined text-[32px]">sync</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Simulating HeyGen AI Avatar Stream</h4>
                    <p className="text-xs text-tertiary max-w-xs mb-6">
                      In production, your actual 90-second HeyGen AI Avatar explainer video embed will stream here seamlessly.
                    </p>
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="px-4 py-2 rounded-lg bg-surface text-xs font-bold text-on-surface border border-outline/30 hover:bg-surface-container"
                    >
                      Close Video Preview
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
