import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getRequestHeader } from "@tanstack/react-start/server";
import { sendMetaCapiEvent } from "./meta-capi.server";

const eventSchema = z.object({
  eventName: z.enum(["PageView", "InitiateCheckout", "Purchase"]),
  eventId: z.string().min(1),
  sourceUrl: z.string().url(),
  fbp: z.string().optional(),
  fbc: z.string().optional(),
  value: z.number().optional(),
  currency: z.string().optional(),
});

/** Meta Conversions API bridge — fires server-side events that match browser pixel events. */
export const trackMetaEvent = createServerFn({ method: "POST" })
  .inputValidator((data) => eventSchema.parse(data))
  .handler(async ({ data }) => {
    await sendMetaCapiEvent({
      ...data,
      clientIp: getRequestHeader("cf-connecting-ip") ?? getRequestHeader("x-forwarded-for") ?? undefined,
      userAgent: getRequestHeader("user-agent") ?? undefined,
    });
    return { ok: true };
  });
