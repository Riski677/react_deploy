import Icon, { PATHS } from './Icon'

export default function DoorLever({ isDoorOpen, onToggle }) {
  return (
    <div className="w-full bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="h-2 w-full bg-[repeating-linear-gradient(45deg,#eab308,#eab308_10px,#18181b_10px,#18181b_20px)] rounded mb-5 opacity-80" />

      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="font-hud text-xs text-yellow-400 font-semibold tracking-wider uppercase">
            EMERGENCY CONTROLLER
          </span>
          <h3 className="text-lg font-bold font-hud text-white mt-0.5">TUAS PINTU KARGO</h3>
          <p className="text-xs text-slate-400 mt-1">
            Tarik tuas ke bawah untuk membuka pintu kabin &amp; mengaktifkan form login.
          </p>
        </div>
        <div
          className={`p-2 rounded-lg border ${
            isDoorOpen
              ? 'bg-amber-500/20 border-amber-500 text-amber-400'
              : 'bg-slate-800 border-slate-700 text-slate-500'
          }`}
        >
          <Icon d={PATHS.bolt} className="w-5 h-5" />
        </div>
      </div>

      {/* Tuas hidrolik */}
      <div className="my-6 bg-slate-950 border-2 border-slate-800 rounded-xl p-6 flex flex-col items-center relative">
        <div className="flex items-center justify-between w-full mb-4 px-2 font-hud text-xs">
          <span className="text-slate-400">STATUS PINTU:</span>
          <span className={`font-bold ${isDoorOpen ? 'text-red-400' : 'text-slate-400'}`}>
            {isDoorOpen ? 'TERBUKA LEBAR (UNLOCKED)' : 'TERKUNCI RAPAT'}
          </span>
        </div>

        <div className="relative w-28 h-40 bg-zinc-900 border-2 border-zinc-700 rounded-2xl flex flex-col items-center justify-between py-4 shadow-inner">
          <div className="absolute top-6 bottom-6 w-3 bg-black rounded-full border border-zinc-800" />

          <div
            onClick={onToggle}
            className={`lever-bar cursor-pointer z-10 w-24 h-12 rounded-xl flex items-center justify-center font-hud text-xs font-bold transition-all shadow-xl select-none ${
              isDoorOpen
                ? 'lever-pulled bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_20px_rgba(225,29,72,0.7)]'
                : 'bg-gradient-to-r from-yellow-500 to-amber-600 text-zinc-950 shadow-[0_4px_15px_rgba(245,158,11,0.5)] hover:brightness-110'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Icon d={isDoorOpen ? PATHS.chevronUp : PATHS.chevronDown} />
              <span>{isDoorOpen ? 'TUTUP PINTU' : 'TARIK TUAS'}</span>
            </div>
          </div>

          <div className="font-hud text-[9px] text-zinc-600 font-mono tracking-widest uppercase">
            HYDR-OPEN PULL
          </div>
        </div>

        <p className="text-[11px] text-center text-slate-400 mt-4 leading-relaxed font-sans">
          {isDoorOpen
            ? '🔥 Pintu pesawat terbuka! Tekanan angin masuk. Formulir penerjun siap diakses.'
            : '🔒 Pintu masih terkunci. Klik tuas di atas untuk membuka pintu pesawat seperti mau skydiving.'}
        </p>
      </div>

      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-xs text-slate-400 font-mono">
          Sensasi visual: Pintu pesawat membuka pemandangan awan 14.000 ft.
        </span>
      </div>
    </div>
  )
}
