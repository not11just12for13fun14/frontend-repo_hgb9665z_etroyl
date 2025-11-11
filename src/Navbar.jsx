import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-bold text-slate-900 text-lg tracking-tight">Tech Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#skills" className="hover:text-slate-900 transition">Skills</a>
            <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
            <a href="#experience" className="hover:text-slate-900 transition">Experience</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100 text-slate-700"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100 text-slate-700"><Linkedin size={18} /></a>
            <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-full hover:bg-slate-100 text-slate-700"><Mail size={18} /></a>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700" aria-label="Open Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
