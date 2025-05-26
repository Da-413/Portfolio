import React, { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '@/utils'

type Theme = 'dark' | 'light' | 'system'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'dark' | 'light'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'dark',
  storageKey = 'portfolio-theme'
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark')

  const getSystemTheme = (): 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'dark'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    return mediaQuery.matches ? 'dark' : 'light'
  }

  const calculateResolvedTheme = (currentTheme: Theme): 'dark' | 'light' => {
    if (currentTheme === 'system') {
      return getSystemTheme()
    }
    return currentTheme
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    setStorageItem(storageKey, newTheme)
    
    const resolved = calculateResolvedTheme(newTheme)
    setResolvedTheme(resolved)
    
    document.documentElement.setAttribute('data-theme', resolved)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(resolved)
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  useEffect(() => {
    const savedTheme = getStorageItem<Theme>(storageKey, defaultTheme)
    const resolved = calculateResolvedTheme(savedTheme)
    
    setThemeState(savedTheme)
    setResolvedTheme(resolved)
    
    document.documentElement.setAttribute('data-theme', resolved)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(resolved)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (savedTheme === 'system') {
        const newResolved = getSystemTheme()
        setResolvedTheme(newResolved)
        document.documentElement.setAttribute('data-theme', newResolved)
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(newResolved)
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [defaultTheme, storageKey])

  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme
  }

  return React.createElement(
    ThemeContext.Provider,
    { value },
    children
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}

export function useIsDark() {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'dark'
}

export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateSystemTheme = () => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const isDark = mediaQuery.matches
      setSystemTheme(isDark ? 'dark' : 'light')
    }

    updateSystemTheme()
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateSystemTheme)

    return () => mediaQuery.removeEventListener('change', updateSystemTheme)
  }, [])

  return systemTheme
}