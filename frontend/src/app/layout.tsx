import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LiveProofTicker } from "@/components/layout/LiveProofTicker";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8f9fa",
};

export const metadata: Metadata = {
  title: "Agnostic AI | Viraal - AI Automation Engine for Indian MSMEs",
  description: "Automate your lead generation, customer support, and sales 24/7 with custom WhatsApp bots and AI voice agents. Proven methodologies with 99.8% Uptime SLA.",
  keywords: ["AI Marketing Agency", "WhatsApp Automation India", "AI Voice Caller", "Real Estate AI Bot", "Agnostic AI", "Viraal"],
  openGraph: {
    title: "Agnostic AI | Verifiable Excellence. Absolute Trust.",
    description: "Experience AI Voice Calls and WhatsApp Automation live. Over 500+ businesses scaled this year.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased light`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" defer></script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary font-sans">
        <LiveProofTicker />
        <TopAppBar />
        <main className="flex-grow w-full relative">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
