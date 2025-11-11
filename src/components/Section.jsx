export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
