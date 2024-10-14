import AppSection from "./section/AppSection";
import FeatSection from "./section/FeatSection";
import FooterSection from "./section/FooterSection";
import HeroSection from "./section/HeroSection";
import RoadmapSection from "./section/RoadmapSection";
import TeamSection from "./section/TeamSection";

const App = () => {
  return (
    <>
      <HeroSection />
      <FeatSection />
      <AppSection />
      <RoadmapSection />
      <TeamSection />
      <FooterSection />
    </>
  );
};

export default App;
