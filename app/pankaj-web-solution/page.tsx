import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pankaj Web Solution",
  description:
    "Pankaj Web Solution overview with dedicated pages for services, process, pricing, and projects.",
};

export default function PankajWebSolutionPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" aria-label="Pankaj Web Solution page">
      <Badge className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-4">
        Pankaj Web Solution
      </Badge>
      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Visit Our Website</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        This is the main business overview. Open each page for complete details.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          { title: "Services", href: "/pankaj-web-solution/services", text: "Business website, e-commerce, and redesign services." },
          { title: "Process", href: "/pankaj-web-solution/process", text: "Step-by-step process of how your website is built." },
          { title: "Pricing", href: "/pankaj-web-solution/pricing", text: "Detailed package pricing and money split." },
          { title: "Projects", href: "/pankaj-web-solution/projects", text: "Previous delivered projects and results." },
        ].map((item) => (
          <article key={item.href} className="rounded-2xl border border-border bg-card p-5">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            <Button asChild className="mt-4 rounded-lg">
              <Link href={item.href}>Open {item.title}</Link>
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-card p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold">Website Showcase (Video)</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A short video-style showcase to explain how the business website looks and works for clients.
        </p>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <video
              className="aspect-video w-full"
              controls
              preload="metadata"
              poster="/business/hero-website.svg"
            >
              <source src="/business/showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">What clients see in this video</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Homepage structure and value proposition clarity</li>
              <li>Service presentation and trust-building UI sections</li>
              <li>Pricing communication and conversion-driven CTAs</li>
              <li>Mobile responsiveness and fast section navigation</li>
            </ul>
            <Button asChild className="mt-5 rounded-lg">
              <Link href="/pankaj-web-solution/projects">See Live Project Examples</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
