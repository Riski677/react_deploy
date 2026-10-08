export default function StatusFooter({ isDoorOpen, statusMsg }) {
  return (
    <footer className="relative z-30 w-full px-6 py-3 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${isDoorOpen ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}
          />
          <span className="font-hud">{statusMsg}</span>
        </span>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span className="hidden sm:inline text-slate-400 font-hud">ANGIN RELATIF: 240 KM/JAM</span>
      </div>

      <div className="flex items-center gap-4 text-slate-400">
        <span>GPS: 25°04'N 55°11'E</span>
        <span className="text-cyan-400 font-bold font-hud">AERODROP DIVE PORTAL</span>
      </div>
    </footer>
  )
}
