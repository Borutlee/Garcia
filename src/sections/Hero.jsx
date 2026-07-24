import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Star, Rocket, UtensilsCrossed, CalendarCheck } from 'lucide-react'
import Button from '../components/Button'
import { useTheme } from '../Context/ThemeContext'
import darkHero from '../imgs/dark-hero.jpg'
import lightHero from '../imgs/light-hero.jpg'

const INFO_ITEMS = [
  { icon: MapPin, title: '5 Baghdad St.', subtitle: 'Heliopolis, Cairo' },
  { icon: Clock, title: 'Open Everyday', subtitle: '6:00 AM - 1:00 AM' },
  { icon: Star, title: '4.0 Rating', subtitle: '(3800+ Reviews)' },
  { icon: Rocket, title: 'Fast Delivery', subtitle: 'via Our Website' },
]

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section
      id="home"
      className="relative pt-36 md:pt-48 pb-20 px-5 md:px-10 overflow-hidden bg-garcia-900"
    >
      {/* 1. خلفية الهيدر - دخول ناعم مع Lazy Loading */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }} // ظهور تدريجي ناعم جداً أول ما الصفحة تفتح
        className="absolute inset-0 md:left-auto md:right-0 w-full md:w-[60%] h-full pointer-events-none z-0"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={theme}
            src={theme === 'dark' ? darkHero : lightHero}
            alt="Garcia Ambiance"
            loading="lazy" // حظر التحميل المباشر وتفعيل الـ Lazy
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }} // تنقل ناعم بين الثيمات
            className={`absolute inset-0 w-full h-full object-cover object-center ${
              theme === 'dark' ? 'opacity-30 md:opacity-85' : 'opacity-40 md:opacity-95'
            }`}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-garcia-900/60 md:bg-gradient-to-r md:from-garcia-900 md:via-garcia-900/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-garcia-900 via-transparent to-transparent" />
      </motion.div>

      {/* إضاءة دافئة */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

      {/* 2. المحتوى الرئيسي - رجعنا الحركة من الشمال لليمين */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -35 }} // دخول الكلام من الشمال لليمين
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }} // سرعة متوازنة
          className="text-center md:text-left md:pr-6"
        >
          <p className="font-display italic text-gold text-lg md:text-xl mb-2">
            Welcome to iconic
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-cream leading-[1.05] tracking-wide font-display">
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

        <div className="hidden md:block" />
      </div>

      {/* 3. الـ Info strip */}
      <motion.div
        initial={{ opacity: 0, x: -20 }} // أنيميشن من الشمال لليمين أيضاً
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-6xl mx-auto mt-20 border border-gold/20 rounded-xl bg-garcia-800/90 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-2 relative z-10"
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