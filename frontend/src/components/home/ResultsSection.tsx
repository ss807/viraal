"use client";

import React from "react";

const COUNTERS = [
  { value: "2,500+", label: "Leads Generated Monthly", desc: "Automated across Google Ads & Meta CTWA", color: "text-primary" },
  { value: "40%", label: "Average CPL Reduction", desc: "Lower cost per lead through instant 30s replies", color: "text-success" },
  { value: "7 Days", label: "Average Time to Live", desc: "Plug & play setup with zero coding required", color: "text-secondary" },
  { value: "12+", label: "MSME Industries Served", desc: "Proven templates from Surat jewellers to Noida builders", color: "text-primary" },
];

export default function ResultsSection() {
  return (
    <section className="w-full py-16 sm:py-20 bg-surface-container-low border-y border-outline/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFC107_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COUNTERS.map((c, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface border border-outline/30 shadow-lg flex flex-col justify-between text-center sm:text-left hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className={`font-mono text-4xl sm:text-5xl font-extrabold tracking-tight ${c.color} group-hover:scale-105 transition-transform inline-block`}>
                  {c.value}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-on-background mt-3">
                  {c.label}
                </h3>
              </div>
              <p className="text-xs text-tertiary font-sans mt-2 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
