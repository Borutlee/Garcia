import React from 'react'
import { motion } from 'framer-motion'

export default function Card({
  image,
  title,
  subtitle,
  badge,
  active = false,
  onClick,
  children,
  className = '',
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      /* التعديل هنا: جعل الخلفية والبوردر متفاعلين تماماً مع المودين */
      className={`relative rounded-xl overflow-hidden border cursor-pointer bg-white dark:bg-garcia-800/60 shadow-sm dark:shadow-none
        ${active ? 'border-gold shadow-gold' : 'border-garcia-900/10 dark:border-cream/10 hover:border-gold/60 dark:hover:border-gold/60'}
        ${className}`}
    >
      {image && (
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {badge && (
            <span className="absolute top-3 right-3 bg-gold text-garcia-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="p-4 text-center">
        {title && (
          /* التعديل هنا: النص يتغير حسب المود */
          <h3 className="text-garcia-950 dark:text-cream font-display font-semibold text-base md:text-lg">
            {title}
          </h3>
        )}
        {subtitle && (
          /* التعديل هنا: الوصف الخافت يتغير حسب المود */
          <p className="text-garcia-900/60 dark:text-cream-muted text-xs md:text-sm mt-1">{subtitle}</p>
        )}
        {children}
      </div>
    </motion.div>
  )
}