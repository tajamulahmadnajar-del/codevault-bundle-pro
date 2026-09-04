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
function readCookie(name: string): string | undefined {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
    return match?.[1] ? decodeURIComponent(match[1]) : undefined;
  } catch {
    return undefined;
  }
}

/** Builds/reads the _fbc click id from the fbclid URL param or existing cookie. */
function getFbc(): string | undefined {
  try {
    const url = new URL(window.location.href);
    const fbclid = url.searchParams.get("fbclid");
    if (fbclid) {
      const fbc = `fb.1.${Math.floor(Date.now() / 1000)}.${fbclid}`;
      document.cookie = `_fbc=${encodeURIComponent(fbc)}; max-age=7776000; path=/; SameSite=Lax`;
      return fbc;
    }
  } catch {
    /* ignore */
  }
  return readCookie("_fbc");
}

export function fireMetaEvent(
  eventName: EventName,
  opts: { withValue?: boolean; valueInr?: number; onceKey?: string } = {},
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
  const value = opts.withValue ? (opts.valueInr ?? 1499) : undefined;
  const fbp = readCookie("_fbp");
  const fbc = getFbc();

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
      ...(fbp ? { fbp } : {}),
      ...(fbc ? { fbc } : {}),
      ...(value ? { value, currency: "INR" } : {}),
    },
  }).catch(() => {});
}

export const PRICE_VALUE_INR = Number(PRICE.replace(/[^\d.]/g, "")) || 1499;
