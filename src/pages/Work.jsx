import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import { Folder, ArrowUpRight } from 'lucide-react'

function Work() {
  const projects = [
    {
      title: 'Finance & Ledger App',
      tag: 'Fintech • UX/UI & Systems',
      desc: 'Simplifying complex multi-entity bookkeeping and transaction workflows for fast-growing companies.',
    },
    {
      title: 'Design System 2.0',
      tag: 'Design Systems • Accessibility',
      desc: 'Scalable token architecture, cross-platform component library, and motion guidelines.',
    },
    {
      title: 'Healthcare Patient Portal',
      tag: 'Research • Service Design',
      desc: 'Empowering patients with streamlined appointment scheduling and clear medical records.',
    },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-sky-100 flex flex-col font-sans select-none">
      {/* Background Wallpaper */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img src="/background.png" alt="Wallpaper" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <MacMenuBar />

      {/* Main Finder Window */}
      <main className="relative z-10 flex-1 pt-14 pb-32 px-4 sm:px-6 lg:px-10 max-w-5xl w-full mx-auto flex flex-col justify-center items-center">
        <div className="w-full rounded-2xl bg-white/90 text-neutral-900 backdrop-blur-2xl border border-white/60 shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Finder Title Bar */}
          <div className="h-10 px-4 bg-neutral-100/90 border-b border-neutral-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>
            <div className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
              <Folder className="w-4 h-4 text-blue-500 fill-blue-400/30" />
              <span>Finder — Selected Projects</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Finder Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Selected Work
              </h1>
              <p className="text-sm text-neutral-600 mt-1">
                A collection of case studies, interface designs, and digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.title}
                  className="rounded-xl bg-neutral-50/80 border border-neutral-200/70 p-5 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                      {proj.tag}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-medium text-neutral-400">
                    Case study in progress
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MacDock />
    </div>
  )
}

export default Work
