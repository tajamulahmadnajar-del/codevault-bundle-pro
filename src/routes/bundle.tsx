import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { fireMetaEvent } from "@/lib/meta-events";
import { fireGaEvent } from "@/lib/ga";
import { markCheckoutStarted } from "@/lib/purchase-access";
import { Analytics } from "@/components/analytics";
import { RAZORPAY_PAYMENT_LINK, SUPPORT_EMAIL, PRODUCTS, getDemoUrl } from "@/lib/codevault";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  Check,
  Code2,
  ExternalLink,
  FileCode2,
  Layers,
  LifeBuoy,
  Lock,
  Mail,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Store,
  UtensilsCrossed,
  Users,
  X,
} from "lucide-react";

const BUNDLE_PRICE = "₹699";
const BUNDLE_PRICE_INR = 699;
const COMPARE_PRICE = "₹1,499";

const TITLE = "Small Business Management Bundle — 4 Business Tools for ₹699";
const DESCRIPTION =
  "4 ready-to-deploy business web app source codes: Invoice & Billing, Inventory & POS, Support Ticket, and Restaurant Management. One-time ₹699, instant download.";

export const Route = createFileRoute("/bundle")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Small Business Management Bundle",
          description: DESCRIPTION,
          offers: {
            "@type": "Offer",
            price: "699",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: BundlePage,
});

type BundleProduct = {
  key: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string | undefined;
  demoUrl: string | null;
};

function pick(id: number) {
  return PRODUCTS.find((p) => p.id === id);
}

const BUNDLE_PRODUCTS: BundleProduct[] = [
  {
    key: "invoice",
    name: "Invoice & Billing Script",
    category: "Invoicing / Payments",
    description: "Create invoices, track payments and manage clients from one dashboard.",
    features: ["Invoice & quote generation", "Payment tracking & reminders", "Client management", "Tax & discount support"],
    icon: ReceiptText,
    image: pick(7)?.image,
    demoUrl: getDemoUrl(pick(7)!),
  },
  {
    key: "pos",
    name: "Inventory & POS Script",
    category: "POS / Inventory",
    description: "Manage stock, sales and staff with a full point-of-sale system.",
    features: ["Stock & warehouse tracking", "Barcode / POS billing", "Staff roles & permissions", "Sales reports"],
    icon: Store,
    image: pick(19)?.image,
    demoUrl: getDemoUrl(pick(19)!),
  },
  {
    key: "support",
    name: "Support Ticket Script",
    category: "Helpdesk / Support",
    description: "Helpdesk ticketing and knowledge base to handle customer requests in one place.",
    features: ["Ticket pipeline & priorities", "Knowledge base articles", "Email notifications", "Agent & department management"],
    icon: LifeBuoy,
    image: pick(13)?.image,
    demoUrl: getDemoUrl(pick(13)!),
  },
  {
    key: "restaurant",
    name: "Restaurant Management Script",
    category: "Restaurant / POS",
    description: "Point-of-sale and order management built for restaurants and cafes.",
    features: ["Table & order management", "Menu & item modifiers", "Kitchen order flow", "Billing & daily reports"],
    icon: UtensilsCrossed,
    image: pick(2)?.image,
    demoUrl: getDemoUrl(pick(2)!),
  },
];

const FAQS = [
  {
    q: "What exactly do I get after purchase?",
    a: "You get instant access to a download containing the complete source files for all 4 tools — Invoice & Billing, Inventory & POS, Support Ticket, and Restaurant Management — along with setup documentation where the original author provided it.",
  },
  {
    q: "Is this a subscription or one-time payment?",
    a: `It is a one-time payment of ${BUNDLE_PRICE}. There are no monthly fees, renewals or hidden charges.`,
  },
  {
    q: "Can I use these commercially / resell to clients?",
    a: "You can use the tools to run your own business or as a foundation for client work. Licensing can differ per project, so please review the license file included with each tool before redistribution or resale.",
  },
  {
    q: "Do I get installation support?",
    a: `The purchase covers the digital files themselves. If you get stuck, email us at ${SUPPORT_EMAIL} and we will point you in the right direction — we usually reply within a few hours.`,
  },
  {
    q: "What if a tool doesn't work for me?",
    a: `If the files you receive do not match what is described on this page, contact us within 7 days of purchase at ${SUPPORT_EMAIL} and we will resolve it or issue a refund. See our Refund Policy for full details.`,
  },
  {
    q: "Do I need coding experience to use these?",
    a: "Basic technical familiarity helps — these are source codes that need to be hosted and configured (typically PHP/Laravel or similar stacks). Each project includes setup notes where available. If you can deploy a web app or work with a developer, you will be fine.",
  },
];

function BuyButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={RAZORPAY_PAYMENT_LINK}
      className={`cta-button ${className}`}
      onClick={() => {
        markCheckoutStarted();
        fireMetaEvent("InitiateCheckout", { withValue: true, valueInr: BUNDLE_PRICE_INR });
        fireGaEvent("begin_checkout", { value: BUNDLE_PRICE_INR, currency: "INR" });
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

function BundlePage() {
  useEffect(() => {
    fireMetaEvent("PageView");
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Analytics />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card">
              <Layers className="h-4 w-4 text-primary" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight">Vitcz Codes</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#demo" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block">
              Live Demo
            </a>
            <a href="#pricing" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block">
              Pricing
            </a>
            <BuyButton label={`Buy Now — ${BUNDLE_PRICE}`} className="px-3.5 py-2 text-xs sm:text-sm" />
          </div>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="grid-lines absolute inset-0 opacity-[0.14]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:py-24">
          <span className="fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            One-time payment — {BUNDLE_PRICE}
          </span>
          <h1 className="fade-up mt-6 text-[2rem] font-extrabold leading-[1.1] sm:text-5xl">
            4 Ready-to-Deploy Business Tools —
            <span className="mt-2 block gradient-text">Invoice, Inventory, Support &amp; Booking</span>
          </h1>
          <p className="fade-up mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Live demo included. See every tool working before you buy.
          </p>
          <div className="fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-primary/40 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto"
            >
              See Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
            <BuyButton label={`Buy Now — ${BUNDLE_PRICE}`} className="w-full max-w-xs px-6 py-3.5 text-sm sm:w-auto" />
          </div>
          <div className="fade-up mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Live Demo Available</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Instant Download</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Commercial License</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Secure Payment (Razorpay)</span>
          </div>
        </div>
      </section>

      {/* 2. LIVE DEMO */}
      <section id="demo" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Try before you buy</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Try It Before You Buy It</h2>
          <p className="mt-3 text-muted-foreground">
            Every tool below is a real, working application. Open the live demo and click around —
            what you see is what you download.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BUNDLE_PRODUCTS.map((p) => (
            <article key={p.key} className="surface-card flex flex-col overflow-hidden p-0">
              <div className="border-b border-border bg-secondary/40">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} — demo preview screenshot`}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-[16/9] w-full items-center justify-center">
                    <p.icon className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{p.category}</p>
                <h3 className="mt-1.5 text-[15px] font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{p.description}</p>
                {p.demoUrl ? (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-primary/40 px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Try Live Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3.5 py-2 text-xs font-medium text-muted-foreground">
                    Live demo link being added
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Eyebrow>What's included</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">4 Complete Business Systems</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {BUNDLE_PRODUCTS.map((p) => (
              <article key={p.key} className="surface-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                    <p.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{p.name}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{p.category}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px]">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROBLEM → SOLUTION */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Sound familiar?</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Running a business on spreadsheets and chats?</h2>
            <ul className="mt-8 space-y-4">
              {[
                "Still tracking invoices in Excel or WhatsApp?",
                "Losing track of stock and inventory manually?",
                "Customer support requests scattered across email and DMs?",
                "No system to manage bookings or orders?",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 text-sm">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-8">
            <Eyebrow>The solution</Eyebrow>
            <h3 className="mt-3 text-2xl font-bold">One bundle, four working systems</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This bundle gives you 4 working systems to run your business — or resell to clients —
              without building from scratch. Each tool is a complete, deployable web application with
              the features a real business needs: dashboards, billing, reporting and admin controls.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Deploy on your own hosting — you own the code",
                "Use for your business or as a client project foundation",
                "One download, one payment, no subscriptions",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <BuyButton label={`Get the Bundle — ${BUNDLE_PRICE}`} className="mt-8 w-full px-6 py-3.5 text-sm" />
          </div>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Eyebrow>Who this is for</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for people who ship</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code2, t: "Freelance Developers", d: "Deliver client projects faster with a proven head start." },
              { icon: Briefcase, t: "Small Agencies", d: "Reusable foundation for repeat client work." },
              { icon: Users, t: "Business Owners", d: "Run your own operations digitally, on your own hosting." },
              { icon: Rocket, t: "Aspiring SaaS Founders", d: "Prototype and validate your idea faster." },
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

      {/* 6. PRICING & VALUE COMPARISON */}
      <section id="pricing" className="hero-glow border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <div className="text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">One payment. Four tools. Yours forever.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Building separately
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "4 separate development projects",
                  "Weeks of design, coding and testing",
                  "Estimated ₹15,000–₹20,000+ in dev cost",
                  "Debugging and maintenance on you",
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
                This bundle
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "All 4 tools in one download",
                  "Ready to deploy and customise",
                  "One checkout, one payment",
                  "Commercial use license included",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-lg">
            <div className="surface-card p-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg text-muted-foreground line-through">{COMPARE_PRICE}</span>
                <span className="font-display text-6xl font-extrabold gradient-text">{BUNDLE_PRICE}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">One-time payment — no subscription</p>
              <BuyButton label={`Get Instant Access — ${BUNDLE_PRICE}`} className="mt-6 w-full px-6 py-4 text-base" />
              <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" />
                Secure checkout via Razorpay — UPI, Cards, Netbanking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECH DETAILS & LICENSING */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <Eyebrow>Transparency</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tech details &amp; licensing</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: FileCode2,
              title: "What's included",
              body: "Complete source files (frontend + backend) for all 4 tools, plus setup documentation where the original author provided it.",
            },
            {
              icon: Code2,
              title: "Tech stack",
              body: "Projects are built on widely-used stacks (typically PHP/Laravel-style web apps). Each project may have its own dependencies — review the included docs before deployment.",
            },
            {
              icon: ShieldCheck,
              title: "License",
              body: "Commercial use is allowed — run the tools for your business or use them in client work. Redistribution/resale terms can vary per project; check each project's license file.",
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

      {/* 8. FAQ */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Questions, answered</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-[15px]">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9. TRUST & GUARANTEE */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <div className="surface-card p-8 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </span>
          <h2 className="mt-4 text-2xl font-bold">Our promise to you</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            If the files you receive don't match what's described on this page, contact us within 7
            days of purchase and we'll resolve it or issue a refund — no hassle.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-1.5 text-xs text-muted-foreground">We reply within a few hours.</p>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="hero-glow border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">
            4 Ready-to-Deploy Business Tools —
            <span className="mt-1 block gradient-text">Invoice, Inventory, Support &amp; Booking</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            One download. One payment of {BUNDLE_PRICE}. Start running your business on real software today.
          </p>
          <div className="mt-8 flex justify-center">
            <BuyButton label={`Get Instant Access — ${BUNDLE_PRICE}`} className="px-8 py-4 text-base" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <CalendarCheck className="h-3.5 w-3.5" />
            Instant access after successful payment
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Vitcz Codes. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/refund-policy" className="hover:text-foreground">Refund Policy</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-center text-[11px] leading-relaxed text-muted-foreground/70 sm:text-left">
          Vitcz Codes is an independent seller of digital products and is not affiliated with,
          endorsed by, or sponsored by Meta, Google, or Razorpay.
        </p>
      </footer>

      {/* Sticky mobile buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-xl md:hidden">
        <BuyButton label={`Buy Now — ${BUNDLE_PRICE}`} className="w-full px-6 py-3 text-sm" />
      </div>
    </div>
  );
}
