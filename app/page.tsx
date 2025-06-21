import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import OrganizationsSection from "@/components/organizations-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CertificateSection from "@/components/certificate-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <OrganizationsSection />
        <CertificateSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
