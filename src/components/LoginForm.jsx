import { useState } from 'react'
import Icon, { PATHS } from './Icon'

const inputBase =
  'w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors'

function Spinner() {
  return (
    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export default function LoginForm({ isDoorOpen, onToggleDoor, onSuccess }) {
  const [jumperId, setJumperId] = useState('SK-9082')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (!isDoorOpen) {
      alert('Buka tuas pintu kargo pesawat terlebih dahulu sebelum bersiap terjun!')
      return
    }
    setIsLoggingIn(true)
    setTimeout(() => {
      setIsLoggingIn(false)
      onSuccess()
    }, 1200)
  }

  return (
    <div
      className={`relative transition-all duration-700 rounded-3xl p-8 backdrop-blur-2xl border ${
        isDoorOpen
          ? 'bg-slate-900/85 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.25)]'
          : 'bg-slate-900/40 border-slate-800/80 opacity-60 filter blur-[1px]'
      }`}
    >
      {/* Overlay terkunci */}
      {!isDoorOpen && (
        <div
          onClick={onToggleDoor}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-3xl bg-slate-950/70 backdrop-blur-sm cursor-pointer p-6 text-center group"
        >
          <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-yellow-400 mb-3 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            <Icon d={PATHS.lock} className="w-8 h-8" />
          </div>
          <h4 className="font-hud text-lg font-bold text-white tracking-wide">FORMULIR BELUM AKTIF</h4>
          <p className="text-xs text-slate-300 max-w-sm mt-1">
            Seperti saklar lampu yang harus dinyalakan, di sini Anda harus{' '}
            <span className="text-yellow-400 font-semibold underline">membuka pintu kargo</span>{' '}
            terlebih dahulu untuk bersiap diving!
          </p>
          <button
            type="button"
            className="mt-4 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-hud text-xs font-bold flex items-center gap-2"
          >
            <span>Buka Pintu Pesawat Sekarang</span>
            <Icon d={PATHS.arrowRight} />
          </button>
        </div>
      )}

      {/* Header form */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-hud text-cyan-400 uppercase tracking-widest font-semibold">
              SKYDIVER AUTHENTICATION
            </span>
          </div>
          <h2 className="text-2xl font-bold font-hud text-white mt-1">LOGIN JUMPER MANIFEST</h2>
          <p className="text-xs text-slate-400">
            Verifikasi lisensi parasut USPA / FAI sebelum melompat ke dropzone.
          </p>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs text-slate-500">CABIN DEPLOY</span>
          <div className="font-hud text-sm font-bold text-emerald-400">READY TO JUMP</div>
        </div>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Jumper ID */}
          <div>
            <label className="block text-xs font-hud text-slate-300 mb-1.5 flex items-center justify-between">
              <span>CALL SIGN / JUMPER ID</span>
              <span className="text-[10px] text-cyan-400">TERVERIFIKASI</span>
            </label>
            <div className="relative">
              <input
                type="text"
                disabled={!isDoorOpen}
                value={jumperId}
                onChange={(e) => setJumperId(e.target.value)}
                placeholder="e.g. SK-9082"
                className={`${inputBase} text-cyan-300 font-mono`}
              />
              <div className="absolute right-3 top-3 text-slate-500">
                <Icon d={PATHS.user} />
              </div>
            </div>
          </div>

          {/* Rig type */}
          <div>
            <label className="block text-xs font-hud text-slate-300 mb-1.5">PARACHUTE RIG TYPE</label>
            <select
              disabled={!isDoorOpen}
              className={`${inputBase} px-3 text-slate-300 font-mono`}
            >
              <option>VECTOR 3 - TANDEM RIG (350 SQFT)</option>
              <option>JAVELIN ODYSSEY - SOLO SPORT</option>
              <option>MIRAGE G4 - WINGSUIT SPECIAL</option>
            </select>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-hud text-slate-300 mb-1.5">EMAIL AKUN PENERJUN</label>
          <div className="relative">
            <input
              type="email"
              required
              disabled={!isDoorOpen}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jumper.pilot@aerodrop.sky"
              className={`${inputBase} text-white placeholder-slate-600`}
            />
            <div className="absolute right-3 top-3 text-slate-500">
              <Icon d={PATHS.mail} />
            </div>
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-hud text-slate-300">
              KODE AKSES DARURAT (PIN / PASSWORD)
            </label>
            <a href="#" className="text-[11px] text-cyan-400 hover:underline font-hud">
              Lupa Sandi?
            </a>
          </div>
          <div className="relative">
            <input
              type="password"
              required
              disabled={!isDoorOpen}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className={`${inputBase} text-white placeholder-slate-600 font-mono`}
            />
            <div className="absolute right-3 top-3 text-slate-500">
              <Icon d={PATHS.lock} />
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            id="altimeter-sync"
            disabled={!isDoorOpen}
            defaultChecked
            className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-0 focus:ring-offset-0"
          />
          <label htmlFor="altimeter-sync" className="text-xs text-slate-400 leading-relaxed">
            Saya mengonfirmasi altimeter digital telah dikalibrasi pada ketinggian 14.000 FT AGL dan
            AAD (Automatic Activation Device) berstatus aktif.
          </label>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={!isDoorOpen || isLoggingIn}
            className={`w-full py-3.5 px-6 rounded-xl font-hud text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
              isDoorOpen
                ? 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-[0.98]'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isLoggingIn ? (
              <>
                <Spinner />
                <span>MENAUTKAN ALTIMETER &amp; MEMBUKA MANIFEST...</span>
              </>
            ) : (
              <>
                <span>OTORISASI &amp; TERJUN SEKARANG (DIVE IN)</span>
                <Icon d={PATHS.arrowRightLong} className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
              </>
            )}
          </button>
        </div>
      </form>


      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>SECURITY: 256-BIT ENCRYPTED</span>
        <span className="text-cyan-400">DROPZONE: DUBAI / SECTOR 04</span>
      </div>
    </div>
  )
}
