import { experience } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8" style={{ background: '#f5f5f7' }}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-16" style={{ color: '#6366f1' }}>
            Experience
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div
                className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
                style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-[#1d1d1f] text-lg mb-1">{job.company}</h3>
                    <p className="text-sm" style={{ color: '#6e6e73' }}>{job.role}</p>
                  </div>
                  <span className="text-xs font-medium shrink-0 mt-1" style={{ color: '#6e6e73' }}>{job.date}</span>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#1d1d1f' }}>{job.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: '#f5f5f7', color: '#6e6e73' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
