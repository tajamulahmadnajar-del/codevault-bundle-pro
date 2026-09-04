import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { fireMetaEvent } from "@/lib/meta-events";
import { fireGaEvent } from "@/lib/ga";
import { markCheckoutStarted } from "@/lib/purchase-access";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductGrid } from "@/components/ProductGrid";
import { Reviews } from "@/components/Reviews";
import { Analytics } from "@/components/analytics";
import { CountdownTimer } from "@/components/CountdownTimer";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";
import {
  PRICE,
  PRODUCTS,
  RAZORPAY_PAYMENT_LINK,
  SUPPORT_EMAIL,
  getDemoUrl,
} from "@/lib/codevault";
import {
  ArrowRight,
  Check,
  Code2,
  CreditCard,
  Download,
  ExternalLink,
  Info,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Terminal,
  Timer,
  Users,
  X,
} from "lucide-react";

const TITLE = "CodeVault 21 — 23 Premium Source Codes for ₹1,499 (97% Off)";
const DESCRIPTION =
  "23 premium source-code projects — SaaS, AI, eCommerce, POS, banking & more. ₹2,499 each, now ₹74.97 per source code. Pay ₹1,499 once and download instantly from Vitcz Codes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://21codes.vitcz.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://21codes.vitcz.com/" }],
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
            price: "1499",
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
  "23 Development Projects (20 + 3 bonus)",
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
    a: "You receive access to the CodeVault 21 download package containing the 20 listed projects plus 3 bonus source codes.",
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
    <a
      href={RAZORPAY_PAYMENT_LINK}
      className={`cta-button ${className}`}
      onClick={() => {
        markCheckoutStarted();
        fireMetaEvent("InitiateCheckout", { withValue: true });
        fireGaEvent("begin_checkout", { value: 1499, currency: "INR" });
      }}
    >
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
  useEffect(() => {
    fireMetaEvent("PageView");
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Analytics />

      <PurchaseNotifications />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card">
              <Layers className="h-4 w-4 text-primary" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight">Vitcz Codes</span>
          </div>
          <a
            href={RAZORPAY_PAYMENT_LINK}
            onClick={() => {
              markCheckoutStarted();
              fireMetaEvent("InitiateCheckout", { withValue: true });
              fireGaEvent("begin_checkout", { value: 1499, currency: "INR" });
            }}
            className="rounded-lg border border-primary/40 px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:text-sm"
          >
            Get Access — {PRICE}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="grid-lines absolute inset-0 opacity-[0.16]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="fade-up flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                One-time payment — {PRICE}
              </span>
              <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                97% off
              </span>
            </div>
            <h1 className="fade-up mt-6 text-[2.1rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              20 Premium Source Codes + 3 Free Bonus.
              <span className="mt-2 block gradient-text">₹2,499 Each — Now Just ₹74.97 Per Source Code.</span>
            </h1>
            <p className="fade-up mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Every source code is normally ₹2,499. In this bundle you pay ₹74.97 each — that is
              20 × ₹74.97 = ₹1,499 total, plus 3 extra source codes added as a free bonus. 23
              complete, ready-to-use codebases across SaaS, eCommerce, POS, fintech, marketing and
              utility categories, delivered as one instant download.
            </p>
            <div className="fade-up mt-6 flex flex-col items-center gap-3 lg:items-start">
              <CountdownTimer label="Offer ends in" />
              <div className="flex items-end gap-3">
                <span className="text-sm text-muted-foreground line-through">₹49,980</span>
                <span className="font-display text-3xl font-extrabold text-foreground">{PRICE}</span>
                <span className="mb-1 rounded-md bg-accent/10 px-2 py-1 text-xs font-bold text-accent">97% off</span>
              </div>
              <BuyButton
                label="Buy Now — Only 3 Slots Left"
                className="w-full max-w-sm px-6 py-4 text-[15px] lg:max-w-none lg:w-auto"
              />
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" />
                Secure payment • Instant access after successful payment
              </p>
            </div>
            <div className="fade-up mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground lg:justify-start">
              <span>23 projects</span>
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
          <Eyebrow>Step 1 — What you get</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            23 Premium Source Codes — ₹2,499 Each, Now ₹74.97
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every project included in the bundle, across 10+ development categories. Each one
            costs ₹2,499 individually — here it works out to ₹74.97 per source code, ₹1,499 for
            the whole bundle (20 paid + 3 bonus).
          </p>
          {PRODUCTS.some((p) => getDemoUrl(p)) && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-primary">
              <ExternalLink className="h-3.5 w-3.5" />
              Each card links to its live demo — explore before you buy.
            </p>
          )}
        </div>

        {/* Price breakdown */}
        <div className="mb-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { k: "Price per source code", v: "₹2,499", s: "Normal individual price" },
            { k: "Your price per code", v: "₹74.97", s: "97% off every script" },
            { k: "20 × ₹74.97", v: "₹1,499", s: "Total you pay, one time" },
            { k: "Bonus source codes", v: "3 Free", s: "Added at no extra cost" },
          ].map((c) => (
            <div key={c.k} className="bg-card p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {c.k}
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold text-foreground">{c.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.s}</p>
            </div>
          ))}
        </div>

        {/* Category chips */}
        <div className="mb-8 flex flex-wrap gap-2">
          {PRODUCT_GROUPS.map((g) => (
            <span
              key={g}
              className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {g}
            </span>
          ))}
        </div>

        <ProductGrid />

      </section>

      {/* REVIEWS */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Buyer feedback</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What Buyers Are Saying
            </h2>
            <p className="mt-3 text-muted-foreground">
              Feedback from developers, students and business owners who picked up the bundle.
            </p>
          </div>
          <Reviews />
        </div>
      </section>

      {/* VALUE */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Eyebrow>Step 2 — Inside the bundle</Eyebrow>
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
        <Eyebrow>Step 3 — Why CodeVault 21</Eyebrow>
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

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From payment to code in 3 steps</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: CreditCard,
                step: "01",
                title: "Pay ₹1,499 securely",
                body: "Checkout runs on Razorpay — UPI, cards, netbanking and wallets all supported.",
              },
              {
                icon: Download,
                step: "02",
                title: "Get instant access",
                body: "You land on the download page right after a successful payment. No waiting, no emails to chase.",
              },
              {
                icon: Code2,
                step: "03",
                title: "Open and build",
                body: "Unzip the bundle, pick a project, review its docs and license, and start customising.",
              },
            ].map(({ icon: I, step, title, body }) => (
              <div key={step} className="surface-card relative p-6">
                <span className="absolute right-5 top-5 font-mono text-3xl font-bold text-primary/15">
                  {step}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <I className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <Eyebrow>The maths</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          23 Source Codes. ₹74.97 Each. ₹1,499 Total.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Buying separately
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Hunting for 21 different scripts",
                "Separate checkouts and accounts",
                "Weeks of building from scratch",
                "Recurring subscriptions stacking up",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              CodeVault 21 — {PRICE}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "All 23 projects in one download",
                "One checkout, one payment",
                "Ready-made codebases to start from",
                "No subscription, no renewals",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Eyebrow>Who it's for</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Made for builders in a hurry</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code2, t: "Freelancers", d: "Deliver client projects faster with a head start." },
              { icon: Sparkles, t: "Students", d: "Study real, complete codebases across categories." },
              { icon: Users, t: "Agencies", d: "Reusable foundations for repeat project types." },
              { icon: Layers, t: "Founders", d: "Prototype an MVP without starting from zero." },
            ].map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-background/60 p-5 transition-colors hover:border-primary/40">
                <I className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <Eyebrow>What's inside</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What every project typically includes</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The exact contents can vary per project — each bundle folder includes the project files
          and, where the original author provided them, documentation and setup notes.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Complete Source Files",
              body: "Frontend, backend and configuration files for each project, ready to open in your editor.",
            },
            {
              icon: Layers,
              title: "Real Business Features",
              body: "Auth, dashboards, payments, admin panels and other modules that full applications need.",
            },
            {
              icon: Terminal,
              title: "Docs Where Provided",
              body: "Installation and usage notes included by the original authors for many projects.",
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
                Step 4 — Get instant access
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="text-lg text-muted-foreground line-through">₹49,980</span>
                <span className="font-display text-6xl font-extrabold gradient-text">{PRICE}</span>
                <span className="rounded-md bg-accent/10 px-2 py-1 text-xs font-bold text-accent">97% off</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">One-Time Payment — No Hidden Charges</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-sm">
                {[
                  "20 Source Codes + 3 Bonus",
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
              <div className="mt-6 flex justify-center">
                <CountdownTimer label="Offer ends in" />
              </div>
              <BuyButton label="Buy Now — Only 3 Slots Left" className="mt-4 w-full px-6 py-4 text-base" />
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

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            <ShieldCheck className="h-4 w-4" />
            Disclaimer
          </p>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">About this product:</strong> CodeVault 21 is a
              digital product — a downloadable collection of 21 source-code projects sold by{" "}
              <strong className="text-foreground">Vitcz Codes</strong>. It is provided for learning
              and development purposes, &ldquo;as is&rdquo;, without any guarantee of specific
              results, income or business outcomes.
            </p>
            <p>
              <strong className="text-foreground">No earnings claims:</strong> Nothing on this page
              is a promise of earnings. Any figures shown (such as pricing) refer to the product
              price only. Your results depend entirely on your own skills and effort.
            </p>
            <p>
              <strong className="text-foreground">Licensing:</strong> Each project may carry its own
              license, dependencies and technical requirements. Review each project's
              documentation and license terms before commercial use.
            </p>
            <p>
              <strong className="text-foreground">Independent business:</strong> Vitcz Codes is an
              independent seller and is not affiliated with, endorsed by, or sponsored by Meta,
              Facebook, Instagram, Google, Razorpay or any other platform mentioned on this site.
              Payments are processed securely by Razorpay.
            </p>
            <p>
              <strong className="text-foreground">Contact us:</strong> Questions about the product,
              your purchase or a refund? Email us any time at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-mono text-primary hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              — we reply to every customer email.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-glow border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">₹49,980 Worth of Code for ₹1,499</h2>
          <p className="mt-3 text-muted-foreground">
            23 premium source-code projects, one payment of {PRICE}, delivered as an instant
            download after checkout.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-lg text-muted-foreground line-through">₹49,980</span>
            <span className="font-display text-4xl font-extrabold gradient-text">{PRICE} One-Time</span>
          </div>
          <BuyButton label={`Download All 23 Projects — ${PRICE}`} className="mt-8 w-full max-w-sm px-6 py-4 text-base" />
        </div>
      </section>

      <footer className="border-t border-border bg-card/20">
        <nav className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-2 px-5 pt-6 text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary">Terms</Link>
          <Link to="/refund-policy" className="hover:text-primary">Refund Policy</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="mx-auto max-w-4xl px-5 pb-8 pt-4 text-center">
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Disclaimer:</strong> CodeVault 21 is developed,
            owned and sold by the Vitcz Codes team. All source-code projects in this bundle are
            provided for learning and development purposes &ldquo;as is&rdquo;. Vitcz Codes is an
            independent seller and is <strong className="text-foreground">not affiliated with,
            endorsed by, or sponsored by Meta, Facebook, Instagram, Google, Razorpay</strong> or
            any other platform mentioned on this site. All trademarks belong to their respective
            owners. Results are not guaranteed and depend entirely on your own skills and effort.
          </p>
          <p className="mt-3 font-mono text-[11px] text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Vitcz Codes &middot; All rights reserved &middot;{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-primary">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </footer>


      {/* Sticky mobile buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <BuyButton label={`Get the Bundle — ${PRICE}`} className="w-full px-6 py-3.5 text-sm" />
      </div>
    </div>
  );
}
