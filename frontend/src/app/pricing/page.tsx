import React from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import ROICalculator from "@/components/widgets/ROICalculator";

const PRICING_PACKAGES = [
  {
    name: "Core Setup & Management",
    price: "₹4,999",
    period: "/ billed monthly",
    desc: "Perfect for single showroom or store owners looking to start AI automation.",
    features: [
      "Official WhatsApp Business API Setup",
      "1 Custom Automated FAQ Assistant",
      "Auto-Reply to Missed Calls & After Hours",
      "Daily Lead Summary Forwarding to WhatsApp",
      "Email & Chat Support (24h response)",
    ],
    popular: false,
    cta: "Start with Core Plan",
  },
  {
    name: "Starter AI Suite",
    price: "₹14,999",
    period: "/ billed monthly",
    desc: "Ideal for growing businesses actively running Meta or Google ad campaigns.",
    features: [
      "Everything in Core Setup",
      "30-Second Instant Ad Lead Qualification Bot",
      "2 Core Modules (e.g., Lead Gen + Chatbot)",
      "Automated Calendar Appointment Booking",
      "GoHighLevel CRM White-Label Access",
      "Priority WhatsApp Support Group",
    ],
    popular: true,
    cta: "Claim Starter AI Suite",
  },
  {
    name: "Growth AI Suite",
    price: "₹24,999",
    period: "/ billed monthly",
    desc: "The ultimate autonomous revenue engine for multi-location brands & agencies.",
    features: [
      "Everything in Starter Suite",
      "Up to 5 Core AI Automation Modules",
      "Autonomous AI Voice Caller Integration (Vapi)",
      "Automated WhatsApp E-Commerce Catalog & Checkout",
      "Dedicated AI Account Manager & Bi-Weekly Review",
      "Custom Zapier / Make.com Enterprise Workflow",
    ],
    popular: false,
    cta: "Scale with Growth Suite",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              💎 Transparent & Predictable
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background">
              No Hidden Retainers. <br className="hidden sm:inline" />
              <span className="text-primary">Clear Monthly ROI.</span>
            </h1>
            <p className="text-on-surface-variant text-lg mt-3">
              Every package comes with our 14-day &ldquo;Bohoni Pilot&rdquo; guarantee. If our AI doesn&apos;t recover lost leads and save your time, cancel anytime without penalty.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
            {PRICING_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-surface-container border-2 border-primary shadow-2xl shadow-primary/15 scale-[1.03] z-10"
                    : "glass-panel border border-outline/30 hover:border-outline hover:bg-surface"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-mono text-xs font-bold uppercase px-4 py-1 rounded-full shadow-md">
                    🔥 Most Popular Choice
                  </div>
                )}

                <div>
                  <h2 className="font-display font-extrabold text-2xl text-on-background">{pkg.name}</h2>
                  <p className="text-xs text-tertiary mt-1.5 font-sans min-h-[32px]">{pkg.desc}</p>

                  <div className="my-6 pt-6 border-t border-outline/20 flex items-baseline gap-1">
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold text-primary">{pkg.price}</span>
                    <span className="text-xs text-tertiary">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3.5 text-sm font-sans text-on-surface mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-success text-[18px] shrink-0 mt-0.5">check_circle</span>
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Viraal, I want to start with the ${pkg.name} (${pkg.price}/mo).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-display font-extrabold text-base text-center block transition-all shadow-lg ${
                    pkg.popular
                      ? "bg-primary text-on-primary hover:bg-primary-fixed shadow-primary/25 active:scale-95"
                      : "bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface border border-outline/30"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Interactive Calculator Section */}
          <div className="pt-10 border-t border-outline/30">
            <ROICalculator />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
