import { profile } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-[#e5e5e5] text-center">
      <h2 className="text-4xl font-black tracking-tighter text-[#111] mb-3">Let&apos;s talk.</h2>
      <p className="text-sm text-[#666] mb-8 max-w-md mx-auto">
        Open to FDE, AI Engineer, and SWE roles across the US.<br />
        H1B sponsorship required.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href={`mailto:${profile.email}`}
          className="text-sm font-semibold text-white bg-[#111] hover:bg-[#6366f1] px-6 py-3 rounded-full transition-colors"
        >
          Email Me
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium border border-[#e5e5e5] text-[#111] hover:border-[#6366f1] hover:text-[#6366f1] px-6 py-3 rounded-full transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium border border-[#e5e5e5] text-[#111] hover:border-[#6366f1] hover:text-[#6366f1] px-6 py-3 rounded-full transition-colors"
        >
          GitHub ↗
        </a>
      </div>
      <p className="text-xs text-[#bbb] mt-12">
        Built with Next.js · Deployed on GitHub Pages
      </p>
    </section>
  )
}
