import type { ReactNode } from "react";
import { WebSolutionNavbar } from "@/app/pankaj-web-solution/components/WebSolutionNavbar";

export default function PankajWebSolutionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WebSolutionNavbar />
      <main>{children}</main>
    </div>
  );
}
