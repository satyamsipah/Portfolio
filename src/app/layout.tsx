import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://satyam-portfolio-alpha.vercel.app"),
  title: {
    default: "Satyam Maddheshiya — Software Engineer",
    template: "%s | Satyam Maddheshiya"
  },
  description:
    "Software engineer focused on full-stack systems and developer tooling. B.Tech at HBTU Kanpur. Building Interview Prep Platform with MERN, Redis, Docker.",
  keywords: [
    "Satyam Maddheshiya",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "HBTU Kanpur",
    "SDE Intern"
  ],
  authors: [{ name: "Satyam Maddheshiya" }],
  creator: "Satyam Maddheshiya",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://satyam-portfolio-alpha.vercel.app",
    siteName: "Satyam Maddheshiya",
    title: "Satyam Maddheshiya — Software Engineer",
    description:
      "Full-stack engineer building production systems. Open to summer 2026 SDE internships."
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Maddheshiya — Software Engineer",
    description: "Full-stack engineer. Open to summer 2026 SDE internships."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
