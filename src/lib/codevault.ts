/**
 * Central configuration for CodeVault 21.
 * Replace the placeholder values below when your links are ready.
 */
export const RAZORPAY_PAYMENT_LINK = "https://pages.razorpay.com/pl_TVCIwKJ4kXcTxU/view";
/** Google Drive bundle download — shown on the thank-you page after payment. */
export const DOWNLOAD_BUNDLE_LINK =
  "https://drive.google.com/file/d/1p3oHMFE6ys8GwsS0iviRvBUYl6InwelH/view?usp=drivesdk";
/** Direct-download version of the Drive link (skips the Drive preview page). */
export const DOWNLOAD_BUNDLE_DIRECT_LINK =
  "https://drive.google.com/uc?export=download&id=1p3oHMFE6ys8GwsS0iviRvBUYl6InwelH";
/** Offline PDF instructions containing the download links. */
export const DOWNLOAD_PDF_LINK = "/codevault-21-download.pdf";
export const SUPPORT_EMAIL = "tajamulahmadnajar@gmail.com";

/** Analytics placeholders — fill these in to activate tracking. */
export const META_PIXEL_ID = "2104861433763990";
export const GOOGLE_ANALYTICS_ID = "G-6D5BJBFZ6D";

export const PRICE = "₹1,499";
/** Per-source-code pricing used across the page. */
export const PER_ITEM_ORIGINAL = "₹2,499";
export const PER_ITEM_SALE = "₹74.97";
export const DISCOUNT_LABEL = "97% off";
/** 20 paid source codes at ₹74.97 each = ₹1,499 (rounded). */
export const PAID_ITEM_COUNT = 20;
export const BONUS_ITEM_COUNT = 3;
export const PRICE_ORIGINAL = "₹49,980";


import neorousImg from "@/assets/products/neorous.jpg";
import lozandImg from "@/assets/products/lozand.jpg";
import pusher66Img from "@/assets/products/pusher66.webp";
import invoixproImg from "@/assets/products/invoixpro.jpg";
import blancoImg from "@/assets/products/blanco.jpg";
import minelabImg from "@/assets/products/minelab.jpg";
import adsrockImg from "@/assets/products/adsrock.webp";
import viserbankImg from "@/assets/products/viserbank.jpg";
import fowticketsImg from "@/assets/products/fowtickets.jpg";
import bedriveImg from "@/assets/products/bedrive.jpg";

import readyrideImg from "@/assets/products/readyride.jpg";
import ecomusImg from "@/assets/products/ecomus.jpg";
import betlabImg from "@/assets/products/betlab.jpg";
import qrcode66Img from "@/assets/products/qrcode66.jpg";
import stockyImg from "@/assets/products/stocky.jpg";
import ameliaImg from "@/assets/products/amelia.png";
import homzenImg from "@/assets/products/homzen.png";
import restroproImg from "@/assets/products/restropro.jpg";
import chargepandaImg from "@/assets/products/chargepanda.jpg";
import biolinks66Img from "@/assets/products/biolinks66.jpg";
import zenderImg from "@/assets/products/zender.png";

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  /**
   * Live demo URL for this project (hosted frontend/backend demo).
   * Paste the real demo link here — while it is a placeholder,
   * the demo button stays hidden on the landing page automatically.
   */
  demoUrl: string;
  /** Optional preview screenshot for the product card. */
  image?: string;
};

/**
 * Returns the demo URL for a product, or null if it is still a placeholder.
 * Keeps placeholder values from leaking onto the live page as broken links.
 */
export function getDemoUrl(p: Product): string | null {
  const url = p.demoUrl.trim();
  if (!url || url.includes("HERE") || url.includes("DEMO_URL")) return null;
  return url;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: "Ride Booking System", category: "Ride Sharing / Taxi", description: "Ride booking and driver management app codebase.", icon: "Car", demoUrl: "DEMO_URL_HERE", image: readyrideImg },
  { id: 2, name: "Restaurant Management Script", category: "Restaurant / POS", description: "Restaurant point-of-sale and order management system.", icon: "UtensilsCrossed", demoUrl: "https://restroprosaas.uiflow.in/", image: restroproImg },
  { id: 3, name: "Digital Products Selling Script", category: "Digital Products / Subscriptions", description: "Sell digital downloads and manage subscriptions.", icon: "CreditCard", demoUrl: "DEMO_URL_HERE", image: chargepandaImg },
  { id: 4, name: "Bio Link & URL Tools Script", category: "Bio Links / URL Shortener", description: "Bio pages, short links, QR codes and web tools.", icon: "Link2", demoUrl: "DEMO_URL_HERE", image: biolinks66Img },
  { id: 5, name: "SMS & WhatsApp Messaging Script", category: "SMS / WhatsApp SaaS", description: "Messaging gateway platform for SMS and WhatsApp.", icon: "MessageSquare", demoUrl: "DEMO_URL_HERE", image: zenderImg },
  { id: 6, name: "Portfolio & Blog Script", category: "Portfolio / Blog", description: "Clean personal portfolio and blogging platform.", icon: "PenLine", demoUrl: "DEMO_URL_HERE", image: blancoImg },
  { id: 7, name: "Invoice & Billing Script", category: "Invoice / Payments", description: "Invoicing, billing and payment tracking system.", icon: "ReceiptText", demoUrl: "https://invoixpro1.stackful.dev/login", image: invoixproImg },
  { id: 8, name: "Push Notification Script", category: "Web Push Notifications", description: "Push notification campaigns and subscriber management.", icon: "BellRing", demoUrl: "DEMO_URL_HERE", image: pusher66Img },
  { id: 9, name: "Trading & Investment Script", category: "HYIP / Trading", description: "Investment, forex, stock and crypto trading platform.", icon: "TrendingUp", demoUrl: "DEMO_URL_HERE", image: lozandImg },
  { id: 10, name: "SaaS & Agency Website Script", category: "SaaS / Digital Agency", description: "Modern SaaS and agency website codebase.", icon: "Layers", demoUrl: "DEMO_URL_HERE", image: neorousImg },
  { id: 11, name: "eCommerce Store Script", category: "Fashion eCommerce", description: "Fashion storefront with cart and checkout flows.", icon: "ShoppingBag", demoUrl: "DEMO_URL_HERE", image: ecomusImg },
  { id: 12, name: "Cloud Storage Script", category: "File Sharing / Cloud Storage", description: "Cloud drive with sharing, folders and previews.", icon: "CloudUpload", demoUrl: "DEMO_URL_HERE", image: bedriveImg },
  { id: 13, name: "Support Ticket Script", category: "Support / Ticketing", description: "Helpdesk ticketing and knowledge base system.", icon: "LifeBuoy", demoUrl: "https://demo.vironeer.com/fowtickets/", image: fowticketsImg },
  { id: 14, name: "Banking Management Script", category: "Digital Banking", description: "Online banking with accounts, transfers and ledgers.", icon: "Landmark", demoUrl: "DEMO_URL_HERE", image: viserbankImg },
  { id: 15, name: "Ads & Buy-Sell Script", category: "Ad Network / Marketing", description: "Advertising network and campaign management.", icon: "Megaphone", demoUrl: "DEMO_URL_HERE", image: adsrockImg },
  { id: 16, name: "Crypto Mining Script", category: "Cloud Crypto Mining", description: "Cloud mining plans, wallets and payout logic.", icon: "Pickaxe", demoUrl: "DEMO_URL_HERE", image: minelabImg },
  { id: 17, name: "Betting Management Script", category: "Sports Betting", description: "Sports betting platform with markets and slips.", icon: "Trophy", demoUrl: "DEMO_URL_HERE", image: betlabImg },
  { id: 18, name: "QR Code Generator Script", category: "AI QR / Barcode Tools", description: "QR/barcode generator with URL shortening tools.", icon: "QrCode", demoUrl: "DEMO_URL_HERE", image: qrcode66Img },
  { id: 19, name: "Inventory & POS Script", category: "POS / Inventory / HRM", description: "Inventory, sales and staff management suite.", icon: "Boxes", demoUrl: "https://demo.getstocky.com/login", image: stockyImg },
  { id: 20, name: "Appointment Booking Script", category: "Appointment Booking", description: "Bookings, calendars and service scheduling.", icon: "CalendarCheck", demoUrl: "DEMO_URL_HERE", image: ameliaImg },
  { id: 21, name: "Real Estate Listing Script", category: "Real Estate / Laravel", description: "Property listings, agents and enquiry management.", icon: "Home", demoUrl: "DEMO_URL_HERE", image: homzenImg },
];

/** Broad category groups used to organise the product grid on the homepage. */
export const PRODUCT_GROUPS = [
  "Business & Operations",
  "eCommerce & Selling",
  "Finance & Fintech",
  "Marketing & Growth",
  "Websites & SaaS",
  "Tools & Utilities",
] as const;

export type ProductGroup = (typeof PRODUCT_GROUPS)[number];

const GROUP_BY_ID: Record<number, ProductGroup> = {
  1: "Business & Operations",
  2: "Business & Operations",
  13: "Business & Operations",
  19: "Business & Operations",
  20: "Business & Operations",
  3: "eCommerce & Selling",
  11: "eCommerce & Selling",
  7: "Finance & Fintech",
  9: "Finance & Fintech",
  14: "Finance & Fintech",
  16: "Finance & Fintech",
  17: "Finance & Fintech",
  4: "Marketing & Growth",
  5: "Marketing & Growth",
  8: "Marketing & Growth",
  15: "Marketing & Growth",
  6: "Websites & SaaS",
  10: "Websites & SaaS",
  21: "Websites & SaaS",
  12: "Tools & Utilities",
  18: "Tools & Utilities",
};

export function getGroup(p: Product): ProductGroup {
  return GROUP_BY_ID[p.id] ?? "Tools & Utilities";
}

/** Products bucketed by group, preserving the order of PRODUCT_GROUPS. */
export function getGroupedProducts(): { group: ProductGroup; items: Product[] }[] {
  return PRODUCT_GROUPS.map((group) => ({
    group,
    items: PRODUCTS.filter((p) => getGroup(p) === group),
  })).filter((g) => g.items.length > 0);
}
