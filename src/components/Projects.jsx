const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Streaming analytics dashboard with WebSockets, charts, and role-based access.',
    tags: ['React', 'FastAPI', 'Tailwind', 'WebSockets'],
    link: '#'
  },
  {
    title: 'Design System Kit',
    description: 'Composable components with tokens, theming, and docs site.',
    tags: ['React', 'TypeScript', 'Storybook'],
    link: '#'
  },
  {
    title: 'AI-powered Notes',
    description: 'Semantic search, embeddings, and markdown sync across devices.',
    tags: ['Next.js', 'OpenAI', 'Prisma'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <a key={p.title} href={p.link} className="group rounded-2xl border border-slate-200 bg-white/60 p-6 hover:shadow-lg transition">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-800">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-wide bg-slate-100 text-slate-600 rounded px-2 py-1">{t}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
