const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'FastAPI', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Framer Motion', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((s) => (
        <div key={s.name} className="rounded-xl border border-slate-200 p-4 bg-white/60">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-800">{s.name}</span>
            <span className="text-xs text-slate-500">{s.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
