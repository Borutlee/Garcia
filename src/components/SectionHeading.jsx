import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`text-center mb-10 ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {/* التعديل هنا: جعل النص غامقاً في الفاتح وفاتحاً في الداكن */}
      <h2 className="text-3xl md:text-4xl font-bold text-garcia-950 dark:text-cream mt-2">{title}</h2>
      <div className="divider" />
    </motion.div>
  )
}