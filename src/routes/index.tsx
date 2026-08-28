import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductGrid } from "@/components/ProductGrid";
import { Analytics } from "@/components/analytics";
import { PRICE, PRODUCTS, RAZORPAY_PAYMENT_LINK } from "@/lib/codevault";
import {
  ArrowRight,
  Check,
  Info,
  Layers,
  Lock,
  ShieldCheck,
  Terminal,
  Timer,
} from "lucide-react";

const TITLE = "CodeVault 21 — 21 Premium Source Code Projects for ₹199";
const DESCRIPTION =
  "CodeVault 21 is a curated bundle of 21 ready-to-use source-code projects covering SaaS, AI, eCommerce, POS, cloud storage and more. One-time payment of ₹199.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      // OG image placeholder — replace with your absolute image URL when ready.
      // { property: "og:image", content: "OG_IMAGE_URL_HERE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "CodeVault 21",
          description: DESCRIPTION,
          offers: {
            "@type": "Offer",
            price: "199",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const VALUE_ITEMS = [
  "21 Development Projects",
  "Multiple Business Categories",
  "SaaS & Web Applications",
  "AI & Automation Projects",
  "eCommerce & POS Solutions",
  "Business Management Tools",
  "Downloadable Source Files",
  "One-Time Payment",
];

const FAQS = [
  {
    q: "What do I get after purchasing?",
    a: "You receive access to the CodeVault 21 download package containing the 21 listed projects.",
  },
  { q: "Is this a monthly subscription?", a: "No. The listed price is a one-time payment." },
  {
    q: "How do I receive the files?",
    a: "After successful payment you are redirected to the thank-you/download page, where the bundle download is available.",
  },
  {
    q: "Can I use the source codes commercially?",
    a: "Licensing can differ between projects. Please review the applicable license and redistribution terms for each project before commercial use.",
  },
  {
    q: "Are installation services included?",
    a: "No. The purchase provides the listed digital files only.",
  },
  {
    q: "Are updates included?",
    a: "Future updates are not part of this purchase unless explicitly stated for a specific project.",
  },
];

function BuyButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a href={RAZORPAY_PAYMENT_LINK} className={`cta-button ${className}`}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">{children}</p>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Analytics />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card">
              <Layers className="h-4 w-4 text-primary" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight">CodeVault 21</span>
          </div>
          <a
            href={RAZORPAY_PAYMENT_LINK}
            className="rounded-lg border border-primary/40 px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:text-sm"
          >
            Buy — {PRICE}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="grid-lines absolute inset-0 opacity-[0.16]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <span className="fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
              One-time access — {PRICE}
            </span>
            <h1 className="fade-up mt-6 text-[2.1rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              21 Premium Source Codes.
              <span className="mt-2 block gradient-text">One Complete Developer Bundle.</span>
            </h1>
            <p className="fade-up mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Get CodeVault 21 — a curated collection of ready-to-use source-code projects for
              SaaS, AI, eCommerce, business tools, POS, cloud storage and more.
            </p>
            <div className="fade-up mt-8 flex flex-col items-center gap-3 lg:items-start">
              <BuyButton
                label={`GET CODEVAULT 21 — ${PRICE}`}
                className="w-full max-w-sm px-6 py-4 text-[15px] lg:max-w-none lg:w-auto"
              />
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" />
                Secure payment • Instant access after successful payment
              </p>
            </div>
            <div className="fade-up mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground lg:justify-start">
              <span>21 projects</span>
              <span>10+ categories</span>
              <span>instant download</span>
              <span>no subscription</span>
            </div>
          </div>

          {/* Terminal-style preview */}
          <div className="fade-up surface-card overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <Terminal className="h-3.5 w-3.5" /> codevault-21 / projects
              </span>
            </div>
            <ul className="divide-y divide-border font-mono text-[12px]">
              {PRODUCTS.slice(0, 8).map((p) => (
                <li key={p.id} className="flex items-center gap-3 px-4 py-2.5">
                  <span className="text-muted-foreground/60">
                    {String(p.id).padStart(2, "0")}
                  </span>
                  <span className="truncate font-semibold text-foreground">{p.name}</span>
                  <span className="ml-auto truncate text-[10px] uppercase tracking-[0.12em] text-primary">
                    {p.category}
                  </span>
                </li>
              ))}
              <li className="px-4 py-2.5 text-muted-foreground">+ 13 more projects…</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">21 Source Code Projects</h2>
          <p className="mt-3 text-muted-foreground">
            Every project included in the bundle, across development categories.
          </p>
          {PRODUCTS.some((p) => getDemoUrl(p)) && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-primary">
              <ExternalLink className="h-3.5 w-3.5" />
              Each card links to its live demo — explore before you buy.
            </p>
          )}
        </div>
        <ProductGrid />
      </section>

      {/* VALUE */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Eyebrow>Inside the bundle</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Everything You Need to Start Building Faster
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 text-sm font-medium transition-colors hover:border-primary/40"
              >
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <Eyebrow>Why CodeVault 21</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for people who ship</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Timer,
              title: "Save Development Time",
              body: "Instead of starting every project from zero, explore ready-made codebases and templates that can help accelerate your development workflow.",
            },
            {
              icon: Layers,
              title: "Multiple Categories",
              body: "From AI and SaaS to eCommerce, POS, cloud storage and business systems.",
            },
            {
              icon: ShieldCheck,
              title: "One Affordable Bundle",
              body: `Get the complete 21-project collection for a single payment of ${PRICE}.`,
            },
          ].map(({ icon: I, title, body }) => (
            <div key={title} className="surface-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                <I className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICE */}
      <section id="pricing" className="hero-glow border-y border-border">
        <div className="mx-auto max-w-lg px-5 py-16 sm:py-24">
          <div className="surface-card overflow-hidden p-0">
            <div className="border-b border-border bg-secondary/40 px-8 py-6 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                CodeVault 21
              </p>
              <p className="mt-3 font-display text-6xl font-extrabold gradient-text">{PRICE}</p>
              <p className="mt-2 text-sm text-muted-foreground">One-Time Payment</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-sm">
                {[
                  "21 Source Code Projects",
                  "Multiple Categories",
                  "Download Access",
                  "Documentation where provided",
                  "No Monthly Subscription",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <BuyButton label={`BUY NOW — ${PRICE}`} className="mt-8 w-full px-6 py-4 text-base" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Secure payment • Instant access after successful payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* NOTICE */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="flex gap-4 rounded-2xl border border-border bg-card/50 p-6">
          <Info className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Important:</strong> Different projects may have
            different technical requirements, dependencies, and licensing terms. Customers should
            review the documentation and applicable license for each project before using,
            modifying, deploying, or redistributing any project.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-glow border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Build Faster?</h2>
          <p className="mt-3 text-muted-foreground">
            Get 21 source-code projects in one affordable bundle.
          </p>
          <p className="mt-6 font-display text-4xl font-extrabold gradient-text">
            {PRICE} One-Time
          </p>
          <BuyButton label="GET CODEVAULT 21" className="mt-8 w-full max-w-sm px-6 py-4 text-base" />
        </div>
      </section>

      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                <span className="font-display font-bold">CodeVault 21</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">21 Premium Source Code Projects</p>
            </div>
            <nav className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 sm:gap-x-10">
              <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
              <Link to="/refund-policy" className="hover:text-primary">Refund Policy</Link>
              <Link to="/contact" className="hover:text-primary">Contact</Link>
            </nav>
          </div>
          <p className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} CodeVault 21. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky mobile buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <BuyButton label={`BUY NOW — ${PRICE}`} className="w-full px-6 py-3.5 text-sm" />
      </div>
    </div>
  );
}
