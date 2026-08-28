import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

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
        CodeVault 21 is a digital bundle of 21 source-code projects delivered as downloadable
        files after a successful one-time payment of ₹199.
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
    </LegalPage>
  ),
});
