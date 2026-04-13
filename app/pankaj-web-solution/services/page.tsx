import Image from "next/image";

import { SERVICES } from "@/app/pankaj-web-solution/content";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display font-bold">Services</h1>
      <p className="mt-2 text-muted-foreground">Business solutions offered by Pankaj Web Solution.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {SERVICES.map((service) => (
          <article key={service.title} className="rounded-2xl border border-border bg-card p-4">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image src={service.image} alt={service.title} width={800} height={520} className="h-auto w-full" />
            </div>
            <h2 className="mt-3 text-xl font-semibold">{service.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
