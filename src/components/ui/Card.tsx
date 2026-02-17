'use client'

import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[rgba(168,85,247,0.2)] bg-[rgba(15,5,25,0.8)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
