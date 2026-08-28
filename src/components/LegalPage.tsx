import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Layers } from "lucide-react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-4">
          <Layers className="h-5 w-5 text-primary" />
          <Link to="/" className="font-display text-sm font-bold">
            CodeVault 21
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
        <Link to="/" className="mt-10 inline-block text-sm text-primary hover:underline">
          ← Back to home
        </Link>
      </main>
    </div>
  );
}
