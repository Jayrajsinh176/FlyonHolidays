import React from "react";
import heroImg from "../../assets/journey/morocco-hero.jpg";

export default function JourneyHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[580px]">
        <img
          src={heroImg}
          alt="Morocco Desert Journey"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="pb-6 sm:pb-8 md:pb-10 lg:pb-12">
              <h1 className="max-w-[800px] text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px]">
                Morocco Desert Journey
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}