'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(168,85,247,0.2)] bg-[rgba(15,5,25,0.6)] p-12 text-center sm:p-20" data-section-heading>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.05)] to-[rgba(168,85,247,0.05)]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to ignite your<br />
              <span className="gradient-text-cyan">digital presence</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[#f0e6ff]/50">
              Let&apos;s build something extraordinary together. Your next digital masterpiece starts here.
            </p>
            <div className="mt-10">
              <Button size="lg" href="#pricing">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
