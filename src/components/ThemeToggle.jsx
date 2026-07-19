import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

/**
 * ThemeToggle.jsx
 * Small circular button that switches between dark and light mode.
 * Shows a Sun icon while in dark mode (click to go light) and a
 * Moon icon while in light mode (click to go dark).
 */
export default function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className={`w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream-muted hover:text-gold hover:border-gold transition-colors duration-300 shrink-0 ${className}`}
        >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    )
}