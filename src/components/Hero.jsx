import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-16 bg-white">
      {/* Precision Sequence-style Vertical Misty Blue Ribbon Aurora */}
      <div 
        className="pointer-events-none absolute inset-0 overflow-hidden select-none bg-white z-0"
        aria-hidden="true"
      >
        {/* LEFT CLUSTER: Distinct vertical fluted aurora ribbons */}
        <div className="absolute top-0 bottom-0 left-0 w-[45%] flex justify-start items-stretch gap-2 sm:gap-4 px-2 sm:px-8">
          <div 
            className="w-[12%] h-[80%] my-auto rounded-full blur-2xl opacity-90"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,205,255,0.7) 25%, rgba(120,185,255,0.95) 50%, rgba(175,215,255,0.75) 75%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[15%] h-[92%] my-auto rounded-full blur-xl opacity-95"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(184,220,255,0.8) 20%, rgba(135,195,255,1) 48%, rgba(184,220,255,0.85) 78%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[11%] h-[75%] my-auto rounded-full blur-2xl opacity-85"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(140,195,255,0.75) 30%, rgba(100,175,255,0.9) 52%, rgba(155,205,255,0.7) 72%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[16%] h-[95%] my-auto rounded-full blur-xl opacity-90"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(195,228,255,0.85) 18%, rgba(145,202,255,0.95) 46%, rgba(184,220,255,0.8) 80%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[13%] h-[84%] my-auto rounded-full blur-2xl opacity-80"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(150,200,255,0.7) 28%, rgba(115,182,255,0.85) 50%, rgba(165,210,255,0.65) 74%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[12%] h-[68%] my-auto rounded-full blur-xl opacity-75"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(184,220,255,0.75) 22%, rgba(140,195,255,0.8) 50%, rgba(195,225,255,0.6) 78%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[10%] h-[55%] my-auto rounded-full blur-2xl opacity-60"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(200,230,255,0.6) 30%, rgba(165,210,255,0.7) 50%, rgba(215,238,255,0.4) 70%, rgba(255,255,255,0) 100%)'
            }}
          />
        </div>

        {/* RIGHT CLUSTER: Secondary vertical fluted aurora ribbons */}
        <div className="absolute top-0 bottom-0 right-0 w-[38%] flex justify-end items-stretch gap-2 sm:gap-4 px-2 sm:px-8">
          <div 
            className="w-[14%] h-[60%] my-auto rounded-full blur-2xl opacity-60"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(210,235,255,0.6) 30%, rgba(175,215,255,0.75) 50%, rgba(220,240,255,0.45) 70%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[18%] h-[75%] my-auto rounded-full blur-xl opacity-80"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(184,220,255,0.75) 24%, rgba(145,200,255,0.85) 48%, rgba(190,225,255,0.7) 76%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[20%] h-[88%] my-auto rounded-full blur-2xl opacity-85"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,208,255,0.8) 20%, rgba(120,188,255,0.95) 50%, rgba(170,215,255,0.75) 80%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[20%] h-[82%] my-auto rounded-full blur-xl opacity-90"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(184,220,255,0.85) 18%, rgba(135,195,255,1) 46%, rgba(184,220,255,0.8) 82%, rgba(255,255,255,0) 100%)'
            }}
          />
          <div 
            className="w-[18%] h-[78%] my-auto rounded-full blur-2xl opacity-80"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(155,205,255,0.7) 25%, rgba(115,180,255,0.85) 52%, rgba(165,212,255,0.65) 75%, rgba(255,255,255,0) 100%)'
            }}
          />
        </div>
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
