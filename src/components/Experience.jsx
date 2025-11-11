const roles = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Engineer',
    period: '2022 — Present',
    bullets: [
      'Led performance overhaul, improving LCP by 40%.',
      'Built internal component library adopted by 5 teams.',
      'Mentored 4 engineers; drove accessibility standards.'
    ]
  },
  {
    company: 'Pixel Labs',
    role: 'Full‑Stack Engineer',
    period: '2020 — 2022',
    bullets: [
      'Delivered multi-tenant SaaS with RBAC and billing.',
      'Implemented CI/CD pipelines and test automation.',
      'Shipped features across React, Node, and Python.'
    ]
  }
]

export default function Experience() {
  return (
    <div className="space-y-6">
      {roles.map((r) => (
        <div key={r.company} className="rounded-2xl border border-slate-200 bg-white/60 p-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{r.role}</h3>
              <p className="text-sm text-slate-600">{r.company}</p>
            </div>
            <span className="text-xs text-slate-500">{r.period}</span>
          </div>
          <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
            {r.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
