import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import './App.css'

// Components
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import Documentation from './components/Documentation'
import AboutTeam from './components/AboutTeam'
import FurtherStudy from './components/FurtherStudy'
import Contact from './components/Contact'
import ErrorBoundary from './components/ErrorBoundary'

// Hooks
import { useParallax } from './hooks/use-parallax'

function App() {
  const parallaxRef = useParallax()

  return (
    <ErrorBoundary>
      <Router>
        <div 
          ref={parallaxRef}
          className="min-h-screen bg-background text-foreground parallax-grid"
        >
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/about" element={<AboutTeam />} />
              <Route path="/further-study" element={<FurtherStudy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
