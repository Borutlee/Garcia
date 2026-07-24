import React from 'react'
import { ThemeProvider } from './Context/ThemeContext'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import Offers from './sections/Offers'
import OrderOnline from './sections/OrderOnline'
import Reservation from './sections/Reservation'
import Gallery from './sections/Gallery'
import Footer from './sections/Footer'

/**
 * App.jsx
 * Root component — wraps the whole page in ThemeProvider so any
 * component can read/toggle dark & light mode via useTheme().
 */
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <Offers />
          {/* <OrderOnline /> */}
          <Reservation />
          <Gallery />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}