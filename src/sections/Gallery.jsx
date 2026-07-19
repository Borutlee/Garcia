import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { galleryImages } from '../data/menuData'

/**
 * Gallery.jsx
 * Horizontal strip of restaurant photos ("A glimpse of our place").
 * Uses a simple responsive grid; on very small screens it becomes
 * a horizontally scrollable row so nothing gets cropped awkwardly.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-5 md:px-10 bg-garcia-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Our Gallery" title="A glimpse of our place" />

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden border border-cream/10 hover:border-gold/50 transition-colors aspect-[4/5]"
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Decorative "next" arrow to hint at more photos, matching reference design */}
          <button
            aria-label="More photos"
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold text-garcia-900 items-center justify-center shadow-gold"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
