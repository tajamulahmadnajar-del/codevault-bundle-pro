/**
 * Central configuration for CodeVault 21.
 * Replace the placeholder values below when your links are ready.
 */
export const RAZORPAY_PAYMENT_LINK = "https://pages.razorpay.com/pl_TVCIwKJ4kXcTxU/view";
/** Google Drive bundle download — shown on the thank-you page after payment. */
export const DOWNLOAD_BUNDLE_LINK =
  "https://drive.google.com/file/d/1p3oHMFE6ys8GwsS0iviRvBUYl6InwelH/view?usp=drivesdk";
export const SUPPORT_EMAIL = "YOUR_SUPPORT_EMAIL";

/** Analytics placeholders — fill these in to activate tracking. */
export const META_PIXEL_ID = "2104861433763990";
export const GOOGLE_ANALYTICS_ID = "GOOGLE_ANALYTICS_ID";

export const PRICE = "₹199";
/** Original (crossed-out) price shown next to the discounted price. */
export const ORIGINAL_PRICE = "₹3,999";

import neorousImg from "@/assets/products/neorous.jpg.asset.json";
import lozandImg from "@/assets/products/lozand.jpg.asset.json";
import pusher66Img from "@/assets/products/pusher66.webp.asset.json";
import invoixproImg from "@/assets/products/invoixpro.jpg.asset.json";
import blancoImg from "@/assets/products/blanco.jpg.asset.json";
import minelabImg from "@/assets/products/minelab.jpg.asset.json";
import adsrockImg from "@/assets/products/adsrock.webp.asset.json";
import viserbankImg from "@/assets/products/viserbank.jpg.asset.json";
import fowticketsImg from "@/assets/products/fowtickets.jpg.asset.json";
import bedriveImg from "@/assets/products/bedrive.jpg.asset.json";

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
  { id: 1, name: "ReadyRide", category: "Ride Sharing / Taxi", description: "Ride booking and driver management app codebase.", icon: "Car", demoUrl: "DEMO_URL_HERE" },
  { id: 2, name: "RestroPRO SaaS", category: "Restaurant / POS", description: "Restaurant point-of-sale and order management system.", icon: "UtensilsCrossed", demoUrl: "DEMO_URL_HERE" },
  { id: 3, name: "ChargePanda", category: "Digital Products / Subscriptions", description: "Sell digital downloads and manage subscriptions.", icon: "CreditCard", demoUrl: "DEMO_URL_HERE" },
  { id: 4, name: "66biolinks", category: "Bio Links / URL Shortener", description: "Bio pages, short links, QR codes and web tools.", icon: "Link2", demoUrl: "DEMO_URL_HERE" },
  { id: 5, name: "Zender", category: "SMS / WhatsApp SaaS", description: "Messaging gateway platform for SMS and WhatsApp.", icon: "MessageSquare", demoUrl: "DEMO_URL_HERE" },
  { id: 6, name: "Blanco", category: "Portfolio / Blog", description: "Clean personal portfolio and blogging platform.", icon: "PenLine", demoUrl: "DEMO_URL_HERE", image: blancoImg.url },
  { id: 7, name: "InvoixPro", category: "Invoice / Payments", description: "Invoicing, billing and payment tracking system.", icon: "ReceiptText", demoUrl: "DEMO_URL_HERE", image: invoixproImg.url },
  { id: 8, name: "66pusher", category: "Web Push Notifications", description: "Push notification campaigns and subscriber management.", icon: "BellRing", demoUrl: "DEMO_URL_HERE", image: pusher66Img.url },
  { id: 9, name: "Lozand", category: "HYIP / Trading", description: "Investment, forex, stock and crypto trading platform.", icon: "TrendingUp", demoUrl: "DEMO_URL_HERE", image: lozandImg.url },
  { id: 10, name: "Neorous", category: "SaaS / Digital Agency", description: "Modern SaaS and agency website codebase.", icon: "Layers", demoUrl: "DEMO_URL_HERE", image: neorousImg.url },
  { id: 11, name: "Ecomus", category: "Fashion eCommerce", description: "Fashion storefront with cart and checkout flows.", icon: "ShoppingBag", demoUrl: "DEMO_URL_HERE" },
  { id: 12, name: "BeDrive", category: "File Sharing / Cloud Storage", description: "Cloud drive with sharing, folders and previews.", icon: "CloudUpload", demoUrl: "DEMO_URL_HERE", image: bedriveImg.url },
  { id: 13, name: "Fowtickets", category: "Support / Ticketing", description: "Helpdesk ticketing and knowledge base system.", icon: "LifeBuoy", demoUrl: "DEMO_URL_HERE", image: fowticketsImg.url },
  { id: 14, name: "ViserBank", category: "Digital Banking", description: "Online banking with accounts, transfers and ledgers.", icon: "Landmark", demoUrl: "DEMO_URL_HERE", image: viserbankImg.url },
  { id: 15, name: "AdsRock", category: "Ad Network / Marketing", description: "Advertising network and campaign management.", icon: "Megaphone", demoUrl: "DEMO_URL_HERE", image: adsrockImg.url },
  { id: 16, name: "MineLab", category: "Cloud Crypto Mining", description: "Cloud mining plans, wallets and payout logic.", icon: "Pickaxe", demoUrl: "DEMO_URL_HERE", image: minelabImg.url },
  { id: 17, name: "BetLab", category: "Sports Betting", description: "Sports betting platform with markets and slips.", icon: "Trophy", demoUrl: "DEMO_URL_HERE" },
  { id: 18, name: "66qrcode", category: "AI QR / Barcode Tools", description: "QR/barcode generator with URL shortening tools.", icon: "QrCode", demoUrl: "DEMO_URL_HERE" },
  { id: 19, name: "Stocky", category: "POS / Inventory / HRM", description: "Inventory, sales and staff management suite.", icon: "Boxes", demoUrl: "DEMO_URL_HERE" },
  { id: 20, name: "Amelia", category: "Appointment Booking", description: "Bookings, calendars and service scheduling.", icon: "CalendarCheck", demoUrl: "DEMO_URL_HERE" },
  { id: 21, name: "Homzen", category: "Real Estate / Laravel", description: "Property listings, agents and enquiry management.", icon: "Home", demoUrl: "DEMO_URL_HERE" },
];
