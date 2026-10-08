const SKY_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCmGyFRx7kB_99MnzJht5_SpCwqUfXzTiuGdykE7Jmy49imojOvyx18d6vTY5FD_AkwMP1M8el5Iv7ThrrMkqd9Bj3qreoEPiZe1WJqkwlA6LOVF9zD4eaipUIhJt6CcRLqyGK1sm-pucb1q6RDUEPMnLO5jh-u--1P62OCdyKNi75mJpcUISQhotB-7rv4pAE2p1TrHeibA1NH57MXkH0AMpedybx3ah_TkBhEiWQ'

export default function SkyBackground({ isDoorOpen }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-sky-950">
      <img
        src={SKY_IMAGE}
        alt="Skydiving sky view from aircraft door"
        className={`w-full h-full object-cover clouds-pan transition-all duration-1000 ${
          isDoorOpen ? 'scale-105 filter-none' : 'scale-95 brightness-50'
        }`}
      />

      {/* Atmospheric overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          isDoorOpen
            ? 'bg-gradient-to-t from-sky-900/40 via-transparent to-black/50'
            : 'bg-black/80'
        }`}
      />

      {/* Wind streaks saat pintu terbuka */}
      {isDoorOpen && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="wind-streak"
              style={{
                left: `${6 + i * 6.8}%`,
                top: `${(i * 17) % 60}%`,
                animationDelay: `${(i * 0.12).toFixed(2)}s`,
                animationDuration: `${0.6 + (i % 4) * 0.15}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
