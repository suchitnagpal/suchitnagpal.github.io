// app/layout.tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suchit Nagpal — Forward Deployed AI Engineer',
  description: 'Building production AI systems and deploying them where they matter. Open to FDE, AI Engineer, and SWE roles across the US.',
  openGraph: {
    title: 'Suchit Nagpal — Forward Deployed AI Engineer',
    description: 'Production LLM agents · RAG pipelines · 700+ users · $30K+ GMV',
    url: 'https://suchitnagpal.github.io',
    siteName: 'Suchit Nagpal',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-white text-[#111] antialiased">
        {children}
      </body>
    </html>
  )
}
