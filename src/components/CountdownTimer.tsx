import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

const DURATION = 5 * 60; // 5 minutes, loops

export function CountdownTimer({ label = "Offer resets in" }: { label?: string }) {
  const [secondsLeft, setSecondsLeft] = useState(DURATION);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? DURATION : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
      <Timer className="h-3.5 w-3.5" />
      {label}{" "}
      <span className="font-bold tabular-nums">
        {pad(m)}:{pad(s)}
      </span>
    </span>
  );
}
