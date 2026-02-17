'use client'

import { proofItems } from '@/lib/data'

export function ProofStrip() {
  return (
    <section className="border-y border-[rgba(168,85,247,0.15)] bg-[rgba(10,0,18,0.5)] py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...proofItems, ...proofItems].map((item, i) => (
          <div key={i} className="mx-12 flex items-center gap-3 shrink-0">
            <span className="text-2xl font-bold text-[#00f0ff] sm:text-3xl">{item.value}</span>
            <span className="text-sm text-[#f0e6ff]/50">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
