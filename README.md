# OMNI-APEX: The Schema Governance Engine

"The Source of Truth for the Semantic Web"

Version: 1.0.0
Status: Production / Live
License: Proprietary (See LEGAL_IP.md)

---

## Executive Summary
Omni-Apex is a decentralized schema governance protocol for Shopify Plus and Enterprise merchants. It acts as a stateful middleware that manages and enforces structured data (schema) definitions across a storefront via a secure Vault and client-side Dormant Nodes.

## Architecture
- Core Engine: Node.js + Remix
- Database (Vault): PostgreSQL (Neon/Railway)
- ORM: Prisma
- Frontend: Shopify App Bridge + Polaris
- Injection: Liquid App Embed + Service Worker (Dormant Node)

## Installation & Deployment
### Prerequisites
- Node.js 18+
- PostgreSQL (Neon/Railway)
- Shopify Partner Account

### Environment Variables
The application requires the following environment variables:
- SHOPIFY_API_KEY
- SHOPIFY_API_SECRET
- SCOPES (comma-separated, e.g. write_products,read_themes)
- DATABASE_URL (Postgres connection string)
- HOST or SHOPIFY_APP_URL (public app URL)

### Local commands
```bash
npm install
npm run dev
npm run setup   # run prisma migrations
```

## Deployment
This app is typically deployed to a platform like Railway or Fly. Manage environment variables in the host provider dashboard.

---
Copyright © 2026 Omni Apex Group.


---
