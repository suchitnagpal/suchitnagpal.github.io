'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-white tracking-tight">Suchit Nagpal</span>
        <div className="flex items-center gap-8">
          {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-white/70 hover:text-white transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] px-4 py-1.5 rounded-full transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
