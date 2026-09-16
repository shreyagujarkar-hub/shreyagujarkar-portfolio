import { useState } from 'react'
import { Folder, SquarePen, Search, Share, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotesWindow({ onClose }) {
  const [selectedNote, setSelectedNote] = useState('intro')

  const notesList = [
    {
      id: 'intro',
      title: "Hi, I'm Shreya.",
      date: '10:45 AM',
      preview: 'I design digital experiences that make complex things feel simple...',
    },
    {
      id: 'principles',
      title: 'Design Principles',
      date: 'Yesterday',
      preview: 'Clarity over clutter, intentional craft, and human-centered thinking.',
    },
    {
      id: 'skills',
      title: 'Toolkit & Skills',
      date: 'Sep 12',
      preview: 'Figma, Design Systems, UX Research, Interaction Design, Prototyping.',
    },
  ]

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[460px] xl:max-w-[490px] rounded-2xl sm:rounded-3xl bg-[#FCFAF2] text-neutral-800 backdrop-blur-3xl border border-[#E8E2D2] shadow-[0_24px_55px_rgba(0,0,0,0.22),0_8px_20px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] hover:-translate-y-1 select-none flex flex-col font-sans will-change-transform">
      {/* macOS Notes Toolbar */}
      <div className="h-10 px-3.5 bg-[#F4EFE2]/95 border-b border-[#E5DEC9] flex items-center justify-between shrink-0">
        {/* Left: Window Traffic Lights */}
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:opacity-85 transition-opacity outline-none" aria-label="Close Notes" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer hover:opacity-85 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-pointer hover:opacity-85 transition-opacity" />
        </div>

        {/* Center: Active Folder Title */}
        <div className="text-[12px] font-semibold text-neutral-700 tracking-tight flex items-center gap-1.5">
          <Folder className="w-3.5 h-3.5 text-amber-600 fill-amber-500/30" />
          <span>Quick Notes</span>
        </div>

        {/* Right: Notes Toolbar Action Icons */}
        <div className="flex items-center gap-2.5 text-neutral-500">
          <Search className="w-3.5 h-3.5 hover:text-neutral-800 transition-colors cursor-pointer" />
          <Share className="w-3.5 h-3.5 hover:text-neutral-800 transition-colors cursor-pointer" />
          <SquarePen className="w-3.5 h-3.5 text-amber-600 hover:text-amber-700 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Main Notes Body with Subtle Left List + Editor Canvas */}
      <div className="flex-1 flex flex-col sm:flex-row overflow-hidden min-h-[340px]">
        {/* Left Note List Sidebar (Compact) */}
        <div className="w-full sm:w-[150px] bg-[#F7F3E8]/80 border-b sm:border-b-0 sm:border-r border-[#E8E2D2] p-2 flex flex-row sm:flex-col gap-1 shrink-0 overflow-x-auto sm:overflow-y-auto">
          {notesList.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedNote(item.id)}
              className={`text-left p-2 rounded-xl transition-all w-full cursor-pointer shrink-0 ${
                selectedNote === item.id
                  ? 'bg-amber-400/25 border border-amber-500/30 text-neutral-900 shadow-2xs font-semibold'
                  : 'hover:bg-black/5 text-neutral-600'
              }`}
            >
              <div className="text-xs font-bold truncate">{item.title}</div>
              <div className="text-[10px] text-neutral-500 flex items-center justify-between mt-0.5">
                <span>{item.date}</span>
                <ChevronRight className="w-2.5 h-2.5 text-neutral-400 hidden sm:inline-block" />
              </div>
            </button>
          ))}
        </div>

        {/* Right Note Editor View */}
        <div className="flex-1 p-4 sm:p-5 space-y-3.5 overflow-y-auto max-h-[360px] bg-[#FCFAF2]">
          {/* Note Timestamp */}
          <div className="text-center">
            <span className="text-[10.5px] font-medium text-neutral-400 tracking-wider uppercase">
              September 15, 2026 at 10:45 AM
            </span>
          </div>

          {/* Note Title */}
          <div className="border-b border-amber-200/60 pb-2">
            <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-1.5">
              <span>Hi, I&apos;m Shreya Gujarkar.</span>
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            </h1>
            <p className="text-xs font-medium text-amber-800/90 mt-0.5">
              Digital Product Designer & UX Specialist
            </p>
          </div>

          {/* Primary Bio / Intro Body */}
          {selectedNote === 'intro' && (
            <div className="space-y-3.5 text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
              <p>
                I’m a design student who enjoys understanding people, finding the little problems hiding in everyday experiences, and turning those insights into thoughtful design.
              </p>
              <p>
                I’m especially interested in Design Research and Service Design, but I also love getting my hands dirty with visual design, storytelling and creative experiments.
              </p>
              <p>
                Think of this space as a little peek into the person behind the work.
              </p>

              <div className="pt-2 flex items-center justify-between text-[11.5px]">
                <span className="text-neutral-500 italic">
                  Explore my projects in Finder below ↓
                </span>
                <Link
                  to="/work"
                  className="font-bold text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Projects</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}

          {/* Secondary Tab: Principles */}
          {selectedNote === 'principles' && (
            <div className="space-y-2.5 text-xs text-neutral-700 leading-relaxed">
              <p className="font-semibold text-neutral-900">
                1. Simplicity over Complexity
              </p>
              <p className="text-neutral-600">
                Every screen should remove cognitive friction and provide clear affordances.
              </p>
              <p className="font-semibold text-neutral-900 mt-2">
                2. Craft in the Details
              </p>
              <p className="text-neutral-600">
                Micro-interactions, typography, and responsive ergonomics make software memorable.
              </p>
            </div>
          )}

          {/* Secondary Tab: Toolkit */}
          {selectedNote === 'skills' && (
            <div className="space-y-2 text-xs text-neutral-700 leading-relaxed">
              <p className="font-bold text-neutral-900">Design & Prototyping:</p>
              <p className="text-neutral-600">Figma, FigJam, Protopie, Adobe Creative Suite, Design Tokens.</p>
              <p className="font-bold text-neutral-900 mt-2">Research & Strategy:</p>
              <p className="text-neutral-600">User Interviews, Usability Testing, Journey Mapping, IA.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotesWindow
