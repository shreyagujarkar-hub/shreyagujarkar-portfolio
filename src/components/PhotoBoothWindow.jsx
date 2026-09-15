import { useState } from 'react'
import { Camera, Sparkles, SlidersHorizontal } from 'lucide-react'

function PhotoBoothWindow() {
  const [activeEffect, setActiveEffect] = useState('Normal')
  const [flash, setFlash] = useState(false)

  const effects = ['Normal', 'Glow', 'Warm', 'Mono']

  const handleSnap = () => {
    setFlash(true)
    setTimeout(() => setFlash(false), 200)
  }

  const getFilterStyle = () => {
    switch (activeEffect) {
      case 'Glow':
        return 'contrast-105 brightness-110 saturate-110'
      case 'Warm':
        return 'sepia-[0.25] saturate-125'
      case 'Mono':
        return 'grayscale contrast-110'
      default:
        return ''
    }
  }

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[420px] rounded-2xl bg-neutral-900/90 text-white backdrop-blur-2xl border border-white/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:shadow-[0_30px_70px_-12px_rgba(0,0,0,0.45)] hover:-translate-y-1 select-none">
      {/* macOS Window Header Bar */}
      <div className="h-9 px-3.5 bg-neutral-800/80 border-b border-neutral-700/60 flex items-center justify-between">
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        {/* Window Title */}
        <div className="text-[12px] font-medium text-neutral-300 tracking-tight flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-neutral-400" />
          <span>Photo Booth</span>
        </div>

        <div className="w-12" /> {/* Spacer for optical center */}
      </div>

      {/* Viewfinder Main Stage */}
      <div className="relative aspect-[4/4.2] bg-neutral-950 overflow-hidden group">
        <img
          src="/hero.jpg"
          alt="Shreya Gujarkar Portrait in Photo Booth"
          className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${getFilterStyle()}`}
        />

        {/* Subtle Shutter Flash Effect */}
        {flash && (
          <div className="absolute inset-0 bg-white z-30 transition-opacity duration-150 animate-fade-out" />
        )}

        {/* Top Viewfinder Overlays */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
          <span className="bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-neutral-300 tracking-wider">
            REC • 4K
          </span>
          <span className="bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-medium text-neutral-300">
            Shreya Gujarkar
          </span>
        </div>
      </div>

      {/* Photo Booth Controls Bar */}
      <div className="p-3 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between">
        {/* Effects Switcher Pill */}
        <div className="flex items-center gap-1 bg-neutral-800/90 p-1 rounded-full text-[11px] font-medium text-neutral-300">
          {effects.map((fx) => (
            <button
              key={fx}
              onClick={() => setActiveEffect(fx)}
              className={`px-2.5 py-0.5 rounded-full transition-all duration-150 cursor-pointer ${
                activeEffect === fx
                  ? 'bg-neutral-600 text-white font-semibold shadow-xs'
                  : 'hover:text-white'
              }`}
            >
              {fx}
            </button>
          ))}
        </div>

        {/* Classic Red Shutter Button */}
        <button
          onClick={handleSnap}
          title="Take Snapshot"
          className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 active:scale-90 border-2 border-white/80 shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer group"
        >
          <Camera className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Bottom Photo Reel Strip */}
      <div className="px-3 pb-3 pt-1 bg-neutral-900 flex items-center gap-2 overflow-x-auto">
        <div className="w-14 h-11 rounded-lg border-2 border-blue-500 overflow-hidden shrink-0 shadow-xs relative">
          <img src="/hero.jpg" alt="Thumbnail 1" className="w-full h-full object-cover" />
          <span className="absolute bottom-0 right-0 bg-blue-600 text-[8px] font-bold px-1 rounded-tl">1</span>
        </div>
        <div className="w-14 h-11 rounded-lg border border-neutral-700 bg-neutral-800/80 overflow-hidden shrink-0 flex items-center justify-center text-neutral-500">
          <Sparkles className="w-4 h-4 text-neutral-600" />
        </div>
        <div className="w-14 h-11 rounded-lg border border-neutral-700 bg-neutral-800/80 overflow-hidden shrink-0 flex items-center justify-center text-neutral-500">
          <SlidersHorizontal className="w-4 h-4 text-neutral-600" />
        </div>
      </div>
    </div>
  )
}

export default PhotoBoothWindow
