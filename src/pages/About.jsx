import Header from '../components/Header'

function About() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white pt-28 px-6 flex flex-col items-center">
      <Header />
      <main className="max-w-4xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About</h1>
      </main>
    </div>
  )
}

export default About

