'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? 'bg-white shadow-sm border-b border-[#e5e5e5]' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-sm text-[#6366f1] tracking-tight">SN</span>
        <div className="flex items-center gap-6">
          {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[#666] hover:text-[#111] transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium text-white bg-[#6366f1] hover:bg-[#4f46e5] px-4 py-2 rounded-full transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
