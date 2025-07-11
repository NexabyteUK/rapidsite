# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About RapidSite

**RapidSite** is Nexabyte's pay-monthly website service for small businesses. The core value proposition: "Real websites for real businesses, without the agency drama or massive bills."

### Service Overview
- **7-day website builds** (not 6-week marathons)
- **Pay monthly** starting from £99/month (vs thousands upfront)
- **Two main plans**: Boost (£109/12mo) and Grow (£99/18mo)
- **Sustain Plan**: £49/month ongoing hosting after initial term
- **Target market**: Time-poor small business owners who want professional websites without agency complexity

### Key Differentiators
- Speed (7 days vs months)
- Affordability (monthly payments vs large upfront costs)
- Simplicity (100% done-for-you service)
- UK-based support (next business day response)
- Comprehensive service (design, build, hosting, maintenance included)

## Brand Voice & Messaging

**Voice**: Your trusted website partner - warm, reliable, refreshingly honest. Speak like real humans about real business problems.

### Voice Principles
- **Simple & jargon-free**: "We handle the technical stuff" not "Enterprise-grade infrastructure"
- **Confidence-building**: "Your site will be ready in 7 days" not "We aim to deliver projects timely"
- **Outcome-focused**: "More customers finding you online" not "SEO optimized with meta tags"
- **Warm & personal**: "Coffee's on us" not "Schedule a consultation"
- **Problem-solving first**: Lead with their pain, not your solution

### Tone Guidelines
- Confident but not arrogant ("We've got this" not "We're the best")
- Friendly but professional (warm handshake, not best mate)
- Direct but not blunt (honest and clear, not harsh)
- Slightly cheeky (knowing wink, not joke shop)

### Banned Words/Phrases
- ❌ "Enterprise-grade", "Leverage", "Synergy", "Streamlined process"
- ❌ "Transform your online presence", "Digital transformation"
- ❌ "Cutting-edge", "State-of-the-art"

### Preferred Alternatives
- "Sorted" instead of "solved"
- "Handle" instead of "manage" 
- "Running" instead of "operational"
- "Worry" instead of "concern"

## Brand Colors & Design

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#EBEDF3` | Global page background |
| **Foreground/Navy** | `#2C2A4E` | Primary text, headings |
| **Accent 1 (Primary CTA)** | `#D74653` | Buttons, price highlights |
| **Accent 2 (CTA Hover)** | `#9E3D51` | Button hover states |
| **Accent 3 (Subtle)** | `#653350` | Secondary icons, tags |

### Typography
- **Headings**: Roboto 700
- **Body**: Roboto Condensed 400/500
- **Pricing**: Roboto 600

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (TypeScript compile + Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm test` - No tests currently defined

### Worker Development (Cloudflare)

Navigate to `/workers/site/` directory:
- `npm run dev` - Start Cloudflare Worker development server
- `npm run deploy` - Deploy to production
- `npm run deploy:staging` - Deploy to staging environment
- `npm run tail` - View worker logs

## Architecture Overview

This is a React + TypeScript SPA built with Vite, designed as the marketing website for RapidSite's pay-monthly website service. The application uses:

- **Frontend**: React 19 + TypeScript + Vite + TailwindCSS
- **Routing**: React Router v7 with nested layouts
- **Backend**: Cloudflare Workers for API endpoints (contact forms, email)
- **Email**: Resend for transactional emails
- **Deployment**: Static hosting + Cloudflare Workers

### Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, main Layout
│   ├── sections/        # Page sections (Hero, Features, FAQ, etc.)
│   └── ui/             # Reusable UI components
├── pages/
│   ├── dashboard/      # Customer dashboard pages (future)
│   ├── legal/          # Legal pages (Privacy, Terms, DPA, SLA)
│   └── auth/           # Authentication pages (future)
└── utils/              # Utility functions

workers/site/           # Cloudflare Worker for backend API
docs/                   # Business documentation (voice guide, design spec)
```

### Key Architecture Patterns

1. **Component Organization**: Components are organized by purpose - layout components, page sections, and reusable UI components
2. **Route Structure**: Uses nested routing with a main Layout wrapper for public pages and separate DashboardLayout for authenticated areas
3. **Styling**: TailwindCSS with custom brand color variables matching design spec
4. **Email Integration**: Contact forms submit to Cloudflare Worker which sends emails via Resend
5. **SEO**: React Helmet Async for meta tags and SEO optimization per page

### Current Promotional Campaign

**Summer Sale: 20% off all plans** - Active promotion offering:
- Boost Plan: £87.20/month (was £109)
- Grow Plan: £79.20/month (was £99)
- Promotional messaging emphasizes limited-time nature

### Build Process

The build process uses Vite with manual chunk splitting for optimized loading:
- React vendor bundle (react, react-dom, react-router-dom)
- UI vendor bundle (react-helmet-async)
- Main application code

Security headers are configured in Vite for development server.