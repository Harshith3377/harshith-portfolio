import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshith Mullapudi — Java Full Stack & AI Backend Engineer",
  description:
    "Portfolio of Harshith Mullapudi — 4+ years building scalable microservices with Java, Spring Boot, Kafka, AWS, and AI/ML-integrated backend systems.",
  keywords: [
    "Harshith Mullapudi",
    "Java Engineer",
    "Full Stack Engineer",
    "Spring Boot",
    "Microservices",
    "Kafka",
    "AWS",
    "AI Backend Engineer",
    "Software Engineer",
    "Backend Developer",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Harshith Mullapudi" }],
  creator: "Harshith Mullapudi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Harshith Mullapudi — Java Full Stack & AI Backend Engineer",
    description:
      "4+ years building scalable microservices, event-driven systems, and AI-integrated applications.",
    siteName: "Harshith Mullapudi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshith Mullapudi — Java Full Stack & AI Backend Engineer",
    description:
      "4+ years building scalable microservices, event-driven systems, and AI-integrated applications.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
