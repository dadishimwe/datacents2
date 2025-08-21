import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import datacentsLogo from '@/assets/datacents-logo.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'About Team', path: '/about' },
    { name: 'Further Study', path: '/further-study' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={datacentsLogo} 
              alt="DataCents Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-[#BFA242]">MIT Research</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* GitHub Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              variant="outline" 
              className="pulse-glow"
            >
              <a 
                href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-effect border-t border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                asChild 
                variant="outline" 
                className="w-full"
              >
                <a 
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation

