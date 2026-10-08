export default function CargoDoor({ isDoorOpen }) {
  return (
    <div
      className={`door-perspective absolute inset-0 z-20 pointer-events-none flex ${
        isDoorOpen ? 'door-open' : ''
      }`}
    >
      {/* DAUN PINTU KIRI */}
      <div className="door-panel-left w-1/2 h-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800 border-r-4 border-yellow-500/80 shadow-[10px_0_40px_rgba(0,0,0,0.9)] flex flex-col justify-between p-8 relative">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-0 right-0 w-8 h-full bg-[repeating-linear-gradient(45deg,#eab308,#eab308_14px,#000_14px,#000_28px)] opacity-85 border-l border-zinc-700" />

        <div className="z-10 flex items-center gap-3">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <span className="font-hud tracking-widest text-xs text-zinc-400 uppercase">
            C-130 HERCULES / CARGO RAMP L-01
          </span>
        </div>

        <div className="z-10 my-auto text-left pl-6 max-w-sm">
          <div className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-hud text-xs font-bold rounded mb-2">
            WARNING: HIGH ALTITUDE JUMP
          </div>
          <h2 className="text-3xl font-extrabold font-hud tracking-wider text-zinc-200">
            CARGO EXIT HATCH
          </h2>
          <p className="text-xs text-zinc-400 mt-2 font-mono leading-relaxed">
            Tekan tuas hidrolik darurat untuk membuka pintu kabin. Waspadai penurunan tekanan udara
            secara instan dan hembusan angin 150 knot.
          </p>
        </div>

        <div className="z-10 font-hud text-[11px] text-zinc-500 space-y-1">
          <div>
            SAFETY LOCK:{' '}
            <span className={isDoorOpen ? 'text-amber-400 font-bold' : 'text-emerald-400'}>
              {isDoorOpen ? 'DISENGAGED (OPEN)' : 'LOCKED & SECURED'}
            </span>
          </div>
          <div>SERIAL: USAF-SKD-2024-X8</div>
        </div>
      </div>

      {/* DAUN PINTU KANAN */}
      <div className="door-panel-right w-1/2 h-full bg-gradient-to-l from-zinc-950 via-zinc-900 to-zinc-800 border-l-4 border-yellow-500/80 shadow-[-10px_0_40px_rgba(0,0,0,0.9)] flex flex-col justify-between p-8 relative items-end">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-0 left-0 w-8 h-full bg-[repeating-linear-gradient(-45deg,#eab308,#eab308_14px,#000_14px,#000_28px)] opacity-85 border-r border-zinc-700" />

        <div className="z-10 flex items-center gap-3">
          <span className="font-hud tracking-widest text-xs text-zinc-400 uppercase">
            JUMP MASTER PROTOCOL
          </span>
          <span className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
        </div>

        <div className="z-10 my-auto text-right pr-6 max-w-sm">
          <div className="font-hud text-5xl font-black text-zinc-800 tracking-tighter">14,000 FT</div>
          <div className="text-zinc-500 font-hud text-xs mt-1">DROP ZONE: ALPHA SECTOR</div>
        </div>

        <div className="z-10 font-hud text-[11px] text-zinc-500 text-right">
          <div>ALTITUDE RECORD: ACTIVE</div>
          <div>WIND VELOCITY: 152 KTS</div>
        </div>
      </div>
    </div>
  )
}
