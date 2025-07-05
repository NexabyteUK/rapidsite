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

function validateFormData(data: any): data is ContactFormData {
  return (
    typeof data.name === 'string' &&
    data.name.length > 0 &&
    data.name.length <= 100 &&
    typeof data.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.message === 'string' &&
    data.message.length > 0 &&
    data.message.length <= 5000
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
      <div class="email-heading">New Contact Form Submission</div>
      
      <div class="email-text">
        You've received a new message through the RapidSite contact form.
      </div>
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0; background-color: #F8F9FA; border-radius: 8px; padding: 20px;">
        <tr>
          <td>
            <div class="email-text" style="margin-bottom: 12px;">
              <strong style="color: #2C2A4E;">Contact Name:</strong><br>
              ${data.name}
            </div>
            <div class="email-text" style="margin-bottom: 12px;">
              <strong style="color: #2C2A4E;">Email Address:</strong><br>
              <a href="mailto:${data.email}" class="email-link">${data.email}</a>
            </div>
            <div class="email-text">
              <strong style="color: #2C2A4E;">Message:</strong><br>
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </td>
        </tr>
      </table>
      
      <div class="email-text">
        You can reply directly to this email to respond to ${data.name}.
      </div>
      
      <div class="email-small-text" style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E5E5E5; color: #6C757D;">
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
      <div class="email-heading">Thank you for your message!</div>
      
      <div class="email-text">
        Hi ${data.name},
      </div>
      
      <div class="email-text">
        Thank you for contacting Nexabyte! We've received your message and our team will get back to you within one business day.
      </div>
      
      <div class="email-text">
        In the meantime, feel free to explore more about our services:
      </div>
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0;">
        <tr>
          <td style="padding: 0 10px 0 0;">
            ${createButton('View Our Pricing', 'https://rapidsite.nexabyte.co.uk/pricing', 'primary')}
          </td>
          <td style="padding: 0 0 0 10px;">
            ${createButton('How It Works', 'https://rapidsite.nexabyte.co.uk/how-it-works', 'secondary')}
          </td>
        </tr>
      </table>
      
      <div class="email-text">
        <strong>What happens next?</strong>
      </div>
      
      <div class="email-text">
        • Our team will review your message carefully<br>
        • We'll respond with next steps or any questions we might have<br>
        • If you're interested in our services, we'll schedule a brief consultation
      </div>
      
      <div class="email-text">
        If you have any urgent questions, you can reach us directly at <a href="tel:+442079460958" class="email-link">+44 20 7946 0958</a>.
      </div>
      
      <div class="email-text" style="margin-top: 32px;">
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