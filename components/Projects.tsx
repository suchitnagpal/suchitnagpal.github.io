import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-5xl mx-auto border-t border-[#e5e5e5]">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366f1] mb-10">Projects</p>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-[#e5e5e5] rounded-xl p-6 flex flex-col justify-between hover:border-[#6366f1]/30 hover:shadow-sm transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                  project.badge === 'Live'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-[#f5f5f5] text-[#666] border border-[#e5e5e5]'
                }`}>
                  {project.badge === 'Live' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse align-middle" />}
                  {project.badge}
                </span>
              </div>
              <h3 className="font-black text-sm text-[#111] mb-2 group-hover:text-[#6366f1] transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs text-[#555] leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="text-[10px] font-semibold text-[#6366f1] mb-4">{project.result}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-[#f5f5f5] border border-[#e5e5e5] text-[#666] px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#6366f1] hover:underline ml-auto"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
