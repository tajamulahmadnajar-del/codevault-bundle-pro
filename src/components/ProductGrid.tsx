import * as Icons from "lucide-react";
import { PRODUCTS } from "@/lib/codevault";

function Icon({ name }: { name: string }) {
  const Cmp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.Code2;
  return <Cmp className="h-5 w-5 text-primary" />;
}

export function ProductGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((p) => (
        <article key={p.id} className="surface-card p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
              <Icon name={p.icon} />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(p.id).padStart(2, "0")}
                </span>
                <h3 className="truncate text-base font-semibold">{p.name}</h3>
              </div>
              <p className="mt-1 inline-block rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[11px] font-medium text-primary">
                {p.category}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
