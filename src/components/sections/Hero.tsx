'use client'

import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { heroData } from '@/lib/data'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0012] via-[#120025] to-[#0a0012]" />
  ),
})

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroCanvas />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0012] to-transparent z-[5]" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div data-hero-line>
          <Badge>{heroData.badge}</Badge>
        </div>
        <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" data-hero-line>
          {heroData.headlineTop}
          <br />
          <span className="gradient-text-cyan">{heroData.headlineBottom.replace('.', '')}</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-[#f0e6ff]/60 sm:text-lg" data-hero-line>
          {heroData.subline}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" data-hero-cta>
          <Button size="lg" href={heroData.primaryCTA.href}>
            {heroData.primaryCTA.label}
          </Button>
          <Button variant="outline" size="lg" href={heroData.secondaryCTA.href}>
            {heroData.secondaryCTA.label}
          </Button>
        </div>
        <div className="mt-16 flex flex-col items-center gap-3" data-hero-scroll-hint>
          <div className="h-3 w-3 rounded-full bg-[#00f0ff] animate-pulse-dot" />
          <span className="text-xs tracking-widest text-[#f0e6ff]/40 uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
