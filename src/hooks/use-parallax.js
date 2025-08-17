import { useEffect, useRef } from 'react'

export function useParallax() {
  const containerRef = useRef(null)

  useEffect(() => {
    try {
      const container = containerRef.current
      if (!container) return

      const handleScroll = () => {
        try {
          const scrolled = window.pageYOffset
          const rate = scrolled * 0.5 // Adjust this value to control parallax speed (0.5 = slower movement)
          
          container.style.backgroundPosition = `0 ${rate}px`
        } catch (error) {
          console.error('Error in parallax scroll handler:', error)
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    } catch (error) {
      console.error('Error setting up parallax effect:', error)
    }
  }, [])

  return containerRef
} 