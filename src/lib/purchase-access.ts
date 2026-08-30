/**
 * Lightweight access gate for the thank-you / download page.
 *
 * The page must not be reachable by simply typing the URL. Access is granted
 * only when either:
 *  - the visitor started checkout from this site (flag set on the Buy click), or
 *  - Razorpay redirected back with payment params in the URL.
 *
 * Note: this is a client-side gate (no server-side order verification is
 * possible with a Razorpay hosted payment page). It stops casual URL access
 * and search-engine/direct visits, not a determined user.
 */

const KEY = "cv21_checkout_started";
const MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

export function markCheckoutStarted(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, String(Date.now()));
  } catch {
    /* storage unavailable */
  }
}

function hasRazorpayRedirectParams(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return (
    params.has("razorpay_payment_id") ||
    params.has("razorpay_payment_link_id") ||
    params.get("paid") === "1"
  );
}

/**
 * True only when the visitor actually came back from a completed payment
 * (Razorpay redirect params or ?paid=1). Used to fire the Purchase event —
 * merely opening the page after clicking Buy must NOT count as a purchase.
 */
export function hasPaymentConfirmation(): boolean {
  return hasRazorpayRedirectParams();
}

export function hasPurchaseAccess(): boolean {
  if (typeof window === "undefined") return false;
  if (hasRazorpayRedirectParams()) {
    markCheckoutStarted();
    return true;
  }
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return false;
    return Date.now() - Number(raw) < MAX_AGE_MS;
  } catch {
    return false;
  }
}
