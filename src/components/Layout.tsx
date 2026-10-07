import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'
import ScrollManager from './ScrollManager'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollManager />
      <Navbar />
      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen pt-16"
      >
        <Suspense fallback={<div className="min-h-[60vh]" aria-hidden />}>
          <Outlet />
        </Suspense>
      </motion.main>
      <Contact />
      <Footer />
    </>
  )
}
