'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { features } from '@/lib/data'

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for the <span className="gradient-text-cyan">Future</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#f0e6ff]/50">
            Every feature engineered to push the boundaries of what&apos;s possible on the web.
          </p>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-section-items>
          {features.map((feature) => (
            <Card key={feature.title} data-section-item>
              <feature.icon className="h-8 w-8 text-[#00f0ff]" />
              <h3 className="mt-4 text-lg font-semibold text-[#f0e6ff]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f0e6ff]/50">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
