import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ProjectGrid from '@/components/sections/ProjectGrid'
// import PricingSection from '@/components/sections/PricingSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ProjectGrid />
      {/* <PricingSection /> */}
    </main>
  )
}