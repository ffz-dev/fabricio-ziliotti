import React, { useEffect } from 'react'
import { initGA, trackPageView, trackEvent } from './utils/analytics'
import Profile from './components/Profile'
import Links from './components/Links'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Inicializar Google Analytics
    const gaId = 'G-RYSE6VXWSH'
    initGA(gaId)
    trackPageView()
  }, [])

  const handleWhatsAppCtaClick = () => {
    trackEvent('CTA', 'Click', 'whatsapp_floating')
  }

  return (
    <div className="court-pattern relative min-h-full bg-gradient-to-br from-green-50 via-green-50 to-green-100">
      {/* Fundo sutil com blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-green-300/25 blur-3xl"></div>
        <div className="absolute bottom-[-8rem] right-[-8rem] w-[40rem] h-[40rem] rounded-full bg-green-400/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[24rem] h-[24rem] rounded-full bg-green-200/20 blur-3xl"></div>
      </div>

      <main className="container mx-auto px-4 py-6" role="main">
        <div className="max-w-md mx-auto space-y-5">
          <Profile />
          <Links />
        </div>
      </main>
      <Footer />

      {/* CTA flutuante WhatsApp */}
      <a
        href="https://wa.me/5516992144146?text=Olá%20Fabrício!%20Vim%20do%20site.%20Quero%20saber%20sobre%20aulas%20e%20mentoria."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Converse no WhatsApp"
        title="Converse no WhatsApp"
        onClick={handleWhatsAppCtaClick}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full animate-pulse-ring shadow-lg shadow-green-600/30 hover:shadow-green-700/50 bg-green-600 hover:bg-green-700 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
      >
        <span className="sr-only">WhatsApp</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0A2.25 2.25 0 0019.5 19.5v-1.33c0-.66-.43-1.24-1.06-1.43l-3.09-1.03c-.53-.18-1.12-.04-1.52.36l-.78.78a12.04 12.04 0 01-5.62-5.62l.78-.78c.4-.4.54-.99.36-1.52l-1.03-3.1c-.19-.63-.77-1.06-1.43-1.06H5.5A2.25 2.25 0 003.25 5.25v1.5z" />
        </svg>
      </a>
    </div>
  )
}

export default App

