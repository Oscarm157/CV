import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProfileCard from "@/components/cards/ProfileCard";
import StatsCard from "@/components/cards/StatsCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import AICard from "@/components/cards/AICard";
import SoftwareCard from "@/components/cards/SoftwareCard";
import FormacionCard from "@/components/cards/FormacionCard";
import PortfolioCard from "@/components/cards/PortfolioCard";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BentoGrid>
          {/* Row 1: Perfil (2col) + AI dark (1col) */}
          <ProfileCard />
          <AICard />
          {/* Row 2: Experiencia (2col) + Stats amber (1col) */}
          <ExperienceCard />
          <StatsCard />
          {/* Row 3: Software + Formacion + Portfolio (2col) */}
          <SoftwareCard />
          <FormacionCard />
          <PortfolioCard />
        </BentoGrid>
      </main>
      <Footer />
    </>
  );
}
