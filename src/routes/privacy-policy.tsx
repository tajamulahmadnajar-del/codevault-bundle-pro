import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

const TITLE = "Privacy Policy — CodeVault 21";
const DESCRIPTION =
  "How CodeVault 21 collects, uses and protects customer information during purchase and download.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>
        We collect only the information needed to process your purchase and deliver the CodeVault
        21 download, such as your name, email address and payment reference.
      </p>
      <p>
        Payments are processed by our payment provider. We do not store your card or banking
        details on this website.
      </p>
      <p>
        We do not sell your personal information. Analytics tools may be used to measure website
        and advertising performance.
      </p>
      <p>For any privacy request, contact us using the details on the Contact page.</p>
    </LegalPage>
  ),
});
