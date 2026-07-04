import React from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

// Static generate for top solutions
export async function generateStaticParams() {
  return [
    { slug: "lead-generation-automation" },
    { slug: "ai-chatbots-support" },
    { slug: "social-media-automation" },
    { slug: "sales-automation" },
    { slug: "ai-content-production" },
    { slug: "ai-video-creative" },
    { slug: "business-process-automation" },
    { slug: "ecommerce-automation" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Viraal, I'm interested in the ${title} package. Please share demo details and pricing.`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-10 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1 text-xs font-mono text-tertiary hover:text-primary mb-6 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Back to Solutions Matrix</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              ⚡ Autonomous AI Engine
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-background leading-tight">
              {title}
            </h1>
            <p className="font-sans text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed">
              Replace expensive manual effort and human error. Operate 24/7/365 with automated workflows engineered specifically for Indian businesses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary hover:bg-primary-fixed text-on-primary font-display font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Deploy This Solution on WhatsApp</span>
              </a>
              <Link
                href="/#roi-calculator"
                className="w-full sm:w-auto bg-surface hover:bg-surface-container text-on-surface border border-outline/40 font-display font-bold text-base px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate Bundle Savings</span>
              </Link>
            </div>
          </section>

          {/* Problem Statement Card */}
          <section className="glass-panel p-8 sm:p-12 rounded-3xl border-l-4 border-error relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-error/5 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-mono font-bold uppercase text-error tracking-wider">⚠️ The Traditional Bottleneck</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-background mt-2 mb-4">
              Why Manual Operations Are Wasting 50% of Your Budget
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-3xl">
              When a potential customer reaches out after business hours or during a weekend, a delay of even 15 minutes drops conversion probability by 80%. Relying on manual follow-ups means losing hot leads to faster digital competitors.
            </p>
          </section>

          {/* 3-Step How It Works */}
          <section className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-mono font-bold uppercase text-primary tracking-wider">🔄 Automated Workflow</span>
              <h2 className="font-display text-3xl font-extrabold text-on-background mt-1">How This AI Works in 3 Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Instant Capture", desc: "The AI connects to your Meta/Google ads, WhatsApp API, or Maps listings to ingest data in real-time." },
                { step: "02", title: "Smart Qualification", desc: "Conversational AI engages the lead in Hindi/English, asking budget, timeline, and requirement." },
                { step: "03", title: "Automated Conversion", desc: "The bot schedules a meeting, sends a quote, or alerts your sales closer with pre-qualified summary." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-surface border border-outline/30 relative">
                  <div className="font-mono text-3xl font-extrabold text-primary/30 mb-2">{item.step}</div>
                  <h3 className="font-display font-bold text-lg text-on-background mb-2">{item.title}</h3>
                  <p className="text-sm text-tertiary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Before/After Side-by-Side */}
          <section className="p-8 sm:p-10 rounded-3xl bg-surface-container-low border border-outline/30 space-y-8">
            <div className="text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-background">Before vs. After Viraal AI</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-error/5 border border-error/20 space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-error flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">cancel</span>
                  <span>Manual Process (Before)</span>
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>❌ Replies take 2-4 hours; leads turn cold</li>
                  <li>❌ After-hours & weekend inquiries unanswered</li>
                  <li>❌ Sales team wastes time on unqualified junk leads</li>
                  <li>❌ High Cost Per Lead (CPL) & low ROAS</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-success/5 border border-success/20 space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-success flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Autonomous AI (After)</span>
                </div>
                <ul className="space-y-2 text-sm text-on-surface">
                  <li>✅ Instant 30-second conversational response</li>
                  <li>✅ 24/7/365 active qualification on WhatsApp</li>
                  <li>✅ Sales team only talks to VIP ready-to-buy leads</li>
                  <li>✅ 40% reduction in CPL & 3x deal velocity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center bg-gradient-to-br from-primary/20 to-surface p-10 sm:p-16 rounded-3xl border border-primary/30 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-background">
              Ready to deploy {title}?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Get live in under 7 days with our 14-day Bohoni trial. No coding required from your side.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-fixed text-on-primary font-display font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-primary/30 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Start Setup on WhatsApp Now</span>
            </a>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
