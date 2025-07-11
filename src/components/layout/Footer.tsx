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
            Real websites for real businesses. No stress, no massive bills.
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
                href="https://linkedin.com/company/nexabyteuk"
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
                href="https://www.facebook.com/profile.php?id=61561513090149"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-accent-1 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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