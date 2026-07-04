import React from "react";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServiceGrid from "@/components/home/ServiceGrid";
import IndustryCarousel from "@/components/home/IndustryCarousel";
import ResultsSection from "@/components/home/ResultsSection";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import FaqAccordion from "@/components/home/FaqAccordion";
import FinalCtaSection from "@/components/home/FinalCtaSection";

import LiveDemoSection from "@/components/widgets/LiveDemoSection";
import ROICalculator from "@/components/widgets/ROICalculator";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      {/* Top Fixed Ticker & Sticky App Bar */}
      <LiveProofTicker />
      <TopAppBar />

      {/* Main Conversion Engine Content */}
      <main className="flex-1 pt-4">
        <HeroSection />
        <TrustBar />
        <LiveDemoSection />
        <ServiceGrid />
        
        {/* Interactive ROI Calculator Section */}
        <section id="roi-calculator" className="w-full py-16 bg-surface-container-lowest border-y border-outline/20">
          <ROICalculator />
        </section>

        <IndustryCarousel />
        <ResultsSection />
        <VideoTestimonials />
        <FaqAccordion />
        <FinalCtaSection />
      </main>

      {/* Footer & Floating/Sticky WhatsApp Widget */}
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
