import { useState } from 'react'
import SkyBackground from './components/SkyBackground'
import CargoDoor from './components/CargoDoor'
import HudHeader from './components/HudHeader'
import DoorLever from './components/DoorLever'
import LoginForm from './components/LoginForm'
import StatusFooter from './components/StatusFooter'
import Freefall from './components/Freefall'
import TicketShop from './components/TicketShop'

const ALTITUDE_FT = 14000

export default function App() {
  const [stage, setStage] = useState('login') // 'login' | 'freefall' | 'tickets'
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const toggleDoor = () => setIsDoorOpen((open) => !open)

  if (stage === 'freefall') return <Freefall onDone={() => setStage('tickets')} />
  if (stage === 'tickets') {
    return (
      <TicketShop
        onBack={() => {
          setIsDoorOpen(false)
          setStage('login')
        }}
      />
    )
  }

  // Telemetri diturunkan dari status pintu
  const airspeed = isDoorOpen ? 152 : 135
  const cabinPressure = isDoorOpen ? 59.2 : 101.3
  const statusMsg = isDoorOpen
    ? 'PERINGATAN: PINTU KARGO DIBUKA! SIAP TERJUN 14.000 FT'
    : 'PINTU TERTUTUP - KABIN BERTEKANAN NORMAL'

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-between">
      <SkyBackground isDoorOpen={isDoorOpen} />
      <CargoDoor isDoorOpen={isDoorOpen} />

      <HudHeader
        isDoorOpen={isDoorOpen}
        altitude={ALTITUDE_FT}
        airspeed={airspeed}
        cabinPressure={cabinPressure}
      />

      <main className="relative z-30 flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <DoorLever isDoorOpen={isDoorOpen} onToggle={toggleDoor} />
          </div>
          <div className="lg:col-span-7">
            <LoginForm
              isDoorOpen={isDoorOpen}
              onToggleDoor={toggleDoor}
              onSuccess={() => setStage('freefall')}
            />
          </div>
        </div>
      </main>

      <StatusFooter isDoorOpen={isDoorOpen} statusMsg={statusMsg} />
    </div>
  )
}
