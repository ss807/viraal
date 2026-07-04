import React from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

const INDUSTRIES_LIST = [
  { slug: "real-estate", title: "Real Estate & Builders", icon: "apartment", headline: "Stop losing site-visit leads. Automate 24/7 buyer qualification.", stat: "55% Lower CPL" },
  { slug: "jewellery", title: "Jewellery Showrooms", icon: "diamond", headline: "Handle 500 Dhanteras catalog inquiries overnight on WhatsApp.", stat: "40% More Walk-ins" },
  { slug: "hospitals-clinics", title: "Hospitals & Clinics", icon: "medical_services", headline: "Automate patient appointments and reminders in vernacular.", stat: "80% Less Desk Calls" },
  { slug: "restaurants", title: "Restaurants & Cafes", icon: "restaurant", headline: "Google Maps SEO & automated WhatsApp table reservation bot.", stat: "3x More Table Bookings" },
  { slug: "gyms-fitness", title: "Gyms & Fitness Centers", icon: "fitness_center", headline: "Automate trial class booking and membership renewal reminders.", stat: "60% Renewal Rate" },
  { slug: "education", title: "Education & Coaching", icon: "school", headline: "Instant response to admission inquiries and campus tour booking.", stat: "2x Admissions" },
  { slug: "car-dealerships", title: "Car Dealerships", icon: "directions_car", headline: "Automate test drive bookings and inventory catalog on WhatsApp.", stat: "35% More Test Drives" },
  { slug: "fashion-retail", title: "Fashion & Retail", icon: "checkroom", headline: "Recover 60% of abandoned Shopify carts with automated WhatsApp alerts.", stat: "4x ROAS" },
  { slug: "manufacturing", title: "Manufacturing & B2B", icon: "precision_manufacturing", headline: "Scrape IndiaMart & LinkedIn leads; automate B2B dealer qualification.", stat: "8.5x Marketing ROI" },
];

export default function IndustriesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              🏭 Programmatic Ad Templates
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background">
              Industry AI Architectures
            </h1>
            <p className="text-on-surface-variant text-lg mt-3">
              Select your specific industry below to see how our pre-built WhatsApp bots and AI voice agents solve your exact operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_LIST.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="glass-panel p-8 rounded-3xl border border-outline/30 hover:border-primary transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[30px]">{ind.icon}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-success bg-success/10 border border-success/20 px-3 py-1 rounded-full">
                      {ind.stat}
                    </span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl text-on-background group-hover:text-primary transition-colors mb-2">
                    {ind.title}
                  </h2>
                  <p className="text-sm text-tertiary font-sans leading-relaxed">
                    &ldquo;{ind.headline}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-outline/20 flex items-center justify-between text-xs font-bold text-primary">
                  <span>View Industry Case Study</span>
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
