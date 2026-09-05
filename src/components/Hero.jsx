import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-16 bg-white">
      {/* Background Layer (z-0 to ensure it is always rendered on top of base white canvas) */}
      <div 
        className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none bg-[#ffffff]"
        aria-hidden="true"
      >
        {/* LEFT FLUTED AURORA PILLARS (Sequence Collect style) */}
        <div className="absolute top-0 bottom-0 left-0 w-[55%] flex justify-start items-stretch gap-1 sm:gap-2 px-2 sm:px-6">
          {/* Pillar 1 */}
          <div className="w-[11%] h-[85%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#85c3ff] to-transparent blur-2xl opacity-90" />
          {/* Pillar 2 */}
          <div className="w-[13%] h-[92%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#a8d5ff] to-transparent blur-xl opacity-95" />
          {/* Pillar 3 */}
          <div className="w-[10%] h-[78%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#6cb5ff] to-transparent blur-2xl opacity-85" />
          {/* Pillar 4 */}
          <div className="w-[14%] h-[95%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#b8dcff] to-transparent blur-xl opacity-90" />
          {/* Pillar 5 */}
          <div className="w-[12%] h-[82%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#7ec0ff] to-transparent blur-2xl opacity-80" />
          {/* Pillar 6 */}
          <div className="w-[11%] h-[70%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#a1d1ff] to-transparent blur-xl opacity-75" />
          {/* Pillar 7 - Soft fading edge */}
          <div className="w-[10%] h-[60%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#cce6ff] to-transparent blur-2xl opacity-60" />
        </div>

        {/* RIGHT FLUTED AURORA PILLARS */}
        <div className="absolute top-0 bottom-0 right-0 w-[42%] flex justify-end items-stretch gap-1 sm:gap-2 px-2 sm:px-6">
          {/* Pillar 8 - Soft inner edge */}
          <div className="w-[14%] h-[65%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#cce6ff] to-transparent blur-2xl opacity-60" />
          {/* Pillar 9 */}
          <div className="w-[16%] h-[78%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#99ceff] to-transparent blur-xl opacity-80" />
          {/* Pillar 10 */}
          <div className="w-[18%] h-[90%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#6db6ff] to-transparent blur-2xl opacity-85" />
          {/* Pillar 11 */}
          <div className="w-[18%] h-[85%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#a8d6ff] to-transparent blur-xl opacity-90" />
          {/* Pillar 12 */}
          <div className="w-[16%] h-[80%] my-auto rounded-full bg-gradient-to-b from-transparent via-[#85c4ff] to-transparent blur-2xl opacity-85" />
        </div>

        {/* CENTER AIRY SOFT DIFFUSION */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        {/* TOP & BOTTOM FADES (Ensure header and footer area remain clean white) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80 pointer-events-none" />
      </div>

      {/* Content Container (z-10 ensures it is crisp and always in front) */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8 relative z-10">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
            I design digital experiences that make complex things feel simple.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
            I like figuring out messy problems and turning them into simple, useful experiences.
          </p>
        </div>

        <div>
          <Button
            asChild
            className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base h-auto transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-neutral-900/10 group cursor-pointer"
          >
            <Link to="/work" className="inline-flex items-center gap-2">
              <span>See selected work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
