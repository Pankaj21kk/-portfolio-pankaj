import Image from "next/image";

import { PROJECTS } from "@/app/pankaj-web-solution/content";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display font-bold">Projects</h1>
      <p className="mt-2 text-muted-foreground">Previous client projects and outcomes.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <article key={project.name} className="rounded-2xl border border-border bg-card p-4">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image src={project.image} alt={project.name} width={800} height={520} className="h-auto w-full" />
            </div>
            <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">{project.type}</p>
            <h2 className="mt-1 text-lg font-semibold">{project.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{project.summary}</p>
            <p className="mt-2 text-sm font-medium">Result: {project.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
