import { Star, BadgeCheck } from "lucide-react";

type Review = {
  name: string;
  city: string;
  role: string;
  rating: number;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: "Rahul Sharma",
    city: "Jaipur",
    role: "Freelance Web Developer",
    rating: 5,
    text: "Bundle bahut useful hai. Invoice aur POS script se mera client project 2 din me ready ho gaya. ₹199 me itna code milna genuinely worth hai.",
  },
  {
    name: "Ankit Verma",
    city: "Pune",
    role: "Full-Stack Developer",
    rating: 5,
    text: "Code structure clean hai and setup docs samajhne me easy. Real estate listing script ko customise karke apne client ko deliver kiya.",
  },
  {
    name: "Sneha Patel",
    city: "Ahmedabad",
    role: "Agency Owner",
    rating: 4,
    text: "Team ke liye starting point ke tarah use kar rahe hain. Sab scripts perfect nahi hain but learning aur prototyping ke liye solid value.",
  },
  {
    name: "Mohammed Irfan",
    city: "Hyderabad",
    role: "Student, B.Tech CSE",
    rating: 5,
    text: "College projects ke liye liya tha. QR generator aur bio-link script padhkar bahut kuch seekha. Download instantly mil gaya.",
  },
  {
    name: "Priya Nair",
    city: "Kochi",
    role: "Frontend Developer",
    rating: 5,
    text: "eCommerce aur appointment booking dono scripts ache hain. UI ready mila to backend pe focus kar payi.",
  },
  {
    name: "Karan Singh",
    city: "Ludhiana",
    role: "Small Business Owner",
    rating: 4,
    text: "Inventory script apne shop ke liye developer se setup karwaya. Paisa vasool, support email pe reply bhi jaldi mila.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-3.5 w-3.5 fill-accent text-accent"
              : "h-3.5 w-3.5 text-muted-foreground/40"
          }
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {REVIEWS.map((r) => (
        <figure key={r.name} className="flex h-full flex-col bg-card p-5">
          <Stars rating={r.rating} />
          <blockquote className="mt-3 flex-1 text-[13px] leading-relaxed text-muted-foreground">
            “{r.text}”
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs font-bold text-primary">
              {r.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1 text-[13px] font-semibold text-foreground">
                {r.name}
                <BadgeCheck className="h-3.5 w-3.5 text-primary" />
              </span>
              <span className="block truncate text-[11px] text-muted-foreground">
                {r.role} · {r.city}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
