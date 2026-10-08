import { useState } from 'react'

const PACKAGES = [
  { id: 'tandem', name: 'Tandem Standar', alt: '10.000 ft', price: 2500000, desc: 'Terjun bersama instruktur bersertifikat, freefall sekitar 30 detik.' },
  { id: 'video', name: 'Tandem + Video HD', alt: '10.000 ft', price: 3400000, desc: 'Termasuk video aksi dari kamera tangan dan kamera helm.' },
  { id: 'premium', name: 'Tandem Premium', alt: '14.000 ft', price: 4200000, desc: 'Freefall sekitar 60 detik, foto dan video lengkap.' },
  { id: 'aff', name: 'Kursus Solo AFF 1', alt: '14.000 ft', price: 5500000, desc: 'Belajar terjun mandiri: ground school dan 1 lompatan didampingi 2 instruktur.' },
]

const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
const today = new Date().toISOString().split('T')[0]
const field =
  'w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 [color-scheme:dark]'

export default function TicketShop({ onBack }) {
  const [pkgId, setPkgId] = useState('tandem')
  const [qty, setQty] = useState(1)
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [booking, setBooking] = useState(null)

  const pkg = PACKAGES.find((p) => p.id === pkgId)
  const total = pkg.price * qty

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = 'SKD-' + Math.random().toString(36).slice(2, 8).toUpperCase()
    setBooking({ code, name, date, qty, pkg, total })
  }

  return (
    <div className="w-screen h-screen overflow-y-auto bg-gradient-to-b from-sky-950 to-slate-950 text-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/30 bg-slate-950/80 backdrop-blur-md">
        <div>
          <h1 className="font-hud text-lg font-bold text-cyan-400 tracking-wider">AERODROP TICKETS</h1>
          <p className="text-xs text-slate-400">Pilih paket skydiving dan jadwalkan lompatanmu</p>
        </div>
        <button onClick={onBack} className="text-xs font-hud text-cyan-400 hover:underline">
          Kembali ke login
        </button>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 py-8">
        {/* Daftar paket */}
        <section className="lg:col-span-7 space-y-4">
          <h2 className="font-hud text-2xl font-bold">Pilih paket</h2>
          {PACKAGES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPkgId(p.id)}
              className={`w-full text-left p-5 rounded-2xl border transition-colors ${
                p.id === pkgId
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-hud text-lg font-bold">{p.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
                  <span className="inline-block mt-3 px-2 py-0.5 rounded text-[11px] font-hud bg-slate-800 text-cyan-300">
                    Ketinggian {p.alt}
                  </span>
                </div>
                <div className="font-hud font-bold text-cyan-300 whitespace-nowrap">{rupiah(p.price)}</div>
              </div>
            </button>
          ))}
        </section>

        {/* Ringkasan / pemesanan */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl">
            {booking ? (
              <div className="text-center">
                <div className="text-5xl mb-2">🪂</div>
                <h2 className="font-hud text-xl font-bold text-emerald-400">Pemesanan berhasil</h2>
                <p className="text-xs text-slate-400 mt-1">Tunjukkan kode ini di dropzone.</p>
                <div className="my-4 py-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-2xl tracking-widest text-cyan-300">
                  {booking.code}
                </div>
                <dl className="text-sm text-left space-y-1 text-slate-300">
                  <div className="flex justify-between"><dt>Atas nama</dt><dd>{booking.name}</dd></div>
                  <div className="flex justify-between"><dt>Paket</dt><dd>{booking.pkg.name}</dd></div>
                  <div className="flex justify-between"><dt>Tanggal</dt><dd>{booking.date}</dd></div>
                  <div className="flex justify-between"><dt>Penerjun</dt><dd>{booking.qty}</dd></div>
                  <div className="flex justify-between font-bold text-white pt-2 border-t border-slate-800">
                    <dt>Total</dt><dd>{rupiah(booking.total)}</dd>
                  </div>
                </dl>
                <button
                  onClick={() => setBooking(null)}
                  className="mt-5 w-full py-2.5 rounded-xl border border-cyan-500/50 text-cyan-300 font-hud text-sm hover:bg-cyan-500/10"
                >
                  Pesan lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-hud text-xl font-bold">Detail pemesanan</h2>
                <div>
                  <label className="block text-xs font-hud text-slate-300 mb-1.5">Nama penerjun</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama sesuai identitas" className={field} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-hud text-slate-300 mb-1.5">Tanggal lompat</label>
                    <input required type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={field} />
                  </div>
                  <div>
                    <label className="block text-xs font-hud text-slate-300 mb-1.5">Jumlah penerjun</label>
                    <input required type="number" min="1" max="10" value={qty} onChange={(e) => setQty(Math.max(1, Math.min(10, Number(e.target.value) || 1)))} className={field} />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-sm space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>{pkg.name} × {qty}</span>
                    <span>{rupiah(total)}</span>
                  </div>
                  <div className="flex justify-between font-hud font-bold text-lg">
                    <span>Total</span>
                    <span className="text-cyan-300">{rupiah(total)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-hud text-sm font-bold bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 active:scale-[0.98] transition"
                >
                  Pesan tiket
                </button>
                <p className="text-[11px] text-slate-500">Demo: belum ada pembayaran sungguhan.</p>
              </form>
            )}
          </div>
        </aside>
      </main>
    </div>
  )
}
