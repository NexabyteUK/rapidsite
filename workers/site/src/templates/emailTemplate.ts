// No imports needed - all styles are inline for maximum compatibility

export interface EmailTemplateOptions {
  subject: string
  preheader?: string
  content: string
  showFooter?: boolean
  showSocialLinks?: boolean
}

export function createEmailTemplate(options: EmailTemplateOptions): string {
  const { subject, preheader, content, showFooter = true, showSocialLinks = true } = options
  
  const logoImage = `
    <img src="https://assets.rapidsite.io/rapidsite-logo.png" alt="Rapidsite Logo" width="200" height="40" style="display: block; margin: 0 auto; max-width: 200px; height: auto;" />
  `

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
</head>

<body style="margin: 0; padding: 0; background-color: #EBEDF3; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
  ${preheader ? `
  <!-- Preview text (hidden) -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${preheader}
  </div>
  ` : ''}
  
  <!-- Email wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0; padding: 0; background-color: #EBEDF3;">
    <tr>
      <td style="padding: 20px 0;" align="center">
        
        <!-- Main email table -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #2C2A4E; padding: 20px 40px; text-align: center;">
              ${logoImage}
            </td>
          </tr>
          
          <!-- Main content -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 40px;">
              ${content}
            </td>
          </tr>
          
          ${showFooter ? `
          <!-- Footer -->
          <tr>
            <td style="background-color: #F8F9FA; padding: 30px 40px; text-align: center; border-top: 1px solid #E5E5E5;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    
                    <!-- Company info -->
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; color: #6C757D; line-height: 1.4; margin-bottom: 16px;">
                      <strong>Nexabyte Limited</strong><br>
                      London, United Kingdom<br>
                    </div>
                    
                    ${showSocialLinks ? `
                    <!-- Social links -->
                    <div style="margin: 20px 0;">
                      <a href="https://rapidsite.nexabyte.co.uk" style="color: #D74653; text-decoration: none; font-weight: 500; margin: 0 10px;">Website</a>
                      <a href="https://rapidsite.nexabyte.co.uk/contact" style="color: #D74653; text-decoration: none; font-weight: 500; margin: 0 10px;">Contact</a>
                      <a href="https://rapidsite.nexabyte.co.uk/pricing" style="color: #D74653; text-decoration: none; font-weight: 500; margin: 0 10px;">Pricing</a>
                    </div>
                    ` : ''}
                    
                    <!-- Legal -->
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; color: #999999; line-height: 1.4; margin-top: 20px;">
                      © ${new Date().getFullYear()} Nexabyte Limited. All rights reserved.<br>
                      Real websites for real businesses - RapidSite.
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
  const isPrimary = style === 'primary'
  const backgroundColor = isPrimary ? '#D74653' : 'transparent'
  const textColor = isPrimary ? '#FFFFFF' : '#D74653'
  const border = isPrimary ? 'none' : '2px solid #D74653'
  
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 16px 0;">
      <tr>
        <td style="border-radius: 6px; background-color: ${backgroundColor}; ${!isPrimary ? `border: ${border};` : ''}">
          <a href="${url}" style="display: inline-block; padding: 12px 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; color: ${textColor}; text-decoration: none; border-radius: 6px;">${text}</a>
        </td>
      </tr>
    </table>
  `
}