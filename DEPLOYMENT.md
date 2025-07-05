# RapidSite Deployment Guide

## Prerequisites

- GitHub repository
- Cloudflare account with Workers enabled
- Node.js 20+
- Wrangler CLI

## Architecture

RapidSite uses two Cloudflare Workers:
1. **Site Worker**: Serves the static React application
2. **Contact Form Worker**: Handles form submissions with Resend

## Environment Variables

### GitHub Secrets

Add these secrets to your GitHub repository:

1. `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token with Workers permissions
2. `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

### Worker Secrets

#### Contact Form Worker
```bash
cd workers/contact-form
wrangler secret put RESEND_API_KEY
wrangler secret put ALLOWED_ORIGINS
```

Values:
- `RESEND_API_KEY`: Your Resend API key
- `ALLOWED_ORIGINS`: `https://rapidsite.nexabyte.co.uk,https://staging-rapidsite.nexabyte.co.uk`

## Deployment Process

### Automatic Deployment

1. **Production**: Push to `main` branch deploys to:
   - Site: `https://rapidsite.nexabyte.co.uk`
   - API: `https://rapidsite-contact-form.workers.dev`

2. **Staging**: Pull requests deploy to:
   - Site: `https://staging-rapidsite.nexabyte.co.uk`

### Manual Deployment

#### Build the Application
```bash
npm install
npm run build
```

#### Deploy Site Worker
```bash
cd workers/site
npm install

# Production
wrangler deploy --env production

# Staging
wrangler deploy --env staging
```

#### Deploy Contact Form Worker
```bash
cd workers/contact-form
npm install
wrangler deploy
```

## Domain Configuration

### Custom Domain Setup

1. In Cloudflare Dashboard > Workers & Pages > Your Worker
2. Add custom domain:
   - Production: `rapidsite.nexabyte.co.uk`
   - Staging: `staging-rapidsite.nexabyte.co.uk`

### DNS Records

No additional DNS configuration needed - Cloudflare Workers handles routing automatically.

## API Configuration

Update the contact form to use the correct API endpoint:

```typescript
// src/components/ui/ContactForm.tsx
const response = await fetch('https://rapidsite-contact-form.workers.dev/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
```

## Monitoring

### Analytics

Update Cloudflare Analytics token in `index.html`:
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "YOUR_ANALYTICS_TOKEN"}'></script>
```

### Worker Analytics

View in Cloudflare Dashboard:
- Workers & Pages > rapidsite > Analytics
- Workers & Pages > rapidsite-contact-form > Analytics

### Logs

```bash
# Site worker logs
wrangler tail rapidsite

# Contact form worker logs
wrangler tail rapidsite-contact-form
```

## Performance Optimization

### Caching Strategy

The site worker implements:
- HTML: No cache (always fresh)
- CSS/JS: 1 year cache (immutable with hashed filenames)
- Images: 1 year cache
- Fonts: 1 year cache

### Edge Caching

Cloudflare Workers automatically cache at edge locations:
- Static assets: 30 days edge cache
- API responses: No cache

## Security

### Headers

The site worker sets:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` with strict rules

### CORS

Contact form worker validates origins:
- Only allows configured origins
- Rejects requests from unauthorized domains

## Rollback

### Via Wrangler

```bash
# List deployments
wrangler deployments list

# Rollback site
cd workers/site
wrangler rollback --deployment-id=<ID>

# Rollback contact form
cd workers/contact-form
wrangler rollback --deployment-id=<ID>
```

### Via Dashboard

1. Workers & Pages > Your Worker > Deployments
2. Find previous deployment
3. Click "Rollback"

## Troubleshooting

### Build Failures

1. Check GitHub Actions logs
2. Verify Node.js version
3. Check `npm ci` output

### Worker Errors

1. Check worker logs:
   ```bash
   wrangler tail rapidsite --format pretty
   ```

2. Common issues:
   - KV namespace not bound
   - Missing secrets
   - CORS errors

### Contact Form Issues

1. Verify secrets are set:
   ```bash
   wrangler secret list
   ```

2. Check allowed origins match deployment URL

3. Verify Resend API key is valid

### Performance Issues

1. Check bundle size:
   ```bash
   npm run build
   ls -la dist/assets/
   ```

2. Run Lighthouse:
   ```bash
   npm run preview
   npx lighthouse http://localhost:4173
   ```

## Local Development

### Site Worker
```bash
cd workers/site
npm run dev
# Visit http://localhost:8787
```

### Contact Form Worker
```bash
cd workers/contact-form
npm run dev
# Test at http://localhost:8788
```

## Cost Optimization

Cloudflare Workers pricing:
- First 100,000 requests/day: Free
- Additional requests: $0.50 per million
- CPU time: 10ms free per request

Monitor usage in Cloudflare Dashboard > Workers & Pages > Analytics