import { about } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'

export default function About() {
  return (
    <section id="about" className="bg-white py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-8" style={{ color: '#6366f1' }}>
            About
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2
            className="font-black text-[#1d1d1f] mb-10 leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            I build the AI.<br />Then I make it work<br />in the real world.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-lg leading-relaxed" style={{ color: '#6e6e73', maxWidth: '600px' }}>
            {about.paragraph}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
