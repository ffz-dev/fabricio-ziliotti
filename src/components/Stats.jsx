import React, { useState } from 'react'
import { trackEvent } from '../utils/analytics'

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
)

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const Stats = () => {
  const calculateMonthsPlaying = () => {
    const startDate = new Date(2024, 6, 1)
    const currentDate = new Date()
    const yearDiff = currentDate.getFullYear() - startDate.getFullYear()
    const monthDiff = currentDate.getMonth() - startDate.getMonth()
    return yearDiff * 12 + monthDiff
  }

  const monthsPlaying = calculateMonthsPlaying()
  const [openMsg, setOpenMsg] = useState('')
  const [openTitle, setOpenTitle] = useState('')
  const closeDialog = () => { setOpenMsg(''); setOpenTitle('') }

  const openStat = (title, msg, eventLabel) => {
    setOpenTitle(title)
    setOpenMsg(msg)
    trackEvent('ProfileStat', 'Open', eventLabel)
  }

  const onKey = (e, title, msg, eventLabel) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openStat(title, msg, eventLabel)
    }
  }

  const messages = {
    months: 'Iniciei em julho de 2024 no Clube Castelinho em Franca-SP. Já gostava de jogar tênis de mesa desde criança e me apaixonei assim que conheci o esporte.',
    cities: 'Já disputei torneios e jogos nas cidades: Araraquara, Araras, Franca, Limeira, Natal, Ribeirão Preto, Taquaritinga.',
    tournaments: 'Disputei torneios nas cidades Araraquara, Araras, Franca, Limeira e Taquaritinga. Sendo medalhista em jogos de duplas masculinas, duplas mistas e simples.',
    medals: 'Até agora foram 17 medalhas conquistadas em diferentes categorias.'
  }

  const stats = [
    { id: 1, value: monthsPlaying, label: 'Meses Jogando',       Icon: CalendarIcon, message: messages.months,      eventLabel: 'months_playing'   },
    { id: 2, value: 7,             label: 'Cidades',              Icon: MapPinIcon,   message: messages.cities,      eventLabel: 'cities_known'     },
    { id: 3, value: 13,            label: 'Torneios',             Icon: TrophyIcon,   message: messages.tournaments, eventLabel: 'tournaments_played' },
    { id: 4, value: 17,            label: 'Medalhas',             Icon: MedalIcon,    message: messages.medals,      eventLabel: 'medals_won'       },
  ]

  return (
    <>
      <div className="grid grid-cols-4 gap-2 animate-fade-up">
        {stats.map((stat, i) => (
          <button
            key={stat.id}
            type="button"
            onClick={() => openStat(stat.label, stat.message, stat.eventLabel)}
            onKeyDown={(e) => onKey(e, stat.label, stat.message, stat.eventLabel)}
            aria-label={`Saiba mais sobre ${stat.label}`}
            style={{ animationDelay: `${i * 0.07}s` }}
            className="group flex flex-col items-center gap-1.5 rounded-2xl border border-green-100 bg-white/70 backdrop-blur-sm p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg hover:shadow-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 cursor-pointer"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 group-hover:bg-green-200 transition-colors">
              <stat.Icon />
            </span>
            <span className="text-2xl font-bold text-green-800 leading-none">{stat.value}</span>
            <span className="text-[10px] font-medium text-slate-500 leading-tight">{stat.label}</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {openMsg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeDialog}
        >
          <div
            className="max-w-md w-full rounded-2xl bg-white p-6 text-left shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-800 pr-6">{openTitle}</h3>
              <button
                type="button"
                onClick={closeDialog}
                className="text-slate-400 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 rounded-md p-0.5"
                aria-label="Fechar"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {openTitle === 'Cidades' ? (
              <ul className="space-y-1 mb-5">
                {['Araraquara', 'Araras', 'Franca', 'Limeira', 'Taquaritinga', 'Ribeirão Preto', 'Natal'].map(city => (
                  <li key={city} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {city}
                  </li>
                ))}
              </ul>
            ) : openTitle === 'Torneios' ? (
              <div className="space-y-3 mb-5 text-sm text-slate-700">
                <div>
                  <p className="font-medium text-slate-800 mb-1">Cidades</p>
                  <ul className="space-y-1">
                    {['Araraquara', 'Araras', 'Franca', 'Limeira', 'Taquaritinga'].map(city => (
                      <li key={city} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{city}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">Medalhista em</p>
                  <ul className="space-y-1">
                    {['Duplas masculinas', 'Duplas mistas', 'Simples'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-700 leading-relaxed mb-5">{openMsg}</p>
            )}

            <button
              type="button"
              onClick={closeDialog}
              className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Stats
