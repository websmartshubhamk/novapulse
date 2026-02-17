'use client'

import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'main'
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-5 sm:px-8 lg:px-12', className)} {...props}>
      {children}
    </div>
  )
}
