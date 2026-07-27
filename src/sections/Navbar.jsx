import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react'
import Button from '../components/Button'
import ThemeToggle from '../components/ThemeToggle'
import logo from '../imgs/logo.png'
import logo3 from '../imgs/logo3.png'
import { useTheme } from '../Context/ThemeContext'

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

  // تحسين أداء حدث الـ scroll لعدم تقطيع الفريمات
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // منع سكرول الخلفية عند فتح المنيو
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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 will-change-transform ${
        scrolled
          ? 'bg-garcia-900 shadow-md border-b border-cream/10'
          : 'bg-garcia-900/90'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3">
        {/* Logo Section */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5 sm:gap-3 group">
          <img
            src={theme === 'dark' ? logo : logo3}
            alt="Garcia Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover contrast-125 transition-transform duration-200 group-hover:scale-105"
            loading="eager"
          />
          <div className="leading-tight">
            <p className="text-cream font-serif font-semibold tracking-wider text-base md:text-lg">
              GARCIA
            </p>
            {/* 👈 تم إظهار الكلمة دائماً وتعديل الحجم للحفاظ على تناسق الهيدر في الموبايل */}
            <p className="text-[8px] sm:text-[9px] text-cream/60 tracking-[0.2em] sm:tracking-[0.25em] uppercase font-sans">
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
                className="text-xs md:text-sm text-cream/70 hover:text-gold transition-colors duration-200 uppercase tracking-widest font-sans font-medium"
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
            {/* Overlay بدون backdrop-blur لسرعة وسلاسة الاستجابة */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/75 z-[90] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 left-0 h-screen w-[85%] max-w-xs bg-garcia-900 border-r border-cream/10 z-[100] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10 shrink-0">
                <div className="flex items-center gap-2.5">
                  <img
                    src={theme === 'dark' ? logo : logo3}
                    alt="Garcia Logo"
                    className="w-10 h-10 rounded-full object-cover contrast-125"
                  />
                  <div className="leading-tight">
                    <p className="text-cream font-serif font-semibold tracking-wider text-sm">
                      GARCIA
                    </p>
                    <p className="text-[8px] text-cream/60 tracking-[0.2em] uppercase font-sans">
                      Restaurant & Cafe
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/70 hover:text-gold transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-1 px-6 py-4 flex-1 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-cream/80 hover:text-gold uppercase text-sm tracking-widest font-sans block py-3.5 border-b border-cream/5 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <div className="px-6 py-6 border-t border-cream/10 bg-garcia-900 shrink-0">
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