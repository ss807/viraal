"use client";

import React, { useState, useEffect, useRef } from "react";

const services = [
  { title: "Lead Generation Automation", price: 7999, icon: "solar:magnet-linear", desc: "Never run out of prospects.", bullets: ["AI Lead Scraping", "LinkedIn Outreach", "Email Automation", "WhatsApp Nurturing", "CRM Integration"], isProject: false },
  { title: "AI Chatbots & Support", price: 6999, icon: "solar:dialog-2-linear", desc: "24/7 customer engagement.", bullets: ["Website AI Chatbot", "WhatsApp AI Assistant", "IG/FB DM Automation", "FAQ Bots", "Handover to Human"], isProject: false },
  { title: "Social Media Automation", price: 6499, icon: "solar:hashtag-linear", desc: "Consistent presence on autopilot.", bullets: ["AI Content Creation", "Reels & Shorts Generation", "Auto Scheduling", "Comment Management", "Trend Analysis"], isProject: false },
  { title: "Sales Automation", price: 7999, icon: "solar:graph-up-linear", desc: "Close more deals, faster.", bullets: ["Follow-up Sequences", "Lead Scoring", "Proposal Generation", "Pipeline Management", "Meeting Scheduling"], isProject: false },
  { title: "AI Content Production", price: 4999, icon: "solar:pen-linear", desc: "High-quality content at scale.", bullets: ["SEO Blog Writing", "Ad Copy Generation", "Product Descriptions", "Email Campaigns", "Video Scripts"], isProject: false },
  { title: "AI Video Services", price: 8999, icon: "solar:videocamera-record-linear", desc: "Professional videos without actors.", bullets: ["AI Spokesperson Videos", "Product Promos", "UGC Content", "Real Estate Walkthroughs", "Multi-lingual dubbing"], isProject: true },
  { title: "Process Automation", price: 6999, icon: "solar:settings-linear", desc: "Streamline internal operations.", bullets: ["Employee Onboarding", "HR Automation", "Invoice Generation", "Reporting Dashboards", "Data Entry Bots"], isProject: false },
  { title: "E-Commerce Automation", price: 6499, icon: "solar:cart-large-linear", desc: "Boost store sales silently.", bullets: ["Product Listing AI", "Review Management", "Cart Recovery SMS", "Retention Campaigns", "Inventory Alerts"], isProject: false }
];

const faqsData = [
  { q: "Kya yeh mere jaisi chhoti dukaan ke liye kaam karega?", a: "Absolutely! Our solutions are specifically designed for MSMEs. Whether you have 1 employee or 50, our AI scales to your needs seamlessly." },
  { q: "Pehle ek agency se kaam karaya tha, kuch nahi hua", a: "We hear this often. Unlike traditional agencies that rely on manual work, our AI systems guarantee consistency and trackable ROI every single day." },
  { q: "Kitna kharcha aayega total?", a: "Our packages start at just ₹4,999/month. No hidden fees. You can use the calculator above to build a package that fits your exact budget." },
  { q: "Kya mujhe kuch sikhna padega?", a: "Not at all. We handle the technical setup entirely. You just need to know how to open WhatsApp or your email to receive the leads." }
];

const builderServicesList = [
  { id: 'b1', name: 'Lead Generation System', price: 7999 },
  { id: 'b2', name: 'WhatsApp & Web AI Chatbot', price: 6999 },
  { id: 'b3', name: 'Social Media Autopilot', price: 6499 },
  { id: 'b4', name: 'Automated Follow-ups', price: 7999 },
  { id: 'b5', name: 'AI Content Engine', price: 4999 }
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
  const [selectedBuilder, setSelectedBuilder] = useState<Set<string>>(new Set());
  const [revenueSlider, setRevenueSlider] = useState(10);
  
  // Demos
  const [phoneInput, setPhoneInput] = useState("");
  const [callStatus, setCallStatus] = useState<"idle" | "calling" | "success">("idle");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Pricing kya hai aapki service ki?" },
    { sender: "bot", text: "Hamari services ₹4,999/month se start hoti hain. Kya main aapke business type ke hisaab se ek custom package batau? 😊" }
  ]);

  const handleTriggerCall = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    setCallStatus("calling");
    setTimeout(() => setCallStatus("success"), 2000);
  };

  const toggleBuilderItem = (id: string) => {
    const newSet = new Set(selectedBuilder);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedBuilder(newSet);
  };

  const builderTotal = builderServicesList
    .filter(s => selectedBuilder.has(s.id))
    .reduce((sum, s) => sum + s.price, 0);

  const leadsLost = Math.floor(revenueSlider * 4.5);
  const recovery = (revenueSlider * 0.15).toFixed(1);
  const hours = Math.floor(20 + (revenueSlider * 1.5));

  return (
    <>
      {/* 3. HERO SECTION (From generated-page-2.html) */}
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-white via-primary to-white animate-wave py-20 px-4 border-b border-border">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            For Indian MSMEs
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-charcoal tracking-tight leading-tight">
            AI-Powered Digital Marketing.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-success">
              Real Results.
            </span>
          </h1>
          <p className="font-sans font-medium text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
            Complete AI Digital Marketing & Automation tailored for small and medium businesses. Starting at just <span className="text-charcoal font-bold">₹4,999/month</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#builder" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-charcoal font-bold uppercase text-sm px-8 min-h-[3rem] rounded-lg hover:brightness-110 active:scale-97 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Build Your AI Package
              <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
            </a>
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-charcoal border-2 border-border font-bold uppercase text-sm px-8 min-h-[3rem] rounded-lg hover:border-navy hover:text-navy active:scale-97 transition-all">
              <iconify-icon icon="solar:chat-round-dots-linear" class="text-lg"></iconify-icon>
              Chat with our AI Now
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center">
            <div className="inline-flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-navy">
                <iconify-icon icon="solar:shield-check-bold" class="text-2xl"></iconify-icon>
                <span className="font-bold tracking-wide uppercase text-sm">Zero Risk Guarantee</span>
              </div>
              <p className="text-slate text-sm max-w-md">
                No advance money. We only accept payment if you are completely satisfied with our first fulfillment. Pay only after we deliver what we promised.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto mt-16 px-4">
          <div className="aspect-video w-full rounded-2xl border border-border bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center shadow-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60"></div>
            <div className="w-16 h-16 rounded-full bg-gold/90 text-charcoal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.4)] relative z-10">
              <iconify-icon icon="solar:play-bold" class="text-2xl ml-1"></iconify-icon>
            </div>
            <span className="text-charcoal font-heading font-semibold tracking-tight relative z-10 text-lg md:text-xl">
              90-Second AI Video Sales Letter
            </span>
            <span className="text-slate text-sm mt-2 relative z-10">
              See how we transform businesses like yours
            </span>
          </div>
        </div>
      </header>

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
        </div>
      </section>

      {/* 5. LIVE DEMO SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">Don't believe us? <br /> Experience our AI right now.</h2>
          <p className="text-slate font-medium">Interact with our live demos below to see the quality of automation you can expect.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <iconify-icon icon="solar:phone-calling-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">AI Voice Call Demo</h3>
              <p className="text-slate text-sm mb-6">Enter your number. Our AI Sales Agent will call you instantly and pitch our services in Hindi or English.</p>
            </div>
            <div>
              {callStatus === "idle" ? (
                <form className="flex flex-col gap-3" onSubmit={handleTriggerCall}>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate text-sm">+91</span>
                    <input type="tel" placeholder="10-digit number" value={phoneInput} onChange={e => setPhoneInput(e.target.value)} className="w-full bg-primary border border-border rounded-lg pl-10 pr-3 py-3 text-charcoal focus:border-gold outline-none" required />
                  </div>
                  <button type="submit" className="w-full bg-gold text-charcoal font-bold uppercase text-xs min-h-[3rem] rounded-lg hover:brightness-110 active:scale-97 transition-all flex items-center justify-center gap-2">
                    Call Me in 30 Seconds <iconify-icon icon="solar:outgoing-call-linear" class="text-lg"></iconify-icon>
                  </button>
                </form>
              ) : callStatus === "calling" ? (
                <div className="py-4 text-center">Calling...</div>
              ) : (
                <div className="py-4 text-center text-success font-bold">Call Dispatched!</div>
              )}
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-success/10 rounded-bl-full -z-10"></div>
            <div>
              <div className="w-12 h-12 rounded-full bg-green-50 text-success flex items-center justify-center mb-4">
                <iconify-icon icon="solar:chat-line-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">AI Chatbot Demo</h3>
              <div className="bg-gray-50 border border-border rounded-xl p-3 mb-6 space-y-3 font-sans text-sm">
                <div className="flex justify-end">
                  <div className="bg-[#E7FFDB] text-charcoal px-3 py-2 rounded-l-lg rounded-tr-lg shadow-sm max-w-[85%] text-xs">Pricing kya hai aapki service ki?</div>
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
                  <div className="w-1 bg-gold h-3 rounded-full animate-float"></div>
                  <div className="w-1 bg-gold h-6 rounded-full animate-float"></div>
                  <div className="w-1 bg-gold h-8 rounded-full animate-float"></div>
                  <div className="w-1 bg-gold h-4 rounded-full animate-float"></div>
                  <div className="w-1 bg-gold h-7 rounded-full animate-float"></div>
                  <div className="w-1 bg-gold h-2 rounded-full animate-float"></div>
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
            {services.map((s, idx) => (
              <div key={idx} className="glass-card border border-border rounded-2xl p-6 relative group overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-white transition-colors">
                    <iconify-icon icon={s.icon} class="text-2xl"></iconify-icon>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-charcoal border border-gray-200">
                    ₹{s.price.toLocaleString('en-IN')}{s.isProject ? '' : '/mo'}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-charcoal relative z-10 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-slate text-sm font-medium relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:h-0 overflow-hidden">{s.desc}</p>
                
                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 z-10">
                  <ul className="space-y-2">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <iconify-icon icon="solar:check-circle-linear" class="text-success mt-0.5 shrink-0"></iconify-icon> {b}
                      </li>
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
                <tr className="bg-primary border-b border-border">
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

      {/* 7. INTERACTIVE PACKAGE BUILDER & ROI CALCULATOR */}
      <section id="pricing" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Builder */}
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm flex flex-col h-full" id="builder">
            <h2 className="font-heading font-bold text-2xl tracking-tight mb-6 flex items-center gap-2">
              <iconify-icon icon="solar:box-linear" class="text-gold text-3xl"></iconify-icon> Build Your AI Package
            </h2>
            <div className="space-y-4 flex-grow">
              {builderServicesList.map(s => (
                <label key={s.id} className="flex items-center justify-between p-3 border border-border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors custom-checkbox group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      className="builder-cb w-5 h-5 accent-gold border-border rounded outline-none"
                      checked={selectedBuilder.has(s.id)}
                      onChange={() => toggleBuilderItem(s.id)}
                    />
                    <span className="text-sm font-medium text-charcoal group-hover:text-gold transition-colors">{s.name}</span>
                  </div>
                  <span className="text-xs font-bold text-slate">₹{s.price.toLocaleString('en-IN')}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex justify-between items-end mb-4">
                <span className="text-slate font-medium">Estimated Monthly Investment</span>
                <div className="text-right">
                  <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wider font-bold">Total</span>
                  <span className="font-numbers font-bold text-3xl text-charcoal">₹{builderTotal.toLocaleString('en-IN')}</span><span className="text-slate">/mo</span>
                </div>
              </div>
              
              {builderTotal > 14999 && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 transition-all">
                  <div className="flex gap-3">
                    <iconify-icon icon="solar:lightbulb-bolt-linear" class="text-blue-600 text-2xl shrink-0"></iconify-icon>
                    <div>
                      <h4 className="font-bold text-blue-900 text-sm">💡 RECOMMENDED: Starter AI Pack</h4>
                      <p className="text-xs text-blue-800 mt-1">Get top 3 services for just <span className="font-bold">₹14,999/mo</span>. <span className="text-success font-bold">Save ₹{(builderTotal - 14999).toLocaleString('en-IN')}!</span></p>
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full bg-gold text-charcoal font-bold uppercase text-sm min-h-[3rem] rounded-lg hover:brightness-110 active:scale-97 transition-all flex items-center justify-center gap-2">
                Send This Proposal to My WhatsApp <iconify-icon icon="solar:plain-2-linear" class="text-lg"></iconify-icon>
              </button>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-charcoal text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="font-heading font-bold text-2xl tracking-tight mb-2">ROI Calculator</h2>
            <p className="text-gray-400 text-sm mb-8">See how much revenue you're leaving on the table.</p>
            
            <div className="space-y-6 flex-grow">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Industry</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-gold outline-none text-sm appearance-none cursor-pointer">
                  <option>Retail & E-commerce</option>
                  <option>Real Estate</option>
                  <option>Healthcare & Clinics</option>
                  <option>Education & Coaching</option>
                  <option>Professional Services</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Monthly Revenue</label>
                  <span className="font-numbers font-bold text-gold">₹{revenueSlider} Lakh{revenueSlider > 1 ? 's' : ''}</span>
                </div>
                <input 
                  type="range" 
                  min="1" max="50" step="1" 
                  value={revenueSlider} 
                  onChange={(e) => setRevenueSlider(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gold" 
                />
                <div className="flex justify-between text-2xs text-gray-500 mt-1 font-numbers">
                  <span>₹1L</span>
                  <span>₹50L+</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">Biggest Bottleneck</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
                    <input type="radio" name="bottleneck" defaultChecked className="accent-gold" />
                    <span className="text-sm font-medium">Not enough leads</span>
                  </label>
                  <label className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
                    <input type="radio" name="bottleneck" className="accent-gold" />
                    <span className="text-sm font-medium">Leads get lost</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 rounded-xl p-4 border border-gray-700 flex flex-col sm:flex-row justify-around gap-4 text-center">
              <div>
                <span className="block text-2xs text-gray-400 uppercase tracking-wider mb-1">Estimated Leads Lost</span>
                <span className="font-numbers font-bold text-xl text-red-400">{leadsLost}/mo</span>
              </div>
              <div className="hidden sm:block w-px bg-gray-700"></div>
              <div>
                <span className="block text-2xs text-gray-400 uppercase tracking-wider mb-1">Potential Recovery</span>
                <span className="font-numbers font-bold text-xl text-success">₹{recovery}L/mo</span>
              </div>
              <div className="hidden sm:block w-px bg-gray-700"></div>
              <div>
                <span className="block text-2xs text-gray-400 uppercase tracking-wider mb-1">Hours Saved</span>
                <span className="font-numbers font-bold text-xl text-blue-400">{hours} hrs</span>
              </div>
            </div>

            <button className="w-full bg-white text-charcoal font-bold uppercase text-sm min-h-[3rem] rounded-lg hover:bg-gray-100 active:scale-97 transition-all mt-6">
              Get Free Custom Growth Plan
            </button>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRY CAROUSEL */}
      <section id="industries" className="py-10 bg-white border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <h3 className="text-sm font-bold text-slate uppercase tracking-wider">Industries We Dominate</h3>
        </div>
        <div className="flex overflow-x-auto snap-x no-scrollbar pb-4 pl-4 md:pl-8 xl:pl-[calc((100vw-80rem)/2)] gap-4 w-full">
          {industries.map((item, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 w-32 md:w-40 flex flex-col items-center justify-center p-6 bg-primary border border-border rounded-2xl hover:border-gold hover:shadow-md transition-all cursor-pointer group">
              <iconify-icon icon={item.i} class="text-3xl text-slate group-hover:text-gold transition-colors mb-3"></iconify-icon>
              <span className="text-xs font-bold text-charcoal text-center">{item.n}</span>
            </div>
          ))}
          <div className="snap-start flex-shrink-0 w-4 md:w-8"></div>
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
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full"></div>
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <h3 className="font-heading font-bold text-xl text-charcoal">Discovery & Audit</h3>
                  <p className="text-slate text-sm mt-2">We analyze your business, identify bottlenecks, and map out the exact AI workflow tailored to your specific industry.</p>
                </div>
                <div className="w-12 h-12 bg-gold text-charcoal rounded-full flex items-center justify-center font-numbers font-bold text-lg z-10 border-4 border-white shadow-md relative">1</div>
                <div className="md:w-5/12 text-center md:text-left mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-navy rounded-full text-xs font-bold uppercase tracking-wide">Day 1</span>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-left mb-4 md:mb-0">
                  <h3 className="font-heading font-bold text-xl text-charcoal">Custom AI Training</h3>
                  <p className="text-slate text-sm mt-2">Our engineers build and train your AI agents on your pricing, FAQs, and brand tone. We ensure it speaks perfectly in Hindi/English.</p>
                </div>
                <div className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-numbers font-bold text-lg z-10 border-4 border-white shadow-md relative group-hover:bg-navy transition-colors">3</div>
                <div className="md:w-5/12 text-center md:text-right mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-charcoal rounded-full text-xs font-bold uppercase tracking-wide">Day 3</span>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <h3 className="font-heading font-bold text-xl text-charcoal">Integration & Testing</h3>
                  <p className="text-slate text-sm mt-2">We hook the AI into your WhatsApp Business API, CRM, and calendar. We run extensive test scenarios to ensure perfection.</p>
                </div>
                <div className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-numbers font-bold text-lg z-10 border-4 border-white shadow-md relative group-hover:bg-navy transition-colors">5</div>
                <div className="md:w-5/12 text-center md:text-left mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-charcoal rounded-full text-xs font-bold uppercase tracking-wide">Day 5</span>
                </div>
              </div>
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
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight">Real Founders. Real Growth.</h2>
        </div>
        <div className="flex overflow-x-auto snap-x no-scrollbar pb-8 pl-4 md:pl-8 xl:pl-[calc((100vw-80rem)/2)] gap-6 w-full">
          {testimonials.map((t, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 w-80 md:w-96 bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col">
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
              <div key={i} className={`border border-border rounded-xl bg-gray-50 overflow-hidden transition-all ${activeFaq === i ? 'shadow-md' : ''}`}>
                <button className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span className="font-bold text-sm text-charcoal">{faq.q}</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" class={`text-gold text-xl transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}></iconify-icon>
                </button>
                {activeFaq === i && (
                  <div className="bg-white border-t border-border px-6 py-4 text-sm text-slate">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="relative bg-gradient-to-r from-gold to-yellow-500 py-24 overflow-hidden">
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
          <p className="mt-8 text-sm text-charcoal/70 font-semibold">Or call us directly: <a href="tel:+919876543210" className="underline hover:text-charcoal">+91-9876543210</a></p>
        </div>
      </section>
    </>
  );
}
