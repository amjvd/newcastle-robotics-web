import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Newcastle Robotics Group | Deep-Tech R&D',
  description: 'Building autonomous systems for the harshest environments on Earth, and beyond.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[var(--color-primary)] flex items-center justify-center font-bold text-black group-hover:bg-white transition-colors">
                N
              </div>
              <span className="font-bold text-xl uppercase tracking-widest text-white group-hover:text-[var(--color-primary)] transition-colors">
                Newcastle Robotics Group
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/lunabot" className="nav-link">Lunabot</Link>
              <Link href="/rov" className="nav-link">ROV</Link>
              <Link href="/partners" className="nav-link">Partners</Link>
              <Link href="/team" className="nav-link">Team</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-white/10 py-12 mt-24 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--color-primary)] animate-pulse rounded-full" />
              <p className="text-[var(--color-primary)] font-mono text-xs uppercase tracking-widest">
                SYS.NET // ACTIVE
              </p>
            </div>
            <div className="flex gap-6 font-mono">
              <span className="text-[var(--color-text-muted)] text-xs border border-white/10 px-3 py-1">COMMS: contact@newcastlerobotics.co.uk</span>
            </div>
          </div>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
