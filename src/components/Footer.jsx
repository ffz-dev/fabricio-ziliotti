import React from 'react'
import Stats from './Stats'

const Footer = () => {
  return (
    <footer className="text-center mt-4">
      <div className="max-w-md mx-auto px-4">
        {/* Estatísticas */}
        <div className="mb-6">
          <Stats />
        </div>

        {/* Créditos */}
        <div className="mt-4 mb-6 pb-6 flex flex-col items-center gap-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-green-300 to-transparent" />
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} · Desenvolvido por{' '}
            <span className="text-green-700 font-medium">Fabrício Ziliotti</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

