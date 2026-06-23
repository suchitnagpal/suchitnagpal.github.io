// lib/data.ts

export const profile = {
  name: 'Suchit Nagpal',
  headline: 'Forward Deployed AI Engineer',
  tagline: 'I build AI that ships. Then I sit with the customer and make it work.',
  email: 'suchitnagpal1@gmail.com',
  linkedin: 'https://linkedin.com/in/suchits/',
  github: 'https://github.com/suchitnagpal',
  location: 'Open to US relocation',
  status: 'Available',
  sponsorship: 'H1B sponsorship required',
}

export const stats = [
  { value: '700+', label: 'Live users on my platform' },
  { value: '$30K+', label: 'In real transaction volume' },
  { value: '80–90%', label: 'Escalation time reduced at Amplify' },
  { value: '$95K', label: 'Annual infra cost reduction at Ramerman' },
]

export const about = {
  paragraph: "I'm the engineer who builds the AI and then explains it to the room. Three years shipping production AI systems across enterprise SaaS, data engineering, and my own P2P esports platform. I'm most effective at the intersection of deep technical work and direct stakeholder impact — which is why Forward Deployed Engineer roles are my sweet spot.",
}

export const experience = [
  {
    date: '2026 – Present',
    company: 'Ramerman Leadership Group',
    role: 'Software Engineer',
    impact: 'AI agents on OpenAI SDK · multi-tenant platform · $95K annual cost reduction',
    tags: ['Python', 'OpenAI SDK', 'PostgreSQL', 'AWS', 'SQS'],
  },
  {
    date: '2025 – Present',
    company: 'Stealth Esports Startup',
    role: 'Founding Engineer (Part-time)',
    impact: 'P2P wagering platform built 0→1 · 700+ paid users · $30K+ GMV · live in beta',
    tags: ['React Native', 'PostgreSQL', 'AWS', 'Full-Stack'],
  },
  {
    date: '2025',
    company: 'Amplify',
    role: 'Analyst',
    impact: 'Claude AI + MCP escalation pipeline · 80–90% triage time cut · 98% QA score',
    tags: ['Claude AI', 'Salesforce', 'MCP', 'Amazon Bedrock', 'AWS'],
  },
  {
    date: '2024 – 2025',
    company: 'Sanea Networks',
    role: 'Data Engineer',
    impact: 'CDC ETL pipelines · Snowflake sync · 70% compute cost reduction',
    tags: ['Python', 'Snowflake', 'AWS SQS', 'CDC', 'SQL'],
  },
  {
    date: '2021',
    company: 'Grab',
    role: 'Data Engineering Intern',
    impact: '55% SQL latency reduction on 10M+ row datasets · star-schema analytics views',
    tags: ['SQL', 'Power BI', 'Data Validation'],
  },
]

export const projects = [
  {
    title: 'Stealth Esports Platform',
    description: 'Built a P2P skill-based wagering platform for esports from 0 to 1. Players challenge each other 1v1 with self-set stakes, automated outcome verification, and instant payouts.',
    result: '700+ paid users · $30K+ GMV · Live in beta',
    tags: ['React Native', 'PostgreSQL', 'AWS', 'Full-Stack'],
    link: null,
    badge: 'Live',
  },
  {
    title: 'Personal Finance LLM',
    description: 'AI-powered personal finance advisor that analyzes spending patterns and delivers personalized recommendations via an LLM-backed interface.',
    result: 'Open source · Python + OpenAI',
    tags: ['Python', 'OpenAI', 'LLM'],
    link: 'https://github.com/suchitnagpal/personal_finance',
    badge: 'Open Source',
  },
  {
    title: 'AI Customer Purchase Analysis',
    description: 'Machine learning system that identifies purchase patterns across customer segments using vector retrieval to surface actionable business insights.',
    result: 'Open source · Vector retrieval + Python',
    tags: ['Python', 'Vector Retrieval', 'AI', 'Data Engineering'],
    link: 'https://github.com/suchitnagpal/ai-powered-customer-purchase-analysis',
    badge: 'Open Source',
  },
]

export const skills = [
  {
    category: 'AI & ML',
    items: ['OpenAI SDK', 'Amazon Bedrock', 'RAG', 'Vector Retrieval', 'Agentic AI', 'Prompt Engineering', 'LLM Orchestration'],
  },
  {
    category: 'Cloud & Data',
    items: ['AWS', 'PostgreSQL', 'Snowflake', 'MongoDB', 'Kafka', 'Docker', 'Terraform', 'SQLAlchemy'],
  },
  {
    category: 'Languages & Tools',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'React Native', 'Salesforce', 'HubSpot'],
  },
]
