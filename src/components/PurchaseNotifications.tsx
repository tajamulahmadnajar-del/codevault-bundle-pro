import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

const BUYERS = [
  { name: "Mahi", city: "Jaipur" },
  { name: "Rahul", city: "Delhi" },
  { name: "Sneha", city: "Pune" },
  { name: "Amit", city: "Lucknow" },
  { name: "Priya", city: "Bengaluru" },
  { name: "Arjun", city: "Hyderabad" },
  { name: "Kavya", city: "Chennai" },
  { name: "Vikram", city: "Indore" },
  { name: "Ananya", city: "Kolkata" },
  { name: "Rohan", city: "Ahmedabad" },
  { name: "Ishita", city: "Surat" },
  { name: "Karan", city: "Chandigarh" },
  { name: "Neha", city: "Bhopal" },
  { name: "Aditya", city: "Patna" },
  { name: "Simran", city: "Ludhiana" },
];

const TIMES = ["just now", "2 min ago", "5 min ago", "9 min ago", "14 min ago"];

type Toast = { name: string; city: string; time: string };

export function PurchaseNotifications() {
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    let hideId: number | undefined;
    const show = () => {
      const buyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
      const time = TIMES[Math.floor(Math.random() * TIMES.length)];
      if (!buyer || !time) return;
      setToast({ name: buyer.name, city: buyer.city, time });
      hideId = window.setTimeout(() => setToast(null), 5000);
    };
    const firstId = window.setTimeout(show, 4000);
    const loopId = window.setInterval(show, 22000);
    return () => {
      window.clearTimeout(firstId);
      window.clearInterval(loopId);
      if (hideId) window.clearTimeout(hideId);
    };
  }, []);

  if (!toast) return null;

  return (
    <div className="pointer-events-none fixed bottom-20 left-4 z-50 md:bottom-6">
      <div className="pointer-events-auto flex items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <ShoppingBag className="h-4 w-4 text-primary" />
        </span>
        <div className="text-xs leading-snug">
          <p className="font-semibold text-foreground">
            {toast.name} from {toast.city}
          </p>
          <p className="text-muted-foreground">grabbed the bundle · {toast.time}</p>
        </div>
      </div>
    </div>
  );
}
