import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`text-center mb-12 ${className}`}
    >
      {eyebrow && (
        <p className="text-gold font-body text-sm font-semibold uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl font-bold font-display text-cream light:text-garcia-950 mt-2 transition-colors duration-300">
        {title}
      </h2>

      {/* الـ divider معمول بـ Tailwind مباشرة عشان تضمن ثبات لونه */}
      <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
    </motion.div>
  )
}