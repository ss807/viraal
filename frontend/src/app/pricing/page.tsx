"use client";

import React, { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "₹14,999",
    period: "/month",
    desc: "Essential automation for small teams finding their footing.",
    popular: false,
    features: [
      "2 Core Solutions Included",
      "24/7 WhatsApp AI Bot",
      "10,000 Automated API Calls/mo",
      "Standard WhatsApp Templates",
      "Basic Support (24h SLA)",
    ],
    cta: "Build Package",
    ctaBg: "border border-secondary text-secondary hover:bg-secondary/5",
  },
  {
    name: "Growth",
    price: "₹24,999",
    period: "/month",
    desc: "Comprehensive AI integration to rapidly scale operations.",
    popular: true,
    features: [
      "4 Core Solutions Included",
      "AI Voice Caller (Hindi & English)",
      "50,000 Automated API Calls/mo",
      "Priority WhatsApp Support (4h SLA)",
      "Dedicated Account Manager",
    ],
    cta: "Build Package",
    ctaBg: "bg-primary-container text-on-primary-container hover:shadow-md",
  },
  {
    name: "Scale",
    price: "₹49,999",
    period: "/month",
    desc: "Advanced automation ecosystem for established businesses.",
    popular: false,
    features: [
      "All Core Solutions Included",
      "Unlimited Automated API Calls",
      "Full 2-Way CRM Integration",
      "Custom Workflow Engineering",
      "24/7 Dedicated Support",
    ],
    cta: "Build Package",
    ctaBg: "border border-secondary text-secondary hover:bg-secondary/5",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Bespoke AI solutions designed for complex organizational needs.",
    popular: false,
    features: [
      "Full Ecosystem Access",
      "On-Premise / Private Cloud Deployment",
      "Custom Fine-Tuned LLMs",
      "SLA Guarantees",
      "Executive Strategy Sessions",
    ],
    cta: "Contact Sales",
    ctaBg: "border border-secondary text-secondary hover:bg-secondary/5",
  },
];

export default function PricingPage() {
  const [leadsCount, setLeadsCount] = useState(250);
  const [avgTicket, setAvgTicket] = useState(15000);

  // ROI Math
  const missedLeadPercent = 0.35;
  const recoveredLeads = Math.round(leadsCount * missedLeadPercent * 0.4);
  const monthlyRevenueBoost = recoveredLeads * avgTicket;
  const hoursSaved = Math.round(leadsCount * 0.35);

  return (
    <div className="w-full pb-28 pt-12 px-5 md:px-16 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-surface">
          Transparent Pricing, <span className="text-primary">Measurable ROI</span>
        </h1>
        <p className="font-sans text-lg text-on-surface-variant">
          Build your custom AI automation ecosystem. No hidden fees, no surprises. Just powerful tools designed to scale your MSME.
        </p>
      </div>

      {/* Pricing Cards Grid (Exact from Stitch) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 bg-surface-container-lowest ${
              tier.popular
                ? "shadow-lg border-2 border-primary transform lg:scale-105 z-10"
                : "shadow-sm border border-outline-variant hover:-translate-y-1"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-sans text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                MOST POPULAR
              </div>
            )}

            <div>
              <h3 className={`font-display font-bold text-2xl text-on-surface mb-2 ${tier.popular ? "mt-2" : ""}`}>
                {tier.name}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 min-h-[40px]">{tier.desc}</p>

              <div className="mb-6">
                <span className="font-display font-extrabold text-3xl text-on-surface">{tier.price}</span>
                {tier.period && <span className="font-sans text-sm text-on-surface-variant">{tier.period}</span>}
              </div>

              <ul className="space-y-3 mb-8 font-sans text-sm text-on-surface">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-base text-secondary font-bold shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/audit"
              className={`w-full py-3 rounded-lg font-sans text-sm font-bold transition-all text-center block mt-auto ${tier.ctaBg}`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Interactive ROI Calculator Hook */}
      <div className="bg-surface-container-low border border-outline-variant/40 rounded-3xl p-8 md:p-14 shadow-lg max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
            Interactive Revenue Calculator
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-on-background">
            Calculate Your AI Automation ROI
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            See how much revenue you are currently losing to missed callbacks and delayed WhatsApp responses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <label className="text-on-background">Monthly Inbound Inquiries</label>
                <span className="text-primary font-mono">{leadsCount} leads</span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={leadsCount}
                onChange={(e) => setLeadsCount(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer h-2 bg-outline-variant/40 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <label className="text-on-background">Average Customer Deal Value</label>
                <span className="text-primary font-mono">₹{avgTicket.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer h-2 bg-outline-variant/40 rounded-lg"
              />
            </div>

            <div className="p-4 bg-surface-container-highest/50 rounded-xl border border-outline-variant/30 text-xs text-on-surface-variant leading-relaxed">
              💡 <strong className="text-on-background">Industry Standard:</strong> Without instant AI qualification, 35% of Indian consumer inquiries go cold within 15 minutes of submission.
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 shadow-md text-center space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant block mb-1">
                Estimated Monthly Revenue Recovery
              </span>
              <div className="font-display font-extrabold text-4xl text-primary">
                +₹{monthlyRevenueBoost.toLocaleString()}
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/20 grid grid-cols-2 gap-4">
              <div>
                <span className="font-display font-bold text-2xl text-secondary">{recoveredLeads}</span>
                <span className="text-[11px] text-on-surface-variant block mt-0.5 font-medium">New Closed Deals</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-on-background">{hoursSaved} hrs</span>
                <span className="text-[11px] text-on-surface-variant block mt-0.5 font-medium">Manual Work Saved</span>
              </div>
            </div>

            <Link
              href="/audit"
              className="w-full bg-secondary text-on-secondary py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all block shadow-sm"
            >
              Lock In This ROI Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
