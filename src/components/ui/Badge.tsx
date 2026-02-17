'use client'

import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[rgba(0,240,255,0.3)] bg-[rgba(0,240,255,0.05)] px-4 py-1.5 text-xs font-medium text-[#00f0ff]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
