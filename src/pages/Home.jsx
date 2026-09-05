import Header from '../components/Header'
import Hero from '../components/Hero'

function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-20 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
    </div>
  )
}

export default Home


