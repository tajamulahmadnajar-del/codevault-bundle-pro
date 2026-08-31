import { createHash } from "crypto";

export type MetaEventName = "PageView" | "InitiateCheckout" | "Purchase";

export type MetaEventPayload = {
  eventName: MetaEventName;
  eventId: string;
  sourceUrl: string;
  clientIp?: string | undefined;
  userAgent?: string | undefined;
  fbp?: string | undefined;
  fbc?: string | undefined;
  value?: number | undefined;
  currency?: string | undefined;
};

function sha256(input: string): string {
  return createHash("sha256").update(input.trim().toLowerCase()).digest("hex");
}

/** Sends one event to the Meta Conversions API. Never throws — tracking must not break the app. */
export async function sendMetaCapiEvent(
  payload: MetaEventPayload,
): Promise<{ sent: boolean; reason?: string; status?: number }> {
  // Hard-coded fallback so the app works on any hosting without extra env setup.
  // Server-only file (*.server.ts is never bundled into the browser).
  const FALLBACK_TOKEN =
    "EAAWDJ2SwGhoBST9fa25LeGDo9dGtiy75KSvZAeDevYUj1GILr5Sfe6QY9MZAfInCsqqriqe0XDRV33P5JPAmusQ6kn4RNH82qS3tSw5ooKV98sGdC87t3xrH4SpeU0q0NqTHMAs9ApsFeNXwgP9GMyd40gf2f4kaqISbeD8fRFHxOnCOZCZB26lBK7Q2DwZDZD";
  const accessToken = process.env["META_CAPI_ACCESS_TOKEN"] ?? FALLBACK_TOKEN;
  const pixelId = process.env["META_PIXEL_ID"] ?? "2104861433763990";
  if (!accessToken) return { sent: false, reason: "missing_META_CAPI_ACCESS_TOKEN" };

  const userData: Record<string, string> = {};
  if (payload.clientIp) userData["client_ip_address"] = payload.clientIp;
  if (payload.userAgent) userData["client_user_agent"] = payload.userAgent;
  // Meta click/browser identifiers — needed for attribution & optimization.
  if (payload.fbp) userData["fbp"] = payload.fbp;
  if (payload.fbc) userData["fbc"] = payload.fbc;

  const body = {
    data: [
      {
        event_name: payload.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventId,
        action_source: "website",
        event_source_url: payload.sourceUrl,
        user_data: userData,
        ...(payload.value != null
          ? { custom_data: { value: payload.value, currency: payload.currency ?? "INR" } }
          : {}),
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    return { sent: res.ok, status: res.status };
  } catch {
    // Tracking failures are intentionally silent.
    return { sent: false, reason: "network_error" };
  }
}


// re-export to keep the functions file a thin wrapper without unused imports
export { sha256 };
