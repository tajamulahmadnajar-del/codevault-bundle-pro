import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

const TITLE = "Refund Policy — CodeVault 21";
const DESCRIPTION =
  "Refund terms for the CodeVault 21 digital source code bundle, including how to raise a request.";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refund-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: () => (
    <LegalPage title="Refund Policy">
      <p>
        CodeVault 21 is a digital product delivered immediately after successful payment. Because
        the files can be downloaded instantly, purchases are generally non-refundable.
      </p>
      <p>
        If you were charged more than once, or if the download link does not work, contact support
        and we will resolve the issue or issue a refund for the duplicate charge.
      </p>
      <p>Refund requests should be raised within 7 days of purchase with your payment reference.</p>
    </LegalPage>
  ),
});
