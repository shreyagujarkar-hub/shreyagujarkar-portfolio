import { PhoneCall, Mail, Sparkles } from 'lucide-react'

function FaceTimeWidget() {
  return (
    <div className="w-60 sm:w-68 rounded-2xl bg-white/85 text-neutral-900 backdrop-blur-2xl border border-white/60 p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] hover:-translate-y-1 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 mb-2.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Status: Available</span>
        </div>
        <span className="text-[10px] font-medium bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
          Q4 / 2026
        </span>
      </div>

      {/* Body Info */}
      <div className="flex items-start gap-2.5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
          SG
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-900">Let&apos;s Build Together</p>
          <p className="text-[11px] text-neutral-600 leading-tight mt-0.5">
            Open for UX/UI roles, freelance & design collaborations.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <a
          href="mailto:shreyagujarkar0207@gmail.com"
          className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold transition-all active:scale-95 shadow-xs"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email Me</span>
        </a>
        <a
          href="mailto:shreyagujarkar0207@gmail.com?subject=Book%20a%20Call%20with%20Shreya"
          className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11px] font-semibold border border-neutral-200 transition-all active:scale-95"
        >
          <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
          <span>Book Call</span>
        </a>
      </div>
    </div>
  )
}

export default FaceTimeWidget
