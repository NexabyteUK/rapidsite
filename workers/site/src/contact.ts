import { Resend } from 'resend'
import { createEmailTemplate, createButton } from './templates/emailTemplate'

export interface ContactEnv {
  RESEND_API_KEY: string
}

interface ContactFormData {
  name: string
  email: string
  message: string
}

function validateFormData(data: unknown): data is ContactFormData {
  if (typeof data !== 'object' || data === null) {
    return false
  }
  
  const obj = data as Record<string, unknown>
  
  return (
    typeof obj.name === 'string' &&
    obj.name.length > 0 &&
    obj.name.length <= 100 &&
    typeof obj.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) &&
    typeof obj.message === 'string' &&
    obj.message.length > 0 &&
    obj.message.length <= 5000
  )
}

export async function handleContactForm(request: Request, env: ContactEnv): Promise<Response> {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    // Parse request body
    const contentType = request.headers.get('Content-Type')
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ error: 'Invalid content type' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    const data = await request.json()

    // Validate form data
    if (!validateFormData(data)) {
      return new Response(
        JSON.stringify({ error: 'Invalid form data' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Initialize Resend
    const resend = new Resend(env.RESEND_API_KEY)

    // Send email notification to admin
    const adminEmailContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; line-height: 1.2; color: #2C2A4E; margin-bottom: 20px;">New Contact Form Submission</div>
      
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 16px;">
        You've received a new message through the RapidSite contact form.
      </div>
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0; background-color: #F8F9FA; border-radius: 8px; padding: 20px;">
        <tr>
          <td>
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 12px;">
              <strong style="color: #2C2A4E;">Contact Name:</strong><br>
              ${data.name}
            </div>
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 12px;">
              <strong style="color: #2C2A4E;">Email Address:</strong><br>
              <a href="mailto:${data.email}" style="color: #D74653; text-decoration: none; font-weight: 500;">${data.email}</a>
            </div>
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E;">
              <strong style="color: #2C2A4E;">Message:</strong><br>
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </td>
        </tr>
      </table>
      
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 16px;">
        You can reply directly to this email to respond to ${data.name}.
      </div>
      
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; color: #6C757D; line-height: 1.4; margin-top: 24px; padding-top: 20px; border-top: 1px solid #E5E5E5;">
        This email was automatically generated from the RapidSite contact form at rapidsite.nexabyte.co.uk
      </div>
    `

    await resend.emails.send({
      from: 'Nexabyte Contact Form <noreply@nexabyte.co.uk>',
      to: 'info@nexabyte.co.uk',
      subject: `New Contact Form Submission from ${data.name}`,
      html: createEmailTemplate({
        subject: `New Contact Form Submission from ${data.name}`,
        preheader: `New message from ${data.name} (${data.email})`,
        content: adminEmailContent,
        showFooter: true,
        showSocialLinks: false,
      }),
      reply_to: data.email,
    })

    // Send auto-response to user
    const userEmailContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; line-height: 1.2; color: #2C2A4E; margin-bottom: 20px;">Thank you for your message!</div>
      
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 16px;">
        Hi ${data.name},
      </div>
      
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 16px;">
        Thank you for contacting Nexabyte! We've received your message and our team will get back to you within one business day.
      </div>
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0; background-color: #F8F9FA; border-radius: 8px; padding: 20px;">
        <tr>
          <td>
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 12px;">
              <strong style="color: #2C2A4E;">What happens next:</strong><br>
              Our team will review your message and respond with next steps within one business day.
            </div>
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-bottom: 0;">
              <strong style="color: #2C2A4E;">Need immediate assistance?</strong><br>
              Message us at <a href="tel:+447735183330" style="color: #D74653; text-decoration: none; font-weight: 500;">+44 7735 183 330</a>
            </div>
          </td>
        </tr>
      </table>
      
      <div style="margin: 24px 0;">
        ${createButton('View Our Pricing', 'https://rapidsite.nexabyte.co.uk/pricing', 'primary')}
      </div>
      
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #2C2A4E; margin-top: 32px;">
        Best regards,<br>
        <strong style="color: #2C2A4E;">The Nexabyte Team</strong><br>
        <span style="color: #6C757D;">Nexabyte Limited</span>
      </div>
    `

    await resend.emails.send({
      from: 'Nexabyte <noreply@nexabyte.co.uk>',
      to: data.email,
      subject: 'Thank you for contacting Nexabyte',
      html: createEmailTemplate({
        subject: 'Thank you for contacting Nexabyte',
        preheader: `Hi ${data.name}, we've received your message and will respond within one business day.`,
        content: userEmailContent,
        showFooter: true,
        showSocialLinks: true,
      }),
    })

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred while processing your request. Please try again later.'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
}