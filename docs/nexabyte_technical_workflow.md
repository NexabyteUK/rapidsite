# Nexabyte Technical Workflow & Compliance Guide

*Version 1.2 – 5 July 2025*

---

## 1 Overview

This guide details the end‑to‑end technical process for delivering, hosting, and maintaining Boost/Grow client websites built on a **React + Vite** stack, plus the relevant compliance documents (Support SLA, Data Processing Addendum, Buy‑Out Licence). It complements the **Pay‑Monthly Website Playbook** and **Launch Action List**.

---

## 2 Repository & Branch Strategy

| Layer                   | Pattern                               | Purpose                                                                                                   |
| :---------------------- | :------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| **GitHub Organisation** | `nexabyte-clients`                    | Keeps all client repos segregated from core code.                                                         |
| **Repo per client** | `client‑{slug}` (private)             | Source of truth for that site. Access: Dev + Support.                                                     |
| **Default branches** | `main` (protected) `staging`          | PRs merge to `staging` → preview build; once approved, squash‑merge to `main` triggers production deploy. |
| **Environment secrets** | GitHub → Settings → Encrypted secrets | CF\_API\_TOKEN, CF\_ACCOUNT\_ID, SUPABASE\_URL, etc.                                            |

> **Segregation**: Each client gets isolation at both repo and Cloudflare Project level. No cross‑access.

---

## 3 CI/CD Pipeline

### 3.1 GitHub Actions

```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [ main, staging ]
  workflow_dispatch:

jobs:
  build_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install pnpm
        uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm run build
      - name: Publish to Cloudflare
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          projectName: ${{ secrets.CF_PROJECT }}
          directory: ./dist # Vite build output