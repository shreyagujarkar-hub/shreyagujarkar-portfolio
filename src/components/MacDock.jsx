import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MacDock() {
  const location = useLocation()
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const dockApps = [
    {
      id: 'finder',
      name: 'Projects',
      path: '/work',
      isExternal: false,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="url(#finder-grad)" />
          {/* Finder Face split */}
          <path d="M50 6C25.7 6 6 25.7 6 50c0 24.3 19.7 44 44 44V6z" fill="#4B96F3" />
          <path d="M50 6c24.3 0 44 19.7 44 44 0 24.3-19.7 44-44 44V6z" fill="#8AC8FF" />
          {/* Eyes & Nose Line */}
          <ellipse cx="32" cy="42" rx="3.5" ry="7" fill="#143166" />
          <ellipse cx="68" cy="42" rx="3.5" ry="7" fill="#143166" />
          <path d="M50 26v34" stroke="#143166" strokeWidth="4.5" strokeLinecap="round" />
          {/* Classic Finder Smile */}
          <path d="M26 62c8 13 40 13 48 0" stroke="#143166" strokeWidth="5.5" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="finder-grad" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#A4D8FF" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 'me',
      name: 'Me',
      path: '/',
      isExternal: false,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="url(#pb-grad)" />
          {/* Camera Body */}
          <rect x="20" y="30" width="60" height="45" rx="8" fill="#F8FAFC" />
          {/* Flash */}
          <rect x="70" y="38" width="5" height="5" rx="2.5" fill="#E2E8F0" />
          <rect x="71" y="39" width="3" height="3" rx="1.5" fill="#FCD34D" />
          {/* Lens Outer Ring */}
          <circle cx="50" cy="52" r="16" fill="#94A3B8" />
          {/* Lens Inner */}
          <circle cx="50" cy="52" r="12" fill="#0F172A" />
          <circle cx="53" cy="49" r="3" fill="#FFFFFF" opacity="0.4" />
          <defs>
            <linearGradient id="pb-grad" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#F472B6" />
              <stop offset="1" stopColor="#E11D48" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 'facetime',
      name: 'Contact',
      path: '/contact',
      isExternal: false,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="url(#facetime-grad)" />
          {/* Video Camera */}
          <rect x="23" y="32" width="34" height="36" rx="8" fill="#FFFFFF" />
          <polygon points="59,42 77,30 77,70 59,58" fill="#FFFFFF" />
          <defs>
            <linearGradient id="facetime-grad" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#4ADE80" />
              <stop offset="1" stopColor="#15803D" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 'photos',
      name: 'Hobbies & Skills',
      path: '/work',
      isExternal: false,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="#FFFFFF" />
          {/* Colorful Photos Flower Pinwheel */}
          <g transform="translate(50,50)">
            <ellipse cx="0" cy="-18" rx="7.5" ry="16" fill="#F59E0B" opacity="0.92" />
            <ellipse cx="14" cy="-14" rx="7.5" ry="16" transform="rotate(45)" fill="#EF4444" opacity="0.92" />
            <ellipse cx="18" cy="0" rx="7.5" ry="16" transform="rotate(90)" fill="#EC4899" opacity="0.92" />
            <ellipse cx="14" cy="14" rx="7.5" ry="16" transform="rotate(135)" fill="#8B5CF6" opacity="0.92" />
            <ellipse cx="0" cy="18" rx="7.5" ry="16" transform="rotate(180)" fill="#3B82F6" opacity="0.92" />
            <ellipse cx="-14" cy="14" rx="7.5" ry="16" transform="rotate(225)" fill="#06B6D4" opacity="0.92" />
            <ellipse cx="-18" cy="0" rx="7.5" ry="16" transform="rotate(270)" fill="#10B981" opacity="0.92" />
            <ellipse cx="-14" cy="-14" rx="7.5" ry="16" transform="rotate(315)" fill="#84CC16" opacity="0.92" />
            <circle cx="0" cy="0" r="5.5" fill="#FFFFFF" />
          </g>
        </svg>
      ),
    },
    {
      id: 'mail',
      name: 'Book a Call',
      path: 'mailto:shreyagujarkar0207@gmail.com',
      isExternal: true,
      hasDividerBefore: true,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="url(#mail-grad)" />
          {/* Mail Envelope with Stamp */}
          <rect x="20" y="30" width="60" height="42" rx="6" fill="#FFFFFF" />
          <path d="M22 34l28 20 28-20" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="70" cy="40" r="4" fill="#F59E0B" />
          <defs>
            <linearGradient id="mail-grad" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0369A1" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ]

  // Fisheye magnification calculation for authentic macOS feel
  const getTransformStyle = (index) => {
    if (hoveredIdx === null) {
      return { transform: 'scale(1) translateY(0px)', transition: 'all 0.25s cubic-bezier(0.25, 1, 0.5, 1)' }
    }
    const distance = Math.abs(hoveredIdx - index)
    if (distance === 0) {
      return { transform: 'scale(1.36) translateY(-10px)', transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' }
    }
    if (distance === 1) {
      return { transform: 'scale(1.18) translateY(-4px)', transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' }
    }
    if (distance === 2) {
      return { transform: 'scale(1.06) translateY(-1px)', transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' }
    }
    return { transform: 'scale(1) translateY(0px)', transition: 'all 0.25s cubic-bezier(0.25, 1, 0.5, 1)' }
  }

  return (
    <aside 
      aria-label="Application Dock Navigation"
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 select-none"
    >
      {/* Floating Translucent Glass Dock Container */}
      <div 
        onMouseLeave={() => setHoveredIdx(null)}
        className="flex items-end gap-2 sm:gap-3.5 px-3 sm:px-4 py-2 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.22),0_4px_12px_rgba(0,0,0,0.1)]"
      >
        {dockApps.map((item, index) => {
          const isActive = !item.isExternal && location.pathname === item.path
          const isHovered = hoveredIdx === index

          const appButton = (
            <div 
              onMouseEnter={() => setHoveredIdx(index)}
              className="relative flex flex-col items-center"
            >
              {/* Native macOS Tooltip */}
              <div 
                className={`pointer-events-none absolute -top-10 transition-all duration-150 px-2.5 py-1 rounded-md bg-[#18181b]/90 backdrop-blur-md text-white text-[11px] font-medium tracking-tight shadow-lg border border-white/10 whitespace-nowrap z-50 ${
                  isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-95'
                }`}
              >
                {item.name}
                {/* Tooltip Downward Triangle Pointer */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-[#18181b]/90" />
              </div>

              {/* App Icon with Spring Magnification */}
              <div 
                style={getTransformStyle(index)}
                className="w-11 h-11 sm:w-13 sm:h-13 cursor-pointer will-change-transform origin-bottom"
              >
                {item.icon}
              </div>

              {/* macOS Active App Running Dot Indicator */}
              <div className="h-1 mt-1 flex items-center justify-center">
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shadow-xs" />
                ) : (
                  <span className="w-1.5 h-1.5 opacity-0" />
                )}
              </div>
            </div>
          )

          return (
            <div key={item.id} className="flex items-end gap-2 sm:gap-3.5">
              {/* Optional Subtle Dock Divider */}
              {item.hasDividerBefore && (
                <div className="w-[1px] h-9 bg-neutral-400/40 my-auto mb-3 mx-0.5" />
              )}

              {item.isExternal ? (
                <a href={item.path} title={item.name} className="outline-none">
                  {appButton}
                </a>
              ) : (
                <Link to={item.path} title={item.name} className="outline-none">
                  {appButton}
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default MacDock
