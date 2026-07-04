"use client";

import React from "react";

const TRUST_BADGES = [
  { name: "Meta Business Partner", icon: "verified_user", badge: "META AUTHORIZED" },
  { name: "Google Partner API", icon: "search", badge: "PREMIER PARTNER" },
  { name: "WhatsApp Business API", icon: "chat", badge: "OFFICIAL BSP" },
  { name: "GeM Registered Agency", icon: "account_balance", badge: "GOVT CERTIFIED" },
  { name: "Udyam MSME Certified", icon: "workspace_premium", badge: "REG. MSME" },
  { name: "ISO 27001 Data Security", icon: "security", badge: "ISO CERTIFIED" },
  { name: "DPDP Act Compliant", icon: "policy", badge: "INDIA DPDP" },
];

export default function TrustBar() {
  return (
    <section className="w-full py-10 bg-surface-container-lowest border-b border-outline/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-mono uppercase font-bold text-tertiary tracking-widest">
          Institutional Validation & Security Compliance
        </p>
      </div>

      <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] items-center gap-10 sm:gap-16">
        {[...TRUST_BADGES, ...TRUST_BADGES].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface border border-outline/30 grayscale hover:grayscale-0 hover:border-primary/50 hover:bg-surface-container transition-all duration-300 shrink-0 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                {item.name}
              </span>
              <span className="font-mono text-[10px] text-tertiary uppercase tracking-wider">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
