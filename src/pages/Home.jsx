import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import PhotoBoothWindow from '../components/PhotoBoothWindow'
import NotesWindow from '../components/NotesWindow'
import MusicWidget from '../components/MusicWidget'
import FaceTimeWidget from '../components/FaceTimeWidget'

function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-sky-100 flex flex-col font-sans select-none">
      {/* 1. Desktop Wallpaper Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/background.png"
          alt="Mac Desktop Wallpaper"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle glass atmospheric tint to guarantee high contrast */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      {/* 2. Top macOS Menu Bar */}
      <MacMenuBar />

      {/* 3. Main Desktop Workspace Canvas */}
      <main className="relative z-10 flex-1 pt-12 pb-28 sm:pb-32 px-4 sm:px-6 lg:px-10 max-w-7xl w-full mx-auto flex flex-col justify-center items-center">
        
        {/* Desktop Layout: Layered & Scattered Windows */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-items-center my-auto">
          
          {/* Left / Center-Left: Apple Notes Intro Window */}
          <div className="lg:col-span-6 w-full flex flex-col items-center lg:items-end order-2 lg:order-1 z-20">
            <NotesWindow />
          </div>

          {/* Center / Center-Right: Primary Photo Booth Window (Focal Anchor) */}
          <div className="lg:col-span-6 w-full flex flex-col items-center lg:items-start order-1 lg:order-2 z-30 lg:-ml-4">
            <PhotoBoothWindow />
          </div>

        </div>

        {/* Floating Secondary Widgets (Bottom Corners / Flanks) */}
        <div className="w-full max-w-6xl mt-6 lg:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 justify-items-center items-center z-20">
          <div className="w-full flex justify-center sm:justify-start lg:pl-6">
            <MusicWidget />
          </div>
          <div className="w-full flex justify-center sm:justify-end lg:pr-6">
            <FaceTimeWidget />
          </div>
        </div>

      </main>

      {/* 4. macOS Dock (Primary Navigation) */}
      <MacDock />
    </div>
  )
}

export default Home
