import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fallback from './components/Fallback.jsx'

// Add error boundary for the entire app
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

// Debug logging
console.log('Starting DataCents application...')

const rootElement = document.getElementById('root')
console.log('Root element found:', rootElement)

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="color: white; padding: 20px;">Error: Root element not found</div>'
} else {
  try {
    const root = createRoot(rootElement)
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
    const fallbackRoot = createRoot(rootElement)
    fallbackRoot.render(<Fallback error={error} />)
  }
}
