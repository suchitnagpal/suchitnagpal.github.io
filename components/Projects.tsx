import { projects } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-16" style={{ color: '#6366f1' }}>
            Projects
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
                {/* Dark header */}
                <div className="bg-[#1d1d1f] p-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: project.badge === 'Live' ? 'rgba(52,199,89,0.15)' : 'rgba(255,255,255,0.1)',
                        color: project.badge === 'Live' ? '#34c759' : 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {project.badge === 'Live' && '● '}
                      {project.badge}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs transition-colors hover:text-white"
                        style={{ color: '#0071e3' }}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                  <h3
                    className="font-black text-white mb-2"
                    style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: '#6366f1' }}>{project.result}</p>
                </div>
                {/* Light body */}
                <div className="bg-white p-10">
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6e6e73' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{ background: '#f5f5f7', color: '#1d1d1f' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
