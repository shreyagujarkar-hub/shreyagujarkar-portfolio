import { motion } from 'framer-motion'
import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import PhotoBoothWindow from '../components/PhotoBoothWindow'
import NotesWindow from '../components/NotesWindow'
import MusicWidget from '../components/MusicWidget'
import FaceTimeWidget from '../components/FaceTimeWidget'

function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  }

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
        
        {/* Animated Workspace Container */}
        <motion.div 
          className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8 my-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Primary Window: Photo Booth */}
          <motion.div 
            variants={itemVariants}
            className="w-full flex justify-center lg:justify-end lg:w-[55%] z-30"
          >
            <PhotoBoothWindow />
          </motion.div>

          {/* Secondary Window: Notes */}
          <motion.div 
            variants={itemVariants}
            className="w-full flex justify-center lg:justify-start lg:w-[45%] lg:pt-8 z-20 lg:-ml-12 xl:-ml-16"
          >
            <NotesWindow />
          </motion.div>

        </motion.div>

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
