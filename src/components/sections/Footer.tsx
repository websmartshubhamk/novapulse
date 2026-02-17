'use client'

import { footerLinks, socialLinks } from '@/lib/data'

export function Footer() {
  return (
    <footer className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <span className="neon-glow text-4xl font-bold text-[#00f0ff]">NP</span>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#f0e6ff]/50 transition-all duration-200 hover:text-[#00f0ff] hover:[text-shadow:0_0_10px_rgba(0,240,255,0.4)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="mt-8 flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#f0e6ff]/40 transition-all duration-200 hover:text-[#00f0ff] hover:[text-shadow:0_0_10px_rgba(0,240,255,0.4)]"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-30" />

          {/* Copyright */}
          <p className="mt-8 text-xs text-[#f0e6ff]/30">
            &copy; 2026 NovaPulse. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-[#f0e6ff]/20">
            Built with passion
          </p>
        </div>
      </div>
    </footer>
  )
}
