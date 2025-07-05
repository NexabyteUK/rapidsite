import { Resend } from 'resend'

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

    // Send email notification
    await resend.emails.send({
      from: 'RapidSite Contact Form <noreply@nexabyte.co.uk>',
      to: 'info@nexabyte.co.uk',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the RapidSite contact form.</small></p>
      `,
      reply_to: data.email,
    })

    // Send auto-response to user
    await resend.emails.send({
      from: 'RapidSite <noreply@nexabyte.co.uk>',
      to: data.email,
      subject: 'Thank you for contacting RapidSite',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and will get back to you within one business day.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Check out our <a href="https://rapidsite.nexabyte.co.uk/pricing">pricing plans</a></li>
          <li>Learn more about <a href="https://rapidsite.nexabyte.co.uk/how-it-works">how RapidSite works</a></li>
        </ul>
        <p>Best regards,<br>The RapidSite Team</p>
        <hr>
        <p><small>Nexabyte Limited | London, UK | +44 20 7946 0958</small></p>
      `,
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