import { useEffect, useRef } from 'react'

export function useParallax() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * 0.5 // Adjust this value to control parallax speed (0.5 = slower movement)
      
      container.style.backgroundPosition = `0 ${rate}px`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return containerRef
} 