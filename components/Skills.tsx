import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto border-t border-[#e5e5e5]">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366f1] mb-10">Skills</p>
      <div className="flex flex-col gap-6">
        {skills.map((group) => (
          <div key={group.category} className="grid grid-cols-4 gap-4 items-start">
            <p className="text-xs font-semibold text-[#999] pt-1">{group.category}</p>
            <div className="col-span-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-[#f5f5f5] border border-[#e5e5e5] text-[#444] text-xs font-medium px-3 py-1.5 rounded-lg hover:border-[#6366f1]/40 hover:text-[#6366f1] transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
