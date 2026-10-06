import React from "react";
import ToursHeroSection from "../components/tours/ToursHeroSection";
import ToursGridSection from "../components/tours/ToursGridSection";
import FooterSection from "../components/FooterSection";


const Tours = () => {
  return (
    <main className="min-h-screen bg-[#f3f3f1]">
      <ToursHeroSection />
      <ToursGridSection />
      <FooterSection />
    </main>
  );
};

export default Tours;