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

export const PRICE = "₹199";


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

import readyrideImg from "@/assets/products/readyride.jpg.asset.json";
import ecomusImg from "@/assets/products/ecomus.jpg.asset.json";
import betlabImg from "@/assets/products/betlab.jpg.asset.json";
import qrcode66Img from "@/assets/products/qrcode66.jpg.asset.json";
import stockyImg from "@/assets/products/stocky.jpg.asset.json";
import ameliaImg from "@/assets/products/amelia.png.asset.json";
import homzenImg from "@/assets/products/homzen.png.asset.json";
import restroproImg from "@/assets/products/restropro.jpg.asset.json";
import chargepandaImg from "@/assets/products/chargepanda.jpg.asset.json";
import biolinks66Img from "@/assets/products/biolinks66.jpg.asset.json";
import zenderImg from "@/assets/products/zender.png.asset.json";

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
  { id: 1, name: "Ride Booking System", category: "Ride Sharing / Taxi", description: "Ride booking and driver management app codebase.", icon: "Car", demoUrl: "DEMO_URL_HERE", image: readyrideImg.url },
  { id: 2, name: "Restaurant Management Script", category: "Restaurant / POS", description: "Restaurant point-of-sale and order management system.", icon: "UtensilsCrossed", demoUrl: "DEMO_URL_HERE", image: restroproImg.url },
  { id: 3, name: "Digital Products Selling Script", category: "Digital Products / Subscriptions", description: "Sell digital downloads and manage subscriptions.", icon: "CreditCard", demoUrl: "DEMO_URL_HERE", image: chargepandaImg.url },
  { id: 4, name: "Bio Link & URL Tools Script", category: "Bio Links / URL Shortener", description: "Bio pages, short links, QR codes and web tools.", icon: "Link2", demoUrl: "DEMO_URL_HERE", image: biolinks66Img.url },
  { id: 5, name: "SMS & WhatsApp Messaging Script", category: "SMS / WhatsApp SaaS", description: "Messaging gateway platform for SMS and WhatsApp.", icon: "MessageSquare", demoUrl: "DEMO_URL_HERE", image: zenderImg.url },
  { id: 6, name: "Portfolio & Blog Script", category: "Portfolio / Blog", description: "Clean personal portfolio and blogging platform.", icon: "PenLine", demoUrl: "DEMO_URL_HERE", image: blancoImg.url },
  { id: 7, name: "Invoice & Billing Script", category: "Invoice / Payments", description: "Invoicing, billing and payment tracking system.", icon: "ReceiptText", demoUrl: "DEMO_URL_HERE", image: invoixproImg.url },
  { id: 8, name: "Push Notification Script", category: "Web Push Notifications", description: "Push notification campaigns and subscriber management.", icon: "BellRing", demoUrl: "DEMO_URL_HERE", image: pusher66Img.url },
  { id: 9, name: "Trading & Investment Script", category: "HYIP / Trading", description: "Investment, forex, stock and crypto trading platform.", icon: "TrendingUp", demoUrl: "DEMO_URL_HERE", image: lozandImg.url },
  { id: 10, name: "SaaS & Agency Website Script", category: "SaaS / Digital Agency", description: "Modern SaaS and agency website codebase.", icon: "Layers", demoUrl: "DEMO_URL_HERE", image: neorousImg.url },
  { id: 11, name: "eCommerce Store Script", category: "Fashion eCommerce", description: "Fashion storefront with cart and checkout flows.", icon: "ShoppingBag", demoUrl: "DEMO_URL_HERE", image: ecomusImg.url },
  { id: 12, name: "Cloud Storage Script", category: "File Sharing / Cloud Storage", description: "Cloud drive with sharing, folders and previews.", icon: "CloudUpload", demoUrl: "DEMO_URL_HERE", image: bedriveImg.url },
  { id: 13, name: "Support Ticket Script", category: "Support / Ticketing", description: "Helpdesk ticketing and knowledge base system.", icon: "LifeBuoy", demoUrl: "DEMO_URL_HERE", image: fowticketsImg.url },
  { id: 14, name: "Banking Management Script", category: "Digital Banking", description: "Online banking with accounts, transfers and ledgers.", icon: "Landmark", demoUrl: "DEMO_URL_HERE", image: viserbankImg.url },
  { id: 15, name: "Ads & Buy-Sell Script", category: "Ad Network / Marketing", description: "Advertising network and campaign management.", icon: "Megaphone", demoUrl: "DEMO_URL_HERE", image: adsrockImg.url },
  { id: 16, name: "Crypto Mining Script", category: "Cloud Crypto Mining", description: "Cloud mining plans, wallets and payout logic.", icon: "Pickaxe", demoUrl: "DEMO_URL_HERE", image: minelabImg.url },
  { id: 17, name: "Betting Management Script", category: "Sports Betting", description: "Sports betting platform with markets and slips.", icon: "Trophy", demoUrl: "DEMO_URL_HERE", image: betlabImg.url },
  { id: 18, name: "QR Code Generator Script", category: "AI QR / Barcode Tools", description: "QR/barcode generator with URL shortening tools.", icon: "QrCode", demoUrl: "DEMO_URL_HERE", image: qrcode66Img.url },
  { id: 19, name: "Inventory & POS Script", category: "POS / Inventory / HRM", description: "Inventory, sales and staff management suite.", icon: "Boxes", demoUrl: "DEMO_URL_HERE", image: stockyImg.url },
  { id: 20, name: "Appointment Booking Script", category: "Appointment Booking", description: "Bookings, calendars and service scheduling.", icon: "CalendarCheck", demoUrl: "DEMO_URL_HERE", image: ameliaImg.url },
  { id: 21, name: "Real Estate Listing Script", category: "Real Estate / Laravel", description: "Property listings, agents and enquiry management.", icon: "Home", demoUrl: "DEMO_URL_HERE", image: homzenImg.url },
];
