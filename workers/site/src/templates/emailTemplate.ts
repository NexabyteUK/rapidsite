import { EmailStyles, darkModeCSS, googleFontsImport } from './emailStyles'

export interface EmailTemplateOptions {
  subject: string
  preheader?: string
  content: string
  showFooter?: boolean
  showSocialLinks?: boolean
}

export function createEmailTemplate(options: EmailTemplateOptions): string {
  const { subject, preheader, content, showFooter = true, showSocialLinks = true } = options
  
  const logoSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" width="200" height="40" style="display: block;">
      <rect width="200" height="40" rx="4" fill="#2C2A4E"/>
      <text x="12" y="26" font-family="Roboto, Arial, sans-serif" font-size="18" font-weight="700" fill="white">Rapid</text>
      <text x="78" y="26" font-family="Roboto, Arial, sans-serif" font-size="18" font-weight="700" fill="#D74653">Site</text>
      <g fill="#D74653">
        <rect x="150" y="15" width="16" height="2" rx="1"/>
        <rect x="152" y="18" width="12" height="2" rx="1"/>
        <rect x="154" y="21" width="8" height="2" rx="1"/>
      </g>
      <text x="175" y="32" font-family="Roboto, Arial, sans-serif" font-size="8" font-weight="400" fill="#D74653" opacity="0.8">by Nexabyte</text>
    </svg>
  `

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>${subject}</title>
  
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  
  <style>
    ${googleFontsImport}
    
    /* Reset styles */
    table, td, div, h1, h2, h3, h4, h5, h6, p { margin: 0; padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
    
    /* Base styles */
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    
    /* Prevent WebKit and Windows mobile changing default text sizes */
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
    
    /* Main styles */
    .email-container {
      background-color: ${EmailStyles.colors.brandBackground};
      font-family: ${EmailStyles.typography.fontFamilyCondensed};
      font-size: ${EmailStyles.typography.body};
      line-height: ${EmailStyles.typography.lineHeightBody};
      color: ${EmailStyles.colors.textDark};
    }
    
    .email-wrapper {
      max-width: ${EmailStyles.layout.maxWidth};
      margin: 0 auto;
      background-color: ${EmailStyles.colors.white};
    }
    
    .email-header {
      background-color: ${EmailStyles.colors.brandNavy};
      padding: 20px ${EmailStyles.layout.contentPadding};
      text-align: center;
    }
    
    .email-content {
      background-color: ${EmailStyles.colors.white};
      padding: ${EmailStyles.layout.contentPadding};
    }
    
    .email-footer {
      background-color: ${EmailStyles.colors.lightGray};
      padding: 30px ${EmailStyles.layout.contentPadding};
      text-align: center;
      border-top: 1px solid #E5E5E5;
    }
    
    /* Typography */
    .email-heading {
      font-family: ${EmailStyles.typography.fontFamily};
      font-size: ${EmailStyles.typography.heading2};
      font-weight: ${EmailStyles.typography.weightBold};
      line-height: ${EmailStyles.typography.lineHeightHeading};
      color: ${EmailStyles.colors.textDark};
      margin-bottom: 20px;
    }
    
    .email-text {
      font-family: ${EmailStyles.typography.fontFamilyCondensed};
      font-size: ${EmailStyles.typography.body};
      line-height: ${EmailStyles.typography.lineHeightBody};
      color: ${EmailStyles.colors.textDark};
      margin-bottom: 16px;
    }
    
    .email-small-text {
      font-family: ${EmailStyles.typography.fontFamilyCondensed};
      font-size: ${EmailStyles.typography.small};
      color: ${EmailStyles.colors.textLight};
      line-height: 1.4;
    }
    
    /* Links and buttons */
    .email-link {
      color: ${EmailStyles.colors.brandRed};
      text-decoration: none;
      font-weight: ${EmailStyles.typography.weightMedium};
    }
    
    .email-link:hover {
      color: ${EmailStyles.colors.brandRedDark};
      text-decoration: underline;
    }
    
    .email-button {
      display: inline-block;
      padding: 12px 24px;
      background-color: ${EmailStyles.colors.brandRed};
      color: ${EmailStyles.colors.white} !important;
      text-decoration: none;
      border-radius: 6px;
      font-weight: ${EmailStyles.typography.weightBold};
      font-size: ${EmailStyles.typography.body};
      margin: 16px 0;
    }
    
    .email-button:hover {
      background-color: ${EmailStyles.colors.brandRedDark};
    }
    
    /* Responsive styles */
    @media only screen and (max-width: 600px) {
      .email-wrapper {
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .email-header,
      .email-content,
      .email-footer {
        padding: ${EmailStyles.layout.mobilePadding} !important;
      }
      
      .email-heading {
        font-size: 22px !important;
      }
      
      .logo-container {
        text-align: center !important;
      }
    }
    
    /* Dark mode styles */
    ${darkModeCSS}
    
    /* Outlook specific styles */
    <!--[if mso]>
    .email-wrapper {
      width: 600px !important;
    }
    <![endif]-->
  </style>
</head>

<body class="email-container">
  ${preheader ? `
  <!-- Preview text (hidden) -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: ${EmailStyles.typography.fontFamilyCondensed}; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${preheader}
  </div>
  ` : ''}
  
  <!-- Email wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td style="padding: 20px 0;" align="center" bgcolor="${EmailStyles.colors.brandBackground}">
        
        <!-- Main email table -->
        <table class="email-wrapper" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
          
          <!-- Header -->
          <tr>
            <td class="email-header">
              <div class="logo-container">
                ${logoSvg}
              </div>
            </td>
          </tr>
          
          <!-- Main content -->
          <tr>
            <td class="email-content">
              ${content}
            </td>
          </tr>
          
          ${showFooter ? `
          <!-- Footer -->
          <tr>
            <td class="email-footer">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    
                    <!-- Company info -->
                    <div class="email-small-text" style="margin-bottom: 16px;">
                      <strong>Nexabyte Limited</strong><br>
                      London, United Kingdom<br>
                      +44 20 7946 0958
                    </div>
                    
                    ${showSocialLinks ? `
                    <!-- Social links -->
                    <div style="margin: 20px 0;">
                      <a href="https://rapidsite.nexabyte.co.uk" class="email-link" style="margin: 0 10px;">Website</a>
                      <a href="https://rapidsite.nexabyte.co.uk/contact" class="email-link" style="margin: 0 10px;">Contact</a>
                      <a href="https://rapidsite.nexabyte.co.uk/pricing" class="email-link" style="margin: 0 10px;">Pricing</a>
                    </div>
                    ` : ''}
                    
                    <!-- Legal -->
                    <div class="email-small-text" style="color: #999999; margin-top: 20px;">
                      © ${new Date().getFullYear()} Nexabyte Limited. All rights reserved.<br>
                      Professional website development services by RapidSite.
                    </div>
                    
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ''}
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>
  `.trim()
}

// Helper function for creating button HTML
export function createButton(text: string, url: string, style: 'primary' | 'secondary' = 'primary'): string {
  const buttonStyle = style === 'primary' ? EmailStyles.button.primary : EmailStyles.button.secondary
  
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 16px 0;">
      <tr>
        <td style="border-radius: ${buttonStyle.borderRadius}; background-color: ${buttonStyle.backgroundColor}; ${style === 'secondary' ? `border: ${buttonStyle.border};` : ''}">
          <a href="${url}" style="
            display: inline-block;
            padding: ${buttonStyle.padding};
            font-family: ${EmailStyles.typography.fontFamily};
            font-size: ${buttonStyle.fontSize};
            font-weight: ${buttonStyle.fontWeight};
            color: ${buttonStyle.color};
            text-decoration: none;
            border-radius: ${buttonStyle.borderRadius};
          ">${text}</a>
        </td>
      </tr>
    </table>
  `
}