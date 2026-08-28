import { PRICE } from "./codevault";
import { trackMetaEvent } from "./meta-capi.functions";

type EventName = "PageView" | "InitiateCheckout" | "Purchase";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a Meta event on BOTH the browser Pixel and the Conversions API,
 * sharing one event_id so Meta deduplicates them.
 */
export function fireMetaEvent(
  eventName: EventName,
  opts: { withValue?: boolean; onceKey?: string } = {},
): void {
  if (typeof window === "undefined") return;
  if (opts.onceKey) {
    try {
      if (window.sessionStorage.getItem(opts.onceKey)) return;
      window.sessionStorage.setItem(opts.onceKey, "1");
    } catch {
      /* storage unavailable */
    }
  }
  const eventId = crypto.randomUUID();
  const value = opts.withValue ? 199 : undefined;

  // Browser pixel
  window.fbq?.(
    "track",
    eventName,
    value ? { value, currency: "INR" } : {},
    { eventID: eventId },
  );

  // Server-side Conversions API
  void trackMetaEvent({
    data: {
      eventName,
      eventId,
      sourceUrl: window.location.href,
      ...(value ? { value, currency: "INR" } : {}),
    },
  }).catch(() => {});
}

export const PRICE_VALUE_INR = Number(PRICE.replace(/[^\d.]/g, "")) || 199;
