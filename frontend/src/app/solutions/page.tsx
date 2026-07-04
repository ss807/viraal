"use client";

import React from "react";
import Link from "next/link";

const SOLUTIONS_DATA = [
  { slug: "lead-generation-automation", title: "Lead Generation Automation", price: "₹7,999/mo", icon: "target", desc: "AI Lead Scraping, LinkedIn Outreach, Google Maps extraction, WhatsApp Nurturing, Appointment Booking" },
  { slug: "ai-chatbots-support", title: "AI Chatbots & Customer Support", price: "₹6,999/mo", icon: "forum", desc: "24/7 WhatsApp AI Assistant, Website Bot, IG/FB DM automated qualification, FAQ handling" },
  { slug: "social-media-automation", title: "Social Media Automation", price: "₹6,499/mo", icon: "share", desc: "AI Content Creation, Viral Reels & Shorts scripting, Auto Scheduling, Comment management" },
  { slug: "sales-automation", title: "Sales Automation & Closers", price: "₹7,999/mo", icon: "handshake", desc: "Automated follow-up sequences, Lead scoring, instant quote generation, meeting setter" },
  { slug: "ai-content-production", title: "AI Content Production", price: "₹4,999/mo", icon: "edit_note", desc: "SEO blog writing, regional ad copy, product descriptions, automated newsletter campaigns" },
  { slug: "ai-video-creative", title: "AI Video & Avatar Services", price: "₹8,999/project", icon: "video_camera_front", desc: "HeyGen AI Spokesperson videos, regional promotional clips, UGC generation, walkthroughs" },
  { slug: "business-process-automation", title: "Business Process Automation", price: "₹6,999/mo", icon: "settings_suggest", desc: "HR/Employee onboarding bots, invoice automation, automated PDF reporting, Make.com integration" },
  { slug: "ecommerce-automation", title: "E-Commerce Automation", price: "₹6,499/mo", icon: "shopping_cart_checkout", desc: "WhatsApp catalog sync, abandoned cart recovery, automated COD verification, VIP retention" },
];

export default function SolutionsIndexPage() {
  return (
    <div className="w-full pb-28 pt-12 px-6 max-w-[1280px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block py-1.5 px-3.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-4">
          ⚡ Modular AI Suite
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background mb-4">
          AI Solutions Matrix
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Select any modular AI automation deliverable below to explore complete technical specs, workflows, and ROI benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {SOLUTIONS_DATA.map((s) => (
          <Link
            key={s.slug}
            href={`/solutions/${s.slug}`}
            className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/40 hover:border-primary transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-sm hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <span className="font-mono text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-full">
                  {s.price}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-2xl text-on-background group-hover:text-primary transition-colors mb-3">
                {s.title}
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {s.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs font-bold text-primary">
              <span>Explore Specs & Case Study</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-surface-container-low border border-outline-variant/40 rounded-3xl p-10 text-center max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-2xl text-on-background mb-2">
          Need a Custom End-to-End Stack?
        </h3>
        <p className="text-sm text-on-surface-variant mb-6">
          We combine multiple automation modules into a single synchronized workflow for your enterprise.
        </p>
        <Link
          href="/audit"
          className="inline-block bg-primary text-on-primary px-8 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
        >
          Schedule Custom Architecture Call
        </Link>
      </div>
    </div>
  );
}
