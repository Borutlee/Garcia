import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, Users, Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

/**
 * Reservation.jsx
 * A simple table-booking form (UI only, no backend wiring yet).
 * Fields: date, time, number of guests.
 * On submit, we just log the values — swap `handleSubmit` for a real
 * API call once a backend/reservation service is available.
 */
export default function Reservation() {
  const [form, setForm] = useState({ date: '', time: '', guests: '' })

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
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
          className="bg-garcia-800/50 border border-cream/10 rounded-xl p-5 md:p-6 grid md:grid-cols-4 gap-4 items-end"
        >
          {/* Date field */}
          <label className="flex items-center gap-3 border border-cream/20 rounded-lg px-4 py-3 focus-within:border-gold transition-colors">
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
          <label className="flex items-center gap-3 border border-cream/20 rounded-lg px-4 py-3 focus-within:border-gold transition-colors">
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
          <label className="flex items-center gap-3 border border-cream/20 rounded-lg px-4 py-3 focus-within:border-gold transition-colors">
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

          <Button variant="primary" icon={Search} type="submit" className="w-full">
            Find a Table
          </Button>

          <p className="md:col-span-4 text-center text-cream-muted text-xs mt-2">
            You will receive a confirmation with WhatsApp or phone call.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
