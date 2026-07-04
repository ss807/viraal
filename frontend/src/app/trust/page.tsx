"use client";

import React from "react";
import Link from "next/link";

const caseStudies = [
  {
    icon: "domain",
    title: "Retail Logistics & D2C Optimization",
    problem: "Manual order processing led to 15% fulfillment errors and delayed shipping times for a regional D2C brand.",
    agitate: "Customer churn was rising rapidly during festival sales, and scaling was impossible without tripling operational headcount.",
    solve: "Implemented Agnostic Order Routing AI, connecting Shopify directly to regional 3PLs with automated WhatsApp error-flagging.",
    outcomeLabel: "Fulfillment Error Reduction",
    outcomeValue: "98%",
  },
  {
    icon: "account_balance",
    title: "Fintech & Loan Lead Verification",
    problem: "High volume of unqualified loan applications wasting underwriter time and increasing customer acquisition costs.",
    agitate: "The manual review backlog caused a 5-day average response time, leading prime applicants to choose competitors.",
    solve: "Deployed a pre-screening WhatsApp AI bot that verified KYC documents and loan intent in 30 seconds before passing to humans.",
    outcomeLabel: "Processing Speed Increase",
    outcomeValue: "400%",
  },
  {
    icon: "real_estate_agent",
    title: "Real Estate Builder Site Visit Engine",
    problem: "Over 170 out of 200 Facebook ad inquiries went cold each week due to manual callback delays from the internal sales team.",
    agitate: "Wasting over ₹2.5 Lakhs per month in ad budget while competitors scooped up active property buyers.",
    solve: "Integrated instant AI Voice Callers that call leads within 30 seconds of form submission to book automated weekend site visits.",
    outcomeLabel: "Site Visit Conversion Boost",
    outcomeValue: "3.2x",
  },
  {
    icon: "diamond",
    title: "Luxury Jewellery Showroom VIP Nurture",
    problem: "High-ticket showroom visitors were leaving without buying, with zero systematic follow-up for festival purchasing.",
    agitate: "Sales reps relied on ad-hoc personal WhatsApp messages, leading to inconsistent client experiences and lost repeat sales.",
    solve: "Engineered a luxury WhatsApp concierge bot sending personalized festival catalog invites based on past purchase history.",
    outcomeLabel: "Repeat Festival Revenue",
    outcomeValue: "+45%",
  },
];

const testimonials = [
  {
    quote: "The automation completely transformed how we handle client intake. We saved hundreds of hours in the first month alone.",
    name: "Sarah Reynolds",
    role: "Operations Director, Apex Mfg",
    initials: "SR",
  },
  {
    quote: "Our lead response time went from hours to seconds. It's not just software; it's a structural advantage for our business.",
    name: "James Patel",
    role: "Founder, Horizon Logistics",
    initials: "JP",
  },
  {
    quote: "The implementation was seamless. We trusted their data security protocols, and they delivered exactly as promised.",
    name: "Maria Lin",
    role: "CEO, FinServe Tech",
    initials: "ML",
  },
];

const certifications = [
  { title: "ISO 27001", sub: "Information Security Certified" },
  { title: "Meta", sub: "Official Business Partner" },
  { title: "Google Cloud", sub: "Certified Architecture" },
  { title: "GeM", sub: "Registered Govt Seller" },
  { title: "Udyam", sub: "MSME Verified Organization" },
];

export default function TrustCenterPage() {
  return (
    <div className="w-full pb-28 pt-12 px-6 max-w-[1280px] mx-auto">
      {/* Trust Center Header */}
      <section className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
          Transparent. Secure. Compliant.
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background mb-4">
          Verifiable Excellence. <span className="text-primary">Absolute Trust.</span>
        </h1>
        <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
          We engineer growth through transparent, data-driven automation. Explore our proven methodologies, certified compliance, and real-world client impact.
        </p>
      </section>

      {/* Section 1: Proven Methodologies (PASO Case Studies) */}
      <section className="mb-24">
        <div className="border-b border-outline-variant/30 pb-3 mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-background">
            Proven Methodologies (PASO Framework)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-sm hover:shadow-md p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 text-primary">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{study.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-on-background">{study.title}</h3>
                </div>

                <div className="space-y-3 font-sans text-sm text-on-surface-variant mb-8">
                  <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <strong className="text-on-background block mb-1">❌ Problem:</strong>
                    {study.problem}
                  </div>
                  <div className="p-3 bg-red-50/50 rounded-xl border border-red-100 text-red-900/80">
                    <strong className="text-red-900 block mb-1">⚠️ Agitation:</strong>
                    {study.agitate}
                  </div>
                  <div className="p-3 bg-green-50/50 rounded-xl border border-green-100 text-green-900/80">
                    <strong className="text-green-900 block mb-1">⚡ Solution:</strong>
                    {study.solve}
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/40 flex justify-between items-center">
                <span className="font-semibold text-sm text-on-background">{study.outcomeLabel}</span>
                <span className="font-display font-extrabold text-3xl text-secondary">{study.outcomeValue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Partner Perspectives (Video Testimonials from Stitch) */}
      <section className="mb-24">
        <div className="border-b border-outline-variant/30 pb-3 mb-10 flex justify-between items-end">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface">
              Partner Perspectives
            </h2>
            <p className="font-sans text-sm text-on-surface-variant mt-1">Real video feedback from business leaders scaling with Agnostic AI.</p>
          </div>
          <span className="text-xs font-bold text-secondary uppercase tracking-wider hidden sm:inline-block">100% Verified Clients</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The automation completely transformed how we handle client intake. We saved hundreds of hours in the first month alone.",
              name: "Sarah Reynolds",
              role: "Operations Director, Apex Mfg",
              initials: "SR",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCrInSAk2rtVVev2DQMCvcNG-CxesuTURIGQKBtSzfBECzJUz8W9-F2ahM5oxxNknLuTLSCZF2i41GOdyKchMaA_YBSZjo3Z0dv3mrZFb1kI4cV6ysaoudnz8Ol0RE68h1FAP82QSWAIjsPKJsb1gI1b08cIVewkxNPMToZl_jy2AaKcv72lDYMY5yd2L4tf3rY0bvU8DWpRJHF3puONiuZEu7rDyLzjXwQIPdgIOKQE3vRivV80MrYuJNVUyuMtqzUQQsFxRjSdh1",
            },
            {
              quote: "Our lead response time went from hours to seconds. It's not just software; it's a structural advantage for our business.",
              name: "James Patel",
              role: "Founder, Horizon Logistics",
              initials: "JP",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPrWtrWQer-hAGJEHJEm1gVol7rTU98sQcS861ggN02HSEuRrwu29RmF84IbO-Vh_2OcBS1W6GpKbYj04VNC03ZONLCc0cbIx6AKpMWkHnaG63-HZ4P4PfC5BEAfueEvoWsUvO7Z_6brGe4n5xFjs1F9z7T9lPI2w7wNxhp43O80TGIOk8XcsFaWTjMYN6JcgkTzzJXTlWIMK-TNoVYmaXda5naSKDKxR1ar5ldrRnsw369dAWQv_A0yFAaIrsyaMrhEOaQ2bj_eeN",
            },
            {
              quote: "The implementation was seamless. We trusted their data security protocols, and they delivered exactly as promised.",
              name: "Maria Lin",
              role: "CEO, FinServe Tech",
              initials: "ML",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkqnl8a-jRMcooR5MG81swazboFzn3tMmxfTrZaSxaDyGZ9PxkSzaAjyuswZDDTUwboFxniheWxk0506WHk4C9G4PmA76zG-PhHVkjbCH4ZiXuEyeb9MMZvGDv_dhL7vR673JE_SHn0SMBxywxfWhHUq0uoz_oNWvW4ZNnQ8dButuOt9OTlXV-vU_H90b3-Zph6fUvYQS0AkDJHaDsIxkigp2yAOgh7YvAhdv4YCbeU0Z8kuSg9Ukuz1jlYVL1ODeTZGW08ZGXFyaY",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <div className="relative h-48 w-full bg-surface-dim flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${t.img}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-white text-5xl opacity-80 drop-shadow-md">play_circle</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-sans text-sm text-on-surface-variant italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 flex items-center gap-3 pt-4 border-t border-outline-variant/20">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center font-bold text-xs text-on-surface-variant">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-on-surface">{t.name}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Certified Compliance Grid */}
      <section className="bg-surface-container-low border border-outline-variant/40 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl font-bold text-on-background mb-2">
            Certified Institutional Compliance
          </h2>
          <p className="text-xs text-on-surface-variant">
            We adhere to the strictest government and industry standards for data security, operational quality, and API reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 flex flex-col items-center justify-center text-center h-28 hover:border-primary transition-colors shadow-2xs"
            >
              <span className="font-display font-extrabold text-sm text-on-background uppercase tracking-widest block mb-1">
                {cert.title}
              </span>
              <span className="text-[11px] text-on-surface-variant leading-tight font-medium">
                {cert.sub}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-outline-variant/20 text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity"
          >
            <span>Verify Our Architecture For Your Business</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
