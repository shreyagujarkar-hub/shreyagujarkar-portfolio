import { useState } from 'react'
import { Camera, Sparkles, Grid2X2, Video, Square } from 'lucide-react'

function PhotoBoothWindow() {
  const [activeEffect, setActiveEffect] = useState('Normal')
  const [mode, setMode] = useState('single') // 'single' | 'burst' | 'video'
  const [flash, setFlash] = useState(false)

  const effects = ['Normal', 'Glow', 'Warm', 'Mono']

  const handleSnap = () => {
    setFlash(true)
    setTimeout(() => setFlash(false), 180)
  }

  const getFilterStyle = () => {
    switch (activeEffect) {
      case 'Glow':
        return 'contrast-105 brightness-110 saturate-115'
      case 'Warm':
        return 'sepia-[0.22] saturate-125 brightness-102'
      case 'Mono':
        return 'grayscale contrast-110 brightness-105'
      default:
        return ''
    }
  }

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[480px] xl:max-w-[510px] rounded-2xl sm:rounded-3xl bg-[#1e1e22] text-white backdrop-blur-3xl border border-white/25 shadow-[0_30px_70px_rgba(0,0,0,0.35),0_10px_24px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 hover:shadow-[0_35px_85px_rgba(0,0,0,0.45)] hover:-translate-y-1 select-none flex flex-col will-change-transform">
      {/* macOS Window Header Bar */}
      <div className="h-10 px-4 bg-gradient-to-b from-[#3a3a3f] to-[#2a2a2e] border-b border-[#18181b] flex items-center justify-between shrink-0">
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:opacity-85 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer hover:opacity-85 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-pointer hover:opacity-85 transition-opacity" />
        </div>

        {/* Window Title */}
        <div className="text-[12.5px] font-semibold text-neutral-200 tracking-tight flex items-center gap-1.5 shadow-2xs">
          <Camera className="w-3.5 h-3.5 text-neutral-300" />
          <span>Photo Booth</span>
        </div>

        <div className="w-14" /> {/* Optical balance spacer */}
      </div>

      {/* Viewfinder Stage */}
      <div className="relative aspect-[4/3.8] bg-[#0c0c0e] overflow-hidden group">
        <img
          src="/hero.jpg"
          alt="Portrait of Shreya Gujarkar"
          className={`w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-103 ${getFilterStyle()}`}
        />

        {/* Flash Animation on Snap */}
        {flash && (
          <div className="absolute inset-0 bg-white z-30 transition-opacity duration-150" />
        )}

        {/* Top Viewfinder Badge Overlays */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
          <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-neutral-200 tracking-wider border border-white/10">
            LIVE • 4K
          </span>
          <span className="bg-black/60 backdrop-blur-md px-3 py-0.5 rounded-full text-[10.5px] font-medium text-neutral-200 border border-white/10">
            Shreya Gujarkar
          </span>
        </div>

        {/* Subtle Inner Border Vignette */}
        <div className="absolute inset-0 rounded-none ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      {/* Application Control Bar */}
      <div className="px-4 py-3 bg-[#242428] border-t border-[#1a1a1d] flex items-center justify-between">
        {/* Left: Mode Switchers (Single, 4-Burst, Video) */}
        <div className="flex items-center gap-1 bg-[#18181b] p-1 rounded-xl border border-white/10 text-neutral-400">
          <button
            onClick={() => setMode('single')}
            title="Single Photo"
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              mode === 'single' ? 'bg-neutral-700 text-white shadow-xs' : 'hover:text-neutral-200'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMode('burst')}
            title="4-Up Burst"
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              mode === 'burst' ? 'bg-neutral-700 text-white shadow-xs' : 'hover:text-neutral-200'
            }`}
          >
            <Grid2X2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMode('video')}
            title="Video Mode"
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              mode === 'video' ? 'bg-neutral-700 text-white shadow-xs' : 'hover:text-neutral-200'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center: Red Circular Shutter Button */}
        <button
          onClick={handleSnap}
          title="Take Photo"
          className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 active:scale-90 border-2 border-white/90 shadow-[0_4px_12px_rgba(239,68,68,0.4)] flex items-center justify-center transition-all duration-150 cursor-pointer"
        >
          <Camera className="w-5 h-5 text-white drop-shadow-xs" />
        </button>

        {/* Right: Effects Pill Switcher */}
        <div className="flex items-center gap-1 bg-[#18181b] p-1 rounded-xl border border-white/10 text-[11px] font-medium text-neutral-400">
          {effects.map((fx) => (
            <button
              key={fx}
              onClick={() => setActiveEffect(fx)}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                activeEffect === fx
                  ? 'bg-neutral-700 text-white font-semibold shadow-xs'
                  : 'hover:text-neutral-200'
              }`}
            >
              {fx}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Photo Reel Strip / Tray */}
      <div className="px-4 pb-3.5 pt-1.5 bg-[#1a1a1d] flex items-center gap-2.5 overflow-x-auto border-t border-black/40">
        <div className="w-16 h-12 rounded-xl border-2 border-blue-500 overflow-hidden shrink-0 shadow-md relative group cursor-pointer">
          <img src="/hero.jpg" alt="Active Thumbnail" className="w-full h-full object-cover" />
          <span className="absolute bottom-0 right-0 bg-blue-600 text-[8px] font-bold px-1.5 py-0.5 rounded-tl-md">
            1
          </span>
        </div>
        <div className="w-16 h-12 rounded-xl border border-neutral-700/80 bg-neutral-800/60 overflow-hidden shrink-0 flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer">
          <Sparkles className="w-4 h-4 text-neutral-500" />
        </div>
        <div className="w-16 h-12 rounded-xl border border-neutral-700/80 bg-neutral-800/60 overflow-hidden shrink-0 flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer">
          <Square className="w-4 h-4 text-neutral-500" />
        </div>
      </div>
    </div>
  )
}

export default PhotoBoothWindow
