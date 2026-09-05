import { Link } from 'react-router-dom'
import Nav from './Nav'
import { Button } from './ui/button'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Side: Name Link */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors no-underline whitespace-nowrap"
        >
          Shreya Gujarkar
        </Link>

        {/* Right Side: Navigation & Book a Call CTA */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Nav />
          <Button
            asChild
            className="rounded-full bg-[#b8dcff] hover:bg-[#a3d0fd] text-neutral-900 font-semibold px-4 sm:px-5 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-[0_4px_14px_0_rgba(184,220,255,0.25)] border border-[#d6ecff] cursor-pointer"
          >
            <a href="mailto:shreyagujarkar0207@gmail.com">
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
