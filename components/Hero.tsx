import { profile, stats, skills } from '@/lib/data'

export default function Hero() {
  const stackPreview = skills.find(s => s.category === 'AI & ML')?.items.slice(0, 5) ?? []

  return (
    <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-4">

        {/* Name card — spans 2 cols */}
        <div className="col-span-2 bg-[#111] text-white rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6366f1] mb-4">
              AI Engineer · Forward Deployed Engineer
            </p>
            <h1 className="text-4xl font-black tracking-tighter leading-none mb-3">
              {profile.name}
            </h1>
            <p className="text-[#aaa] text-sm leading-relaxed max-w-sm">
              {profile.tagline}
            </p>
          </div>
          <div className="flex gap-3 mt-6">
            <a
              href="#projects"
              className="text-sm font-semibold bg-[#6366f1] hover:bg-[#4f46e5] text-white px-5 py-2.5 rounded-full transition-colors"
            >
              View Work ↗
            </a>
            <a
              href="#contact"
              className="text-sm font-medium border border-white/20 text-white hover:border-white/40 px-5 py-2.5 rounded-full transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Status card */}
        <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#999] font-semibold mb-3">Status</p>
            <p className="text-sm font-semibold text-[#111] mb-1">{profile.location}</p>
            <p className="text-xs text-[#666]">{profile.sponsorship}</p>
          </div>
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {profile.status}
          </div>
        </div>

        {/* Stat cards */}
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 flex flex-col justify-between ${
              i === 0
                ? 'bg-[#6366f1] text-white'
                : 'bg-white border border-[#e5e5e5]'
            }`}
          >
            <p className={`text-3xl font-black tracking-tighter ${i === 0 ? 'text-white' : 'text-[#6366f1]'}`}>
              {stat.value}
            </p>
            <p className={`text-xs mt-2 leading-snug ${i === 0 ? 'text-indigo-200' : 'text-[#666]'}`}>
              {stat.label}
            </p>
          </div>
        ))}

        {/* Stack preview card */}
        <div className="bg-white border border-[#e5e5e5] rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[#999] font-semibold mb-3">Core Stack</p>
          <div className="flex flex-wrap gap-2">
            {stackPreview.map((item) => (
              <span
                key={item}
                className="bg-[#f5f5f5] border border-[#e5e5e5] text-[#444] text-xs px-2.5 py-1 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
