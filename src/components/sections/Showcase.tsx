'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { projects, showcaseFilters } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Showcase() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="showcase" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="gradient-text-cyan">Showcase</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#f0e6ff]/50">
            A selection of our most ambitious projects pushing creative boundaries.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {showcaseFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer',
                active === f
                  ? 'bg-[#00f0ff] text-[#0a0012]'
                  : 'text-[#f0e6ff]/50 hover:text-[#f0e6ff] border border-[rgba(168,85,247,0.2)] hover:border-[rgba(168,85,247,0.5)]'
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-section-items>
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              data-section-item
            >
              <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className={cn('absolute inset-0 bg-gradient-to-br opacity-40', project.gradient)} />
              <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/50" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="mb-2 inline-block w-fit rounded-full bg-[rgba(0,0,0,0.4)] px-3 py-1 text-xs text-[#f0e6ff]/80">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
