import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MacMenuBar from '../components/MacMenuBar'
import MacDock from '../components/MacDock'
import PhotoBoothWindow from '../components/PhotoBoothWindow'
import NotesWindow from '../components/NotesWindow'
import MusicWidget from '../components/MusicWidget'
import FaceTimeWidget from '../components/FaceTimeWidget'

function Home() {
  const location = useLocation()
  
  // By default, on page load, the desktop is clean.
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false)
  const [isNotesOpen, setIsNotesOpen] = useState(false)

  // Open the workspace when the "Me" dock icon is clicked (which passes state.openMe)
  useEffect(() => {
    if (location.state?.openMe) {
      setIsPhotoBoothOpen(true)
      setIsNotesOpen(true)
    }
  }, [location.state?.openMe])

  // Animation variants
  const pbVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.4
      }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  }

  const notesVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 280,
        damping: 25,
        delay: 0.15, // Staggered slightly after Photo Booth
        duration: 0.4
      }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
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
      <main className="relative z-10 flex-1 pt-12 pb-32 px-4 sm:px-6 lg:px-10 max-w-7xl w-full mx-auto flex flex-col justify-center items-center">
        
        {/* Workspace Container (Centered visually) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 my-auto min-h-[500px]">
          
          <AnimatePresence>
            {isPhotoBoothOpen && (
              <motion.div 
                variants={pbVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full lg:w-auto flex justify-center z-30"
              >
                <PhotoBoothWindow onClose={() => setIsPhotoBoothOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isNotesOpen && (
              <motion.div 
                variants={notesVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full lg:w-auto flex justify-center z-20"
              >
                <NotesWindow onClose={() => setIsNotesOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>

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
