"use client";

import React from "react";
import Link from "next/link";

const industries = [
  {
    slug: "real-estate",
    title: "Real Estate & Builders",
    icon: "apartment",
    desc: "Stop letting weekend property ad inquiries go cold. Call 100% of leads within 30 seconds to book verified site visits.",
    stat: "3.2x Site Visits",
  },
  {
    slug: "jewellery",
    title: "Luxury Jewellery Showrooms",
    icon: "diamond",
    desc: "Automated VIP catalog delivery and festive appointment booking for high-ticket showroom visitors on WhatsApp.",
    stat: "+45% Repeat Sales",
  },
  {
    slug: "healthcare",
    title: "Hospitals & Specialized Clinics",
    icon: "medical_services",
    desc: "24/7 patient OPD appointment scheduling, automated lab report queries, and post-consultation WhatsApp follow-ups.",
    stat: "0s Patient Wait",
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce D2C",
    icon: "shopping_bag",
    desc: "Automated Shopify abandoned cart recovery, instant WhatsApp order tracking, and COD verification calls.",
    stat: "28% Cart Recovery",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & B2B Logistics",
    icon: "factory",
    desc: "Automate dealer inquiry routing, spare part quotation generation, and shipment status tracking.",
    stat: "85% Less Admin",
  },
  {
    slug: "education",
    title: "Education & Coaching Institutes",
    icon: "school",
    desc: "Instant course brochure delivery, admission counseling chatbots, and fee reminder automation.",
    stat: "2.5x Admissions",
  },
];

export default function IndustriesOverviewPage() {
  return (
    <div className="w-full pb-28 pt-12 px-6 max-w-[1280px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
          Tailored Architecture
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background mb-4">
          Engineered for <span className="text-primary">Your Industry</span>
        </h1>
        <p className="text-on-surface-variant text-lg">
          We don't deploy generic chatbots. Every Agnostic AI solution is customized with industry-specific knowledge, workflows, and terminology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {industries.map((ind, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">{ind.icon}</span>
                </div>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                  {ind.stat}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-on-background mb-3 group-hover:text-primary transition-colors">
                {ind.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                {ind.desc}
              </p>
            </div>

            <Link
              href={`/industries/${ind.slug}`}
              className="w-full py-3.5 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-background rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 group-hover:shadow-md"
            >
              <span>Explore Architecture</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-low border border-outline-variant/40 rounded-3xl p-10 text-center max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-xl text-on-background mb-2">
          Don't see your specific industry?
        </h3>
        <p className="text-sm text-on-surface-variant mb-6">
          Our Agnostic AI core engine can be trained on any proprietary knowledge base or SOP within 48 hours.
        </p>
        <Link
          href="/audit"
          className="inline-block bg-secondary text-on-secondary px-8 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider shadow-sm hover:opacity-90 transition-opacity"
        >
          Request Custom Industry Audit
        </Link>
      </div>
    </div>
  );
}
