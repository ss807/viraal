import React from "react";
import Link from "next/link";

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
    `Hi Agnostic AI, I am interested in deploying the ${title} architecture for my business. Please share technical specs.`
  )}`;

  return (
    <div className="w-full pb-28 pt-12 px-6 max-w-[1280px] mx-auto">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary mb-6 transition-colors"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          <span>Back to Solutions Matrix</span>
        </Link>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-4">
          ⚡ Autonomous Architecture
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-background leading-tight mb-4">
          {title}
        </h1>
        <p className="font-sans text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Replace expensive manual effort and human error. Operate 24/7/365 with automated workflows engineered specifically for Indian MSMEs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary hover:opacity-95 text-on-primary font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Deploy Architecture via WhatsApp</span>
          </a>
          <Link
            href="/pricing"
            className="w-full sm:w-auto bg-surface-container-lowest hover:border-primary text-on-background border border-outline-variant/60 font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all text-center"
          >
            Explore Pricing
          </Link>
        </div>
      </section>

      {/* Problem Statement Card */}
      <section className="bg-surface-container-lowest p-8 sm:p-12 rounded-3xl border-l-4 border-red-600 border-y border-r border-outline-variant/40 shadow-sm mb-20">
        <span className="text-xs font-bold uppercase text-red-600 tracking-widest block mb-2">
          ⚠️ The Operational Bottleneck
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-background mb-4">
          Why Manual Execution Is Wasting 50% of Your Revenue Potential
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-3xl">
          When a potential customer inquiries after business hours or during a weekend, a delay of even 15 minutes drops conversion probability by 80%. Relying on human follow-ups means losing hot prospects to faster competitors.
        </p>
      </section>

      {/* 3-Step How It Works */}
      <section className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest block mb-1">
            Autonomous Workflow
          </span>
          <h2 className="font-display text-3xl font-bold text-on-background">
            How This Engine Works in 3 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Instant Data Ingestion", desc: "The AI connects to your Meta/Google ads, website forms, or WhatsApp API to intercept data in real-time." },
            { step: "02", title: "Smart Conversational Qualification", desc: "Conversational AI engages the lead in Hindi/English within 30 seconds, asking budget and requirements." },
            { step: "03", title: "Automated Conversion & Routing", desc: "The engine schedules a meeting, sends a personalized quote, and alerts your sales closer." },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm relative">
              <div className="font-display text-4xl font-extrabold text-primary/20 mb-3">{item.step}</div>
              <h3 className="font-display font-bold text-xl text-on-background mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Side-by-Side */}
      <section className="p-8 sm:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/40 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-background">
            Before vs. After Agnostic AI
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200 space-y-4">
            <div className="text-xs font-bold uppercase text-red-700 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">cancel</span>
              <span>Manual Process (Before)</span>
            </div>
            <ul className="space-y-2.5 text-sm text-red-950/80">
              <li>❌ Replies take 2 to 4 hours; prospects turn cold</li>
              <li>❌ After-hours & Sunday inquiries go unanswered</li>
              <li>❌ Sales team wastes time calling unqualified lead lists</li>
              <li>❌ High Cost Per Lead (CPL) & low ad ROAS</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-green-50/50 border border-green-200 space-y-4">
            <div className="text-xs font-bold uppercase text-green-700 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Autonomous Engine (After)</span>
            </div>
            <ul className="space-y-2.5 text-sm text-green-950/90 font-medium">
              <li>✅ Instant 30-second conversational response</li>
              <li>✅ 24/7/365 active qualification on WhatsApp & Voice</li>
              <li>✅ Sales closers only talk to verified ready-to-buy VIPs</li>
              <li>✅ 40% reduction in CPL & 3x deal closing velocity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center bg-gradient-to-r from-primary via-[#8f7200] to-primary text-on-primary p-10 sm:p-16 rounded-3xl shadow-xl space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
          Ready to Deploy {title}?
        </h2>
        <p className="text-on-primary/90 max-w-xl mx-auto text-sm sm:text-base">
          Get live in under 5 business days with our dedicated architecture team. No coding required from your side.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-on-primary text-primary hover:bg-surface-container-low font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          <span>Start Deployment on WhatsApp</span>
        </a>
      </section>
    </div>
  );
}
