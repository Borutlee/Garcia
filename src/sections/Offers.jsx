import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { offers } from '../data/menuData'

/**
 * Offers.jsx
 * Displays current promotions as clean bordered cards, each with a
 * badge (e.g. "15% OFF", "FREE") in the top-right corner.
 */
export default function Offers() {
  return (
    <section id="offers" className="py-20 px-5 md:px-10 bg-garcia-950">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Special Offers" title="Don't miss our offers" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden border border-cream/10 bg-garcia-800/40 hover:border-gold/50 transition-colors"
            >
              <div className="relative">
                <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                <span className="absolute top-3 right-3 bg-gold text-garcia-900 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  {offer.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-cream font-display font-semibold text-lg">
                  {offer.title}
                </h3>
                <p className="text-cream-muted text-sm mt-1">{offer.description}</p>
                <p className="text-gold text-sm mt-2 font-medium">{offer.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline">View All Offers</Button>
        </div>
      </div>
    </section>
  )
}
