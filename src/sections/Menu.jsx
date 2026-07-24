import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import { categories, dishesByCategory } from '../data/menuData'

export default function Menu() {
  const [activeCategory, setActiveCategory] = React.useState(categories[0].id)

  const activeDishes = dishesByCategory[activeCategory] || []
  const activeLabel = categories.find((c) => c.id === activeCategory)?.label

  return (
    <section id="menu" className="py-20 px-5 md:px-10 bg-garcia-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Explore Our Menu" title="What would you like to order?" />

        {/* Category selector cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <Card
                image={cat.image}
                title={cat.label}
                subtitle={`${cat.count} Items`}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Dynamic dish list for the selected category */}
        <div className="mt-14">
          <h3 className="text-center text-cream text-xl md:text-2xl font-serif font-bold tracking-wide mb-8">
            {activeLabel}
          </h3>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {activeDishes.map((dish) => (
              <div
                key={dish.id}
                className="group relative flex items-center gap-4 p-3.5 rounded-2xl bg-garcia-800/60 border border-cream/10 
                  hover:border-gold/40 hover:bg-garcia-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* 1. صورة الوجبة بطابع سينمائي */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-garcia-900 border border-cream/5">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* 2. تفاصيل الوجبة */}
                <div className="flex-1 min-w-0 flex flex-col justify-between py-1 h-full">
                  <div>
                    <h4 className="text-cream font-serif font-bold text-base md:text-lg leading-snug group-hover:text-gold transition-colors truncate">
                      {dish.name}
                    </h4>
                    
                    {dish.description && (
                      <p className="text-cream/60 text-xs font-sans line-clamp-2 mt-1 leading-relaxed">
                        {dish.description}
                      </p>
                    )}
                  </div>

                  {/* 3. السعر والزرار */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-cream/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-gold font-serif font-extrabold text-lg md:text-xl">
                        {dish.price}
                      </span>
                      <span className="text-gold/80 font-sans text-[10px] uppercase font-bold tracking-wider">
                        EGP
                      </span>
                    </div>

                    <button 
                      className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center 
                        group-hover:bg-gold group-hover:text-garcia-950 transition-all duration-300 shadow-sm font-bold text-lg"
                      aria-label="View dish details"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline">View Full Menu</Button>
        </div>
      </div>
    </section>
  )
}