import FooterSection from "../components/FooterSection";
import DestinationsShowcase from "../components/homepage/DestinationsShowcase";
import HeroNavbar from "../components/homepage/HeroNavbar";
import JourneyPackages from "../components/homepage/JourneyPackages";
import PopularDestinations from "../components/homepage/PopularDestinations";
import Testimonials from "../components/homepage/Testimonials";
import TopDestinationsScroll from "../components/homepage/TopDestinationsScroll";
import TravelAboutSection from "../components/homepage/TravelAboutSection";
import TravelStoriesSection from "../components/homepage/TravelStoriesSection";
import WhyTravelSection from "../components/homepage/WhyTravelSection";
import TravelGlassNavbar from "../components/TravelGlassNavbar";
import TravelStatsSection from "../components/homepage/TravelStatsSection";
import PopularTours from "../components/homepage/PopularTours";

export default function HomePage() {
  return (
    <div>
      <TravelGlassNavbar />
      <HeroNavbar />
      <TopDestinationsScroll />
      <PopularTours />
      <JourneyPackages />
      <PopularDestinations />
      <DestinationsShowcase />
      <TravelStatsSection />
      <WhyTravelSection />
      <Testimonials />
      <TravelStoriesSection />
      <TravelAboutSection />
      <FooterSection />
    </div>
  );
}
