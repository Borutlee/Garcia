import React from 'react'
import { motion } from 'framer-motion'

export default function CategoryCard({
  image,
  title,
  subtitle,
  badge,
  active = false,
  onClick,
  className = '',
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={onClick}
      /* التعديل: تظليل ناعم جداً وبوردر دهبي ذكي يظهر فقط عند النشاط أو الهوفر بخفة */
      className={`relative rounded-2xl overflow-hidden border cursor-pointer w-full
        bg-[#fbf9f4] dark:bg-garcia-800
        shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        transition-all duration-300
        ${active 
          ? 'border-gold ring-1 ring-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
          : 'border-gold/10 dark:border-cream/5 hover:border-gold/40'
        }
        ${className}`}
    >
      {/* سكشن الصورة: نسبة وتناسب ممتازة */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-garcia-900/10 dark:bg-garcia-950/40">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* في حال عدم وجود صورة، يظهر لوجو أو شكل جمالي بدل المربع المصمت */
          <div className="w-full h-full flex items-center justify-center text-gold/20 font-serif italic text-xl">
            Garcia
          </div>
        )}
        
        {badge && (
          <span className="absolute top-3 right-3 bg-gold text-garcia-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* سكشن النصوص: متناسق ومريح للعين */}
      <div className="p-4 text-center">
        {title && (
          <h3 className="text-garcia-950 dark:text-cream font-serif font-bold text-base md:text-lg tracking-wide">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-garcia-900/50 dark:text-cream-muted text-xs font-sans mt-1 tracking-wider uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}