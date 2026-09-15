import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wifi, Battery, Search, Sliders } from 'lucide-react'

function MacMenuBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }) + ' ' + now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      setTime(formatted)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 h-8 z-50 bg-white/40 backdrop-blur-xl border-b border-white/30 text-neutral-800 text-xs font-medium select-none px-3 flex items-center justify-between shadow-xs">
      {/* Left Menu Items */}
      <div className="flex items-center gap-3.5">
        {/* Apple Icon */}
        <Link to="/" className="text-neutral-900 hover:opacity-75 transition-opacity" title="Apple">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.71-7.96-12.01-14.64-5.87-9.14-10.45-19.46-13.75-30.98-3.3-11.51-4.96-22.18-4.96-32.02 0-14.12 3.63-25.79 10.9-35 7.27-9.21 16.5-13.91 27.68-14.12 4.58 0 9.87 1.25 15.88 3.76 6 2.51 9.94 3.86 11.81 4.05 1.57-.27 5.73-1.66 12.49-4.18 6.75-2.52 12.16-3.6 16.22-3.24 13.59.85 24.16 5.68 31.7 14.51-11.83 7.18-17.61 16.92-17.34 29.23.27 9.58 3.86 17.58 10.77 24 6.91 6.42 15.11 10.02 24.6 10.8-2.02 6.02-4.42 12.01-7.19 17.98zM119.22 31.84c0-7.72 2.76-14.99 8.28-21.81 5.52-6.82 12.3-10.73 20.35-11.73.23 1.15.35 2.21.35 3.18 0 7.63-2.88 15.08-8.64 22.34-5.76 7.27-12.77 11.31-21.03 12.13-.23-1.38-.34-2.75-.34-4.11z" />
          </svg>
        </Link>
        <span className="font-bold text-neutral-900">Shreya Gujarkar</span>
        <span className="hidden sm:inline-block hover:bg-black/5 px-1.5 py-0.5 rounded transition-colors cursor-default">File</span>
        <span className="hidden sm:inline-block hover:bg-black/5 px-1.5 py-0.5 rounded transition-colors cursor-default">Edit</span>
        <span className="hidden sm:inline-block hover:bg-black/5 px-1.5 py-0.5 rounded transition-colors cursor-default">View</span>
        <span className="hidden sm:inline-block hover:bg-black/5 px-1.5 py-0.5 rounded transition-colors cursor-default">Window</span>
        <span className="hidden sm:inline-block hover:bg-black/5 px-1.5 py-0.5 rounded transition-colors cursor-default">Help</span>
      </div>

      {/* Right Menu Items & Status */}
      <div className="flex items-center gap-2.5 sm:gap-3 text-neutral-800">
        <Wifi className="w-3.5 h-3.5 opacity-80" />
        <Battery className="w-4 h-4 opacity-80" />
        <Search className="w-3.5 h-3.5 opacity-80 hidden xs:inline-block" />
        <Sliders className="w-3.5 h-3.5 opacity-80" />
        <span className="text-[11px] font-medium tracking-tight text-neutral-900 ml-1">{time}</span>
      </div>
    </header>
  )
}

export default MacMenuBar
