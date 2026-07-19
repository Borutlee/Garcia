import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Star, Rocket, UtensilsCrossed, CalendarCheck } from 'lucide-react'
import Button from '../components/Button'
import { placeholderImage } from '../utils/placeholder'

const INFO_ITEMS = [
  { icon: MapPin, title: '5 Baghdad St.', subtitle: 'Heliopolis, Cairo' },
  { icon: Clock, title: 'Open Everyday', subtitle: '6:00 AM - 1:00 AM' },
  { icon: Star, title: '4.0 Rating', subtitle: '(3800+ Reviews)' },
  { icon: Rocket, title: 'Fast Delivery', subtitle: 'via Our Website' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 md:pt-48 pb-20 px-5 md:px-10 overflow-hidden bg-garcia-900"
    >
      {/* تأثير إضاءة دافئة خفيفة في الخلفية لمحاكاة الديزاين */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <p className="font-display italic text-gold text-lg md:text-xl mb-2">
            Welcome to iconic
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-cream leading-[1.05] tracking-wide">
            GARCIA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl tracking-[0.3em] text-cream/60 mt-2 font-display">
            RESTAURANT & CAFE
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
            <span className="w-8 h-[1px] bg-gold/60" />
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-medium">
              Good Food • Good Mood
            </p>
            <span className="w-8 h-[1px] bg-gold/60" />
          </div>

          <p className="text-cream/80 mt-6 max-w-md mx-auto md:mx-0 leading-relaxed font-sans text-base">
            A place where great food, warm atmosphere and good times come together.
            Experience the authentic taste in the heart of Heliopolis.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8 w-full sm:w-auto">
            <Button
              variant="primary"
              icon={UtensilsCrossed}
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto justify-center"
            >
              View Menu
            </Button>
            <Button
              variant="outline"
              icon={CalendarCheck}
              onClick={() => document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto justify-center"
            >
              Reserve a Table
            </Button>
          </div>
        </motion.div>

        {/* Right: placeholder dish image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center md:justify-end mt-6 md:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-garcia-800 shadow-2xl">
            <img
              src={placeholderImage(600, 600, 'Signature Dish')}
              alt="Signature dish"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Info strip متجاوب تماماً وبدون مشاكل في الخطوط الفاصلة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mt-20 border border-gold/20 rounded-xl bg-garcia-800/60 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-2"
      >
        {INFO_ITEMS.map(({ icon: Icon, title, subtitle }, index) => (
          <div
            key={title}
            className={`flex items-center gap-4 px-6 py-4 ${
              index !== INFO_ITEMS.length - 1 ? 'md:border-r border-cream/10' : ''
            } ${index % 2 === 0 ? 'sm:border-r-0 md:border-r' : ''}`}
          >
            <div className="p-2 rounded-lg bg-gold/10 text-gold">
              <Icon size={22} />
            </div>
            <div>
              <p className="text-cream text-sm font-semibold font-sans">{title}</p>
              <p className="text-cream/60 text-xs font-sans mt-0.5">{subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}