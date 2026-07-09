import Nav from "@/components/Nav";
import BentoGrid from "@/components/BentoGrid";
import HeroCard from "@/components/cards/HeroCard";
import ProfileCard from "@/components/cards/ProfileCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import AICard from "@/components/cards/AICard";
import SoftwareCard from "@/components/cards/SoftwareCard";
import FormacionCard from "@/components/cards/FormacionCard";
import FrameworksCard from "@/components/cards/FrameworksCard";
import ProjectsCard from "@/components/cards/ProjectsCard";
import PortfolioCard from "@/components/cards/PortfolioCard";
import Footer from "@/components/Footer";
import AskCVModal from "@/components/AskCVModal";
import { VariantProvider } from "@/context/VariantContext";
import { ChatProvider } from "@/context/ChatContext";
import type { Variant } from "@/content/variant";

export default function Resume({ variant }: { variant: Variant }) {
  return (
    <VariantProvider variant={variant}>
      <ChatProvider>
        <Nav />
        <main>
          <BentoGrid>
            <HeroCard />
            <ProfileCard />
            <AICard />
            <ExperienceCard />
            <SoftwareCard />
            <FormacionCard />
            <FrameworksCard />
            <ProjectsCard />
            <PortfolioCard />
          </BentoGrid>
        </main>
        <Footer />
        <AskCVModal />
      </ChatProvider>
    </VariantProvider>
  );
}
