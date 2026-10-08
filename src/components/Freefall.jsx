import { useEffect, useState } from 'react'

const START_ALT = 14000
const CHUTE_ALT = 5000
const END_ALT = 3500

export default function Freefall({ onDone }) {
  const [count, setCount] = useState(3)
  const [alt, setAlt] = useState(START_ALT)
  const falling = count === 0
  const chute = alt <= CHUTE_ALT

  useEffect(() => {
    if (count > 0) {
      const t = setTimeout(() => setCount((c) => c - 1), 800)
      return () => clearTimeout(t)
    }
    const t = setInterval(() => setAlt((a) => a - 200), 100)
    return () => clearInterval(t)
  }, [count])

  useEffect(() => {
    if (alt <= END_ALT) onDone()
  }, [alt, onDone])

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-sky-950 via-sky-600 to-sky-300">
      {falling && !chute && (
        <>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="cloud-rush"
              style={{
                left: `${(i * 23) % 90}%`,
                width: `${160 + (i % 3) * 90}px`,
                height: `${70 + (i % 2) * 40}px`,
                animationDelay: `${-i * 0.16}s`,
              }}
            />
          ))}
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="wind-streak"
              style={{
                left: `${i * 4.2}%`,
                top: `${(i * 13) % 50}%`,
                animationDuration: `${0.35 + (i % 4) * 0.08}s`,
                animationDelay: `${(i * 0.05).toFixed(2)}s`,
              }}
            />
          ))}
        </>
      )}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center font-hud">
        {!falling && (
          <div className="text-9xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]">
            {count}
          </div>
        )}
        {falling && (
          <>
            <p className="text-sm tracking-widest text-cyan-100">
              {chute ? '🪂 PARASUT TERKEMBANG' : 'TERJUN BEBAS'}
            </p>
            <div className="text-7xl sm:text-8xl font-black text-white mt-2">
              {alt.toLocaleString('id-ID')}
              <span className="text-2xl font-normal text-cyan-100"> FT</span>
            </div>
            <p className="mt-2 text-lg text-cyan-50">
              {chute ? '25 km/jam' : '200 km/jam'}
            </p>
          </>
        )}
      </div>

      <button
        onClick={onDone}
        className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-lg bg-slate-950/60 border border-white/30 text-xs font-hud text-white hover:bg-slate-950/80"
      >
        Lewati
      </button>
    </div>
  )
}
