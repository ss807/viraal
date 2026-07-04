import React from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

export async function generateStaticParams() {
  return [
    { slug: "real-estate" },
    { slug: "jewellery" },
    { slug: "hospitals-clinics" },
    { slug: "restaurants" },
    { slug: "gyms-fitness" },
    { slug: "education" },
    { slug: "car-dealerships" },
    { slug: "fashion-retail" },
    { slug: "manufacturing" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ geo?: string; lang?: string }>;
}

export default async function IndustryDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;

  const slug = resolvedParams.slug;
  const geo = resolvedSearch?.geo;
  const lang = resolvedSearch?.lang;

  // Industry-specific content mapping
  const getIndustryData = () => {
    switch (slug) {
      case "real-estate":
        return {
          title: "Real Estate Developers & Brokers",
          headline: geo
            ? `Stop Losing Site-Visit Leads in ${geo.toUpperCase()}. Your AI Bot Qualifies Buyers 24/7.`
            : "Stop Losing Site-Visit Leads. Your AI Bot Qualifies Property Buyers 24/7.",
          subheadline: "Real estate agents and developers using our AI close 3x more deals by automating budget, BHK, and location qualification on WhatsApp.",
          problem: "You spend ₹50,000 on Meta/Google ads. You get 200 inquiries. But your sales team can only call back 30 of them. The other 170 leads go cold after hours. That's ₹42,500 wasted every week.",
          solution: "Our AI WhatsApp bot responds to every ad inquiry in 30 seconds. It asks budget, preferred location, and timeline. It books physical or virtual site visits directly into your calendar. You only talk to serious buyers.",
          packagePrice: "₹14,999/month",
          caseStudyTitle: `How a ${geo ? geo.charAt(0).toUpperCase() + geo.slice(1) : "Greater Noida"} Builder Reduced CPL by 55% in 60 Days`,
          stat1: "55% Reduction in CPL",
          stat2: "3x More Site Visits",
          heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        };
      case "jewellery":
        return {
          title: "Jewellery Showrooms & Retailers",
          headline: geo
            ? `Dhanteras & Wedding Rush in ${geo.toUpperCase()} is Here. Is Your WhatsApp Bot Ready?`
            : "Dhanteras is Coming. Is Your WhatsApp Bot Ready to Handle 500 Inquiries in One Night?",
          subheadline: "Showroom owners using Viraal AI automate catalog sharing, gold rate updates, and store visit bookings 24/7 in Hindi and regional languages.",
          problem: "Customers message on WhatsApp asking for designs and today's gold rate at 9 PM. Your shop is closed. By morning, they have bought from a competitor who responded faster.",
          solution: "Our automated WhatsApp showroom assistant instantly shares catalog PDFs, calculates making charges, and invites VIP buyers for a private showroom consultation.",
          packagePrice: "₹12,999/month",
          caseStudyTitle: `How Zaveri Jewellers in ${geo ? geo.toUpperCase() : "Surat"} Grew Walk-ins by 40% During Diwali`,
          stat1: "40% More Walk-ins",
          stat2: "24/7 Catalog Dispatch",
          heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
        };
      default:
        const genericTitle = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        return {
          title: genericTitle,
          headline: geo
            ? `AI Automation for ${genericTitle} in ${geo.toUpperCase()}. Get 3x More Customers.`
            : `AI Automation for ${genericTitle}. Automate Leads & Sales 24/7.`,
          subheadline: `Join top ${genericTitle} leaders in India who have automated customer inquiries, follow-ups, and bookings without adding headcount.`,
          problem: "Traditional businesses lose up to 60% of digital leads because human response times are too slow during weekends and evenings.",
          solution: "Our custom WhatsApp AI assistant and autonomous voice agents respond to every inquiry in 30 seconds, qualifying intent before passing to your team.",
          packagePrice: "₹14,999/month",
          caseStudyTitle: `How a Leading ${genericTitle} Brand Scaled Revenue 3x with Viraal AI`,
          stat1: "40% Lower Cost Per Lead",
          stat2: "3x Conversion Velocity",
          heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        };
    }
  };

  const data = getIndustryData();
  const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Viraal, I want to set up the AI Automation Bot for my ${data.title} business${geo ? ` in ${geo}` : ""}.`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-8 pb-24">
        {/* Ad Campaign Dynamic Banner */}
        {geo && (
          <div className="bg-primary/20 border-y border-primary/40 py-2.5 px-4 text-center text-xs font-mono font-bold text-primary animate-pulse">
            📍 SPECIAL AD CAMPAIGN ACTIVE FOR {geo.toUpperCase()} • 14-DAY BOHONI PILOT ELIGIBLE
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-16 sm:space-y-24">
          
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 text-xs font-mono text-tertiary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span>All Industry Templates</span>
              </Link>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high border border-primary/30 text-xs font-mono font-bold text-primary uppercase tracking-wider">
                ⚡ {data.title} Template
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-background leading-tight">
                {data.headline}
              </h1>

              <p className="font-sans text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                {data.subheadline}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-fixed text-on-primary font-display font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Set Up My {data.title.split(" ")[0]} Bot</span>
                </a>
                <Link
                  href="/#roi-calculator"
                  className="w-full sm:w-auto bg-surface hover:bg-surface-container text-on-surface border border-outline/40 font-display font-bold text-base px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Estimate ROI Savings</span>
                </Link>
              </div>
            </div>

            {/* Hero Image / Floating UI overlay (From Stitch Real Estate design!) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl glass-panel group border border-primary/30">
                <img
                  src={data.heroImage}
                  alt={data.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Floating Notification Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-2xl shadow-2xl border border-primary/40 animate-[bounce_3s_infinite]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                      <span className="material-symbols-outlined text-[22px]">forum</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-on-background">New VIP Lead Qualified</h4>
                      <p className="text-[11px] text-tertiary">Just now via Google Ads</p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-2.5 rounded-xl text-xs font-mono text-on-surface border border-outline/20">
                    <div>🔥 Intent: High • Budget Verified</div>
                    <div className="text-primary font-bold mt-1">✓ Site Visit / Demo Booked for Sat, 11 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem vs Solution Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-error/5 border border-error/20 space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-error flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">warning</span>
                <span>The Industry Problem</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-on-background">
                Why Your Ad Spend Is Leaking
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                {data.problem}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-success/5 border border-success/20 space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-success flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>The Autonomous AI Solution</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-on-background">
                30-Second Qualification on Autopilot
              </h3>
              <p className="text-on-surface leading-relaxed text-sm sm:text-base">
                {data.solution}
              </p>
            </div>
          </section>

          {/* Case Study Feature Section */}
          <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-outline/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-primary tracking-wider">📈 PASO Case Study</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-background leading-tight">
                {data.caseStudyTitle}
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                By deploying our customized WhatsApp qualification bot and AI voice follow-up system, this client eliminated after-hours lead loss and empowered their sales team to focus 100% of their time closing pre-verified high-value prospects.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-outline/20">
                <div>
                  <div className="font-display text-3xl font-extrabold text-primary">{data.stat1}</div>
                  <div className="text-xs text-tertiary mt-0.5 font-mono">Verified Metric</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-success">{data.stat2}</div>
                  <div className="text-xs text-tertiary mt-0.5 font-mono">Measurable Growth</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 bg-surface-container p-6 rounded-2xl border border-primary/30 text-center space-y-4">
              <span className="material-symbols-outlined text-primary text-[48px]">workspace_premium</span>
              <h3 className="font-display font-bold text-lg text-on-background">Want Similar Results?</h3>
              <p className="text-xs text-tertiary">We configure this exact workflow for your business during our 14-day Bohoni pilot.</p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider block shadow-md hover:bg-primary-fixed"
              >
                Claim This AI Pipeline
              </a>
            </div>
          </section>

          {/* Industry Package Card */}
          <section className="max-w-xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-primary/40 text-center space-y-6 relative overflow-hidden">
            <div className="h-2 w-full bg-primary absolute top-0 left-0" />
            <span className="text-xs font-mono font-bold uppercase text-primary tracking-widest">Pre-Packaged Architecture</span>
            <h3 className="font-display font-extrabold text-2xl text-on-background">{data.title} Suite</h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-mono text-4xl font-extrabold text-primary">{data.packagePrice}</span>
              <span className="text-xs text-tertiary">/ billed monthly</span>
            </div>
            <ul className="text-left space-y-3 text-sm text-on-surface max-w-sm mx-auto border-y border-outline/20 py-6 font-sans">
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>24/7 WhatsApp AI Assistant & Catalog</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Instant Meta/Google Ad Lead Ingestion</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Automated Calendar Appointment Booking</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Daily GoHighLevel CRM White-Label Report</span>
              </li>
            </ul>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-primary hover:bg-primary-fixed text-on-primary font-display font-extrabold text-base block shadow-xl shadow-primary/25"
            >
              Start 14-Day Bohoni Trial
            </a>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
