import { about } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto border-t border-[#e5e5e5]">
      <div className="grid grid-cols-4 gap-8 items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366f1]">About</p>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-black tracking-tight text-[#111] mb-4 leading-snug">
            I&apos;m the engineer who builds the AI<br className="hidden md:block" /> and explains it to the room.
          </h2>
          <p className="text-[#555] text-sm leading-relaxed">
            {about.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}
