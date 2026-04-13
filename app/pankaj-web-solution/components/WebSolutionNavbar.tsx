"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const NAV_ITEMS = [
  { label: "Overview", href: "/pankaj-web-solution" },
  { label: "Services", href: "/pankaj-web-solution/services" },
  { label: "Process", href: "/pankaj-web-solution/process" },
  { label: "Pricing", href: "/pankaj-web-solution/pricing" },
  { label: "Projects", href: "/pankaj-web-solution/projects" },
];

export function WebSolutionNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Back To Portfolio
        </Link>

        <div className="flex items-center gap-2">
          <nav className="flex gap-2 overflow-x-auto no-visible-scrollbar max-w-[65vw] sm:max-w-none">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg border px-3 py-2 text-xs font-mono whitespace-nowrap transition-colors ${
                    isActive
                      ? "border-primary/60 bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <AnimatedThemeToggler className="h-9 w-9 rounded-xl border border-border bg-card text-foreground flex items-center justify-center hover:bg-accent" />
        </div>
      </div>
    </header>
  );
}
