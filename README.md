# OMNI-APEX: The Schema Governance Engine
### "The Source of Truth for the Semantic Web"

**Version:** 1.0.0 (Apex Candidate)
**Status:** Production / Live
**License:** Proprietary (See LEGAL_IP.md)

---

## 1. Executive Summary
Omni-Apex is a decentralized schema governance protocol designed for Shopify Plus and Enterprise merchants. Unlike traditional SEO plugins that inject static JSON-LD, Omni-Apex acts as a **Stateful Middleware**, creating a "Vault" of schema definitions that enforces data integrity across the storefront.

## 2. The Architecture (Layer 1: Control Plane)

We utilize a "Split Brain" architecture to ensure security and speed:

* **Core Engine:** `Node.js` running `Remix` (React Framework).
* **The Vault:** `PostgreSQL` (hosted on Neon.tech). Ensures ACID compliance for schema definitions.
* **ORM:** `Prisma`. Guarantees type safety between the App and the Database.
* **Frontend:** `Shopify App Bridge` + `Polaris` (Brutalist Mode).
* **Injection:** `Liquid App Embed` + `Service Worker` (The "Dormant Node").

## 3. Installation & Deployment

### Prerequisites
* Node.js 18+
* PostgreSQL Database (Neon/Railway)
* Shopify Partner Account

### Environment Variables
The application requires the following keys in `.env` (Local) or Railway Variables (Production):
* `SHOPIFY_API_KEY`
* `SHOPIFY_API_SECRET`
* `SCOPES` (write_products, read_themes)
* `DATABASE_URL` (Postgres Connection String)
* `HOST` (The public domain)

### Commands
```bash
npm install       # Install dependencies
npm run dev       # Start local development
npm run setup     # Run Prisma migrations
git push          # Deploy to Railway (via GitHub Hook)



3.  `git push -u origin main`
