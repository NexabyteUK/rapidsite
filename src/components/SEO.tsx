import { Helmet } from 'react-helmet-async'

interface FAQItem {
  question: string
  answer: string
}

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  faqItems?: FAQItem[]
}

const SEO = ({ 
  title = "RapidSite - Professional Website Builder for UK Businesses",
  description = "Get your business online with RapidSite. Real websites for real businesses from £99/month. No coding required. UK-based support. Launch in 7 days.",
  keywords = "website builder uk, professional website design, business website, rapid website development, uk web design, affordable websites",
  image = "https://rapidsite.nexabyte.co.uk/og-image.svg",
  url = "https://rapidsite.nexabyte.co.uk",
  type = "website",
  faqItems
}: SEOProps) => {
  const fullTitle = title.includes('RapidSite') ? title : `${title} - RapidSite`
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nexabyte Limited" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="RapidSite" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="ICBM" content="51.5074, -0.1278" />
      
      {/* Business Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RapidSite by Nexabyte Limited",
          "image": image,
          "url": url,
          "email": "info@nexabyte.co.uk",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "GB"
          },
          "priceRange": "£79.20-£87.20/month (20% summer discount)",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.nexabyte.co.uk",
            "https://www.linkedin.com/company/nexabyteuk",
            "https://www.facebook.com/profile.php?id=61561513090149"
          ]
        })}
      </script>
      
      {/* Website Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RapidSite",
          "url": url,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Service Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Professional Website Building Service",
          "provider": {
            "@type": "Organization",
            "name": "RapidSite"
          },
          "serviceType": "Website Design and Development",
          "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Website Building Plans",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Boost Plan (Summer Promotion)",
                "price": "87.20",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "87.20",
                  "priceCurrency": "GBP",
                  "billingIncrement": 1,
                  "billingDuration": "P1M"
                },
                "validThrough": "2025-09-22"
              },
              {
                "@type": "Offer",
                "name": "Grow Plan (Summer Promotion)",
                "price": "79.20",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "79.20",
                  "priceCurrency": "GBP",
                  "billingIncrement": 1,
                  "billingDuration": "P1M"
                },
                "validThrough": "2025-09-22"
              }
            ]
          }
        })}
      </script>
      
      {/* FAQ Schema.org */}
      {faqItems && faqItems.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}
    </Helmet>
  )
}

export default SEO