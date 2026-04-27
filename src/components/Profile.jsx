import React from 'react'

const Profile = () => {

  return (
    <div className="text-center animate-slide-up">
      <div className="relative mb-4">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-700 p-1">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="./fabricio-pickleball.webp"
              alt="Fabrício Ziliotti"
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center',
                transform: 'scale(1.1)'
              }}
            />
          </div>
        </div>
        {/* Container com bounce; imagem com spin lento */}
        <span className="absolute -bottom-1 -right-1 w-4 h-4 bounce-subtle">
          <img src="./pickleball-ball.svg" alt="Bola de pickleball" className="w-full h-full spin-slow" />
        </span>
      </div>

      <h2 className="text-xl font-bold text-slate-800 mb-1">
        Fabrício Ziliotti
      </h2>

      <p className="text-sm text-slate-600 max-w-sm mx-auto mb-3">
        Atleta e instrutor de Pickleball em Franca-SP
      </p>

    </div>
  )
}

export default Profile

