import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-8">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 w-max">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Open to work • Frontend / Full‑Stack Engineer
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Building delightful, scalable interfaces for the modern web
        </h1>
        <p className="max-w-2xl text-slate-600 text-base sm:text-lg">
          I craft fast, accessible products using React, TypeScript, and cloud‑first APIs. Passionate about design systems, performance, and developer experience.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition">View Projects</a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-white/60 transition">Get in touch</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
