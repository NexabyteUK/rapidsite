import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    links: [
      { href: '/', label: 'Home' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/cookies', label: 'Cookie Policy' },
      { href: '/legal/tos', label: 'Terms of Service' },
    ],
  }

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-container mx-auto px-4 md:px-8 lg:px-[72px] py-12 md:py-16">
        {/* Logo and tagline */}
        <div className="mb-12">
          <Link to="/" className="inline-block mb-4">
            <img 
              src="/rapidsite-logo-white.png" 
              alt="RapidSite" 
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-gray-300 max-w-md">
            Your professional website, sorted. No stress, no massive bills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Links Column */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-gray-300 hover:text-brand-accent-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 font-body text-gray-300">
              <p>
                <a
                  href="mailto:info@nexabyte.co.uk"
                  className="hover:text-brand-accent-1 transition-colors"
                >
                  info@nexabyte.co.uk
                </a>
              </p>
              <p>
                <a
                  href="tel:+442079460958"
                  className="hover:text-brand-accent-1 transition-colors"
                >
                  +44 20 7946 0958
                </a>
              </p>
              <p>
                Nexabyte Ltd<br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* Social & Legal Column */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {/* Social Icons */}
              <a
                href="https://linkedin.com/company/nexabyte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-accent-1 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/nexabyte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-accent-1 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
            <div className="space-y-2">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block font-body text-sm text-gray-300 hover:text-brand-accent-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="font-body text-sm text-gray-300">
            © {currentYear} Nexabyte Ltd. All rights reserved. RapidSite is a trading name of Nexabyte Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer