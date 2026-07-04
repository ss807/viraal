import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  themeColor: "#0A0F1C",
};

export const metadata: Metadata = {
  title: "Viraal | AI Automation Marketing Agency for Indian MSMEs",
  description: "Automate your lead generation, customer support, and sales 24/7 with custom WhatsApp bots and AI voice agents. Get 3x more customers starting at just ₹4,999/mo.",
  keywords: ["AI Marketing Agency", "WhatsApp Automation India", "AI Chatbot for Business", "Real Estate AI Bot", "Jewellery Store Marketing"],
  openGraph: {
    title: "Viraal | 24/7 AI Lead Generation Engine",
    description: "Experience AI Voice Calls and WhatsApp Automation live. Transform your business today.",
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
      className={`${montserrat.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
