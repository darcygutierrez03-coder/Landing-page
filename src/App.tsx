import { Suspense } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Philosophy from '@/components/Philosophy/Philosophy'
import Services from '@/components/Services/Services'
import Portfolio from '@/components/Portfolio/Portfolio'
import Testimonials from '@/components/Testimonials/Testimonials'
import CTA from '@/components/CTA/CTA'
import Footer from '@/components/Footer/Footer'
import MouseGlow from '@/components/UI/MouseGlow'

function App() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <About />
        <Philosophy />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
