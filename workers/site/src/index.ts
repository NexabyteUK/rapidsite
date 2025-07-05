import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import manifestJSON from '__STATIC_CONTENT_MANIFEST'
import { handleContactForm, type ContactEnv } from './contact'

export interface Env extends ContactEnv {
  __STATIC_CONTENT: KVNamespace
  ENVIRONMENT: string
  RESEND_API_KEY: string
}

const assetManifest = JSON.parse(manifestJSON)

// Security headers
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'",
}

// Cache control by file type
const cacheControl = {
  'text/html': 'public, max-age=0, must-revalidate',
  'text/css': 'public, max-age=31536000, immutable',
  'application/javascript': 'public, max-age=31536000, immutable',
  'image/svg+xml': 'public, max-age=31536000, immutable',
  'image/png': 'public, max-age=31536000, immutable',
  'image/jpeg': 'public, max-age=31536000, immutable',
  'image/webp': 'public, max-age=31536000, immutable',
  'font/woff2': 'public, max-age=31536000, immutable',
}

function handleOptions(request: Request): Response {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    
    // Handle contact form API endpoint
    if (url.pathname === '/api/contact') {
      return handleContactForm(request, env)
    }
    
    // Handle OPTIONS requests
    if (request.method === 'OPTIONS') {
      return handleOptions(request)
    }
    
    // Only allow GET and HEAD methods for static assets
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 })
    }
    
    try {
      // Serve static assets
      let response = await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
          cacheControl: {
            browserTTL: 60 * 60 * 24 * 365, // 1 year
            edgeTTL: 60 * 60 * 24 * 30, // 30 days
            bypassCache: false,
          },
        }
      )
      
      // Clone response to modify headers
      response = new Response(response.body, response)
      
      // Add security headers
      Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
      
      // Set cache control based on content type
      const contentType = response.headers.get('content-type') || ''
      const cacheHeader = Object.entries(cacheControl).find(([type]) => 
        contentType.includes(type)
      )?.[1] || 'public, max-age=3600'
      
      response.headers.set('Cache-Control', cacheHeader)
      
      // Add custom headers
      response.headers.set('X-Environment', env.ENVIRONMENT)
      
      return response
      
    } catch (e) {
      // Handle 404s for client-side routing
      if ((e as any).status === 404) {
        // For client-side routes, serve index.html
        const pathname = url.pathname
        if (!pathname.includes('.') && pathname !== '/') {
          try {
            const indexRequest = new Request(url.origin + '/index.html', request)
            let response = await getAssetFromKV(
              {
                request: indexRequest,
                waitUntil: ctx.waitUntil.bind(ctx),
              },
              {
                ASSET_NAMESPACE: env.__STATIC_CONTENT,
                ASSET_MANIFEST: assetManifest,
              }
            )
            
            response = new Response(response.body, response)
            
            // Add security headers
            Object.entries(securityHeaders).forEach(([key, value]) => {
              response.headers.set(key, value)
            })
            
            response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
            
            return response
          } catch (err) {
            // If index.html is also not found, return 404
            return new Response('Not found', { status: 404 })
          }
        }
      }
      
      // Return the error as-is for other cases
      return new Response('Not found', { status: 404 })
    }
  },
}