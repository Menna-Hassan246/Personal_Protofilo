import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <div className="container">
          <div className="footer-circle">
            <p>&copy; 2024 Menna Hassan. Crafted with circular design principles.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
