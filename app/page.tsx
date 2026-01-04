import { HeaderSection } from "@/components/services/header-section";
import { HeroSection } from "@/components/services/hero-section";
import { ClientServicesSection } from "@/components/services/client-services-section";
import { StudentServicesSection } from "@/components/services/student-services-section";
import { WhyChooseMeSection } from "@/components/services/why-choose-me-section";
import { AboutSection } from "@/components/services/about-section";
import { TechStackSection } from "@/components/services/tech-stack-section";
import { ContactSection } from "@/components/services/contact-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderSection />
      <HeroSection />
      <ClientServicesSection />
      <StudentServicesSection />
      <WhyChooseMeSection />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
