import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://portfolio-pankaj.vercel.app"),
  title: {
    default: "Pankaj Sharma | Full Stack Web Developer",
    template: "%s | Pankaj Sharma",
  },
  description:
    "Portfolio of Pankaj Sharma, Full Stack Developer from NIT Jalandhar showcasing projects, skills, and experience.",
  keywords: [
    "Pankaj Sharma",
    "Full Stack Developer",
    "Web Developer",
    "NIT Jalandhar",
    "Next.js Portfolio",
    "React Developer",
  ],
  authors: [{ name: "Pankaj Sharma" }],
  creator: "Pankaj Sharma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pankaj Sharma | Full Stack Web Developer",
    description:
      "Explore projects, skills, timeline, and development experience of Pankaj Sharma.",
    url: "/",
    siteName: "Pankaj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Sharma | Full Stack Web Developer",
    description:
      "Portfolio featuring full-stack projects, skills, and professional experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  const hostname = "portfolio-pankaj.vercel.app";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>

      <footer className="bg-card/60 border-t border-border/20 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg glass-card flex items-center justify-center">
                <span className="font-display font-bold text-xs text-foreground">
                  PS
                </span>
              </div>
              <span className="font-display text-sm font-medium text-foreground">
                Pankaj Sharma
              </span>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              © {currentYear}.{" "}
              <span className="text-foreground/60">Built with love using</span>{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-smooth underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="font-mono">NIT Jalandhar</span>
              <span className="text-border">·</span>
              <span className="font-mono">Full Stack Dev</span>
            </div>
          </div>
        </div>
      </footer>
    </html>
  );
}
