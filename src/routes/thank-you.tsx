import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { fireMetaEvent } from "@/lib/meta-events";
import { ProductGrid } from "@/components/ProductGrid";
import { Analytics } from "@/components/analytics";
import { DOWNLOAD_BUNDLE_LINK, SUPPORT_EMAIL } from "@/lib/codevault";
import { CheckCircle2, Download, HardDriveDownload, Info, LifeBuoy, Package } from "lucide-react";

const TITLE = "Download CodeVault 21 — Order Confirmation";
const DESCRIPTION =
  "Your CodeVault 21 download page. Access the 21-project source code bundle and read the included documentation and license terms.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/thank-you" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  useEffect(() => {
    fireMetaEvent("PageView");
    fireMetaEvent("Purchase", { withValue: true });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Analytics />

      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="grid-lines absolute inset-0 opacity-[0.2]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-24">
          <span className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Order confirmed
          </span>
          <h1 className="fade-up mt-6 text-4xl font-extrabold sm:text-5xl">
            🎉 Payment Successful!
          </h1>
          <p className="fade-up mt-4 text-muted-foreground">
            Thank you for purchasing CodeVault 21. Your download is ready.
          </p>

          <div className="fade-up surface-card mx-auto mt-10 max-w-md p-8">
            <Package className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-4 font-display text-xl font-bold tracking-tight">📦 CODEVAULT 21</p>
            <p className="mt-1 text-sm text-muted-foreground">21 Premium Source Code Projects</p>
            <a
              href={DOWNLOAD_BUNDLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button mt-8 w-full px-6 py-4 text-base"
            >
              <Download className="h-5 w-5" />
              DOWNLOAD CODEVAULT 21
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              If the button does not work, copy this link into your browser:
            </p>
            <p className="mt-1 break-all font-mono text-[11px] text-primary/80">
              {DOWNLOAD_BUNDLE_LINK}
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <HardDriveDownload className="h-3.5 w-3.5" />
              Please save your downloaded files in a secure location.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What&apos;s Included</h2>
          <p className="mt-3 text-muted-foreground">
            All 21 projects and their categories in your bundle.
          </p>
        </div>
        <ProductGrid />

        <div className="surface-card mt-10 flex gap-4 p-6">
          <Info className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Before using the files, please read the included README/documentation and check the
            license terms applicable to each project.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <LifeBuoy className="mx-auto h-6 w-6 text-primary" />
          <h2 className="mt-4 text-2xl font-bold">Need Help?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            For download problems, contact:{" "}
            <span className="font-mono text-foreground">{SUPPORT_EMAIL}</span>
          </p>
          <Link to="/" className="mt-6 inline-block text-sm text-primary hover:underline">
            ← Back to CodeVault 21
          </Link>
        </div>
      </section>
    </div>
  );
}
