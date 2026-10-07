import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const schema = z.object({
  name: z.string().trim().min(1, 'Please enter your name'),
  email: z.email('Please enter a valid email'),
  message: z.string().trim().min(10, 'Message should be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

// Set VITE_FORM_ENDPOINT in .env (e.g. a Formspree URL: https://formspree.io/f/xxxxxxx)
const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const field =
  'w-full rounded-xl border border-pink bg-surface px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-rose-dark focus:outline-none focus:ring-2 focus:ring-pink'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: FormValues) => {
    if (!endpoint) {
      console.warn('VITE_FORM_ENDPOINT is not set; the message was not sent.')
      setStatus('error')
      return
    }
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" data-nav="contact" className="scroll-mt-16 bg-blush py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let's work together" />
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input id="name" autoComplete="name" className={field} {...register('name')} />
              {errors.name && <p className="mt-1 text-sm text-rose-dark">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" autoComplete="email" className={field} {...register('email')} />
              {errors.email && <p className="mt-1 text-sm text-rose-dark">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea id="message" rows={5} className={field} {...register('message')} />
              {errors.message && <p className="mt-1 text-sm text-rose-dark">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-rose-dark px-6 py-3 font-medium text-on-accent transition hover:bg-rose hover:text-ink disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>

            <p role="status" aria-live="polite" className="min-h-6 text-sm">
              {status === 'sent' && <span className="text-ink">Thanks! Your message has been sent.</span>}
              {status === 'error' && (
                <span className="text-rose-dark">Something went wrong. Please try again or email me directly.</span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
