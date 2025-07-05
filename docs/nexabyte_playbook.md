# Nexabyte Pay‑Monthly Website Playbook

*Version 1.2 – 5 July 2025*

---

## 1 Offer at a glance

-   **Two plans. Two prices.**
    -   **Boost Plan** £109 / month × 12 mo
    -   **Grow Plan** £ 99 / month × 18 mo
-   First month's fee paid upfront (not a deposit).
-   Design, build, hosting, edits & support all rolled in.
-   Auto‑renews at £49 / month Sustain Plan (month‑to‑month; cancel any time with 30 days’ notice).

---

## 2 Pricing table

| Plan           | Monthly fee | Minimum term | Build time | What’s included                                                                             | After term              |
| -------------- | ----------- | ------------ | ---------- | ------------------------------------------------------------------------------------------- | ----------------------- |
| **Boost Plan** | **£109** | 12 months    | 7 days     | Design, build, secure hosting, SSL, unlimited small edits, next‑business‑day ticket support | £49 Sustain Plan m‑to‑m |
| **Grow Plan** | **£ 99** | 18 months    | 7 days     | *Same as above*                                                                             | £49 Sustain Plan m‑to‑m |

### Sustain Plan – what’s included

The **Sustain Plan** is our on‑going care package that begins when your Boost or Grow term ends. For **£49 per month** (month‑to‑month, cancel any time with 30 days’ notice) you receive:

-   Fully managed hosting on Nexabyte’s infrastructure with unlimited UK/EU bandwidth
-   Nexabyte’s billing platform will automatically attempt **up to 8 payment retries within 14 days**, using smart retry intervals; reminder emails are sent after each attempt.
-   **Up to 30 minutes of small content edits per month** (e.g., swapping images, updating opening hours)
-   99.9 % uptime target with real‑time performance monitoring
-   Next‑business‑day email support
-   Access to discounted add‑on services (SEO bursts, quarterly CRO tune‑ups, full redesign eligibility every 24 months)

> *Think of Sustain as your “website peace‑of‑mind” subscription – everything keeps running, secure and up‑to‑date while you focus on the business.*

## 3 Financial model

### 3.1 Cost assumptions

| Item                   | Amount      | Notes                                         |
| ---------------------- | ----------- | --------------------------------------------- |
| Build labour (one‑off) | **£800** | 32 h × £25/h blended rate                     |
| Monthly run‑cost       | **£28** | £25 support hour + £3 pooled Cloudflare infra |
| Payment processing     | 1.4 % + 20p | Absorbed inside price                         |

### 3.2 Boost Plan (12 mo @ £109) – key metrics

| Metric                     | Value        |
| -------------------------- | ------------ |
| Break‑even                 | **Month 10** |
| Profit at month 12         | **£172** |
| Cumulative revenue (12 mo) | £1,308       |
| Cumulative cost (12 mo)    | £1,136       |

### 3.3 Grow Plan (18 mo @ £ 99) – key metrics

| Metric                     | Value        |
| -------------------------- | ------------ |
| Break‑even                 | **Month 12** |
| Profit at month 18         | **£478** |
| Cumulative revenue (18 mo) | £1,782       |
| Cumulative cost (18 mo)    | £1,304       |

*(Graphs generated 4 July 2025; update by re‑running the Python notebook in /mnt/data if assumptions change.)*

---

## 4 Billing & suspension flow

```mermaid
graph TD
  Invoice[Invoice issued] -->|Stripe Smart Retries (up to 8 attempts in 14 days)| Paid[Payment OK]
  Invoice -->|Fail| Retry[Retries & email reminders (Day 0‑14)]
  Retry -->|Still unpaid| Pause[Auto‑pause site – Day 30]
  Pause -->|Unpaid 45 days| Term[Backup & terminate – Day 45]