import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-8xl text-pink">404</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-soft">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-rose-dark px-6 py-3 font-medium text-white transition hover:bg-rose hover:text-ink"
      >
        Back home
      </Link>
    </section>
  )
}
