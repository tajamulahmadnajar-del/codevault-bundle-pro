import * as Icons from "lucide-react";
import { PRODUCTS } from "@/lib/codevault";

function Icon({ name }: { name: string }) {
  const Cmp =
    (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ??
    Icons.Code2;
  return <Cmp className="h-4.5 w-4.5 text-primary" />;
}

export function ProductGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((p) => (
        <article
          key={p.id}
          className="group relative bg-card p-5 transition-colors duration-200 hover:bg-secondary"
        >
          <span className="absolute right-4 top-4 font-mono text-[11px] text-muted-foreground/60">
            {String(p.id).padStart(2, "0")}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-primary/50">
            <Icon name={p.icon} />
          </span>
          <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{p.name}</h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
            {p.category}
          </p>
          <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
            {p.description}
          </p>
        </article>
      ))}
    </div>
  );
}
