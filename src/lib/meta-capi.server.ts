import { createHash } from "crypto";

export type MetaEventName = "PageView" | "InitiateCheckout" | "Purchase";

export type MetaEventPayload = {
  eventName: MetaEventName;
  eventId: string;
  sourceUrl: string;
  clientIp?: string | undefined;
  userAgent?: string | undefined;
  value?: number | undefined;
  currency?: string | undefined;
};

function sha256(input: string): string {
  return createHash("sha256").update(input.trim().toLowerCase()).digest("hex");
}

/** Sends one event to the Meta Conversions API. Never throws — tracking must not break the app. */
export async function sendMetaCapiEvent(payload: MetaEventPayload): Promise<void> {
  const accessToken = process.env["META_CAPI_ACCESS_TOKEN"];
  const pixelId = process.env["META_PIXEL_ID"] ?? "2104861433763990";
  if (!accessToken) return;

  const userData: Record<string, string> = {};
  if (payload.clientIp) userData["client_ip_address"] = payload.clientIp;
  if (payload.userAgent) userData["client_user_agent"] = payload.userAgent;

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
    await fetch(`https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    // Tracking failures are intentionally silent.
  }
}

// re-export to keep the functions file a thin wrapper without unused imports
export { sha256 };
