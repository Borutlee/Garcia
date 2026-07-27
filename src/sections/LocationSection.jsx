import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function LocationSection() {
    // بيانات الفرع والمعلومات السريعة مع أيقونات Lucide
    const locationDetails = [
        {
            title: 'Address',
            value: '5 Baghdad St, Korba, Heliopolis, Cairo',
            icon: MapPin,
        },
        {
            title: 'Working Hours',
            value: 'Daily: 09:00 AM – 01:00 AM',
            icon: Clock,
        },
        {
            title: 'Reservations & Delivery',
            value: '+20 123 456 7890',
            icon: Phone,
        },
    ]

    return (
        <section id="location" className="py-20 px-5 md:px-10 bg-garcia-900 border-t border-cream/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* عنوان السكشن */}
                <SectionHeading
                    eyebrow="Visit Us"
                    title="Where to Find Garcia"
                />

                <div className="grid lg:grid-cols-3 gap-8 items-stretch mt-12">

                    {/* 1. كارت التفاصيل والمعلومات */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-garcia-800/60 border border-cream/10 shadow-sm transition-colors duration-300"
                    >
                        <div>
                            <h3 className="text-cream font-serif font-bold text-xl md:text-2xl mb-2">
                                Garcia Restaurant & Cafe
                            </h3>
                            <p className="text-cream/60 text-sm font-sans leading-relaxed">
                                Experience an extraordinary atmosphere and fine dining right in the heart of Korba.
                            </p>
                        </div>

                        {/* تفاصيل العنوان والمواعيد */}
                        <div className="space-y-4 my-2">
                            {locationDetails.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3.5 p-3 rounded-xl bg-garcia-900/50 border border-cream/5 transition-colors duration-300"
                                    >
                                        <div className="p-2 rounded-lg bg-gold/10 text-gold shrink-0">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-gold font-sans font-bold text-xs uppercase tracking-wider">
                                                {item.title}
                                            </h4>
                                            <p className="text-cream/90 text-sm font-sans mt-0.5">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* زرار الاتجاهات */}
                        <div>
                            <a
                                href="https://maps.google.com/?cid=3752467093177423514"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gold/10 text-gold font-sans font-bold text-sm border border-gold/30 hover:bg-gold hover:text-garcia-950 transition-all duration-300 shadow-sm"
                            >
                                <Navigation size={18} />
                                Get Directions on Google Maps
                            </a>
                        </div>
                    </motion.div>

                    {/* 2. حاوية الخريطة التفاعلية */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="lg:col-span-2 relative min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden border border-gold/15 bg-garcia-800/60 shadow-xl"
                    >
                        <iframe
                            title="Garcia Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.126861214343!2d31.323565!3d30.090558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f6f54cb69cb%3A0x341370f0982ed69a!2sGarcia%20Restaurant%20%26%20Cafe!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '380px' }}
                            allowFullScreen=""
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full opacity-100"
                        ></iframe>

                        <div className="absolute inset-0 pointer-events-none border border-gold/10 rounded-2xl" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}