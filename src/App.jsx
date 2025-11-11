import Navbar from './Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />

      <main>
        <Hero />

        <Section id="about" title="About" subtitle="Engineer with a design mindset and love for DX.">
          <div className="prose prose-slate max-w-none">
            <p>
              I build fast, reliable products across the stack. I enjoy shaping intuitive interfaces, designing reusable systems, and shipping features end‑to‑end with an eye for performance and maintainability.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="A snapshot of my toolkit.">
          <Skills />
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work and experiments.">
          <Projects />
        </Section>

        <Section id="experience" title="Experience" subtitle="Highlights from recent roles.">
          <Experience />
        </Section>

        <Section id="contact" title="Let’s collaborate" subtitle="Have an opportunity or idea? I’d love to hear it.">
          <Contact />
        </Section>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
    </div>
  )
}

export default App