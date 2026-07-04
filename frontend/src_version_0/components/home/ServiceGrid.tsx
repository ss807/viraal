"use client";

import React, { useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    id: "lead-gen",
    title: "Lead Generation Automation",
    price: "₹7,999/mo",
    icon: "target",
    tagline: "Replaces a ₹18,000/mo sales caller",
    bullets: [
      "AI Google Maps & LinkedIn Lead Scraping",
      "Automated Multi-Channel Outreach",
      "WhatsApp Lead Nurturing Sequences",
      "24/7 Calendar Appointment Booking",
      "Real-Time GoHighLevel CRM Sync",
    ],
  },
  {
    id: "chatbots",
    title: "AI Chatbots & Customer Support",
    price: "₹6,999/mo",
    icon: "forum",
    tagline: "Instant 30s response to ad traffic",
    bullets: [
      "Official WhatsApp Business API Bot",
      "Custom Dialogflow/GPT Knowledge Base",
      "Instagram & Facebook DM Qualification",
      "Multi-Language Support (Hindi & English)",
      "Smart Human Escalation Routing",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Automation",
    price: "₹6,499/mo",
    icon: "share",
    tagline: "Autopilot Instagram & FB daily growth",
    bullets: [
      "AI Viral Reels & Shorts Scripting",
      "Automated Graphic & Video Creation",
      "30-Day Autopilot Scheduling",
      "Instant Comment & DM Keyword Triggers",
      "Weekly Engagement Analytics Report",
    ],
  },
  {
    id: "sales-automation",
    title: "Sales Automation & Closers",
    price: "₹7,999/mo",
    icon: "handshake",
    tagline: "Never lose a lead to follow-up delay",
    bullets: [
      "Automated 7-Day Follow-up Sequences",
      "AI Lead Intent Scoring & Priority Tags",
      "Instant WhatsApp Quotation Generation",
      "Automated Payment Link Dispatch",
      "Pipeline Stage Auto-Progression",
    ],
  },
  {
    id: "content-production",
    title: "AI Content Production",
    price: "₹4,999/mo",
    icon: "edit_note",
    tagline: "Rank on Google without hiring writers",
    bullets: [
      "SEO-Optimized Hindi & English Blogs",
      "High-Converting Meta & Google Ad Copy",
      "E-Commerce Product Description Bulk Writing",
      "Automated Email Newsletter Campaigns",
      "Video Sales Letter (VSL) Scriptwriting",
    ],
  },
  {
    id: "ai-video",
    title: "AI Video & Avatar Services",
    price: "₹8,999/project",
    icon: "video_camera_front",
    tagline: "Studio quality videos without cameras",
    bullets: [
      "Custom HeyGen AI Spokesperson Videos",
      "Vernacular Indian Regional Promos",
      "Real Estate 3D Architectural Walkthroughs",
      "Synthetic UGC (User Generated Content)",
      "Automated Video Localization & Subtitles",
    ],
  },
  {
    id: "process-automation",
    title: "Business Process Automation",
    price: "₹6,999/mo",
    icon: "settings_suggest",
    tagline: "Robots do the boring office work",
    bullets: [
      "Automated Staff & Vendor Onboarding",
      "WhatsApp Invoice & Receipt Generation",
      "Daily automated Excel/PDF summary reports",
      "Make.com & Zapier Custom Integrations",
      "Automated Payment Reminders & Alerts",
    ],
  },
  {
    id: "ecommerce-automation",
    title: "E-Commerce Automation",
    price: "₹6,499/mo",
    icon: "shopping_cart_checkout",
    tagline: "Recover 60% of abandoned Shopify carts",
    bullets: [
      "WhatsApp Catalog Sync & Direct Checkout",
      "Automated Abandoned Cart Recovery Alerts",
      "Post-Purchase Review Request Bots",
      "Automated COD Verification & Address Check",
      "VIP Customer Retention Campaigns",
    ],
  },
];

export default function ServiceGrid() {
  // Mobile accordion state: index of expanded card
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-surface-container-lowest border-y border-outline/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            🛠️ The 8 Growth Pillars
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-background">
            Complete AI Automation <br className="hidden sm:inline" />
            <span className="text-primary">Built For Your Shop or Office</span>
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg mt-3">
            Every service is engineered to replace expensive manual labor and deliver a 10x ROI within 30 days. Tap any card to view deliverables.
          </p>
        </div>

        {/* 8-Pillar Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div
                key={s.id}
                onClick={() => toggleExpand(idx)}
                className={`glass-panel p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isExpanded
                    ? "bg-surface-container border-primary shadow-2xl shadow-primary/10 scale-[1.02]"
                    : "hover:border-primary/50 hover:bg-surface-container-low"
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[26px]">{s.icon}</span>
                    </div>
                    <span className="font-mono text-xs font-extrabold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg shrink-0">
                      {s.price}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-on-background group-hover:text-primary transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs font-medium text-tertiary mt-1 italic">
                    💡 &ldquo;{s.tagline}&rdquo;
                  </p>

                  {/* Deliverables List (Accordion on mobile, always visible or expand on hover on desktop) */}
                  <div
                    className={`mt-4 pt-4 border-t border-outline/20 space-y-2 text-xs font-sans text-on-surface transition-all duration-300 ${
                      isExpanded ? "block" : "hidden lg:block lg:opacity-80 lg:group-hover:opacity-100"
                    }`}
                  >
                    <div className="text-[11px] font-mono text-tertiary uppercase font-bold mb-1">Included Deliverables:</div>
                    {s.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-success shrink-0 mt-0.5">check_circle</span>
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="mt-6 pt-4 border-t border-outline/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{isExpanded ? "Hide Deliverables" : "View Deliverables"}</span>
                    <span className="material-symbols-outlined text-[16px]">{isExpanded ? "expand_less" : "expand_more"}</span>
                  </span>
                  <Link
                    href={`/solutions`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-mono text-tertiary hover:text-on-background underline"
                  >
                    Full Specs →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 bg-surface hover:bg-surface-container-high text-on-surface border border-outline/40 hover:border-primary font-display font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm"
          >
            <span>Explore Full Solution Matrix & Specs</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
