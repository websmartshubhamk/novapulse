'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { faqItems } from '@/lib/data'
import { cn } from '@/lib/utils'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently <span className="gradient-text-cyan">Asked</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#f0e6ff]/50">
            Everything you need to know about working with NovaPulse.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl space-y-4" data-section-items>
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={cn(
                'rounded-xl border transition-all duration-300',
                openIndex === i
                  ? 'border-l-2 border-l-[#a855f7] border-[rgba(168,85,247,0.3)] bg-[rgba(15,5,25,0.8)]'
                  : 'border-[rgba(168,85,247,0.15)] bg-[rgba(15,5,25,0.4)]'
              )}
              data-section-item
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-sm font-medium text-[#f0e6ff] sm:text-base">{item.question}</span>
                <span className="ml-4 shrink-0 text-[#a855f7] transition-transform duration-300">
                  {openIndex === i ? <X size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
                )}
              >
                <p className="px-5 text-sm leading-relaxed text-[#f0e6ff]/50">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
