import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnicalSkillsSection } from "@/components/technical-skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ArticlesSection } from "@/components/articles-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
