import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import { categories, dishesByCategory } from '../data/menuData'

/**
 * Menu.jsx
 * Interactive menu section:
 *  1. Renders a row of category cards (Pasta, Burgers, ...).
 *  2. Clicking a category updates React state (`activeCategory`).
 *  3. The dish grid below re-renders with that category's dishes,
 *     animated with a fade/slide transition via AnimatePresence.
 */
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
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
          <h3 className="text-center text-cream text-xl font-display font-semibold mb-6">
            {activeLabel}
          </h3>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="flex items-center gap-4 bg-garcia-800/50 border border-cream/10 rounded-xl p-4 hover:border-gold/50 transition-colors"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-cream font-medium">{dish.name}</p>
                    <p className="text-gold font-semibold mt-1">{dish.price} EGP</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline">View Full Menu</Button>
        </div>
      </div>
    </section>
  )
}
