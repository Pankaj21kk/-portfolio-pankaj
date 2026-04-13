"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

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
      <div className="mb-1 flex items-center justify-between text-xs text-[#E5E7EB]">
        <span>{label}</span>
        <span>{formatINR(value)}</span>
      </div>
      <div className="h-2 rounded-full bg-[#111827]">
        <div className="h-2 rounded-full bg-[#3B82F6]" style={{ width: `${width}%` }} />
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
      content: <p className="text-sm text-[#E5E7EB]">We understand your business and goals.</p>,
    },
    {
      title: "Design",
      content: <p className="text-sm text-[#E5E7EB]">We design simple and premium pages.</p>,
    },
    {
      title: "Build",
      content: <p className="text-sm text-[#E5E7EB]">We develop fast and responsive website.</p>,
    },
    {
      title: "Test",
      content: <p className="text-sm text-[#E5E7EB]">We test speed, SEO, and contact flow.</p>,
    },
    {
      title: "Launch",
      content: <p className="text-sm text-[#E5E7EB]">We launch and support your business site.</p>,
    },
  ];

  const tabs = [
    {
      title: "Services",
      value: "services",
      content: (
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Business Website",
              text: "Simple and modern website for your company.",
              image: "/business/service-business.svg",
              icon: "M12 2a10 10 0 1 0 0 20M2 12h20",
            },
            {
              title: "Online Shop",
              text: "Fast store with product and payment setup.",
              image: "/business/service-shop.svg",
              icon: "M3 4h2l2 11h11l2-8H7.2",
            },
            {
              title: "Website Redesign",
              text: "Old website to clean, new, and fast website.",
              image: "/business/hero-website.svg",
              icon: "M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#3B82F6]/40 bg-[#111827] p-4">
              <div className="mb-3 inline-flex rounded-lg border border-[#3B82F6]/50 bg-[#3B82F6]/15 p-2 text-[#E5E7EB]">
                <Icon path={item.icon} />
              </div>
              <h3 className="text-lg font-semibold text-[#E5E7EB]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#E5E7EB]/90">{item.text}</p>
              <div className="mt-3 overflow-hidden rounded-xl border border-[#3B82F6]/30">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  width={800}
                  height={520}
                  className="h-auto w-full"
                />
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
            {
              title: "1) Business Call",
              text: "First we discuss your work, target customers, and your goals.",
            },
            {
              title: "2) Page Planning",
              text: "I plan each page so visitors quickly understand your service.",
            },
            {
              title: "3) UI Design",
              text: "I create a clean and modern design with your brand colors.",
            },
            {
              title: "4) Development",
              text: "I build responsive pages that run smoothly on mobile and desktop.",
            },
            {
              title: "5) SEO and Speed",
              text: "I optimize website speed and SEO so your website ranks better.",
            },
            {
              title: "6) Launch",
              text: "I connect domain, test everything, and launch your business website.",
            },
          ].map((step) => (
            <article key={step.title} className="rounded-2xl border border-[#3B82F6]/35 bg-[#0B0F14] p-4">
              <h3 className="text-base font-semibold text-[#E5E7EB]">{step.title}</h3>
              <p className="mt-1 text-sm text-[#E5E7EB]/90">{step.text}</p>
            </article>
          ))}

          <div className="md:col-span-2 mt-1 overflow-hidden rounded-xl border border-[#3B82F6]/30">
            <Image
              src="/business/timeline.svg"
              alt="Business website process timeline"
              width={620}
              height={220}
              className="h-auto w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Money Breakdown",
      value: "money",
      content: (
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.id} className="rounded-2xl border border-[#3B82F6]/40 bg-[#111827] p-5">
              <h3 className="text-lg font-bold text-[#E5E7EB]">{plan.name}</h3>
              <p className="text-sm text-[#E5E7EB]/90">{plan.subtitle}</p>
              <p className="mt-2 text-2xl font-black text-[#E5E7EB]">{formatINR(plan.price)}</p>
              <div className="mt-4 space-y-3">
                <MoneyBar label="Design" value={plan.design} total={plan.price} />
                <MoneyBar label="Frontend" value={plan.frontend} total={plan.price} />
                <MoneyBar label="Backend" value={plan.backend} total={plan.price} />
                <MoneyBar label="SEO" value={plan.seo} total={plan.price} />
                <MoneyBar label="Support" value={plan.support} total={plan.price} />
              </div>
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
    <section id="business" className="px-6 py-24 md:py-28 bg-[#0B0F14] scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <Badge className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-3 border-[#3B82F6]/50 bg-[#3B82F6]/20 text-[#E5E7EB]">
            Pankaj Web Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#E5E7EB] mb-2">
            How I Build Business Websites
          </h2>
          <p className="text-sm md:text-base text-[#E5E7EB]/90 font-mono">
            Detailed showcase with tabs, timeline, images, and pricing dashboard.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#3B82F6]/40">
            <Image
              src="/business/hero-website.svg"
              alt="Business website preview"
              width={800}
              height={520}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-[#3B82F6]/40 bg-[#111827] p-5 sm:p-8 mb-8">
          <Tabs
            tabs={tabs}
            containerClassName="gap-2"
            tabClassName="border border-[#3B82F6]/40 bg-[#0B0F14] text-[#E5E7EB] hover:bg-[#3B82F6]/20"
            activeTabClassName="bg-[#3B82F6] text-[#E5E7EB]"
            contentClassName="mt-6"
          />
        </div>

        <div className="rounded-3xl border border-[#3B82F6]/40 bg-[#111827] p-2 mb-8">
          <Timeline
            data={timelineData}
            className="bg-[#111827]"
            headingClassName="text-[#E5E7EB]"
            descriptionClassName="text-[#E5E7EB]/90"
            titleClassName="text-[#3B82F6]"
            lineClassName="via-[#3B82F6]/40"
            activeLineClassName="from-[#2563EB] via-[#3B82F6]"
            dotWrapperClassName="bg-[#111827]"
            dotClassName="bg-[#3B82F6] border-[#E5E7EB]"
          />
        </div>

        <div className="mb-8 rounded-3xl border border-[#3B82F6]/40 bg-[#111827] p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-2xl font-bold text-[#E5E7EB]">Simple Pricing Dashboard</h3>
            <Button
              type="button"
              variant="outline"
              className="border-[#3B82F6]/60 bg-[#0B0F14] text-[#E5E7EB] hover:bg-[#3B82F6]/20"
              onClick={() => setIsDashboardOpen(true)}
            >
              Open Business Dashboard
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-3 mb-4">
            <div className="rounded-xl border border-[#3B82F6]/30 bg-[#0B0F14] p-3">
              <p className="text-xs text-[#E5E7EB]/80">Total Selling Price</p>
              <p className="text-lg font-bold text-[#E5E7EB]">{formatINR(totals.totalPrice)}</p>
            </div>
            <div className="rounded-xl border border-[#3B82F6]/30 bg-[#0B0F14] p-3">
              <p className="text-xs text-[#E5E7EB]/80">Total Cost</p>
              <p className="text-lg font-bold text-[#E5E7EB]">{formatINR(totals.totalCost)}</p>
            </div>
            <div className="rounded-xl border border-[#3B82F6]/30 bg-[#0B0F14] p-3">
              <p className="text-xs text-[#E5E7EB]/80">Estimated Margin</p>
              <p className="text-lg font-bold text-[#E5E7EB]">{formatINR(totals.margin)}</p>
            </div>
          </div>
        </div>

        {isDashboardOpen && (
          <div className="fixed inset-0 z-120 bg-black/70 p-4 flex items-center justify-center">
            <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#3B82F6]/40 bg-[#111827] p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#E5E7EB]">Business Pricing Dashboard</h3>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#3B82F6]/60 bg-[#0B0F14] text-[#E5E7EB] hover:bg-[#3B82F6]/20"
                    onClick={() => setPlans(DEFAULT_PLANS)}
                  >
                    Reset Prices
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#3B82F6]/60 bg-[#0B0F14] text-[#E5E7EB] hover:bg-[#3B82F6]/20"
                    onClick={() => setIsDashboardOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {plans.map((plan) => (
                  <div key={plan.id} className="rounded-xl border border-[#3B82F6]/30 bg-[#0B0F14] p-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      <input
                        value={plan.name}
                        onChange={(e) => updatePlan(plan.id, "name", e.target.value)}
                        className="h-10 rounded-lg border border-[#3B82F6]/40 bg-[#111827] px-3 text-sm text-[#E5E7EB]"
                      />
                      <input
                        value={plan.subtitle}
                        onChange={(e) => updatePlan(plan.id, "subtitle", e.target.value)}
                        className="h-10 rounded-lg border border-[#3B82F6]/40 bg-[#111827] px-3 text-sm text-[#E5E7EB]"
                      />
                      <input
                        type="number"
                        value={plan.price}
                        onChange={(e) => updatePlan(plan.id, "price", Number(e.target.value) || 0)}
                        className="h-10 rounded-lg border border-[#3B82F6]/40 bg-[#111827] px-3 text-sm text-[#E5E7EB]"
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
                          <p className="mb-1 text-xs text-[#E5E7EB]/80">{label}</p>
                          <input
                            type="number"
                            value={plan[key]}
                            onChange={(e) => updatePlan(plan.id, key, Number(e.target.value) || 0)}
                            className="h-10 w-full rounded-lg border border-[#3B82F6]/40 bg-[#111827] px-3 text-sm text-[#E5E7EB]"
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
