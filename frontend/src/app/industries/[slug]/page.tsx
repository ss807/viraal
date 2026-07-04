"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface IndustryData {
  title: string;
  badge: string;
  hookHeadline: string;
  hookSub: string;
  leakTitle: string;
  leakDesc: string;
  leakStats: { label: string; val: string; desc: string }[];
  steps: { title: string; time: string; desc: string }[];
}

const industryConfigs: Record<string, IndustryData> = {
  "real-estate": {
    title: "Real Estate & Property Builders",
    badge: "3.2x Weekend Site Visits",
    hookHeadline: "Stop Letting Hot Property Leads Turn Cold.",
    hookSub: "Real estate teams using Agnostic AI close 3x more site visits by automating instant phone calls and WhatsApp qualification in under 30 seconds.",
    leakTitle: "The Hidden Cost of Missed Calls (The Weekly Leak)",
    leakDesc: "Out of 200 weekly Facebook & Google ad inquiries, over 170 go cold because internal sales teams take 4 to 24 hours to callback.",
    leakStats: [
      { label: "Wasted Ad Spend", val: "₹2.5L+", desc: "Monthly budget spent on leads that never get called back in time." },
      { label: "Cold Conversion", val: "< 2%", desc: "Conversion rate when callbacks happen after 4 hours of inquiry." },
      { label: "AI Response", val: "30 sec", desc: "Our Voice Bot calls inbound property leads while they are still on your website." },
    ],
    steps: [
      { title: "Instant Voice Engagement", time: "00:30s", desc: "Within 30 seconds of form submission, our AI voice caller dials the prospect in natural Hindi or English." },
      { title: "Smart Qualification", time: "01:15s", desc: "The bot verifies budget range, preferred BHK/location, and buying timeline, logging data directly into your CRM." },
      { title: "Automated Site Visits", time: "02:00s", desc: "Qualified buyers receive instant WhatsApp calendar invites with Google Maps directions to the sales office." },
    ],
  },
  "jewellery": {
    title: "Luxury Jewellery Showrooms",
    badge: "+45% Festive Repeat Revenue",
    hookHeadline: "Turn One-Time Shoppers Into Lifetime VIP Clients.",
    hookSub: "Jewellery retailers using Agnostic AI automate personalized WhatsApp festive collection invites and private showroom bookings.",
    leakTitle: "The Unnurtured Showroom Walk-in Leak",
    leakDesc: "Hundreds of high-intent buyers visit your showroom each month without buying, and manual follow-ups are inconsistent or non-existent.",
    leakStats: [
      { label: "Unnurtured Walk-ins", val: "80%", desc: "Of showroom visitors leave without making a purchase or booking a return date." },
      { label: "Manual WhatsApp Open", val: "25%", desc: "Low engagement on generic broadcast messages from individual sales reps." },
      { label: "AI Concierge Open", val: "92%", desc: "Open rate on personalized festive video catalogs sent by Agnostic AI." },
    ],
    steps: [
      { title: "Walk-in Capture & Segmentation", time: "Instant", desc: "Customer details and jewelry preferences (Gold, Diamond, Polki) are captured via tablet at showroom exit." },
      { title: "Automated VIP Nurture", time: "Day 3 & 7", desc: "AI sends tailored WhatsApp lookbooks and festival discount vouchers based on their specific taste." },
      { title: "Private Appointment Booking", time: "On Demand", desc: "Clients reply on WhatsApp to reserve private viewing hours with their preferred senior sales executive." },
    ],
  },
};

const defaultConfig: IndustryData = {
  title: "Industry AI Automation Architecture",
  badge: "3x Operational Efficiency",
  hookHeadline: "Replace Manual Overhead With Autonomous Intelligence.",
  hookSub: "Scale your industry workflows 24/7 without adding operational headcount or suffering from human response delays.",
  leakTitle: "The Cost of Manual Operational Bottlenecks",
  leakDesc: "Manual data entry, delayed customer callbacks, and fragmented follow-ups cost Indian MSMEs over 30% in lost annual revenue.",
  leakStats: [
    { label: "Manual Overhead", val: "35 hrs", desc: "Wasted per week on repetitive customer follow-ups and data sorting." },
    { label: "Response Delay", val: "4 hrs+", desc: "Average time taken by human teams to reply to inbound web inquiries." },
    { label: "AI Uptime SLA", val: "99.8%", desc: "Continuous autonomous execution across voice, chat, and email channels." },
  ],
  steps: [
    { title: "Instant Lead & Query Capture", time: "00:05s", desc: "AI connects to your website forms, social ads, and WhatsApp API to intercept queries instantly." },
    { title: "Autonomous Processing", time: "00:30s", desc: "Our core engine verifies customer intent, answers FAQs, and routes complex requests." },
    { title: "Revenue Conversion", time: "01:30s", desc: "Qualified leads are booked into appointments, orders are processed, or tickets are resolved automatically." },
  ],
};

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "real-estate";
  const data = industryConfigs[slug] || defaultConfig;

  return (
    <div className="w-full pb-28 pt-12 px-6 max-w-[1280px] mx-auto">
      {/* Breadcrumbs */}
      <div className="mb-8 text-xs font-semibold text-on-surface-variant flex items-center gap-2">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/industries" className="hover:text-primary">Industries</Link>
        <span>/</span>
        <span className="text-on-background capitalize">{slug.replace("-", " ")}</span>
      </div>

      {/* Hero Hook */}
      <section className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block py-1.5 px-3.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs mb-4 uppercase tracking-widest">
          {data.badge}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background mb-4 leading-tight">
          {data.hookHeadline}
        </h1>
        <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
          {data.hookSub}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/audit"
            className="bg-primary text-on-primary px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider shadow-lg hover:opacity-95 transition-all"
          >
            Get Free {data.title.split(" ")[0]} Audit
          </Link>
          <Link
            href="/pricing"
            className="bg-surface-container-lowest border border-outline-variant/60 text-on-background px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider hover:border-primary transition-all"
          >
            View Architecture Pricing
          </Link>
        </div>
      </section>

      {/* Section 2: The Weekly Leak */}
      <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-8 sm:p-12 shadow-sm mb-24">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1 block">
            Operational Leak Analysis
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-background mb-3">
            {data.leakTitle}
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {data.leakDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-outline-variant/20">
          {data.leakStats.map((stat, idx) => (
            <div key={idx} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
              <span className="font-display font-extrabold text-3xl text-primary block mb-1">{stat.val}</span>
              <h4 className="font-bold text-sm text-on-background mb-2">{stat.label}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: 3-Step Autonomous Pipeline */}
      <section className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1 block">
            How The Engine Works
          </span>
          <h2 className="font-display text-3xl font-bold text-on-background">
            3-Step Autonomous Conversion Pipeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {data.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-8 shadow-sm relative flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div className="absolute -top-4 left-8 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                Step 0{idx + 1} • {step.time}
              </div>

              <div className="mt-4">
                <h3 className="font-display font-bold text-xl text-on-background mb-3">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs font-semibold text-secondary">
                <span>Autonomous Execution</span>
                <span className="material-symbols-outlined text-sm">bolt</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-surface-container-low border border-outline-variant/40 rounded-3xl p-10 text-center max-w-3xl mx-auto">
        <h3 className="font-display font-bold text-2xl text-on-background mb-3">
          Ready to Deploy This Architecture for {data.title}?
        </h3>
        <p className="text-sm text-on-surface-variant max-w-xl mx-auto mb-8">
          We can integrate our voice agents and WhatsApp bots with your existing CRM and ad accounts in less than 5 business days.
        </p>
        <Link
          href="/audit"
          className="inline-block bg-primary text-on-primary px-8 py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
        >
          Book Technical Architecture Session
        </Link>
      </section>
    </div>
  );
}
