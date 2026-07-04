# Google Stitch Design Specifications — Master Document

This document consolidates all section ideas, layout structures, copywriting details, and interactive components from the 6 Google Stitch design templates (`stitch_ai_growth_engine`) into a single reference for the Next.js frontend rebuild.

---

## 1. Design System & Tokens (Neo-Premium Tech Light)
- **Palette**:
  - `background` / `surface`: `#f8f9fa` (Pristine Light Gray)
  - `surface-container-lowest`: `#ffffff` (Pure White cards)
  - `primary`: `#735c00` (Metallic Gold/Amber, high authority)
  - `primary-container`: `#d4af37`
  - `secondary`: `#006a6a` (Electric/Deep Teal, trust building)
  - `secondary-container`: `#90efef`
  - `on-background`: `#191c1d` (Deep Charcoal for text)
  - `on-surface-variant`: `#4d4635` (Muted supporting text)
- **Typography**:
  - Display & Headlines: **Montserrat** (700 Bold / 600 SemiBold)
  - Body & Labels: **Inter** (400 Regular / 600 SemiBold)
- **Effects**:
  - **Light Glassmorphism**: `.glass-panel` and `.glass-card` using `rgba(255, 255, 255, 0.8)` with `backdrop-blur-xl` and 1px white/gray borders.
  - **Ambient Glowing Backgrounds**: Subtle blurred colored circles (`bg-secondary-container/20` and `bg-primary-container/20` with `blur-3xl`).

---

## 2. Universal Layout Components

### A. Live Proof Ticker
- **Position**: Top fixed bar (`h-8`, `bg-primary-fixed`, `text-on-primary-fixed`).
- **Copy**: *"Over 500+ Businesses Scaled This Year | 99.8% Uptime SLA Guaranteed | Live AI Agents Active 24/7"*
- **Purpose**: Immediate institutional trust and social proof.

### B. Pristine TopAppBar
- **Position**: Sticky header (`top-8`, `bg-background/80 backdrop-blur-xl`, border-b).
- **Branding**: *"Agnostic AI"* in Montserrat ExtraBold (`text-primary`).
- **Navigation**: Solutions, Industries, Pricing, Trust Center, AI Education Hub.
- **CTAs**: *"Login"* (text link) and *"Free AI Audit"* (`bg-primary-container text-on-primary-container`).

### C. Floating WhatsApp Widget
- **Position**: Bottom right (`bottom-8 right-8`, `w-16 h-16 rounded-full`, `bg-secondary-container text-on-secondary-container`).
- **Animation**: Bounce/pulse with chat icon.

### D. Footer
- **Layout**: 4-column grid with Agnostic AI branding, copyright, and legal links (Privacy Policy, Terms of Service, Cookie Policy, SLA, Contact Support).

---

## 3. Page-by-Page Specifications

### Page 1: Homepage (`/`)
*Combines `agnostic_ai_home_pristine_trust` and `viraal_home_light_theme`.*

#### Section 1: Hero Section
- **Headline**: *"AI-Powered Growth. Real Results."* (Montserrat ExtraBold, 48-64px).
- **Subheadline**: *"Complete AI Automation Solutions for MSMEs. Replace manual overhead with 24/7 autonomous intelligence."*
- **CTAs**: *"Build Your AI Package"* and *"Chat with AI Now"*.

#### Section 2: Live Interactive AI Demos (The Authority Experience)
- **Widget 1 (Voice Caller)**: Form where users enter their phone number to receive a live AI sales call in 30 seconds (Hindi/English).
- **Widget 2 (WhatsApp Simulator)**: Interactive chat simulation showing instant qualification responses.
- **Widget 3 (Audio Insights Center)**: Waveform audio player with real recordings of AI Voice Agents (Hindi Sales Call, English Pitch, Hinglish Follow-up).

#### Section 3: Core Automation Infrastructure (The 8 Pillars Grid)
- Glassmorphic cards with icon, title, and bullet deliverables:
  1. **Lead Generation Automation**: AI Lead Scraping, LinkedIn Outreach, Appointment Booking.
  2. **AI Chatbots & Customer Support**: 24/7 WhatsApp & Website Assistants, FAQ Bots.
  3. **Social Media Automation**: Reels & Shorts scheduling, AI Influencer creation.
  4. **Sales Automation**: Follow-up sequences, Lead Scoring, Proposal Generation.
  5. **AI Content Production**: Blog writing, SEO articles, Ad copy.
  6. **AI Video & Creative Services**: AI Spokesperson videos, Product promos.
  7. **Business Process Automation**: HR onboarding, Invoice generation, Dashboards.
  8. **E-Commerce Automation**: Cart recovery, Amazon management, Review management.

---

### Page 2: Transparent Pricing (`/pricing`)
*From `viraal_pricing_light_theme`.*

#### Section 1: Header & Value Prop
- **Headline**: *"Transparent Pricing, Measurable ROI"*
- **Copy**: No hidden fees. Every tier is engineered to pay for itself within 30 days.

#### Section 2: 4-Tier Pricing Grid
1. **Starter Pack (₹14,999/mo)**: For small shops and solo founders. Includes Lead Gen + WhatsApp Chatbot.
2. **Growth Pack (₹24,999/mo)** — *Most Popular*: Complete automation suite for scaling MSMEs. Includes Lead Gen + Support Bots + Sales Automation + Social Media.
3. **Scale Pack (₹49,999/mo)**: For established enterprises. Includes full custom AI Voice Agents, CRM integration, and dedicated account manager.
4. **Enterprise (Custom)**: White-label solutions, custom LLM fine-tuning, and on-premise deployment.

#### Section 3: Interactive ROI Calculator Hook
- Slider allowing visitors to estimate monthly revenue recovery and hours saved.

---

### Page 3: Trust Center (`/trust`)
*From `viraal_trust_center_light_theme`.*

#### Section 1: Verifiable Excellence Header
- **Headline**: *"Verifiable Excellence. Absolute Trust."*
- **Copy**: We engineer growth through transparent, data-driven automation.

#### Section 2: Proven Methodologies (PASO Case Studies)
- **Case Study 1 (Retail Logistics Optimization)**:
  - Problem: Manual order processing led to 15% fulfillment errors.
  - Solve: Agnostic Order Routing AI connecting Shopify to regional 3PLs.
  - Outcome: **98% Error Reduction**.
- **Case Study 2 (Fintech Lead Verification)**:
  - Problem: High volume of unqualified loan applications wasting underwriter time.
  - Solve: Pre-screening WhatsApp AI bot verifying documents and intent.
  - Outcome: **400% Processing Speed Increase**.

#### Section 3: Partner Perspectives (Vernacular Video Testimonials)
- Horizontal snap-scroll carousel of client video cards with quotes from Sarah Reynolds (Operations Director), James Patel (Founder), and Maria Lin (CEO).

#### Section 4: Certified Compliance Grid
- 5-column badge grid: **ISO 27001**, **Meta Business Partner**, **Google Cloud Certified**, **GeM Registered Seller**, **Udyam MSME Verified**.

---

### Page 4: Free AI Audit (`/audit`)
*From `viraal_free_ai_audit_light_theme`.*

#### Section 1: Zero Commitment Form Layout
- **Badge**: *"Zero Commitment"* (uppercase, tracking-wider).
- **Headline**: *"Get Your Free AI Growth Audit"*
- **Copy**: Discover exactly where automation can cut costs and accelerate revenue in your business.
- **Form Fields**: Full Name, WhatsApp Number, Business Name, Industry (Retail, Healthcare, Finance, Manufacturing, Real Estate, Restaurant), Biggest Bottleneck.

---

### Page 5: Industry Landing Page (`/industries/[slug]`)
*From `viraal_real_estate_ai_light_theme`.*

#### Section 1: Industry Pain Point Hook (Real Estate Example)
- **Headline**: *"Stop Letting Hot Leads Turn Cold."*
- **Subheadline**: *"Real estate teams using Agnostic AI close 3x more site visits by automating lead qualification on WhatsApp in under 30 seconds."*

#### Section 2: The Hidden Cost of Missed Calls (The Weekly Leak)
- Breakdown of how 170 out of 200 ad inquiries go cold due to manual callback delays, wasting thousands in ad spend.

#### Section 3: 3-Step Autonomous Pipeline
1. **Instant Engagement**: AI responds within 30 seconds of form submission.
2. **Smart Qualification**: Bot asks budget, preferred location, and buying timeline.
3. **Automated Site Visits**: Directly books qualified buyers into calendar slots.
