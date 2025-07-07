# RapidSite Customer Dashboard

This directory contains the customer dashboard implementation for RapidSite.

## Structure

- `LoginPage.tsx` - Authentication page at `/login`
- `DashboardLayout.tsx` - Shared layout with sidebar navigation
- `OverviewPage.tsx` - Main dashboard at `/dashboard`
- `WebsitePage.tsx` - Website health and monitoring at `/dashboard/website`
- `SubscriptionPage.tsx` - Billing and subscription management at `/dashboard/subscription`
- `AddOnsPage.tsx` - Purchase Change-Packs and Priority Support at `/dashboard/add-ons`
- `SupportPage.tsx` - Support tickets and help at `/dashboard/support`

## Features

### Single Website Focus
- Dashboard designed for one website per customer account
- Clean, focused interface without website selection complexity

### Key Functionality
- **Website Health Monitoring**: Uptime, SSL status, security scans, backups
- **Subscription Management**: Plan details, billing history, payment card updates
- **Add-on Purchases**: Change-Pack (£49/30min) and Priority Support (£19/month)
- **Support System**: Create tickets, view history, upgrade support plans
- **Contract Tracking**: Clear display of fixed term remaining

### Authentication
- Placeholder login form with RapidSite branding
- Protected routes that redirect to login if not authenticated
- User profile display in sidebar

### Design Consistency
- Uses existing UI components (Card, Button, Grid, Badge, etc.)
- Maintains RapidSite brand colors and voice
- Responsive design for mobile/tablet access
- Clean sidebar navigation with icons

## Implementation Notes

All data is currently placeholder - real implementation would connect to:
- Authentication service
- Customer API for website data
- Billing system (Stripe integration)
- Support ticket system
- Website monitoring services

The dashboard is ready for backend integration and provides a complete customer self-service portal.