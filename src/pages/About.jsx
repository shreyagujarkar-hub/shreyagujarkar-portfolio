import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import { Compass, Sparkles, GraduationCap, Heart } from 'lucide-react'

function About() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-sky-100 flex flex-col font-sans select-none">
      {/* Background Wallpaper */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img src="/background.png" alt="Wallpaper" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <MacMenuBar />

      {/* Safari-style Window */}
      <main className="relative z-10 flex-1 pt-14 pb-32 px-4 sm:px-6 lg:px-10 max-w-4xl w-full mx-auto flex flex-col justify-center items-center">
        <div className="w-full rounded-2xl bg-white/95 text-neutral-900 backdrop-blur-2xl border border-white/60 shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Safari Title & URL Bar */}
          <div className="px-4 py-2.5 bg-neutral-100/90 border-b border-neutral-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>

            {/* URL Search Bar */}
            <div className="flex-1 max-w-md mx-auto bg-white border border-neutral-200/80 rounded-lg px-3 py-1 text-center text-xs text-neutral-600 flex items-center justify-center gap-1.5 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-blue-500" />
              <span>shreyagujarkar.design/about</span>
            </div>

            <div className="w-12" />
          </div>

          {/* About Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                About Shreya
              </h1>
              <p className="text-base text-neutral-700 leading-relaxed">
                I am a designer passionate about crafting interfaces that bridge technical complexity with effortless human interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200/60 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Design Philosophy</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Functionality first, elevated by craft, typography, and joyful micro-interactions that make users feel confident.
                </p>
              </div>

              <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200/60 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <Heart className="w-4 h-4 text-pink-600" />
                  <span>Beyond Work</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Exploring typography, collecting stationery, experimenting with 3D and visual art, and curating lofi playlists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MacDock />
    </div>
  )
}

export default About
