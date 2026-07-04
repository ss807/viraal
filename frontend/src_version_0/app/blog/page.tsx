import React from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

const ARTICLES = [
  {
    title: "How to Use WhatsApp Automation for Real Estate Lead Qualification in 2026",
    category: "Real Estate AI",
    readTime: "5 min read",
    excerpt: "Learn how Greater Noida and Gurgaon builders are reducing cost per lead by 50% using instant 30-second conversational WhatsApp bots.",
    date: "July 2, 2026",
  },
  {
    title: "Why Traditional Digital Marketing Agencies Are Failing Indian Showrooms",
    category: "Agency Trends",
    readTime: "4 min read",
    excerpt: "Vanity metrics like likes and impressions don't pay the shop rent. Discover why programmatic AI automation and instant follow-up is the new gold standard.",
    date: "June 28, 2026",
  },
  {
    title: "Dhanteras & Diwali Prep: Setting Up a WhatsApp Catalog Bot in 48 Hours",
    category: "Retail & Jewellery",
    readTime: "6 min read",
    excerpt: "A step-by-step technical walkthrough on syncing your jewellery inventory to WhatsApp and automating after-hours price inquiries.",
    date: "June 20, 2026",
  },
  {
    title: "DPDP Act 2023 Compliance for WhatsApp Bots: What MSMEs Need to Know",
    category: "Data & Compliance",
    readTime: "7 min read",
    excerpt: "How Viraal AI ensures 100% data privacy and legal compliance under India's Digital Personal Data Protection Act for customer phone numbers.",
    date: "June 15, 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              📚 Anti-Jargon Knowledge Base
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background">
              AI Education Hub
            </h1>
            <p className="text-on-surface-variant text-lg mt-3">
              Practical guides, case studies, and tutorials written specifically for Indian business owners. No Silicon Valley buzzwords.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((art, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-outline/30 hover:border-primary transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-tertiary mb-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-bold">
                      {art.category}
                    </span>
                    <span>{art.date} • {art.readTime}</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-on-background group-hover:text-primary transition-colors leading-snug mb-3">
                    {art.title}
                  </h2>
                  <p className="text-sm text-tertiary font-sans leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-outline/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary flex items-center gap-1">
                    <span>Read Guide on WhatsApp</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </span>
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Viraal, please send me the article: ${art.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-tertiary hover:text-on-background underline"
                  >
                    Get PDF via WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
