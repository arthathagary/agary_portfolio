import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE_DATA } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#17191D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE_DATA.domain),
  title: {
    default: `${PROFILE_DATA.fullName} — ${PROFILE_DATA.title} | Full-Stack SaaS & AI Platforms`,
    template: `%s | ${PROFILE_DATA.fullName}`,
  },
  description:
    "Software Engineer with 2+ years of experience across the MEAN and MERN stacks building no-code app builders, AI-powered website generators (Gemini, OpenAI), payment integrations (Stripe, Ideabiz), and scalable web platforms.",
  keywords: [
    "Arthath Agary",
    "Software Engineer",
    "Full-Stack Software Engineer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Angular",
    "React.js",
    "Next.js",
    "Node.js",
    "Sails.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "AWS",
    "SaaS Engineer",
    "AI Integrations",
  ],
  authors: [
    {
      name: PROFILE_DATA.fullName,
      url: PROFILE_DATA.domain,
    },
  ],
  creator: PROFILE_DATA.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PROFILE_DATA.domain,
    siteName: `${PROFILE_DATA.fullName} — Software Engineer Portfolio`,
    title: `${PROFILE_DATA.fullName} — Full-Stack Software Engineer`,
    description:
      "Software Engineer specializing in MEAN/MERN SaaS platforms, no-code builders, AI integrations (Gemini, OpenAI), and resilient backend architectures.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE_DATA.fullName} — Full-Stack Software Engineer`,
    description:
      "Software Engineer specializing in MEAN/MERN SaaS platforms, no-code builders, AI integrations (Gemini, OpenAI), and resilient backend architectures.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-workspace-accent/20 selection:text-workspace-accent">
        {children}
      </body>
    </html>
  );
}
