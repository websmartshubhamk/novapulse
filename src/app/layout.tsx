import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NovaPulse | Next-Gen Digital Agency',
  description: 'Crafting immersive digital experiences with cutting-edge technology and bold creative vision.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
