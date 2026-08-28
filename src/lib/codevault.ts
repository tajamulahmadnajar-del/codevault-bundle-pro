/**
 * Central configuration for CodeVault 21.
 * Replace the placeholder values below when your links are ready.
 */
export const RAZORPAY_PAYMENT_LINK = "RAZORPAY_PAYMENT_LINK_HERE";
export const DOWNLOAD_BUNDLE_LINK = "DOWNLOAD_BUNDLE_LINK_HERE";
export const SUPPORT_EMAIL = "YOUR_SUPPORT_EMAIL";

/** Analytics placeholders — fill these in to activate tracking. */
export const META_PIXEL_ID = "META_PIXEL_ID";
export const GOOGLE_ANALYTICS_ID = "GOOGLE_ANALYTICS_ID";

export const PRICE = "₹199";

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "ReadyRide", category: "Ride Sharing / Taxi", description: "Ride booking and driver management app codebase.", icon: "Car" },
  { id: 2, name: "RestroPRO SaaS", category: "Restaurant / POS", description: "Restaurant point-of-sale and order management system.", icon: "UtensilsCrossed" },
  { id: 3, name: "ChargePanda", category: "Digital Products / Subscriptions", description: "Sell digital downloads and manage subscriptions.", icon: "CreditCard" },
  { id: 4, name: "66biolinks", category: "Bio Links / URL Shortener", description: "Bio pages, short links, QR codes and web tools.", icon: "Link2" },
  { id: 5, name: "Zender", category: "SMS / WhatsApp SaaS", description: "Messaging gateway platform for SMS and WhatsApp.", icon: "MessageSquare" },
  { id: 6, name: "Blanco", category: "Portfolio / Blog", description: "Clean personal portfolio and blogging platform.", icon: "PenLine" },
  { id: 7, name: "InvoixPro v2.3", category: "Invoice / Payments", description: "Invoicing, billing and payment tracking system.", icon: "ReceiptText" },
  { id: 8, name: "66pusher v23.0.0", category: "Web Push Notifications", description: "Push notification campaigns and subscriber management.", icon: "BellRing" },
  { id: 9, name: "Lozand v1.0.0", category: "HYIP / Trading", description: "Investment, forex, stock and crypto trading platform.", icon: "TrendingUp" },
  { id: 10, name: "Neorous", category: "SaaS / Digital Agency", description: "Modern SaaS and agency website codebase.", icon: "Layers" },
  { id: 11, name: "Ecomus", category: "Fashion eCommerce", description: "Fashion storefront with cart and checkout flows.", icon: "ShoppingBag" },
  { id: 12, name: "BeDrive v3.2.2", category: "File Sharing / Cloud Storage", description: "Cloud drive with sharing, folders and previews.", icon: "CloudUpload" },
  { id: 13, name: "Fowtickets", category: "Support / Ticketing", description: "Helpdesk ticketing and knowledge base system.", icon: "LifeBuoy" },
  { id: 14, name: "ViserBank", category: "Digital Banking", description: "Online banking with accounts, transfers and ledgers.", icon: "Landmark" },
  { id: 15, name: "AdsRock v3.2", category: "Ad Network / Marketing", description: "Advertising network and campaign management.", icon: "Megaphone" },
  { id: 16, name: "MineLab", category: "Cloud Crypto Mining", description: "Cloud mining plans, wallets and payout logic.", icon: "Pickaxe" },
  { id: 17, name: "BetLab v4.0", category: "Sports Betting", description: "Sports betting platform with markets and slips.", icon: "Trophy" },
  { id: 18, name: "66qrcode", category: "AI QR / Barcode Tools", description: "QR/barcode generator with URL shortening tools.", icon: "QrCode" },
  { id: 19, name: "Stocky v5.6", category: "POS / Inventory / HRM", description: "Inventory, sales and staff management suite.", icon: "Boxes" },
  { id: 20, name: "Amelia v9.7", category: "Appointment Booking", description: "Bookings, calendars and service scheduling.", icon: "CalendarCheck" },
  { id: 21, name: "Homzen v1.3.9", category: "Real Estate / Laravel", description: "Property listings, agents and enquiry management.", icon: "Home" },
];
