import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react'
import Button from '../components/Button'
import ThemeToggle from '../components/ThemeToggle'
import logo from '../imgs/logo.png'
import logo3 from '../imgs/logo3.png'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservation' },
  { label: 'Offers', href: '#offers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // يمنع سكرول الصفحة اللي ورا لما الـ drawer يكون مفتوح
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-garcia-900/95 backdrop-blur-md shadow-lg border-b border-cream/5' : 'bg-garcia-900/70 backdrop-blur-sm'
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3">
        {/* Logo Section */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
          <img
            src={theme === 'dark' ? logo : logo3}
            alt="Garcia Logo"
            className="w-16 h-16 rounded-full object-cover contrast-125 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight text">
            <p className="text-cream font-serif font-semibold tracking-wider text-base md:text-lg ">
              GARCIA
            </p>
            <p className="text-[9px] text-cream/60 tracking-[0.25em] uppercase hidden sm:block font-sans">
              Restaurant & Cafe
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs md:text-sm text-cream/70 hover:text-gold transition-colors duration-300 uppercase tracking-widest font-sans font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button + Theme Toggle (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" icon={ShoppingBag} className="!py-2 !px-5 text-xs tracking-wider uppercase">
            Order Now
          </Button>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            className="text-cream p-1 hover:text-gold transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay خلفية شفافة تقفل الـ drawer لما تدوس عليها */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] lg:hidden"
            />

            {/* Drawer نفسه — بيملا الشاشة بالطول ومستحيل يهرب منه عنصر */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 h-screen w-[85%] max-w-xs bg-garcia-900 dark:bg-garcia-950 border-r border-cream/10 z-[100] lg:hidden flex flex-col shadow-2xl"
            >
              {/* رأس الـ drawer: لوجو + زرار إغلاق */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10 shrink-0">
                <div className="flex items-center gap-2">
                  <img
                    src={theme === 'dark' ? logo : logo3}
                    alt="Garcia Logo"
                    className="w-10 h-10 rounded-full object-cover contrast-125"
                  />
                  <p className="text-cream font-serif font-semibold tracking-wider text-sm">
                    GARCIA
                  </p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/70 hover:text-gold transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* روابط الصفحة */}
              <ul className="flex flex-col gap-1 px-6 py-4 flex-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-cream/80 hover:text-gold uppercase text-sm tracking-widest font-sans block py-3.5 border-b border-cream/5"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* زرار الطلب أسفل الـ drawer ومثبت مكانه تماماً */}
              <div className="px-6 py-6 border-t border-cream/10 bg-garcia-900 dark:bg-garcia-950 shrink-0">
                <Button variant="outline" icon={ShoppingBag} className="w-full justify-center uppercase tracking-wider py-3 text-sm">
                  Order Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}