import { profile } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center px-8 overflow-hidden">
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em] mb-6"
          style={{ color: '#6366f1' }}
        >
          {profile.headline}
        </p>

        <h1
          className="font-black text-white leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(60px, 10vw, 100px)', letterSpacing: '-0.03em' }}
        >
          {profile.name}
        </h1>

        <p
          className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}
        >
          {profile.tagline}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="text-sm font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] px-7 py-3 rounded-full transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-7 py-3 rounded-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-white tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  )
}
