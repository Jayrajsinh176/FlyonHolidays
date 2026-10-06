import AboutHero from "../components/aboutus/AboutHero";
import JourneySection from "../components/aboutus/JourneySection";
import MilestonesSection from "../components/aboutus/MilestonesSection";
import TeamSection from "../components/aboutus/TeamSection";
import TravelCommunitySection from "../components/aboutus/TravelCommunitySection";
import FooterSection from "../components/FooterSection";


export default function AboutUsPage() {
  return (
    <div>
      <AboutHero />
      <TravelCommunitySection />
      <MilestonesSection />
      <JourneySection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}