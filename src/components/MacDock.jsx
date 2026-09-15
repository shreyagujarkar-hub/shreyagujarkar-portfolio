import { Link, useLocation } from 'react-router-dom'

function MacDock() {
  const location = useLocation()

  const dockItems = [
    {
      id: 'finder',
      name: 'Projects',
      path: '/work',
      isExternal: false,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="url(#finder-bg)" />
          {/* Finder Face split */}
          <path d="M50 8C26.8 8 8 26.8 8 50c0 23.2 18.8 42 42 42V8z" fill="#4B96F3" />
          <path d="M50 8c23.2 0 42 18.8 42 42 0 23.2-18.8 42-42 42V8z" fill="#88C4FF" />
          {/* Finder Line Details */}
          <path d="M30 36c0-4 4-4 4 0v20c0 4-4 4-4 0V36z" fill="#1C3879" />
          <path d="M66 36c0-4 4-4 4 0v20c0 4-4 4-4 0V36z" fill="#1C3879" />
          <path d="M50 24v38" stroke="#1C3879" strokeWidth="4" strokeLinecap="round" />
          <path d="M26 62c8 12 40 12 48 0" stroke="#1C3879" strokeWidth="5" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="finder-bg" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#9BD5FF" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 'safari',
      name: 'About',
      path: '/about',
      isExternal: false,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="url(#safari-bg)" />
          {/* Compass Dial */}
          <circle cx="50" cy="50" r="36" fill="#F8FAFC" />
          <circle cx="50" cy="50" r="34" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" fill="none" />
          {/* Compass Needle */}
          <polygon points="50,18 57,50 50,47" fill="#EF4444" />
          <polygon points="50,18 43,50 50,47" fill="#DC2626" />
          <polygon points="50,82 57,50 50,53" fill="#E2E8F0" />
          <polygon points="50,82 43,50 50,53" fill="#94A3B8" />
          <circle cx="50" cy="50" r="3" fill="#1E293B" />
          <defs>
            <linearGradient id="safari-bg" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#2563EB" />
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
            <ellipse cx="0" cy="-18" rx="8" ry="16" fill="#F59E0B" opacity="0.9" />
            <ellipse cx="14" cy="-14" rx="8" ry="16" transform="rotate(45)" fill="#EF4444" opacity="0.9" />
            <ellipse cx="18" cy="0" rx="8" ry="16" transform="rotate(90)" fill="#EC4899" opacity="0.9" />
            <ellipse cx="14" cy="14" rx="8" ry="16" transform="rotate(135)" fill="#8B5CF6" opacity="0.9" />
            <ellipse cx="0" cy="18" rx="8" ry="16" transform="rotate(180)" fill="#3B82F6" opacity="0.9" />
            <ellipse cx="-14" cy="14" rx="8" ry="16" transform="rotate(225)" fill="#06B6D4" opacity="0.9" />
            <ellipse cx="-18" cy="0" rx="8" ry="16" transform="rotate(270)" fill="#10B981" opacity="0.9" />
            <ellipse cx="-14" cy="-14" rx="8" ry="16" transform="rotate(315)" fill="#84CC16" opacity="0.9" />
            <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
          </g>
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
          <rect width="100" height="100" rx="22" fill="url(#facetime-bg)" />
          {/* FaceTime Video Camera */}
          <rect x="24" y="32" width="34" height="36" rx="8" fill="#FFFFFF" />
          <polygon points="58,42 76,30 76,70 58,58" fill="#FFFFFF" />
          <defs>
            <linearGradient id="facetime-bg" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#4ADE80" />
              <stop offset="1" stopColor="#16A34A" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 'mail',
      name: 'Book a Call',
      path: 'mailto:shreyagujarkar0207@gmail.com',
      isExternal: true,
      icon: (
        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="22" fill="url(#mail-bg)" />
          {/* Mail Envelope with Stamp */}
          <rect x="20" y="30" width="60" height="42" rx="6" fill="#FFFFFF" />
          <path d="M22 34l28 20 28-20" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="70" cy="40" r="4" fill="#F59E0B" />
          <defs>
            <linearGradient id="mail-bg" x1="0" y1="0" x2="0" y2="100">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ]

  return (
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="flex items-end gap-2.5 sm:gap-4 px-3 sm:px-4 py-2.5 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_16px_36px_rgba(0,0,0,0.2)]">
        {dockItems.map((item) => {
          const isActive = !item.isExternal && location.pathname === item.path

          const content = (
            <div className="group relative flex flex-col items-center">
              {/* Tooltip Label on Hover */}
              <div className="pointer-events-none absolute -top-9 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-md text-white text-[11px] font-medium tracking-tight shadow-md whitespace-nowrap z-50">
                {item.name}
              </div>

              {/* Icon with hover magnification & elevation */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-200 ease-out transform group-hover:scale-125 group-hover:-translate-y-2 group-active:scale-105 cursor-pointer">
                {item.icon}
              </div>

              {/* Running / Active Indicator Dot */}
              <div className="h-1 mt-1 flex items-center justify-center">
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shadow-xs" />
                )}
              </div>
            </div>
          )

          return item.isExternal ? (
            <a key={item.id} href={item.path} title={item.name} className="outline-none">
              {content}
            </a>
          ) : (
            <Link key={item.id} to={item.path} title={item.name} className="outline-none">
              {content}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default MacDock
