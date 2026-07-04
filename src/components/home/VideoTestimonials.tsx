"use client";

import React, { useState } from "react";

const TESTIMONIALS = [
  {
    id: "surat-jeweller",
    name: "Rajesh Zaveri",
    business: "Zaveri & Sons Jewellers",
    location: "Surat, Gujarat",
    industry: "Jewellery Showroom",
    quote: "Hamari dukaan mein Dhanteras par 40% zyada customers aane lage. AI bot ne raat 2 baje bhi queries handle ki!",
    enTranslation: "We saw 40% more walk-in customers during Dhanteras. The AI bot handled catalog queries even at 2 AM!",
    thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    duration: "0:42",
  },
  {
    id: "noida-builder",
    name: "Vikram Chauhan",
    business: "Apex Greens Real Estate",
    location: "Greater Noida, UP",
    industry: "Real Estate Developer",
    quote: "Pehle hamare 150 ad leads mein se 120 waste ho jaate the. Ab AI bot samne se site visit book karta hai. 3x deals close hui!",
    enTranslation: "Out of 150 ad leads, 120 used to get wasted. Now the AI bot books site visits directly into our calendar. Closed 3x more deals!",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    duration: "0:55",
  },
  {
    id: "pune-hospital",
    name: "Dr. Meenakshi Deshmukh",
    business: "Deshmukh Specialty Hospital",
    location: "Pune, Maharashtra",
    industry: "Healthcare & Clinics",
    quote: "Reception desk par phone ring band ho gayi hai. WhatsApp bot khud appointment book aur reminder bhejta hai in Marathi & Hindi.",
    enTranslation: "Phone ringing at the reception has stopped. The WhatsApp bot automatically books appointments and sends reminders in Marathi & Hindi.",
    thumbnail: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    duration: "0:38",
  },
];

export default function VideoTestimonials() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="w-full py-16 sm:py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/15 text-success border border-success/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            ⭐ Verified Indian MSME Owners
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-background">
            Real Owners. Vernacular Videos. <br className="hidden sm:inline" />
            <span className="text-primary">Unfiltered Results.</span>
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg mt-3">
            No polished corporate actors. Watch real Indian shop and business owners explain in Hindi & regional languages how our AI bots transformed their daily sales.
          </p>
        </div>

        {/* Video Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-panel rounded-3xl overflow-hidden border border-outline/30 flex flex-col justify-between shadow-xl group hover:border-primary/50 transition-all duration-300"
            >
              {/* Thumbnail / Video Container */}
              <div className="relative aspect-[9/10] sm:aspect-[4/5] w-full bg-black overflow-hidden flex items-center justify-center">
                {playingId !== t.id ? (
                  <>
                    <img
                      src={t.thumbnail}
                      alt={`${t.name} testimonial`}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    {/* Duration Badge */}
                    <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white font-mono text-xs px-2.5 py-1 rounded-full border border-white/10">
                      ▶ {t.duration}
                    </span>

                    {/* Play Button */}
                    <button
                      onClick={() => setPlayingId(t.id)}
                      className="absolute w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:scale-110 active:scale-95 transition-all duration-300 z-10"
                      aria-label={`Play video testimonial of ${t.name}`}
                    >
                      <span className="material-symbols-outlined text-[36px] ml-1">play_arrow</span>
                    </button>

                    {/* Vernacular Quote Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/90 backdrop-blur-md border border-outline/40 shadow-lg">
                      <p className="font-display font-bold text-sm text-on-background leading-snug">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <p className="text-[11px] text-tertiary mt-1.5 italic font-sans border-t border-outline/20 pt-1.5">
                        🇬🇧 &ldquo;{t.enTranslation}&rdquo;
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-black flex flex-col items-center justify-center p-6 text-center">
                    <span className="material-symbols-outlined text-primary text-[40px] animate-pulse mb-2">videocam</span>
                    <div className="text-sm font-bold text-white mb-1">Playing Smartphone Recording...</div>
                    <div className="text-xs text-tertiary font-mono mb-4">{t.name} ({t.business})</div>
                    <button
                      onClick={() => setPlayingId(null)}
                      className="px-4 py-2 rounded-lg bg-surface text-xs font-bold text-on-surface border border-outline/30 hover:bg-surface-container"
                    >
                      Stop Video
                    </button>
                  </div>
                )}
              </div>

              {/* Owner Specs */}
              <div className="p-5 bg-surface-container-low flex items-center justify-between border-t border-outline/20">
                <div>
                  <h3 className="font-display font-extrabold text-base text-on-background">{t.name}</h3>
                  <div className="text-xs text-tertiary font-medium">{t.business}</div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold uppercase">
                    {t.industry}
                  </span>
                  <div className="text-[11px] text-tertiary mt-0.5">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
