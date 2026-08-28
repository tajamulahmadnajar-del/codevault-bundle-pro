import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

/** Milliseconds until the next midnight (local time). */
function msUntilMidnight() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  return end.getTime() - now.getTime();
}

function parts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    h: String(Math.floor(total / 3600)).padStart(2, "0"),
    m: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
    s: String(total % 60).padStart(2, "0"),
  };
}

export function CountdownTimer({ label = "Today's bundle price ends in" }: { label?: string }) {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    setMs(msUntilMidnight());
    const id = setInterval(() => setMs(msUntilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  const { h, m, s } = parts(ms ?? 0);

  return (
    <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-5 py-4">
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
        <Timer className="h-3.5 w-3.5" />
        {label}
      </p>
      <div className="flex items-center gap-2" aria-live="off">
        {[
          { v: h, l: "hrs" },
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
