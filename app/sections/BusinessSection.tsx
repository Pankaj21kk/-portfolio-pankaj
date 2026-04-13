"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { Timeline } from "@/components/ui/timeline";

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  design: number;
  frontend: number;
  backend: number;
  seo: number;
  support: number;
};

const STORAGE_KEY = "portfolio-business-pricing-v1";

const DEFAULT_PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For local businesses",
    price: 9999,
    design: 2200,
    frontend: 3200,
    backend: 1800,
    seo: 1200,
    support: 1599,
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Best for growing brands",
    price: 19999,
    design: 4200,
    frontend: 6200,
    backend: 3600,
    seo: 2400,
    support: 3599,
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "For high-scale businesses",
    price: 34999,
    design: 7400,
    frontend: 10800,
    backend: 6200,
    seo: 4200,
    support: 6399,
  },
];

const PREVIOUS_PROJECTS = [
  {
    title: "RK Fitness Studio",
    category: "Business Website",
    summary: "Modern website with class details and lead form.",
    result: "More monthly WhatsApp enquiries.",
    image: "/business/service-business.svg",
  },
  {
    title: "Sharma Electronics",
    category: "E-commerce",
    summary: "Product catalog and simple checkout flow.",
    result: "Started online orders quickly.",
    image: "/business/service-shop.svg",
  },
  {
    title: "Legal Advisor Profile",
    category: "Professional Website",
    summary: "Trust-first profile website with booking CTA.",
    result: "Better quality direct leads.",
    image: "/business/hero-website.svg",
  },
];

const WEBSITE_FLOW = [
  {
    emoji: "🧑‍💼",
    sign: "DISCOVERY",
    title: "Client Discovery",
    detail: "We start with your business goals, customer type, and what action visitors should take.",
  },
  {
    emoji: "🧠",
    sign: "STRATEGY",
    title: "Content and Page Strategy",
    detail: "We decide page order, section messaging, and call-to-action placement for better conversions.",
  },
  {
    emoji: "🎨",
    sign: "DESIGN",
    title: "Visual Design",
    detail: "Your website UI is designed with clear hierarchy, brand tone, and mobile-first readability.",
  },
  {
    emoji: "💻",
    sign: "BUILD",
    title: "Development",
    detail: "Responsive code is built, animations are added carefully, and all sections are tested device-wise.",
  },
  {
    emoji: "🚀",
    sign: "LAUNCH",
    title: "Launch and Support",
    detail: "Domain connection, final QA, analytics setup, and launch support are included.",
  },
];

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function MoneyBar({ label, value, total }: { label: string; value: number; total: number }) {
  const width = Math.max(8, Math.round((value / Math.max(total, 1)) * 100));
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span>{formatINR(value)}</span>
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div className="h-2 rounded-full bg-primary" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BusinessSection() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [plans, setPlans] = useState<Plan[]>(() => {
    if (typeof window === "undefined") return DEFAULT_PLANS;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT_PLANS;
      const parsed = JSON.parse(raw) as Plan[];
      return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_PLANS;
    } catch {
      return DEFAULT_PLANS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
  }, [plans]);

  const timelineData = [
    {
      title: "Plan",
      content: <p className="text-sm text-muted-foreground">We understand your business and goals.</p>,
    },
    {
      title: "Design",
      content: <p className="text-sm text-muted-foreground">We design simple and premium pages.</p>,
    },
    {
      title: "Build",
      content: <p className="text-sm text-muted-foreground">We develop fast and responsive website.</p>,
    },
    {
      title: "Test",
      content: <p className="text-sm text-muted-foreground">We test speed, SEO, and contact flow.</p>,
    },
    {
      title: "Launch",
      content: <p className="text-sm text-muted-foreground">We launch and support your business site.</p>,
    },
  ];

  const tabs = [
    {
      title: "Easy Overview",
      value: "overview",
      content: (
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Business Website",
              text: "A clean website to explain your services clearly.",
              image: "/business/service-business.svg",
              icon: "M12 2a10 10 0 1 0 0 20M2 12h20",
            },
            {
              title: "Online Shop",
              text: "Fast store setup with product and payment flow.",
              image: "/business/service-shop.svg",
              icon: "M3 4h2l2 11h11l2-8H7.2",
            },
            {
              title: "Website Redesign",
              text: "Upgrade old website into modern look and speed.",
              image: "/business/hero-website.svg",
              icon: "M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-3 inline-flex rounded-lg border border-primary/40 bg-primary/10 p-2 text-primary">
                <Icon path={item.icon} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              <div className="mt-3 overflow-hidden rounded-xl border border-border">
                <Image src={item.image} alt={`${item.title} preview`} width={800} height={520} className="h-auto w-full" />
              </div>
            </article>
          ))}
        </div>
      ),
    },
    {
      title: "How I Build",
      value: "how-i-build",
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "1) Business Call", text: "Understand business, customer, and goals." },
            { title: "2) Page Planning", text: "Plan sections in easy and clear order." },
            { title: "3) UI Design", text: "Design clean layout with your brand." },
            { title: "4) Development", text: "Build responsive site for phone and desktop." },
            { title: "5) SEO and Speed", text: "Optimize speed and search visibility." },
            { title: "6) Launch", text: "Test, connect domain, and launch website." },
          ].map((step) => (
            <article key={step.title} className="rounded-2xl border border-border bg-card p-4">
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
            </article>
          ))}

          <div className="md:col-span-2 mt-1 overflow-hidden rounded-xl border border-border">
            <Image src="/business/timeline.svg" alt="Business website process timeline" width={620} height={220} className="h-auto w-full" />
          </div>
        </div>
      ),
    },
    {
      title: "Detailed Pricing",
      value: "pricing",
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-sm text-muted-foreground">
              Each plan includes design, development, SEO, and support. This helps clients clearly see where the money is used.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.id} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                <p className="mt-2 text-2xl font-black text-foreground">{formatINR(plan.price)}</p>
                <div className="mt-4 space-y-3">
                  <MoneyBar label="Design" value={plan.design} total={plan.price} />
                  <MoneyBar label="Frontend" value={plan.frontend} total={plan.price} />
                  <MoneyBar label="Backend" value={plan.backend} total={plan.price} />
                  <MoneyBar label="SEO" value={plan.seo} total={plan.price} />
                  <MoneyBar label="Support" value={plan.support} total={plan.price} />
                </div>

                <div className="mt-4 rounded-xl border border-border bg-background p-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Money Use Summary</p>
                  <p className="mt-2 text-sm text-muted-foreground">UI & UX: {formatINR(plan.design)}</p>
                  <p className="text-sm text-muted-foreground">Code & Features: {formatINR(plan.frontend + plan.backend)}</p>
                  <p className="text-sm text-muted-foreground">Growth & SEO: {formatINR(plan.seo)}</p>
                  <p className="text-sm text-muted-foreground">Post-launch Support: {formatINR(plan.support)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "How It Works Visual",
      value: "flow-visual",
      content: (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WEBSITE_FLOW.map((step) => (
              <article key={step.title} className="rounded-2xl border border-border bg-card p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-lg">
                    {step.emoji}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-primary">{step.sign}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image src="/business/hero-website.svg" alt="Website creation visual" width={800} height={520} className="h-auto w-full" />
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <Image src="/business/timeline.svg" alt="Website workflow timeline" width={620} height={220} className="h-auto w-full" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Money Use Map",
      value: "money-map",
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              avatar: "🎯",
              area: "Design & UX",
              detail: "Used for wireframe, structure, typography, and visual hierarchy so client message is clear.",
            },
            {
              avatar: "🧩",
              area: "Frontend & Backend",
              detail: "Used for coding, responsive behavior, forms, dashboards, and all core features.",
            },
            {
              avatar: "📈",
              area: "SEO & Performance",
              detail: "Used for page optimization, metadata, speed improvements, and better search visibility.",
            },
            {
              avatar: "🤝",
              area: "Support",
              detail: "Used for testing, bug fixes, launch help, and post-launch guidance.",
            },
          ].map((part) => (
            <article key={part.area} className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-lg">
                  {part.avatar}
                </span>
                <h3 className="text-base font-semibold text-foreground">{part.area}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{part.detail}</p>
            </article>
          ))}
        </div>
      ),
    },
  ];

  const totals = useMemo(() => {
    const totalPrice = plans.reduce((sum, row) => sum + row.price, 0);
    const totalCost = plans.reduce(
      (sum, row) => sum + row.design + row.frontend + row.backend + row.seo + row.support,
      0
    );
    return { totalPrice, totalCost, margin: totalPrice - totalCost };
  }, [plans]);

  const updatePlan = (id: string, key: keyof Plan, value: string | number) => {
    setPlans((prev) => prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)));
  };

  return (
    <section id="business" className="px-6 py-24 md:py-28 bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <Badge className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-3">Pankaj Web Solution</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-2">
            Client-Friendly Business Website Process
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-mono">
            Easy explanation with tabs, timeline, detailed pricing, emoji avatars, logos, and images.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <Image src="/business/hero-website.svg" alt="Business website preview" width={800} height={520} className="h-auto w-full" />
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-border bg-card p-5 sm:p-8">
          <div className="mb-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">👤 Client Side</p>
              <p className="mt-1 text-sm text-muted-foreground">Goals, business details, and approvals.</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">🛠️ Build Side</p>
              <p className="mt-1 text-sm text-muted-foreground">Design, code, SEO, and testing workflow.</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">💰 Money Side</p>
              <p className="mt-1 text-sm text-muted-foreground">Transparent split of every plan budget.</p>
            </div>
          </div>

          <Tabs
            tabs={tabs}
            containerClassName="gap-2"
            tabClassName="border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
            activeTabClassName="bg-primary text-primary-foreground"
            contentClassName="mt-6"
          />
        </div>

        <div className="rounded-3xl border border-border bg-card p-2 mb-8">
          <Timeline
            data={timelineData}
            className="bg-card"
            headingClassName="text-foreground"
            descriptionClassName="text-muted-foreground"
            titleClassName="text-primary"
            lineClassName="via-border"
            activeLineClassName="from-primary/60 via-primary"
            dotWrapperClassName="bg-card"
            dotClassName="bg-primary border-primary-foreground"
          />
        </div>

        <div className="mb-8 rounded-3xl border border-border bg-card p-6">
          <div className="mb-5">
            <h3 className="text-2xl font-bold text-foreground">Previous Projects</h3>
            <p className="mt-1 text-sm text-muted-foreground">Projects already delivered for business clients.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {PREVIOUS_PROJECTS.map((project) => (
              <article key={project.title} className="rounded-2xl border border-border bg-background p-4">
                <div className="overflow-hidden rounded-xl border border-border">
                  <Image src={project.image} alt={`${project.title} preview`} width={800} height={520} className="h-auto w-full" />
                </div>
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">{project.category}</p>
                <h4 className="mt-1 text-lg font-semibold text-foreground">{project.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{project.summary}</p>
                <p className="mt-2 text-sm font-medium text-foreground">Result: {project.result}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-2xl font-bold text-foreground">Simple Pricing Dashboard</h3>
            <Button
              type="button"
              variant="outline"
              className="border-border bg-background text-foreground hover:bg-accent"
              onClick={() => setIsDashboardOpen(true)}
            >
              Open Business Dashboard
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-3 mb-4">
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-xs text-muted-foreground">Total Selling Price</p>
              <p className="text-lg font-bold text-foreground">{formatINR(totals.totalPrice)}</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-xs text-muted-foreground">Total Cost</p>
              <p className="text-lg font-bold text-foreground">{formatINR(totals.totalCost)}</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-xs text-muted-foreground">Estimated Margin</p>
              <p className="text-lg font-bold text-foreground">{formatINR(totals.margin)}</p>
            </div>
          </div>
        </div>

        {isDashboardOpen && (
          <div className="fixed inset-0 z-120 bg-black/70 p-4 flex items-center justify-center">
            <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Business Pricing Dashboard</h3>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-border bg-background text-foreground hover:bg-accent"
                    onClick={() => setPlans(DEFAULT_PLANS)}
                  >
                    Reset Prices
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-border bg-background text-foreground hover:bg-accent"
                    onClick={() => setIsDashboardOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {plans.map((plan) => (
                  <div key={plan.id} className="rounded-xl border border-border bg-background p-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      <input
                        value={plan.name}
                        onChange={(e) => updatePlan(plan.id, "name", e.target.value)}
                        className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground"
                      />
                      <input
                        value={plan.subtitle}
                        onChange={(e) => updatePlan(plan.id, "subtitle", e.target.value)}
                        className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground"
                      />
                      <input
                        type="number"
                        value={plan.price}
                        onChange={(e) => updatePlan(plan.id, "price", Number(e.target.value) || 0)}
                        className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground"
                      />
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      {([
                        ["design", "Design"],
                        ["frontend", "Frontend"],
                        ["backend", "Backend"],
                        ["seo", "SEO"],
                        ["support", "Support"],
                      ] as const).map(([key, label]) => (
                        <div key={key}>
                          <p className="mb-1 text-xs text-muted-foreground">{label}</p>
                          <input
                            type="number"
                            value={plan[key]}
                            onChange={(e) => updatePlan(plan.id, key, Number(e.target.value) || 0)}
                            className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
