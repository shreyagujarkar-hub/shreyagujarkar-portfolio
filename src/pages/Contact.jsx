import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import { Mail, PhoneCall, Send, Sparkles } from 'lucide-react'

function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-sky-100 flex flex-col font-sans select-none">
      {/* Background Wallpaper */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img src="/background.png" alt="Wallpaper" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <MacMenuBar />

      {/* FaceTime / Contact Window */}
      <main className="relative z-10 flex-1 pt-14 pb-32 px-4 sm:px-6 lg:px-10 max-w-xl w-full mx-auto flex flex-col justify-center items-center">
        <div className="w-full rounded-2xl bg-white/95 text-neutral-900 backdrop-blur-2xl border border-white/60 shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Title Bar */}
          <div className="h-10 px-4 bg-neutral-100/90 border-b border-neutral-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>
            <div className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>FaceTime & Messages — Contact</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Contact Content */}
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-extrabold text-xl mx-auto shadow-md">
              SG
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-neutral-900">
                Get in Touch with Shreya
              </h1>
              <p className="text-xs text-neutral-600">
                Available for full-time roles, internships, and design collaborations.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="mailto:shreyagujarkar0207@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>shreyagujarkar0207@gmail.com</span>
              </a>

              <a
                href="mailto:shreyagujarkar0207@gmail.com?subject=Book%20a%20Call"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Quick Intro Call</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <MacDock />
    </div>
  )
}

export default Contact
