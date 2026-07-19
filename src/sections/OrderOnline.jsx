import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Button from '../components/Button'
import { placeholderImage } from '../utils/placeholder'

// Bullet points for the "Order your favorite meals online" promo section
const FEATURES = [
  'No delivery fees on orders over 250 EGP',
  'Fast & easy ordering',
  'Track your order in real-time',
  'Exclusive online offers',
]

/**
 * OrderOnline.jsx
 * Promotional section encouraging online ordering, with a phone
 * mockup preview and a QR code placeholder — mirrors the reference design.
 */
export default function OrderOnline() {
  return (
    <section className="py-20 px-5 md:px-10 bg-garcia-800/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy + features + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Order Online</p>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mt-2 leading-snug">
            Order your favorite meals online
          </h2>

          <ul className="mt-6 space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-cream-muted text-sm md:text-base">
                <CheckCircle2 className="text-gold shrink-0" size={18} />
                {feature}
              </li>
            ))}
          </ul>

          <Button variant="primary" className="mt-8">
            Order Now
          </Button>
        </motion.div>

        {/* Right: phone mockup + QR code */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-8"
        >
          <img
            src={placeholderImage(280, 560, 'Garcia App', '122a20', 'f4efe6')}
            alt="Garcia ordering app preview"
            className="rounded-3xl border-4 border-garcia-700 shadow-2xl max-w-[220px] md:max-w-[260px]"
          />
          <div className="hidden sm:flex flex-col items-center gap-3">
            <img
              src={placeholderImage(140, 140, 'QR', 'f4efe6', '0b1c15')}
              alt="QR code to view the menu"
              className="rounded-lg border border-cream/20"
            />
            <p className="text-cream-muted text-xs text-center max-w-[140px]">
              Scan to view our menu or your table
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
