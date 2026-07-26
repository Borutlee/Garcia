import React from 'react'
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
import darklogo from '../imgs/logo.png'
import lightlogo from '../imgs/logo3.png'
import { useTheme } from '../Context/ThemeContext'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservation' },
  { label: 'Offers', href: '#offers' },
  { label: 'About Us', href: '#home' },
  { label: 'Contact', href: '#footer' },
]

const SOCIALS = [
  { icon: Facebook, href: 'https://www.facebook.com/Garcia.Restaurant.Cafe' },
  { icon: Instagram, href: 'https://www.instagram.com/garciarestaurant/?hl=en' },
  { icon: MessageCircle, href: 'https://api.whatsapp.com/message/N4NWMWKG6IPOH1?autoload=1&app_absent=0' },
]

export default function Footer() {
  // ✅ التصحيح: استدعاء الـ Hook جوة الكومبوننت هنا
  const { theme } = useTheme()

  return (
    <footer id="footer" className="bg-garcia-900 border-t border-cream/10 pt-16 pb-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={theme === 'dark' ? darklogo : lightlogo}
              alt="Garcia Logo"
              className="w-14 h-14 rounded-full object-cover contrast-125 transition-transform duration-200 group-hover:scale-105"
              loading="eager"
            />
            <div>
              <p className="text-cream font-serif font-semibold tracking-wide">GARCIA</p>
              <p className="text-[10px] text-cream/60 tracking-[0.2em] uppercase font-sans">
                Restaurant & Cafe
              </p>
            </div>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed font-sans">
            Good food, good mood. We serve delicious meals made with love and the
            finest ingredients.
          </p>
          <div className="flex gap-3 mt-5">
            {SOCIALS.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-cream font-sans font-semibold mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-cream/60 text-sm hover:text-gold transition-colors duration-300 font-sans"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-cream font-sans font-semibold mb-4 text-sm tracking-wide uppercase">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-cream/70 font-sans">
            <li className="flex items-start gap-2">
              <MapPin className="text-gold shrink-0 mt-0.5" size={16} />
              <span>5 Baghdad St, Heliopolis, Cairo, Egypt</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-gold shrink-0" size={16} />
              <span>+20 123 456 5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-gold shrink-0" size={16} />
              <span>info@garcia.com.eg</span>
            </li>
          </ul>
        </div>

        {/* Opening hours */}
        <div>
          <h4 className="text-cream font-sans font-semibold mb-4 text-sm tracking-wide uppercase">
            Opening Hours
          </h4>
          <p className="text-cream/70 text-sm font-sans">Monday - Sunday</p>
          <p className="text-gold text-sm font-semibold font-sans mt-1">6:00 AM - 1:00 AM</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-cream/10 mt-12 pt-6 text-center text-cream/40 text-xs font-sans">
        © {new Date().getFullYear()} Garcia Restaurant & Cafe. All rights reserved.
      </div>
    </footer>
  )
}