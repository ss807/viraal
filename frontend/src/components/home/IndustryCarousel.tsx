"use client";

import React from "react";
import Link from "next/link";

const INDUSTRIES = [
  { name: "Real Estate", slug: "real-estate", icon: "apartment", desc: "Site visit qualification bots", color: "from-blue-600/20 to-cyan-500/10" },
  { name: "Jewellery Showrooms", slug: "jewellery", icon: "diamond", desc: "Dhanteras & catalog bots", color: "from-amber-500/20 to-yellow-600/10" },
  { name: "Hospitals & Clinics", slug: "local_hospital", icon: "medical_services", desc: "24/7 patient appointment bots", color: "from-emerald-500/20 to-green-600/10" },
  { name: "Restaurants & Cafes", slug: "restaurants", icon: "restaurant", desc: "Table reservation & Maps SEO", color: "from-red-500/20 to-orange-600/10" },
  { name: "Gyms & Fitness", slug: "fitness", icon: "fitness_center", desc: "Trial class booking automation", color: "from-purple-500/20 to-indigo-600/10" },
  { name: "Education & Coaching", slug: "education", icon: "school", desc: "Admission inquiry handlers", color: "from-pink-500/20 to-rose-600/10" },
  { name: "Car Dealerships", slug: "automotive", icon: "directions_car", desc: "Test drive booking bots", color: "from-cyan-500/20 to-blue-600/10" },
  { name: "Fashion & Retail", slug: "retail", icon: "checkroom", desc: "Shopify cart recovery bots", color: "from-amber-600/20 to-orange-500/10" },
  { name: "Manufacturing & B2B", slug: "manufacturing", icon: "precision_manufacturing", desc: "IndiaMart & LinkedIn scraping", color: "from-slate-600/20 to-zinc-500/10" },
];

export default function IndustryCarousel() {
  return (
    <section className="w-full py-16 bg-surface border-b border-outline/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
              🏭 Specialized Niche AI
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-background mt-1">
              Engineered For Your Exact Industry
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-xs font-mono font-bold text-primary hover:text-on-background underline flex items-center gap-1"
          >
            <span>View All 12+ Industry Templates</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* Horizontally Scrollable Cards Container */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-surface-container">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className={`snap-start shrink-0 w-64 sm:w-72 p-5 rounded-2xl bg-gradient-to-br ${ind.color} border border-outline/30 hover:border-primary transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface/80 text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">{ind.icon}</span>
                </div>
                <h3 className="font-display font-extrabold text-lg text-on-background group-hover:text-primary transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-tertiary mt-1 font-sans">
                  {ind.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-outline/20 flex items-center justify-between text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                <span>View Case Studies</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
