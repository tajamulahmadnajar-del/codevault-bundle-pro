import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

/** Timer length: 5 minutes in milliseconds. */
const DURATION_MS = 5 * 60 * 1000;

function parts(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  return {
    m: String(Math.floor(total / 60)).padStart(2, "0"),
    s: String(total % 60).padStart(2, "0"),
  };
}

/**
 * 5-minute countdown. When it reaches zero it restarts,
 * so the offer window is always visible.
 */
export function CountdownTimer({ label = "Today's bundle price ends in" }: { label?: string }) {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    setMs(DURATION_MS);
    const id = setInterval(() => {
      setMs((prev) => {
        const next = (prev ?? DURATION_MS) - 1000;
        return next <= 0 ? DURATION_MS : next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { m, s } = parts(ms ?? 0);

  return (
    <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-5 py-4">
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
        <Timer className="h-3.5 w-3.5" />
        {label}
      </p>
      <div className="flex items-center gap-2" aria-live="off">
        {[
          { v: m, l: "min" },
          { v: s, l: "sec" },
        ].map((seg, i) => (
          <div key={seg.l} className="flex items-center gap-2">
            {i > 0 && <span className="font-display text-2xl text-muted-foreground">:</span>}
            <div className="flex min-w-[58px] flex-col items-center rounded-xl border border-border bg-background px-3 py-2">
              <span className="font-display text-2xl font-extrabold tabular-nums">
                {ms === null ? "--" : seg.v}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {seg.l}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
