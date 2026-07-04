import React from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

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
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              ⚡ The Complete AI Suite
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background">
              AI Solutions Matrix
            </h1>
            <p className="text-on-surface-variant text-lg mt-3">
              Select any modular AI automation deliverable below to explore complete technical specs, workflows, and ROI benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS_DATA.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="glass-panel p-8 rounded-3xl border border-outline/30 hover:border-primary transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[30px]">{s.icon}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl">
                      {s.price}
                    </span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl text-on-background group-hover:text-primary transition-colors mb-3">
                    {s.title}
                  </h2>
                  <p className="text-sm text-tertiary font-sans leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-outline/20 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Explore Specs & Case Study</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
