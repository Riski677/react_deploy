import Icon, { PATHS } from './Icon'

function Metric({ label, value, unit, valueClass }) {
  return (
    <div className="text-center font-hud">
      <div className="text-[10px] text-slate-400">{label}</div>
      <div className={`text-base font-bold flex items-center gap-1 justify-center ${valueClass}`}>
        <span>{value}</span>
        <span className="text-xs font-normal text-slate-500">{unit}</span>
      </div>
    </div>
  )
}

const Divider = () => <div className="w-px h-7 bg-slate-800" />

export default function HudHeader({ isDoorOpen, altitude, airspeed, cabinPressure }) {
  return (
    <header className="relative z-30 w-full px-6 py-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/30">
      {/* Brand */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_18px_rgba(6,182,212,0.6)]">
          <Icon d={PATHS.navigation} className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold font-hud tracking-wider text-cyan-400">AERODROP OS</h1>
            <span className="px-2 py-0.5 rounded text-[10px] font-hud bg-cyan-950 border border-cyan-500/50 text-cyan-300">
              V2.4 HUD
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Portal Akses Terjun Bebas &amp; Autentikasi Awak Kabin
          </p>
        </div>
      </div>

      {/* Telemetri */}
      <div className="hidden md:flex items-center gap-6 bg-slate-900/90 border border-slate-800 px-5 py-2 rounded-xl">
        <Metric
          label="KETINGGIAN (ALT)"
          value={altitude.toLocaleString()}
          unit="FT"
          valueClass="text-cyan-300"
        />
        <Divider />
        <Metric label="KECEPATAN (IAS)" value={airspeed} unit="KTS" valueClass="text-emerald-400" />
        <Divider />
        <Metric
          label="TEKANAN KABIN"
          value={cabinPressure}
          unit="KPA"
          valueClass={isDoorOpen ? 'text-amber-400' : 'text-cyan-400'}
        />
      </div>

      {/* Lampu peringatan */}
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-hud text-xs ${
          isDoorOpen
            ? 'bg-red-500/20 border-red-500/70 text-red-400 siren-active'
            : 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
        }`}
      >
        <span className={`w-2.5 h-2.5 rounded-full ${isDoorOpen ? 'bg-red-500' : 'bg-emerald-500'}`} />
        <span>{isDoorOpen ? 'JUMP LIGHT: GREEN (GO)' : 'CABIN PRESSURIZED'}</span>
      </div>
    </header>
  )
}
