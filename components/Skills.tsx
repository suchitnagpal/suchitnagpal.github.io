import { skills } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8" style={{ background: '#f5f5f7' }}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-16" style={{ color: '#6366f1' }}>
            Skills
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-12">
          {skills.map((group, i) => (
            <AnimateOnScroll key={group.category} delay={i * 100}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: '#6e6e73' }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium px-4 py-2 rounded-full bg-white cursor-default transition-all duration-200 hover:bg-[#0071e3] hover:text-white"
                      style={{ color: '#1d1d1f', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}
                    >
                      {item}
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
