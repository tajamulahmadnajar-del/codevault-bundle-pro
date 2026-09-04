/**
 * Google Analytics 4 (GA4) event helper.
 *
 * gtag.js is loaded by <Analytics /> (src/components/analytics.tsx) with the
 * measurement ID from src/lib/codevault.ts. This helper pushes events onto
 * the shared dataLayer so GA4 reports them (purchase, begin_checkout, etc.).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function fireGaEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  // Preferred path: the real gtag.js shim loaded by <Analytics />.
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }

  // Fallback: gtag.js not ready yet — gtag.js picks queued events up
  // from the dataLayer once it loads.
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", name, params]);
  } catch {
    /* dataLayer unavailable */
  }
}

/** Standard GA4 purchase payload for the CodeVault 21 bundle. */
export function fireGaPurchase(transactionId: string): void {
  fireGaEvent("purchase", {
    transaction_id: transactionId,
    value: 1499,
    currency: "INR",
    items: [
      {
        item_id: "codevault-21",
        item_name: "CodeVault 21",
        price: 1499,
        quantity: 1,
      },
    ],
  });
}
