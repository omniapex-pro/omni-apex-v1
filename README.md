# OMNI-APEX: The Schema Governance Engine
### "The Source of Truth for the Semantic Web"

**Version:** 1.0.0 (Apex Candidate)
**Status:** Production / Live
**License:** Proprietary (See LEGAL_IP.md)

## 1. Executive Summary
Omni-Apex is a decentralized schema governance protocol designed for Shopify Plus. Unlike SEO plugins, it acts as a **Stateful Middleware**, utilizing a "Vault" (Postgres) and "Dormant Node" (Service Worker) to enforce data integrity.

## 2. Architecture
* **Control Plane:** Remix + Postgres (Railway).
* **Data Plane:** Service Worker Grid (Client-Side).
* **ORM:** Prisma.

## 3. Deployment
This app is deployed on Railway. Environment variables (SHOPIFY_API_KEY, DATABASE_URL) are managed in the Railway Dashboard, not in the repo.

**Copyright © 2026 Omni Apex Group.**
