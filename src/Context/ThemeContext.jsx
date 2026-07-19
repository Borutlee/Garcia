import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

/**
 * ThemeProvider
 * Wraps the app, stores the current theme ('dark' | 'light') in state,
 * syncs it to localStorage, and toggles the "light" class on <html>
 * (CSS variables in index.css react to that class).
 */
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark'
        return localStorage.getItem('garcia-theme') || 'dark'
    })

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'light') {
            root.classList.add('light')
        } else {
            root.classList.remove('light')
        }
        localStorage.setItem('garcia-theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}