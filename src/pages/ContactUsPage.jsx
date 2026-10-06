import ContactHero from "../components/contact/ContactHero";
import FAQSection from "../components/contact/FAQSection";
import TravelPlannerSection from "../components/contact/TravelPlannerSection";
import FooterSection from "../components/FooterSection";
import MapSection from "../components/contact/MapSection";
import { i } from "framer-motion/client";

export default function ContactUsPage() {
  return (
    <div>
      <ContactHero />
      <TravelPlannerSection />
      <FAQSection />
      <MapSection />
      <FooterSection />
    </div>
  );
}