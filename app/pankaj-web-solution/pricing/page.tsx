import { PRICING } from "@/app/pankaj-web-solution/content";

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display font-bold">Pricing</h1>
      <p className="mt-2 text-muted-foreground">Detailed package pricing and where money is used.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {PRICING.map((plan) => (
          <article key={plan.plan} className="rounded-2xl border border-border bg-card p-5">
            <h2 className="text-xl font-semibold">{plan.plan}</h2>
            <p className="mt-1 text-2xl font-bold text-foreground">{plan.price}</p>
            <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">Includes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {plan.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">Money Split</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {plan.split.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
