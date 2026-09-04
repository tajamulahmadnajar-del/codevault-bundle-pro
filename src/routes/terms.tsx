import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/codevault";

const TITLE = "Terms & Conditions — CodeVault 21";
const DESCRIPTION =
  "Terms governing the purchase and use of the CodeVault 21 source code bundle.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage title="Terms & Conditions">
      <p>
        CodeVault 21 is a digital bundle of 23 source-code projects delivered as downloadable
        files after a successful one-time payment of ₹1,499.
      </p>
      <p>
        Each project may carry its own license, dependencies and technical requirements. You are
        responsible for reviewing and complying with the license terms of each project before
        using, modifying, deploying or redistributing it.
      </p>
      <p>
        Installation, customization and ongoing support are not included unless explicitly stated.
        Future updates are not part of this purchase unless explicitly stated.
      </p>
      <p>Sharing, reselling or redistributing the bundle itself is not permitted.</p>
      <p>
        <strong>Disclaimer:</strong> CodeVault 21 is provided &ldquo;as is&rdquo; for learning and
        development purposes. No guarantee of specific results, income or business outcomes is
        made. Vitcz Codes is an independent seller and is not affiliated with or endorsed by Meta,
        Facebook, Instagram, Google, Razorpay or any other platform.
      </p>
      <p>
        Questions about these terms? Contact us at{" "}
        <span className="font-mono text-foreground">{SUPPORT_EMAIL}</span>.
      </p>
    </LegalPage>
  ),
});
