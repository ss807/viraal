"use client";

import React from "react";
import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="w-full py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-surface via-background to-surface-container-low border-t border-outline/30">
      {/* Glow decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
          <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
          <span>14-Day Bohoni Pilot Available</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-background tracking-tight leading-tight">
          Ready to Automate Your <br className="hidden sm:inline" />
          <span className="text-primary underline decoration-primary/40 decoration-wavy decoration-2">
            Business Growth 24/7?
          </span>
        </h2>

        <p className="font-sans text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Join 200+ traditional Indian business owners who stopped losing leads to missed calls and started closing 3x more deals with Viraal AI.
        </p>

        {/* CTA Buttons Row */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href="https://wa.me/919876543210?text=Hi%20Viraal,%20I%20want%20to%20start%20my%2014-day%20AI%20automation%20pilot."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary hover:bg-primary-fixed text-on-primary font-display font-extrabold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 group"
          >
            <span className="material-symbols-outlined text-[24px]">chat</span>
            <span>Start on WhatsApp Now</span>
          </a>

          <Link
            href="/audit"
            className="w-full sm:w-auto bg-surface hover:bg-surface-container-high text-on-surface border-2 border-outline/50 hover:border-primary font-display font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
          >
            <span className="material-symbols-outlined text-[22px] text-primary">auto_awesome</span>
            <span>Get Free AI Audit</span>
          </Link>
        </div>

        {/* Phone Contact Link */}
        <div className="pt-4 flex items-center justify-center gap-6 text-xs sm:text-sm text-tertiary">
          <a
            href="tel:+919876543210"
            className="hover:text-primary transition-colors flex items-center gap-1.5 font-mono font-bold"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">call</span>
            <span>Call Us: +91 98765 43210</span>
          </a>
          <span>•</span>
          <span>⚡ Live setup in 48 hours</span>
          <span>•</span>
          <span>🔒 No long-term lock-in</span>
        </div>
      </div>
    </section>
  );
}
