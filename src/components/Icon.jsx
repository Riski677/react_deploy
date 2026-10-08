// Ikon SVG outline sederhana; cukup kirim path "d"-nya.
export default function Icon({ d, className = 'w-4 h-4', strokeWidth = 2 }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d={d} />
    </svg>
  )
}

export const PATHS = {
  navigation: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
  bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
  chevronUp: 'M5 15l7-7 7 7',
  chevronDown: 'M19 9l-7 7-7-7',
  lock: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  arrowRight: 'M14 5l7 7m0 0l-7 7m7-7H3',
  arrowRightLong: 'M17 8l4 4m0 0l-4 4m4-4H3',
}
