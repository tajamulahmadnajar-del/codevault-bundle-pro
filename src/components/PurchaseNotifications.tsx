import { useEffect, useState } from "react";
import { BadgeCheck } from "lucide-react";
import { PRICE } from "@/lib/codevault";

const BUYERS = [
  { name: "Mahi", city: "Jaipur" },
  { name: "Rahul", city: "Delhi" },
  { name: "Priya", city: "Pune" },
  { name: "Aman", city: "Lucknow" },
  { name: "Sneha", city: "Mumbai" },
  { name: "Vikram", city: "Hyderabad" },
  { name: "Anjali", city: "Indore" },
  { name: "Karan", city: "Chandigarh" },
  { name: "Riya", city: "Kolkata" },
  { name: "Arjun", city: "Bengaluru" },
  { name: "Neha", city: "Surat" },
  { name: "Rohit", city: "Nagpur" },
];

const TIMES = ["just now", "1 min ago", "2 min ago", "4 min ago", "7 min ago"];

type Toast = { id: number; name: string; city: string; time: string };

export function PurchaseNotifications() {
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let showTimer: ReturnType<typeof setTimeout>;
    let count = 0;

    const show = () => {
      const buyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
      const time = TIMES[Math.min(count, TIMES.length - 1)];
      count += 1;
      setToast({ id: Date.now(), name: buyer.name, city: buyer.city, time });
      hideTimer = setTimeout(() => setToast(null), 4500);
      showTimer = setTimeout(show, 9000 + Math.random() * 8000);
    };

    showTimer = setTimeout(show, 3500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-20 left-4 z-50 transition-all duration-500 md:bottom-6 md:left-6 ${
        toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {toast && (
        <div className="pointer-events-auto flex items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-[0_18px_40px_-18px_oklch(0_0_0/0.9)] backdrop-blur">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <BadgeCheck className="h-5 w-5 text-primary" />
          </span>
          <div className="text-left">
            <p className="text-[13px] font-semibold leading-tight">
              {toast.name} from {toast.city}
            </p>
            <p className="text-[11px] leading-tight text-muted-foreground">
              purchased CodeVault 21 for {PRICE} • {toast.time}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
