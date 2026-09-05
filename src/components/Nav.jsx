import { NavLink } from 'react-router-dom'

function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="flex items-center gap-1 bg-[#18181b]/90 text-neutral-300 p-1.5 px-2 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.3)] border border-neutral-800 backdrop-blur-md">
      {/* Logo / Planet Icon */}
      <NavLink
        to="/"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-neutral-900 transition-transform hover:scale-105 mr-1 shadow-sm"
        title="Home"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="6" />
          <path d="M4 12c0-3.5 3.58-6 8-6 4.42 0 8 2.5 8 6s-3.58 6-8 6c-4.42 0-8-2.5-8-6z" transform="rotate(-30 12 12)" />
        </svg>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-medium px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-200 no-underline ${
                isActive
                  ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Nav

