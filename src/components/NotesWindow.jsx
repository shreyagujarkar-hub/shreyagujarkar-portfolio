import { FileText, Folder, CheckSquare, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotesWindow() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[440px] rounded-2xl bg-[#FFFDF7]/95 text-neutral-800 backdrop-blur-2xl border border-[#E5E0D0] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 select-none flex flex-col font-sans">
      {/* macOS Notes Title Bar */}
      <div className="h-9 px-3.5 bg-[#F5EFE1]/90 border-b border-[#E8E1CF] flex items-center justify-between shrink-0">
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        {/* Window Title & Folder */}
        <div className="text-[12px] font-semibold text-neutral-600 tracking-tight flex items-center gap-1.5">
          <Folder className="w-3.5 h-3.5 text-amber-600 fill-amber-500/30" />
          <span>Quick Notes — About Me</span>
        </div>

        <div className="flex items-center gap-2 text-neutral-400">
          <FileText className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Note Content Canvas */}
      <div className="p-5 sm:p-6 space-y-4 text-left overflow-y-auto max-h-[380px]">
        {/* Date Timestamp */}
        <div className="text-center">
          <span className="text-[11px] font-medium text-neutral-400 tracking-tight uppercase">
            September 15, 2026 • 10:45 AM
          </span>
        </div>

        {/* Headline */}
        <div className="border-b border-amber-200/50 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
            <span>Hi, I&apos;m Shreya Gujarkar</span>
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
          </h2>
          <p className="text-xs font-medium text-amber-800/80 mt-0.5">
            Digital Product Designer & Creative Problem Solver
          </p>
        </div>

        {/* Bio Body */}
        <p className="text-sm text-neutral-700 leading-relaxed">
          I design digital experiences that make complex things feel simple. I love untangling messy problems and turning them into intuitive, delightful, and human-centered products.
        </p>

        {/* Focus Areas Checklist */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 space-y-2">
          <div className="text-xs font-semibold text-amber-900 tracking-tight">
            📌 What I do best:
          </div>
          <ul className="text-xs text-neutral-700 space-y-1.5 pl-1">
            <li className="flex items-center gap-2">
              <CheckSquare className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>UI/UX & Product Design for complex platforms</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckSquare className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>User research, IA & interaction modeling</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckSquare className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Scalable design systems & interactive prototypes</span>
            </li>
          </ul>
        </div>

        {/* CTA Link inside Note */}
        <div className="pt-1 flex items-center justify-between">
          <span className="text-[11px] text-neutral-500 italic">
            Click an app below to explore my work ↓
          </span>
          <Link
            to="/work"
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
          >
            <span>View Projects</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotesWindow
