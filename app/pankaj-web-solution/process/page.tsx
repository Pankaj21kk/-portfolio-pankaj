import { PROCESS_STEPS } from "@/app/pankaj-web-solution/content";

export default function ProcessPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display font-bold">Process</h1>
      <p className="mt-2 text-muted-foreground">How the business website is made step by step.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((step) => (
          <article key={step.step} className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-mono uppercase tracking-wider text-primary">Step {step.step}</p>
            <h2 className="mt-2 text-lg font-semibold">{step.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
