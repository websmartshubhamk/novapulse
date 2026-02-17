'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/lib/data'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[rgba(10,0,18,0.7)] backdrop-blur-2xl border-b border-[rgba(0,240,255,0.1)]' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Left Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.slice(0, 2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#f0e6ff]/70 transition-all duration-200 hover:text-[#00f0ff] hover:[text-shadow:0_0_12px_rgba(0,240,255,0.5)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <a href="#" className="neon-glow text-2xl font-bold tracking-tight text-[#00f0ff]">
          NP
        </a>

        {/* Right Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.slice(2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#f0e6ff]/70 transition-all duration-200 hover:text-[#00f0ff] hover:[text-shadow:0_0_12px_rgba(0,240,255,0.5)]"
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" href="#pricing">
            Enter the Grid
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#f0e6ff] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(10,0,18,0.95)] backdrop-blur-xl md:hidden">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium text-[#f0e6ff] transition-colors hover:text-[#00f0ff]"
            >
              {item.label}
            </a>
          ))}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />
          <Button href="#pricing" onClick={() => setMenuOpen(false)}>
            Enter the Grid
          </Button>
        </div>
      )}
    </nav>
  )
}
