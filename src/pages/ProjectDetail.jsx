import { useParams, useNavigate } from 'react-router-dom'
import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/* ─── Project Case Studies ─────────────────────────────────────── */
const caseStudies = {
  nmc: {
    name: 'NMC',
    fullName: 'NMC — National Medical Commission',
    category: 'UX Research · Service Design',
    year: '2024',
    color: '#4B96F3',
    role: 'Lead UX Researcher & Designer',
    duration: '4 months',
    tools: ['Figma', 'Dovetail', 'Miro', 'User Interviews'],
    overview:
      'The National Medical Commission regulates medical education across India — a system affecting thousands of institutions and millions of students. The existing regulatory portal was outdated, opaque, and inaccessible to the very stakeholders it served.',
    problem:
      'Medical colleges, students, and administrators faced significant friction navigating the NMC portal. Critical tasks — from applying for accreditation to tracking compliance status — were buried inside confusing flows, leading to delays and high support overhead.',
    research:
      'Conducted 18 stakeholder interviews across college administrators, students, and regulatory officers. Mapped existing service touchpoints through a service blueprint exercise. Identified 7 core pain points clustered around information architecture, status visibility, and form complexity.',
    process:
      'Ran a co-design workshop with NMC stakeholders to align on design principles. Prototyped three distinct information architecture approaches and ran moderated usability tests. Iterated on the portal navigation structure based on findings.',
    solution:
      'Redesigned the NMC portal with a clear task-based navigation model. Introduced a personalised dashboard for colleges with real-time compliance tracking. Streamlined the accreditation application flow from 14 steps to 6 with inline guidance.',
    outcome:
      'Validated prototype showed a 64% reduction in task completion time for accreditation workflows. Stakeholders reported high confidence in the new structure. Design system documentation delivered for handoff to the development team.',
  },
  basis: {
    name: 'Basis',
    fullName: 'Basis — Finance & Ledger App',
    category: 'Fintech · UX/UI & Systems',
    year: '2024',
    color: '#34C759',
    role: 'Product Designer',
    duration: '3 months',
    tools: ['Figma', 'Storybook', 'Notion', 'Protopie'],
    overview:
      'Basis is a finance management platform for fast-growing companies managing multiple entities, complex ledgers, and cross-border transactions. The challenge was to simplify financial complexity without removing the depth that power users need.',
    problem:
      'Finance teams at multi-entity companies were juggling spreadsheets, disconnected tools, and opaque reporting dashboards. Month-end reconciliation was costing teams 3–5 additional working days due to poor data visibility and manual workflows.',
    research:
      'Shadowed finance teams at 4 SME companies during month-end close. Conducted card sorting exercises to understand mental models of financial data. Benchmarked 6 competing fintech products to identify UX gaps and opportunity areas.',
    process:
      'Designed a modular ledger system architecture that scales from single to multi-entity. Built a component library in Figma with 80+ reusable components covering tables, forms, charts, and status states. Ran A/B tests on dashboard layout concepts with 12 finance professionals.',
    solution:
      'Launched a unified ledger view with smart entity grouping, real-time sync indicators, and a one-click reconciliation assistant. Introduced a "Focus Mode" for heads-down financial review that filters noise and surfaces critical discrepancies.',
    outcome:
      'Beta users reported 40% faster month-end close in early testing. The component library reduced design-to-dev handoff time by approximately 50%. Basis raised a seed round shortly after the design system launch.',
  },
  cotton: {
    name: 'Cotton (UEDP)',
    fullName: 'Cotton — Urban Economic Design Project',
    category: 'Product Design · Accessibility',
    year: '2023',
    color: '#FF9F0A',
    role: 'UX Designer & Researcher',
    duration: '5 months',
    tools: ['Figma', 'Field Research', 'Miro', 'InVision'],
    overview:
      'Cotton is an UEDP (Urban Economic Design Project) initiative focused on creating a more equitable marketplace for traditional weavers and artisans. The project aimed to bridge the gap between rural craft communities and urban consumers through thoughtful product and digital experience design.',
    problem:
      'Traditional weavers producing handloom cotton products lacked direct market access, fair pricing, and digital visibility. Middlemen captured the majority of the value chain, leaving artisans with minimal profit margins and no brand identity of their own.',
    research:
      'Embedded with a weaving cooperative in Chanderi for two weeks of field research. Conducted 22 interviews with artisans, cooperative managers, and end consumers. Mapped the full value chain using systems thinking frameworks to identify intervention points.',
    process:
      'Facilitated participatory design sessions with artisans to co-create a product identity. Designed an accessible digital storefront with content entirely available in regional languages. Prototyped a pricing transparency feature so consumers understand the craft value in each piece.',
    solution:
      'Delivered a direct-to-consumer platform for the cooperative with artisan profiles, product stories, and a simplified ordering flow designed for low-bandwidth environments. Introduced a QR-based product authentication system linking physical goods to their digital story.',
    outcome:
      'Pilot launch with 8 artisans resulted in 3× increase in direct sales revenue over 60 days. Artisan onboarding required minimal digital literacy. The project was presented at the National Design Institute and shortlisted for a social impact design award.',
  },
  'youth-political-awareness': {
    name: 'Youth Political Awareness',
    fullName: 'Youth Political Awareness Campaign',
    category: 'Social Impact · Research',
    year: '2023',
    color: '#BF5AF2',
    role: 'Design Researcher & Visual Designer',
    duration: '2 months',
    tools: ['Figma', 'Illustrator', 'Survey Tools', 'InVision'],
    overview:
      'A research-driven design initiative targeting first-time voters aged 18–25. The project explored why young people disengage from the political process and designed communication interventions to improve civic participation.',
    problem:
      'Youth voter turnout in urban India has been consistently lower than the national average. Existing civic communication — government websites, news media, and social campaigns — used language and formats that felt inaccessible or irrelevant to young audiences.',
    research:
      'Surveyed 340 college students on political awareness, trust in institutions, and communication preferences. Ran 8 focus groups across 3 cities. Analysed existing civic communication materials for tone, visual complexity, and channel fit.',
    process:
      'Created a communication framework based on research findings: Plain language, peer-to-peer format, visual-first, non-partisan framing. Designed a series of social media templates, interactive explainer formats, and a voter registration microsite prototype.',
    solution:
      'Delivered a visual communication system including 40+ social media assets, an explainer video storyboard, and a landing page prototype for voter registration — all designed to feel native to platforms young people already use (Instagram, YouTube, WhatsApp).',
    outcome:
      'Campaign materials were adopted by a student-led civic NGO and reached approximately 12,000 young voters in its first month. The research report was cited in a policy discussion on youth civic engagement at a national design conference.',
  },
}

/* ─── macOS Folder SVG (small, for breadcrumb) ─────────────────── */
function FolderIconSmall({ color = '#4B96F3' }) {
  return (
    <svg viewBox="0 0 88 72" fill="none" className="w-4 h-3.5" aria-hidden="true">
      <path d="M4 18C4 14.686 6.686 12 10 12H30L38 20H78C81.314 20 84 22.686 84 26V64C84 67.314 81.314 70 78 70H10C6.686 70 4 67.314 4 64V18Z" fill={`${color}cc`} />
      <path d="M4 26C4 22.686 6.686 20 10 20H78C81.314 20 84 22.686 84 26V64C84 67.314 81.314 70 78 70H10C6.686 70 4 67.314 4 64V26Z" fill={color} />
      <path d="M4 26C4 22.686 6.686 20 10 20H78C81.314 20 84 22.686 84 26V36H4V26Z" fill={`${color}99`} />
    </svg>
  )
}

/* ─── Section Block ──────────────────────────────────────────────── */
function CaseSection({ label, children }) {
  return (
    <div className="border-b border-neutral-100 pb-8 mb-8 last:border-0 last:pb-0 last:mb-0">
      <h2 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">{label}</h2>
      <div className="text-[14px] text-neutral-700 leading-relaxed">{children}</div>
    </div>
  )
}

/* ─── Project Detail Page ────────────────────────────────────────── */
function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = caseStudies[slug]

  if (!project) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-sky-100 font-sans">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img src="/background.png" alt="Wallpaper" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        </div>
        <MacMenuBar />
        <div className="relative z-10 text-center">
          <p className="text-2xl font-bold text-neutral-800 mb-4">Project not found</p>
          <button onClick={() => navigate('/work')} className="text-sm text-[#3478F6] hover:underline">
            ← Back to Projects
          </button>
        </div>
        <MacDock />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-sky-100 flex flex-col font-sans select-none">
      {/* Wallpaper */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img src="/background.png" alt="Wallpaper" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <MacMenuBar />

      <main className="relative z-10 flex-1 pt-12 pb-32 px-3 sm:px-5 lg:px-8 flex items-start justify-center min-h-screen">
        {/* Finder Window */}
        <div
          className="w-full max-w-4xl mt-6 rounded-2xl overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.3),0_12px_30px_rgba(0,0,0,0.18)] border border-white/30 flex flex-col"
          style={{ minHeight: '520px' }}
        >
          {/* ── Title Bar ── */}
          <div className="h-11 shrink-0 bg-[#ECECEC]/95 backdrop-blur-xl border-b border-[#CCCCCC]/80 flex items-center px-4 gap-3">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/work')}
                className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:opacity-85 transition-opacity cursor-pointer"
                aria-label="Close"
              />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-default" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-default" />
            </div>

            {/* Back / Forward */}
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => navigate('/work')}
                className="w-7 h-6 flex items-center justify-center rounded-md hover:bg-black/8 transition-colors text-neutral-500 hover:text-neutral-800"
                aria-label="Back to Projects"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="w-7 h-6 flex items-center justify-center rounded-md text-neutral-300 cursor-not-allowed"
                disabled
                aria-label="Forward"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Breadcrumb */}
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[12px] font-semibold text-neutral-600 tracking-tight flex items-center gap-1.5">
                <span className="text-neutral-400">Macintosh HD</span>
                <span className="text-neutral-300">›</span>
                <span className="text-neutral-400">shreya</span>
                <span className="text-neutral-300">›</span>
                <button
                  onClick={() => navigate('/work')}
                  className="text-neutral-500 hover:text-[#3478F6] transition-colors flex items-center gap-1"
                >
                  <FolderIconSmall color="#4B96F3" />
                  Projects
                </button>
                <span className="text-neutral-300">›</span>
                <span className="flex items-center gap-1 text-neutral-700">
                  <FolderIconSmall color={project.color} />
                  {project.name}
                </span>
              </span>
            </div>

            <div className="w-20" />
          </div>

          {/* ── Body: Sidebar + Case Study Content ── */}
          <div className="flex flex-1 overflow-hidden min-h-0">

            {/* Sidebar */}
            <aside className="hidden sm:flex w-44 lg:w-52 shrink-0 flex-col bg-[#F0F0F0]/90 backdrop-blur-xl border-r border-[#D0D0D0]/80 overflow-y-auto">
              <div className="p-3 pt-4">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-3 mb-1.5">In this folder</p>
                <div className="flex flex-col gap-0.5">
                  {['Overview', 'Problem', 'Research', 'Process', 'Solution', 'Outcome'].map((section) => (
                    <button
                      key={section}
                      onClick={() => {
                        document.getElementById(`section-${section.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-left transition-all duration-150 text-[12px] font-medium text-neutral-500 hover:bg-neutral-200/60 hover:text-neutral-800"
                    >
                      <span className="text-[13px]">📄</span>
                      {section}
                    </button>
                  ))}
                </div>

                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-3 mb-1.5 mt-5">Favourites</p>
                <div className="flex flex-col gap-0.5">
                  {[
                    { icon: '📁', label: 'Projects', path: '/work' },
                    { icon: '🧭', label: 'About', path: '/about' },
                    { icon: '📬', label: 'Contact', path: '/contact' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-left transition-all duration-150 text-[12px] font-medium text-neutral-500 hover:bg-neutral-200/60 hover:text-neutral-800"
                    >
                      <span className="text-[13px]">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Case Study Content */}
            <div className="flex-1 overflow-y-auto bg-white/90 backdrop-blur-2xl">
              {/* Project Hero */}
              <div
                className="px-8 sm:px-12 py-10 border-b border-neutral-100"
                style={{ background: `linear-gradient(135deg, ${project.color}10 0%, white 60%)` }}
              >
                {/* Category + Year badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                    style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200">
                    {project.year}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight mb-2">
                  {project.fullName}
                </h1>
                <p className="text-[14px] text-neutral-500 leading-relaxed max-w-xl">
                  {project.overview}
                </p>

                {/* Meta row */}
                <div className="mt-6 flex flex-wrap gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Role</p>
                    <p className="text-[13px] font-medium text-neutral-700">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Duration</p>
                    <p className="text-[13px] font-medium text-neutral-700">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Tools</p>
                    <p className="text-[13px] font-medium text-neutral-700">{project.tools.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Case Study Body */}
              <div className="px-8 sm:px-12 py-10 max-w-3xl">
                <div id="section-problem">
                  <CaseSection label="Problem">
                    <p>{project.problem}</p>
                  </CaseSection>
                </div>
                <div id="section-research">
                  <CaseSection label="Research">
                    <p>{project.research}</p>
                  </CaseSection>
                </div>
                <div id="section-process">
                  <CaseSection label="Process">
                    <p>{project.process}</p>
                  </CaseSection>
                </div>
                <div id="section-solution">
                  <CaseSection label="Solution">
                    <p>{project.solution}</p>
                  </CaseSection>
                </div>
                <div id="section-outcome">
                  <CaseSection label="Outcome & Learnings">
                    <p>{project.outcome}</p>
                  </CaseSection>
                </div>

                {/* Back link */}
                <button
                  onClick={() => navigate('/work')}
                  className="mt-4 flex items-center gap-1.5 text-[12px] font-medium text-[#3478F6] hover:text-[#2566D8] transition-colors group"
                >
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  Back to Projects
                </button>
              </div>
            </div>
          </div>

          {/* ── Status Bar ── */}
          <div className="h-7 shrink-0 bg-[#F0F0F0]/90 backdrop-blur-xl border-t border-[#D0D0D0]/80 flex items-center px-5">
            <span className="text-[11px] text-neutral-500">
              shreya / Projects / {project.name}
            </span>
          </div>
        </div>
      </main>

      <MacDock />
    </div>
  )
}

export default ProjectDetail
