import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, Users, Search, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

/**
 * Reservation.jsx
 * Table-booking form with full input validation.
 */
export default function Reservation() {
  const [form, setForm] = useState({ date: '', time: '', guests: '', phone: '' })
  const [phoneError, setPhoneError] = useState('')

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  // هندلة رقم التليفون: أرقام بس + أقصى حد 11 رقم
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '') // مسح أي حرف أو رمز مش رقم
    if (value.length <= 11) {
      setForm((prev) => ({ ...prev, phone: value }))
      if (phoneError) setPhoneError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // التأكد من إن الرقم بالضبط 11 رقم
    if (form.phone.length !== 11) {
      setPhoneError('Please enter a valid 11-digit phone number')
      return
    }

    // TODO: connect to real reservation API/backend.
    console.log('Reservation request:', form)
    alert('Thanks! Your table request has been received. We will confirm via WhatsApp or phone call.')
  }

  return (
    <section id="reservation" className="py-20 px-5 md:px-10 bg-garcia-900">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Book Your Table" title="Book your table now" />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-garcia-800/50 border border-cream/10 rounded-xl p-5 md:p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-start"
        >
          {/* Date field */}
          <label className="flex items-center gap-3 border border-cream/20 rounded-lg px-4 py-3 focus-within:border-gold transition-colors w-full">
            <CalendarDays className="text-gold shrink-0" size={18} />
            <input
              type="date"
              value={form.date}
              onChange={handleChange('date')}
              className="bg-transparent w-full text-cream text-sm outline-none placeholder:text-cream-muted [color-scheme:dark]"
              required
            />
          </label>

          {/* Time field */}
          <label className="flex items-center gap-3 border border-cream/20 rounded-lg px-4 py-3 focus-within:border-gold transition-colors w-full">
            <Clock className="text-gold shrink-0" size={18} />
            <input
              type="time"
              value={form.time}
              onChange={handleChange('time')}
              className="bg-transparent w-full text-cream text-sm outline-none placeholder:text-cream-muted [color-scheme:dark]"
              required
            />
          </label>

          {/* Number of guests */}
          <label className="flex items-center gap-3 border border-cream/20 rounded-lg px-4 py-3 focus-within:border-gold transition-colors w-full">
            <Users className="text-gold shrink-0" size={18} />
            <input
              type="number"
              min="1"
              max="20"
              placeholder="Number of Guests"
              value={form.guests}
              onChange={handleChange('guests')}
              className="bg-transparent w-full text-cream text-sm outline-none placeholder:text-cream-muted"
              required
            />
          </label>

          {/* Phone Number field */}
          <div className="w-full flex flex-col">
            <label
              className={`flex items-center gap-3 border rounded-lg px-4 py-3 transition-colors ${
                phoneError ? 'border-red-500/80' : 'border-cream/20 focus-within:border-gold'
              }`}
            >
              <Phone className="text-gold shrink-0" size={18} />
              <input
                type="tel"
                placeholder="Phone Number (11 digits)"
                value={form.phone}
                onChange={handlePhoneChange}
                className="bg-transparent w-full text-cream text-sm outline-none placeholder:text-cream-muted"
                required
              />
            </label>
            {phoneError && (
              <span className="text-red-400 text-[11px] mt-1 ml-1">{phoneError}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 lg:col-span-4 mt-2">
            <Button variant="primary" icon={Search} type="submit" className="w-full">
              Find a Table
            </Button>
          </div>

          <p className="md:col-span-2 lg:col-span-4 text-center text-cream-muted text-xs mt-1">
            You will receive a confirmation with WhatsApp or phone call.
          </p>
        </motion.form>
      </div>
    </section>
  )
}