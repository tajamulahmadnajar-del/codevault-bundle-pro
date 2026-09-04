import * as Icons from "lucide-react";
import { getDemoUrl, getGroupedProducts } from "@/lib/codevault";

function Icon({ name }: { name: string }) {
  const Cmp =
    (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ??
    Icons.Code2;
  return <Cmp className="h-4.5 w-4.5 text-primary" />;
}

export function ProductGrid() {
  const groups = getGroupedProducts();
  return (
    <div className="space-y-10">
      {groups.map(({ group, items }) => (
        <div key={group}>
          <div className="mb-4 flex items-center gap-3">
            <h3 className="text-lg font-bold tracking-tight sm:text-xl">{group}</h3>
            <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              {items.length} {items.length === 1 ? "script" : "scripts"}
            </span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => {
              return <ProductCard key={p.id} p={p} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ p }: { p: (typeof items)[number] extends never ? never : import("@/lib/codevault").Product }) {
        const demoUrl = getDemoUrl(p);
        return (
          <article
            key={p.id}
            className="group relative flex h-full flex-col bg-card p-5 transition-colors duration-200 hover:bg-secondary"
          >
            <span className="absolute right-4 top-4 z-10 rounded bg-background/70 px-1.5 font-mono text-[11px] text-muted-foreground/70 backdrop-blur">
              {String(p.id).padStart(2, "0")}
            </span>
            <div className="mb-4 overflow-hidden rounded-lg border border-border bg-background">
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.category} source code preview`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
                  <Icon name={p.icon} />
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-primary/50">
                <Icon name={p.icon} />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-[15px] font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  {p.category}
                </p>
              </div>
            </div>
            <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex w-fit items-center gap-1.5 border-t border-border pt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-primary/90 transition-colors hover:text-primary"
              >
                <Icons.ExternalLink className="h-3 w-3" />
                Live Demo
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}
