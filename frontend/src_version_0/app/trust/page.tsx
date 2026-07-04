import React from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

const CASE_STUDIES = [
  {
    title: "How Zaveri Jewellers in Surat Grew Walk-ins by 40% During Diwali",
    industry: "Jewellery Showroom",
    problem: "Missed WhatsApp inquiries after 8 PM during peak festive season when buyers compare gold making charges.",
    solution: "Deployed 24/7 vernacular WhatsApp showroom assistant with instant catalog PDF dispatch and gold rate calculator.",
    outcome: "40% increase in physical showroom walk-ins and ₹32L additional revenue recovered in 14 days.",
    stat: "40% Walk-in Boost",
  },
  {
    title: "How Apex Greens Real Estate Reduced CPL by 55% in Greater Noida",
    industry: "Real Estate Developer",
    problem: "Sales team overwhelmed calling 150+ daily Meta ad leads; 80% were unqualified budget seekers or wrong numbers.",
    solution: "Integrated 30-second instant WhatsApp qualification bot asking budget and 2BHK/3BHK preference before scheduling site visits.",
    outcome: "CPL dropped by 55%, site visit show-up rate doubled to 42%, and closers saved 20 hours per week.",
    stat: "55% CPL Drop",
  },
  {
    title: "How Deshmukh Specialty Hospital in Pune Eliminated Reception Bottlenecks",
    industry: "Healthcare & Clinics",
    problem: "Continuous phone ringing at reception desk led to missed patient inquiries and long billing queue delays.",
    solution: "WhatsApp automated appointment booking bot with Marathi & Hindi language support and automated consultation reminder alerts.",
    outcome: "80% reduction in desk call volume, zero double bookings, and 95% patient confirmation rate.",
    stat: "80% Less Call Load",
  },
];

export default function TrustCenterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/15 text-success border border-success/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              🛡️ PASO Methodology Case Studies
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background">
              Verified Client Outcomes
            </h1>
            <p className="text-on-surface-variant text-lg mt-3">
              We follow the PASO framework: Problem &rarr; Automation Architecture &rarr; System Integration &rarr; Outcome. Here is verifiable proof.
            </p>
          </div>

          <div className="space-y-10">
            {CASE_STUDIES.map((cs, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-outline/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold uppercase border border-primary/20">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono text-tertiary">Verified PASO Study #{idx + 1}</span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-on-background">
                    {cs.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-error/5 border border-error/20">
                      <div className="text-[11px] font-mono font-bold text-error uppercase">1. Problem</div>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="text-[11px] font-mono font-bold text-primary uppercase">2. Automation Solution</div>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-success/10 border border-success/30">
                    <div className="text-[11px] font-mono font-bold text-success uppercase">3. Outcome & Impact</div>
                    <p className="text-sm font-semibold text-on-surface mt-1 leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-surface-container p-8 rounded-2xl border border-primary/30 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-success/20 text-success flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[36px]">verified</span>
                  </div>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary">{cs.stat}</div>
                  <p className="text-xs text-tertiary">30-Day audited client result</p>
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Viraal, I want to see the full PDF study for ${cs.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-surface hover:bg-primary hover:text-on-primary border border-outline/30 text-xs font-bold transition-all shadow-sm block"
                  >
                    Request Full PDF Report
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
