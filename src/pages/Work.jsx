import { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import { ChevronLeft, ChevronRight, Grid3X3, List, Search } from 'lucide-react'

/* ─── Project Data ─────────────────────────────────────────────── */
const projects = [
  {
    slug: 'nmc',
    name: 'NMC',
    fullName: 'NMC — National Medical Commission',
    category: 'UX Research · Service Design',
    year: '2024',
    color: '#4B96F3',
    description: "Redesigning the regulatory experience for India's medical education system.",
  },
  {
    slug: 'basis',
    name: 'Basis',
    fullName: 'Basis — Finance & Ledger App',
    category: 'Fintech · UX/UI & Systems',
    year: '2024',
    color: '#34C759',
    description: 'Simplifying complex multi-entity bookkeeping for fast-growing companies.',
  },
  {
    slug: 'cotton',
    name: 'Cotton (UEDP)',
    fullName: 'Cotton — Urban Economic Design Project',
    category: 'Product Design · Accessibility',
    year: '2023',
    color: '#FF9F0A',
    description: 'An inclusive product experience designed for artisans and weavers.',
  },
  {
    slug: 'youth-political-awareness',
    name: 'Youth Political Awareness',
    fullName: 'Youth Political Awareness Campaign',
    category: 'Social Impact · Research',
    year: '2023',
    color: '#BF5AF2',
    description: 'A research-driven design initiative to engage young voters.',
  },
]

/* ─── macOS Folder SVG Icon ─────────────────────────────────────── */
function FolderIcon({ color = '#4B96F3', selected = false }) {
  const body = selected ? '#fff' : color
  const shade = selected ? 'rgba(255,255,255,0.6)' : `${color}99`
  const tab = selected ? 'rgba(255,255,255,0.85)' : `${color}cc`
  return (
    <svg viewBox="0 0 88 72" fill="none" className="w-full h-full drop-shadow-md" aria-hidden="true">
      {/* Tab */}
      <path d="M4 18C4 14.686 6.686 12 10 12H30L38 20H78C81.314 20 84 22.686 84 26V64C84 67.314 81.314 70 78 70H10C6.686 70 4 67.314 4 64V18Z" fill={tab} />
      {/* Body */}
      <path d="M4 26C4 22.686 6.686 20 10 20H78C81.314 20 84 22.686 84 26V64C84 67.314 81.314 70 78 70H10C6.686 70 4 67.314 4 64V26Z" fill={body} />
      {/* Shine */}
      <path d="M4 26C4 22.686 6.686 20 10 20H78C81.314 20 84 22.686 84 26V36H4V26Z" fill={shade} />
    </svg>
  )
}

/* ─── Sidebar Item ───────────────────────────────────────────────── */
function SidebarItem({ icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-left transition-all duration-150 text-[13px] font-medium ${
        active
          ? 'bg-[#3478F6] text-white'
          : 'text-neutral-600 hover:bg-neutral-200/60'
      }`}
    >
      <span className={`text-base ${active ? 'text-white' : 'text-neutral-500'}`}>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

/* ─── Work Page (Finder Window) ──────────────────────────────────── */
function Work() {
  const navigate = useNavigate()
  const [selectedSlug, setSelectedSlug] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
  const [searchFocus, setSearchFocus] = useState(false)
  const clickTimer = useRef(null)

  const handleFolderClick = useCallback(
    (slug) => {
      if (clickTimer.current) {
        // Second click within 400ms → double-click → open
        clearTimeout(clickTimer.current)
        clickTimer.current = null
        navigate(`/work/${slug}`)
      } else {
        if (selectedSlug === slug) {
          // Already selected → navigate immediately
          navigate(`/work/${slug}`)
        } else {
          // First click → select
          setSelectedSlug(slug)
          clickTimer.current = setTimeout(() => {
            clickTimer.current = null
          }, 400)
        }
      }
    },
    [selectedSlug, navigate]
  )

  const sidebarItems = [
    { icon: '📁', label: 'Projects', key: 'projects', active: true, onClick: () => {} },
    { icon: '🧭', label: 'About', key: 'about', active: false, onClick: () => navigate('/about') },
    { icon: '🎨', label: 'Hobbies & Skills', key: 'hobbies', active: false, onClick: () => {} },
    { icon: '📬', label: 'Contact', key: 'contact', active: false, onClick: () => navigate('/contact') },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-sky-100 flex flex-col font-sans select-none">
      {/* Desktop Wallpaper */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img src="/background.png" alt="Wallpaper" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <MacMenuBar />

      {/* Main Content */}
      <main className="relative z-10 flex-1 pt-12 pb-32 px-3 sm:px-5 lg:px-8 flex items-center justify-center min-h-screen">
        {/* Finder Window */}
        <div
          className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.3),0_12px_30px_rgba(0,0,0,0.18)] border border-white/30 flex flex-col"
          style={{ minHeight: '580px', maxHeight: 'calc(100vh - 120px)' }}
          onClick={(e) => {
            // Deselect when clicking empty area
            if (e.currentTarget === e.target) setSelectedSlug(null)
          }}
        >
          {/* ── Title Bar ── */}
          <div className="h-11 shrink-0 bg-[#ECECEC]/95 backdrop-blur-xl border-b border-[#CCCCCC]/80 flex items-center px-4 gap-3">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/')}
                className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:opacity-85 transition-opacity cursor-pointer"
                aria-label="Close"
              />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-default" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-default" />
            </div>

            {/* Back / Forward */}
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => navigate(-1)}
                className="w-7 h-6 flex items-center justify-center rounded-md hover:bg-black/8 transition-colors text-neutral-500 hover:text-neutral-800"
                aria-label="Back"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="w-7 h-6 flex items-center justify-center rounded-md text-neutral-300 cursor-not-allowed"
                aria-label="Forward"
                disabled
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Breadcrumb */}
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[12px] font-semibold text-neutral-600 tracking-tight">
                <span className="text-neutral-400">Macintosh HD</span>
                <span className="text-neutral-300 mx-1">›</span>
                <span className="text-neutral-400">shreya</span>
                <span className="text-neutral-300 mx-1">›</span>
                <span className="text-neutral-700">Projects</span>
              </span>
            </div>

            {/* View Toggle + Search */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`w-7 h-6 flex items-center justify-center rounded-md transition-colors ${viewMode === 'grid' ? 'bg-black/10 text-neutral-800' : 'text-neutral-400 hover:bg-black/5 hover:text-neutral-600'}`}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`w-7 h-6 flex items-center justify-center rounded-md transition-colors ${viewMode === 'list' ? 'bg-black/10 text-neutral-800' : 'text-neutral-400 hover:bg-black/5 hover:text-neutral-600'}`}
                aria-label="List view"
              >
                <List className="w-3.5 h-3.5" />
              </button>
              {/* Search */}
              <div className={`flex items-center gap-1.5 h-6 rounded-md border transition-all duration-200 px-2 ${searchFocus ? 'bg-white border-[#3478F6]/60 w-36' : 'bg-black/5 border-transparent w-24'}`}>
                <Search className="w-3 h-3 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                  className="bg-transparent text-[11px] text-neutral-700 placeholder-neutral-400 outline-none w-full"
                />
              </div>
            </div>
          </div>

          {/* ── Body: Sidebar + Content ── */}
          <div className="flex flex-1 overflow-hidden min-h-0">

            {/* Sidebar */}
            <aside className="hidden sm:flex w-44 lg:w-52 shrink-0 flex-col bg-[#F0F0F0]/90 backdrop-blur-xl border-r border-[#D0D0D0]/80 overflow-y-auto">
              <div className="p-3 pt-4">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-3 mb-1.5">Favourites</p>
                <div className="flex flex-col gap-0.5">
                  {sidebarItems.map((item) => (
                    <SidebarItem
                      key={item.key}
                      icon={item.icon}
                      label={item.label}
                      active={item.active}
                      onClick={item.onClick}
                    />
                  ))}
                </div>

                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-3 mb-1.5 mt-5">Locations</p>
                <div className="flex flex-col gap-0.5">
                  <SidebarItem icon="💻" label="Macintosh HD" active={false} onClick={() => {}} />
                  <SidebarItem icon="🌐" label="Network" active={false} onClick={() => {}} />
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <div
              className="flex-1 overflow-y-auto bg-white/85 backdrop-blur-2xl"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedSlug(null)
              }}
            >
              {viewMode === 'grid' ? (
                /* ── Grid View ── */
                <div className="p-6 sm:p-8">
                  {/* Status bar */}
                  <p className="text-[11px] text-neutral-400 mb-6 font-medium">
                    {projects.length} items
                  </p>

                  <div
                    className="grid gap-x-4 gap-y-8"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}
                    onClick={(e) => {
                      if (e.target === e.currentTarget) setSelectedSlug(null)
                    }}
                  >
                    {projects.map((proj) => {
                      const isSelected = selectedSlug === proj.slug
                      return (
                        <button
                          key={proj.slug}
                          onClick={() => handleFolderClick(proj.slug)}
                          className="group flex flex-col items-center gap-2 p-3 rounded-xl outline-none transition-all duration-150 cursor-default"
                          style={{
                            background: isSelected ? '#3478F6' : 'transparent',
                          }}
                          aria-label={`Open ${proj.name}`}
                        >
                          {/* Folder Icon */}
                          <div
                            className="w-20 h-16 transition-transform duration-150"
                            style={{
                              transform: isSelected ? 'translateY(0px)' : undefined,
                            }}
                          >
                            <div
                              className="w-full h-full transition-transform duration-150 group-hover:scale-105 group-hover:-translate-y-1"
                              style={{ transform: isSelected ? 'scale(1.05) translateY(-2px)' : '' }}
                            >
                              <FolderIcon color={proj.color} selected={isSelected} />
                            </div>
                          </div>

                          {/* Folder Label */}
                          <div className="text-center">
                            <p
                              className={`text-[12px] font-medium leading-tight transition-colors duration-150 ${
                                isSelected ? 'text-white' : 'text-neutral-800 group-hover:text-neutral-900'
                              }`}
                            >
                              {proj.name}
                            </p>
                            <p
                              className={`text-[10px] mt-0.5 transition-colors duration-150 ${
                                isSelected ? 'text-blue-100' : 'text-neutral-400'
                              }`}
                            >
                              {proj.year}
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Hint text */}
                  <p className="text-[11px] text-neutral-300 mt-12 text-center select-none">
                    Double-click a folder to open the case study
                  </p>
                </div>
              ) : (
                /* ── List View ── */
                <div className="flex flex-col">
                  {/* List Header */}
                  <div className="flex items-center gap-4 px-6 py-2 border-b border-neutral-200/60 bg-neutral-50/80">
                    <span className="text-[11px] font-semibold text-neutral-500 w-48">Name</span>
                    <span className="text-[11px] font-semibold text-neutral-500 w-32 hidden sm:block">Category</span>
                    <span className="text-[11px] font-semibold text-neutral-500 w-16">Year</span>
                    <span className="flex-1 text-[11px] font-semibold text-neutral-500 hidden md:block">Description</span>
                  </div>
                  {projects.map((proj) => {
                    const isSelected = selectedSlug === proj.slug
                    return (
                      <button
                        key={proj.slug}
                        onClick={() => handleFolderClick(proj.slug)}
                        className={`w-full flex items-center gap-4 px-6 py-2.5 border-b border-neutral-100/80 text-left outline-none transition-all duration-100 cursor-default ${
                          isSelected ? 'bg-[#3478F6]' : 'hover:bg-neutral-100/70'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 w-48">
                          <div className="w-6 h-5 shrink-0">
                            <FolderIcon color={proj.color} selected={isSelected} />
                          </div>
                          <span className={`text-[13px] font-medium truncate ${isSelected ? 'text-white' : 'text-neutral-800'}`}>
                            {proj.name}
                          </span>
                        </div>
                        <span className={`text-[12px] w-32 hidden sm:block truncate ${isSelected ? 'text-blue-100' : 'text-neutral-500'}`}>
                          {proj.category}
                        </span>
                        <span className={`text-[12px] w-16 ${isSelected ? 'text-blue-100' : 'text-neutral-400'}`}>
                          {proj.year}
                        </span>
                        <span className={`text-[12px] flex-1 hidden md:block truncate ${isSelected ? 'text-blue-100' : 'text-neutral-400'}`}>
                          {proj.description}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* ── Status Bar ── */}
          <div className="h-7 shrink-0 bg-[#F0F0F0]/90 backdrop-blur-xl border-t border-[#D0D0D0]/80 flex items-center px-5 gap-4">
            <span className="text-[11px] text-neutral-500 flex-1">
              {selectedSlug
                ? `"${projects.find((p) => p.slug === selectedSlug)?.name}" selected — double-click to open`
                : `${projects.length} items`}
            </span>
            <span className="text-[11px] text-neutral-400">shreya / Projects</span>
          </div>
        </div>
      </main>

      <MacDock />
    </div>
  )
}

export default Work
