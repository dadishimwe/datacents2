import React from 'react'

const Fallback = ({ error }) => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#7c3aed' }}>
          DataCents Research Platform
        </h1>
        {error ? (
          <div>
            <p style={{ marginBottom: '1rem' }}>Something went wrong while loading the application.</p>
            <details style={{ textAlign: 'left', background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>Error Details</summary>
              <pre style={{ fontSize: '0.875rem', color: '#ef4444' }}>{error.message}</pre>
            </details>
          </div>
        ) : (
          <p>Loading DataCents Research Platform...</p>
        )}
        <button 
          onClick={() => window.location.reload()} 
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1e40af',
            color: '#ffffff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Reload Page
        </button>
      </div>
    </div>
  )
}

export default Fallback 