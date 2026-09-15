import { useState } from 'react'
import { Play, Pause, SkipForward, Volume2, Music } from 'lucide-react'

function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="w-64 sm:w-72 rounded-2xl bg-black/75 text-white backdrop-blur-2xl border border-white/20 p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-neutral-400 mb-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-pink-400">
          <Music className="w-3 h-3" />
          <span>Now Playing</span>
        </div>
        <div className="flex items-center gap-1">
          <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-neutral-500'}`} />
          <span className="text-[10px] text-neutral-400">{isPlaying ? 'Live' : 'Paused'}</span>
        </div>
      </div>

      {/* Album Artwork & Track Info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-md shrink-0 relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/20" />
          <span className="text-xl relative z-10">🎧</span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white truncate">Designing Clean Systems</p>
          <p className="text-[11px] text-neutral-300 truncate">Shreya Gujarkar • Creative Flow</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-3 space-y-1">
        <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full bg-white/90 rounded-full w-[65%]" />
        </div>
        <div className="flex justify-between text-[9px] font-mono text-neutral-400">
          <span>2:14</span>
          <span>3:45</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-2 flex items-center justify-between pt-1 border-t border-white/10">
        <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-7 h-7 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-xs"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
          </button>
          <SkipForward className="w-4 h-4 text-neutral-300 hover:text-white cursor-pointer transition-colors" />
        </div>
        <div className="w-3.5" />
      </div>
    </div>
  )
}

export default MusicWidget
