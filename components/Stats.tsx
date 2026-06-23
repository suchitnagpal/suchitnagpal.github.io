import { stats } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'

export default function Stats() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] mb-16" style={{ color: 'rgba(255,255,255,0.4)' }}>
            By the numbers
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="bg-black p-10 text-center">
                <p
                  className="font-black text-white mb-3 leading-none"
                  style={{ fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-0.03em' }}
                >
                  {stat.value}
                </p>
                <p className="text-xs leading-relaxed max-w-[140px] mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
