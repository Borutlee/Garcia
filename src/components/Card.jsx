import React from 'react'

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
    <div
      onClick={onClick}
      className={`group relative rounded-xl overflow-hidden cursor-pointer w-full transition-all duration-300 select-none
        border flex flex-col justify-end min-h-[140px] md:min-h-[160px] p-4
        bg-garcia-800 dark:bg-garcia-800
        ${
          active
            ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-gold/40 scale-[1.02]'
            : 'border-cream/10 hover:border-gold/40 hover:scale-[1.01]'
        }
        ${className}`}
    >
      {/* 1. صورة الخلفية: الشفافية بقت عالية وواضحة جداً في الهوفر وفي العادي */}
      {image ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 ${
            active 
              ? 'opacity-70 dark:opacity-60' 
              : 'opacity-50 group-hover:opacity-75 dark:opacity-40 dark:group-hover:opacity-60'
          }`}
        />
      ) : (
        <div className="absolute inset-0 bg-garcia-900" />
      )}

      {/* 2. التدريج الداكن الموحد: بيدي تباطؤ وتعتيم خفيف تحت النص بس عشان يقرأ، وبدون أي بلور أبيض مغبش */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-opacity duration-300 z-10" />

      {/* 3. الـ Badge العلوي */}
      {badge && (
        <span className="absolute top-3 right-3 z-20 bg-gold text-garcia-950 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md uppercase tracking-wider">
          {badge}
        </span>
      )}

      {/* 4. النصوص - واضحة دائماً باللون الفاتح فوق التدريج الأسود الناعم */}
      <div className="relative z-20 text-left">
        {title && (
          <h3
            className={`font-serif font-bold text-sm md:text-base leading-tight transition-colors duration-200 line-clamp-2 ${
              active ? 'text-gold' : 'text-cream group-hover:text-gold'
            }`}
          >
            {title}
          </h3>
        )}

        {subtitle && (
          <p className="text-cream/70 text-[11px] font-sans mt-1 tracking-widest uppercase font-medium">
            {subtitle}
          </p>
        )}
      </div>

      {/* 5. خط دهبي ناعم للـ Active */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gold z-20 transition-all duration-300 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}