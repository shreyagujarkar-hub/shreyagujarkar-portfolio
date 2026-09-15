import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-16">
      {/* Responsive Cloud Background Image */}
      <div 
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <img
          src="/background.png"
          alt="Sky and clouds background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container (z-10 ensures it is crisp and always in front) */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8 relative z-10">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
            I design digital experiences that make complex things feel simple.
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed max-w-xl mx-auto">
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
