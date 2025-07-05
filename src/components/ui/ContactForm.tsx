import { useState } from 'react'
import type { FormEvent } from 'react'
import { cn } from '../../utils/cn'

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within one business day.',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your message. Please try again or email us directly at sales@nexabyte.co.uk',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block font-body font-medium text-brand-foreground mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-brand-accent-1 focus:border-transparent"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-body font-medium text-brand-foreground mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-brand-accent-1 focus:border-transparent"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body font-medium text-brand-foreground mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-brand-accent-1 focus:border-transparent resize-none"
          placeholder="Tell us about your business and website needs..."
        />
      </div>

      {submitStatus.type && (
        <div
          className={cn(
            "p-4 rounded-lg",
            submitStatus.type === 'success'
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          )}
        >
          <p className="font-body">{submitStatus.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full bg-brand-accent-1 hover:bg-brand-accent-2 text-white font-body font-medium py-3 px-6 rounded-lg transition-colors",
          isSubmitting && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm