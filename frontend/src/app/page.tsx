"use client";

import React, { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import PackageBuilderAndRoi from "@/components/home/PackageBuilderAndRoi";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
        class?: string;
      };
    }
  }
}


const services = [
  { title: "Lead Generation Automation", price: "7,999", icon: "solar:magnet-linear", desc: "Never run out of prospects.", bullets: ["AI Lead Scraping", "LinkedIn Outreach", "Email Automation", "WhatsApp Nurturing", "CRM Integration"] },
  { title: "AI Chatbots & Support", price: "6,999", icon: "solar:dialog-2-linear", desc: "24/7 customer engagement.", bullets: ["Website AI Chatbot", "WhatsApp AI Assistant", "IG/FB DM Automation", "FAQ Bots", "Handover to Human"] },
  { title: "Social Media Automation", price: "6,499", icon: "solar:hashtag-linear", desc: "Consistent presence on autopilot.", bullets: ["AI Content Creation", "Reels & Shorts Generation", "Auto Scheduling", "Comment Management", "Trend Analysis"] },
  { title: "Sales Automation", price: "7,999", icon: "solar:graph-up-linear", desc: "Close more deals, faster.", bullets: ["Follow-up Sequences", "Lead Scoring", "Proposal Generation", "Pipeline Management", "Meeting Scheduling"] },
  { title: "AI Content Production", price: "4,999", icon: "solar:pen-linear", desc: "High-quality content at scale.", bullets: ["SEO Blog Writing", "Ad Copy Generation", "Product Descriptions", "Email Campaigns", "Video Scripts"] },
  { title: "AI Video Services", price: "8,999/project", icon: "solar:videocamera-record-linear", desc: "Professional videos without actors.", bullets: ["AI Spokesperson Videos", "Product Promos", "UGC Content", "Real Estate Walkthroughs", "Multi-lingual dubbing"] },
  { title: "Process Automation", price: "6,999", icon: "solar:settings-linear", desc: "Streamline internal operations.", bullets: ["Employee Onboarding", "HR Automation", "Invoice Generation", "Reporting Dashboards", "Data Entry Bots"] },
  { title: "E-Commerce Automation", price: "6,499", icon: "solar:cart-large-linear", desc: "Boost store sales silently.", bullets: ["Product Listing AI", "Review Management", "Cart Recovery SMS", "Retention Campaigns", "Inventory Alerts"] }
];

const faqsData = [
  { q: "Kya yeh mere jaisi chhoti dukaan ke liye kaam karega?", a: "Absolutely! Our solutions are specifically designed for MSMEs. Whether you have 1 employee or 50, our AI scales to your needs seamlessly." },
  { q: "Pehle ek agency se kaam karaya tha, kuch kuch nahi hua", a: "We hear this often. Unlike traditional agencies that rely on manual work, our AI systems guarantee consistency and trackable ROI every single day." },
  { q: "Kitna kharcha aayega total?", a: "Our packages start at just ₹4,999/month. No hidden fees. You can use the calculator above to build a package that fits your exact budget." },
  { q: "Kya mujhe kuch sikhna padega?", a: "Not at all. We handle the technical setup entirely. You just need to know how to open WhatsApp or your email to receive the leads." }
];


const industries = [
  { n: "Jewellery", i: "solar:crown-linear" },
  { n: "Real Estate", i: "solar:buildings-linear" },
  { n: "Hospitals", i: "solar:health-linear" },
  { n: "Gyms", i: "solar:dumbbell-large-linear" },
  { n: "Restaurants", i: "solar:cup-hot-linear" },
  { n: "Education", i: "solar:diploma-linear" },
  { n: "Car Dealers", i: "solar:bus-linear" },
  { n: "Fashion", i: "solar:tag-linear" },
  { n: "Manufacturing", i: "solar:factory-linear" }
];

const testimonials = [
  { name: "Rahul Verma", biz: "Verma Jewellers", loc: "Delhi", quote: "Hamari dukaan mein 40% zyada customers aane lage just 2 months mein. The WhatsApp bot is magic." },
  { name: "Priya Sharma", biz: "Glow & Grow Clinic", loc: "Mumbai", quote: "Pehle reception pe calls miss hoti thi. Ab AI sab handle karta hai. Appointments double ho gaye hain." },
  { name: "Amit Desai", biz: "Desai Motors", loc: "Ahmedabad", quote: "Lead cost halved. The AI follow-up system makes sure no prospect is ignored. Highly recommend Viraal." },
  { name: "Vikram Singh", biz: "Elite Fitness", loc: "Gurgaon", quote: "Membership renewals automated. New inquiries answered at 2 AM. Best investment for our gym." }
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      {/* 3. HERO SECTION (Matching hero.png reference exactly) */}
      <HeroSection />

      {/* 4. TRUST BAR */}
      <section className="bg-white border-b border-border py-6 overflow-hidden flex flex-col items-center justify-center" id="trust">
        <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4 text-center">Trusted Integrations & Certifications</p>
        <div className="flex space-x-12 animate-marquee w-max">
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:infinity-linear" class="text-2xl text-blue-600"></iconify-icon> Meta Business Partner
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:global-linear" class="text-2xl text-red-500"></iconify-icon> Google Partner
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:phone-calling-linear" class="text-2xl text-success"></iconify-icon> WhatsApp API
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:shield-check-linear" class="text-2xl text-indigo-600"></iconify-icon> GeM Registered
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:medal-star-linear" class="text-2xl text-orange-500"></iconify-icon> Udyam Certified
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:lock-keyhole-linear" class="text-2xl text-teal-600"></iconify-icon> ISO 27001
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:infinity-linear" class="text-2xl text-blue-600"></iconify-icon> Meta Business Partner
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-lg font-heading font-bold text-gray-700">
            <iconify-icon icon="solar:global-linear" class="text-2xl text-red-500"></iconify-icon> Google Partner
          </div>
        </div>
      </section>

      {/* 5. LIVE DEMO SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">Don't believe us? <br /> Experience our AI right now.</h2>
          <p className="text-slate font-medium">Interact with our live demos below to see the quality of automation you can expect.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Voice Call */}
          <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <iconify-icon icon="solar:phone-calling-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">AI Voice Call Demo</h3>
              <p className="text-slate text-sm mb-6">Enter your number. Our AI Sales Agent will call you instantly and pitch our services in Hindi or English.</p>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate text-sm">+91</span>
                  <input type="tel" placeholder="10-digit number" className="input-field pl-10" />
                </div>
                <button className="w-full bg-gold text-charcoal font-bold uppercase text-xs min-h-[3rem] rounded-lg hover:brightness-110 active:scale-97 transition-all flex items-center justify-center gap-2">
                  Call Me in 30 Seconds <iconify-icon icon="solar:outgoing-call-linear" class="text-lg"></iconify-icon>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Chatbot */}
          <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-success/10 rounded-bl-full -z-10"></div>
            <div>
              <div className="w-12 h-12 rounded-full bg-green-50 text-success flex items-center justify-center mb-4">
                <iconify-icon icon="solar:chat-line-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">AI Chatbot Demo</h3>
              <div className="bg-gray-50 border border-border rounded-xl p-3 mb-6 space-y-3 font-sans text-sm">
                <div className="flex justify-end">
                  <div className="bg-[#E7FFDB] text-charcoal px-3 py-2 rounded-l-lg rounded-tr-lg shadow-sm max-w-[85%] text-xs">
                    Pricing kya hai aapki service ki?
                  </div>
                </div>
                <div className="flex justify-start items-end gap-1">
                  <div className="w-6 h-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <iconify-icon icon="solar:robot-linear" class="text-xs"></iconify-icon>
                  </div>
                  <div className="bg-white border border-border text-charcoal px-3 py-2 rounded-r-lg rounded-tl-lg shadow-sm max-w-[85%] text-xs">
                    Hamari services ₹4,999/month se start hoti hain. Kya main aapke business type ke hisaab se ek custom package batau? 😊
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full border-2 border-success text-success font-bold uppercase text-xs min-h-[3rem] rounded-lg hover:bg-success hover:text-white active:scale-97 transition-all flex items-center justify-center gap-2">
              Try it on WhatsApp <iconify-icon icon="solar:arrow-right-up-linear" class="text-lg"></iconify-icon>
            </button>
          </div>

          {/* Card 3: Audio Center */}
          <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <iconify-icon icon="solar:record-circle-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Audio Demo Center</h3>
              <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                <button className="flex-1 text-xs font-semibold py-1.5 bg-white shadow-sm rounded-md text-charcoal">Hindi</button>
                <button className="flex-1 text-xs font-semibold py-1.5 text-slate hover:text-charcoal">English</button>
                <button className="flex-1 text-xs font-semibold py-1.5 text-slate hover:text-charcoal">Hinglish</button>
              </div>
              <div className="bg-charcoal text-white rounded-xl p-4 flex flex-col items-center justify-center h-28 relative overflow-hidden group cursor-pointer">
                <div className="flex items-center gap-1 h-8 mb-2">
                  <div className="w-1 bg-gold h-3 rounded-full animate-[float_1s_ease-in-out_infinite]"></div>
                  <div className="w-1 bg-gold h-6 rounded-full animate-[float_1.2s_ease-in-out_infinite]"></div>
                  <div className="w-1 bg-gold h-8 rounded-full animate-[float_0.8s_ease-in-out_infinite]"></div>
                  <div className="w-1 bg-gold h-4 rounded-full animate-[float_1.5s_ease-in-out_infinite]"></div>
                  <div className="w-1 bg-gold h-7 rounded-full animate-[float_1.1s_ease-in-out_infinite]"></div>
                  <div className="w-1 bg-gold h-2 rounded-full animate-[float_0.9s_ease-in-out_infinite]"></div>
                </div>
                <div className="flex w-full justify-between text-2xs text-gray-400 font-numbers">
                  <span>0:00</span>
                  <iconify-icon icon="solar:play-circle-linear" class="text-xl text-white group-hover:text-gold transition-colors"></iconify-icon>
                  <span>1:14</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate mt-4 text-center">Listen to real AI-generated sales calls.</p>
          </div>
        </div>
      </section>

      {/* 6. SERVICE GRID */}
      <section id="services" className="py-20 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight">Our AI Solutions</h2>
            <p className="text-slate font-medium mt-2">Modular blocks to build your growth engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-6 relative group overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-white transition-colors">
                    <iconify-icon icon={s.icon} class="text-2xl"></iconify-icon>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-charcoal border border-gray-200">
                    ₹{s.price}{s.price.includes('project') ? '' : '/mo'}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-charcoal relative z-10 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-slate text-sm font-medium relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:h-0 overflow-hidden">{s.desc}</p>
                
                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 z-10">
                  <ul className="space-y-2">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-success mt-0.5 shrink-0"></iconify-icon> {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">The Old Way vs. The Viraal Way</h2>
            <p className="text-slate font-medium">Why MSMEs are switching to AI automation over traditional methods.</p>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-border">
                  <th className="p-4 font-heading font-bold text-charcoal text-lg w-1/4">Feature</th>
                  <th className="p-4 font-heading font-bold text-slate w-1/4 text-center">In-House Hire</th>
                  <th className="p-4 font-heading font-bold text-slate w-1/4 text-center">Traditional Agency</th>
                  <th className="p-4 font-heading font-bold text-navy w-1/4 text-center bg-blue-50/50">Viraal AI</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-charcoal">Availability</td>
                  <td className="p-4 text-center text-slate">9 AM to 6 PM (Mon-Sat)</td>
                  <td className="p-4 text-center text-slate">Takes 2-3 days to respond</td>
                  <td className="p-4 text-center font-bold text-success bg-blue-50/50 flex items-center justify-center gap-1"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> 24/7/365 Instant Response</td>
                </tr>
                <tr className="border-b border-border bg-gray-50/50">
                  <td className="p-4 font-bold text-charcoal">Average Monthly Cost</td>
                  <td className="p-4 text-center text-slate">₹25,000 - ₹40,000</td>
                  <td className="p-4 text-center text-slate">₹30,000+</td>
                  <td className="p-4 text-center font-bold text-gold bg-blue-50/50 text-base">Starts at ₹4,999</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-charcoal">Lead Loss Rate</td>
                  <td className="p-4 text-center text-slate">High (Missed calls, late replies)</td>
                  <td className="p-4 text-center text-slate">Medium (Batch processing)</td>
                  <td className="p-4 text-center font-bold text-success bg-blue-50/50 flex items-center justify-center gap-1"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> 0% (Every lead captured)</td>
                </tr>
                <tr className="border-b border-border bg-gray-50/50">
                  <td className="p-4 font-bold text-charcoal">Time to Setup</td>
                  <td className="p-4 text-center text-slate">15-30 days (Hiring/Training)</td>
                  <td className="p-4 text-center text-slate">10-14 days onboarding</td>
                  <td className="p-4 text-center font-bold text-success bg-blue-50/50 flex items-center justify-center gap-1"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> Live in 7 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE PACKAGE BUILDER & ROI CALCULATOR (Matching Screenshot 2026-07-08 230736.png exactly) */}
      <PackageBuilderAndRoi />

      {/* 8. INDUSTRY CAROUSEL */}
      <section id="industries" className="py-10 bg-white border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <h3 className="text-sm font-bold text-slate uppercase tracking-wider">Industries We Dominate</h3>
        </div>
        <div className="flex overflow-x-auto snap-x no-scrollbar pb-4 pl-4 md:pl-8 xl:pl-[calc((100vw-80rem)/2)] gap-4 w-full">
          {industries.map((item, i) => (
            <div key={i} className="snap-start flex-shrink-0 w-32 md:w-40 flex flex-col items-center justify-center p-6 bg-white border border-border rounded-2xl hover:border-gold hover:shadow-md transition-all cursor-pointer group">
              <iconify-icon icon={item.i} class="text-3xl text-slate group-hover:text-gold transition-colors mb-3"></iconify-icon>
              <span className="text-xs font-bold text-charcoal text-center">{item.n}</span>
            </div>
          ))}
          <div className="snap-start flex-shrink-0 w-4 md:w-8"></div> {/* Spacer */}
        </div>
      </section>

      {/* 9. RESULTS & NUMBERS */}
      <section className="bg-navy py-24 text-white relative overflow-hidden" id="results-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/50 via-navy to-navy"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="font-numbers font-bold text-4xl md:text-6xl text-gold mb-2 flex justify-center items-end">
                <span>2500</span><span className="text-3xl md:text-5xl">+</span>
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">Leads Generated</p>
            </div>
            <div>
              <div className="font-numbers font-bold text-4xl md:text-6xl text-white mb-2 flex justify-center items-end">
                <span>40</span><span className="text-3xl md:text-5xl">%</span>
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">Avg. Drop in CPL</p>
            </div>
            <div>
              <div className="font-numbers font-bold text-4xl md:text-6xl text-white mb-2 flex justify-center items-end">
                <span>7</span>
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">Days to Go Live</p>
            </div>
            <div>
              <div className="font-numbers font-bold text-4xl md:text-6xl text-white mb-2 flex justify-center items-end">
                <span>12</span><span className="text-3xl md:text-5xl">+</span>
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">Go Live in 7 Days.</h2>
            <p className="text-slate font-medium">No complex IT projects. No lengthy meetings. Just results.</p>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-12">
              {/* Day 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <h3 className="font-heading font-bold text-xl text-charcoal">Discovery & Audit</h3>
                  <p className="text-slate text-sm mt-2">We analyze your business, identify bottlenecks, and map out the exact AI workflow tailored to your specific industry.</p>
                </div>
                <div className="w-12 h-12 bg-gold text-charcoal rounded-full flex items-center justify-center font-numbers font-bold text-lg z-10 border-4 border-white shadow-md relative">
                  1
                </div>
                <div className="md:w-5/12 text-center md:text-left mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-navy rounded-full text-xs font-bold uppercase tracking-wide">Day 1</span>
                </div>
              </div>
              
              {/* Day 3 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-left mb-4 md:mb-0">
                  <h3 className="font-heading font-bold text-xl text-charcoal">Custom AI Training</h3>
                  <p className="text-slate text-sm mt-2">Our engineers build and train your AI agents on your pricing, FAQs, and brand tone. We ensure it speaks perfectly in Hindi/English.</p>
                </div>
                <div className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-numbers font-bold text-lg z-10 border-4 border-white shadow-md relative group-hover:bg-navy transition-colors">
                  3
                </div>
                <div className="md:w-5/12 text-center md:text-right mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-charcoal rounded-full text-xs font-bold uppercase tracking-wide">Day 3</span>
                </div>
              </div>
              
              {/* Day 5 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <h3 className="font-heading font-bold text-xl text-charcoal">Integration & Testing</h3>
                  <p className="text-slate text-sm mt-2">We hook the AI into your WhatsApp Business API, CRM, and calendar. We run extensive test scenarios to ensure perfection.</p>
                </div>
                <div className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-numbers font-bold text-lg z-10 border-4 border-white shadow-md relative group-hover:bg-navy transition-colors">
                  5
                </div>
                <div className="md:w-5/12 text-center md:text-left mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-charcoal rounded-full text-xs font-bold uppercase tracking-wide">Day 5</span>
                </div>
              </div>
              
              {/* Day 7 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-left mb-4 md:mb-0">
                  <h3 className="font-heading font-bold text-xl text-success">Launch & Lead Flow</h3>
                  <p className="text-slate text-sm mt-2">Your automated growth engine is live. The AI starts handling inquiries 24/7, booking appointments, and recovering lost leads.</p>
                </div>
                <div className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center font-numbers font-bold text-2xl z-10 border-4 border-white shadow-lg relative group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:rocket-linear"></iconify-icon>
                </div>
                <div className="md:w-5/12 text-center md:text-right mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-green-50 text-success rounded-full text-xs font-bold uppercase tracking-wide">Day 7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight">Real Founders. Real Growth.</h2>
        </div>

        <div className="flex overflow-x-auto snap-x no-scrollbar pb-8 pl-4 md:pl-8 xl:pl-[calc((100vw-80rem)/2)] gap-6 w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start flex-shrink-0 w-80 md:w-96 bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="aspect-video bg-gray-900 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2NDc0OEIiLz48L3N2Zz4=')" }}></div>
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-gold group-hover:text-charcoal transition-all relative z-10">
                  <iconify-icon icon="solar:play-bold" class="text-xl ml-1"></iconify-icon>
                </div>
              </div>
              <p className="font-sans font-medium text-charcoal italic mb-6 flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 font-bold font-heading">{t.name.charAt(0)}</div>
                <div>
                  <h4 className="font-bold text-sm text-charcoal">{t.name}</h4>
                  <p className="text-xs text-slate">{t.biz} • {t.loc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="snap-start flex-shrink-0 w-4 md:w-8"></div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-charcoal tracking-tight">Got Questions?</h2>
            <p className="text-slate mt-2">Answers to common doubts.</p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, i) => (
              <div key={i} className={`border border-border rounded-xl bg-gray-50 faq-item overflow-hidden ${activeFaq === i ? 'active shadow-md' : ''}`}>
                <button className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span className="font-bold text-sm text-charcoal">{faq.q}</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" class="text-gold text-xl faq-icon"></iconify-icon>
                </button>
                <div className={`faq-content bg-white border-t border-border ${activeFaq === i ? 'open' : ''}`}>
                  <div className="px-6 py-4 text-sm text-slate">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="relative bg-gradient-to-r from-gold to-yellow-500 py-24 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal tracking-tight mb-6">Ready to automate your business growth?</h2>
          <p className="text-charcoal/80 font-medium text-lg md:text-xl mb-10 max-w-2xl mx-auto">Join 200+ Indian businesses already using AI to get more customers, save time, and increase profits.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-charcoal text-white font-bold uppercase text-sm px-8 min-h-[3.5rem] rounded-lg hover:bg-gray-800 active:scale-97 transition-all flex items-center justify-center gap-2 shadow-xl">
              <iconify-icon icon="solar:chat-round-line-linear" class="text-xl"></iconify-icon> Start on WhatsApp
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-charcoal text-charcoal font-bold uppercase text-sm px-8 min-h-[3.5rem] rounded-lg hover:bg-charcoal hover:text-white active:scale-97 transition-all flex items-center justify-center gap-2">
              <iconify-icon icon="solar:phone-calling-linear" class="text-xl"></iconify-icon> Get a Free AI Audit
            </button>
          </div>
          <p className="mt-8 text-sm text-charcoal/70 font-semibold">Or call us directly: <a href="tel:+919876543210" className="underline hover:text-charcoal">++91-9876543210</a></p>
        </div>
      </section>
    </>
  );
}
