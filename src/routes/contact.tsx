import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/codevault";

const TITLE = "Contact — CodeVault 21 Support";
const DESCRIPTION =
  "Get in touch about CodeVault 21 purchases, download issues or licensing questions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <LegalPage title="Contact">
      <p>
        For purchase, download or licensing questions, email:{" "}
        <span className="font-mono text-foreground">{SUPPORT_EMAIL}</span>
      </p>
      <p>
        Please include your payment reference so we can locate your order quickly. We reply to
        support emails as soon as possible.
      </p>
    </LegalPage>
  ),
});
