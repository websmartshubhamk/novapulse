'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | AnchorProps

const variants: Record<Variant, string> = {
  primary: 'bg-[#00f0ff] text-[#0a0012] hover:bg-[#00d4e0] font-semibold',
  secondary: 'bg-[#1a0030] text-[#f0e6ff] hover:bg-[#2a0050] border border-[rgba(168,85,247,0.3)]',
  ghost: 'bg-transparent text-[#f0e6ff] hover:text-[#00f0ff]',
  outline: 'bg-transparent text-[#00f0ff] border border-[#00f0ff] hover:bg-[rgba(0,240,255,0.1)]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-lg',
  md: 'h-11 px-6 text-sm rounded-xl',
  lg: 'h-13 px-8 text-base rounded-xl',
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:ring-offset-2 focus:ring-offset-[#0a0012] cursor-pointer',
    variants[variant],
    sizes[size],
    className
  )

  if ('href' in props && props.href) {
    return <a className={classes} {...(props as AnchorProps)} />
  }
  return <button className={classes} {...(props as ButtonProps)} />
}
