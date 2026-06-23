import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-5xl mx-auto border-t border-[#e5e5e5]">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366f1] mb-10">Experience</p>

      <div className="flex flex-col gap-4">
        {experience.map((job, i) => (
          <div
            key={i}
            className="grid grid-cols-4 gap-6 p-5 rounded-xl border border-[#e5e5e5] hover:border-[#6366f1]/30 hover:shadow-sm transition-all group"
          >
            <div>
              <p className="text-xs text-[#999] font-medium pt-0.5">{job.date}</p>
            </div>
            <div className="col-span-3">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-bold text-sm text-[#111] group-hover:text-[#6366f1] transition-colors">
                  {job.company}
                </h3>
                <span className="text-xs text-[#999]">·</span>
                <span className="text-xs text-[#666]">{job.role}</span>
              </div>
              <p className="text-xs text-[#555] mb-3 leading-relaxed">{job.impact}</p>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium bg-[#f5f5f5] border border-[#e5e5e5] text-[#666] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
