import Nav from "@/components/Nav";
import BentoGrid from "@/components/BentoGrid";
import HeroCard from "@/components/cards/HeroCard";
import ProfileCard from "@/components/cards/ProfileCard";

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
        <BentoGrid>
          <HeroCard />
          <ProfileCard />
          <AICard />
          <ExperienceCard />
<SoftwareCard />
          <FormacionCard />
          <PortfolioCard />
        </BentoGrid>
      </main>
      <Footer />
    </>
  );
}
