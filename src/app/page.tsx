'use client'

import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProofStrip } from '@/components/sections/ProofStrip'
import { Features } from '@/components/sections/Features'
import { Showcase } from '@/components/sections/Showcase'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <Features />
        <Showcase />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
