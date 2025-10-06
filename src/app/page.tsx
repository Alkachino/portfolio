import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import Footer from "@/components/layout/Footer";
import AiContentImprover from "@/components/AiContentImprover";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
      <Footer />
      <AiContentImprover />
    </div>
  );
}
