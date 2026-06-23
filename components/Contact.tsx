import { profile } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-40 px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Open to opportunities
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2
            className="font-black text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)', letterSpacing: '-0.03em' }}
          >
            Let&apos;s build<br />something.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-base mb-12" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
            Open to FDE, AI Engineer, and SWE roles across the US.<br />
            H1B sponsorship required.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] px-8 py-3.5 rounded-full transition-colors"
            >
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-8 py-3.5 rounded-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white transition-all"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-8 py-3.5 rounded-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white transition-all"
            >
              GitHub ↗
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <p className="text-xs mt-20" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Built with Next.js · Deployed on GitHub Pages
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
