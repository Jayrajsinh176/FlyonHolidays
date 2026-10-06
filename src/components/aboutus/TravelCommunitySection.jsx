import React from "react";
import aboutImg from "../../assets/ac.png";

// ✅ FLAG IMPORTS
import {
  MV, GR, ID, AE, CH, IT, TH, JP, TR, FR
} from "country-flag-icons/react/3x2";

const countries = [
  { name: "Maldives", Flag: MV },
  { name: "Greece", Flag: GR },
  { name: "Bali", Flag: ID },
  { name: "Dubai", Flag: AE },
  { name: "Switzerland", Flag: CH },
  { name: "Italy", Flag: IT },
  { name: "Thailand", Flag: TH },
  { name: "Japan", Flag: JP },
  { name: "Turkey", Flag: TR },
  { name: "France", Flag: FR },
];

export default function TravelCommunitySection() {
  return (
    <section className="-mt-3 w-full bg-[#f3f3f1] py-8 sm:py-10 md:py-12 overflow-hidden">
      
      {/* 🔥 INFINITE SCROLL TOP */}
      <div className="mb-6 sm:mb-8">
        <div className="relative w-full overflow-hidden">
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...countries, ...countries].map((country, index) => {
              const Flag = country.Flag;

              return (
                <div
                  key={index}
                  className="mx-6 flex items-center gap-2 text-[14px] font-medium text-[#0b2b36]/80 sm:text-[16px] hover:scale-105 transition"
                >
                  {/* FLAG */}
                  <Flag className="w-[20px] h-[14px] rounded-sm shadow-sm" />

                  {/* NAME */}
                  <span>{country.name}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-14 mx-auto max-w-[1020px] px-4 sm:px-6">
        
        {/* HEADING */}
        <h2 className="
          mt-7
          text-[#0b2b36]
          text-[22px] leading-[1.2] font-semibold tracking-[-0.02em]
          sm:text-[26px]
          md:text-[32px]
          lg:text-[36px]
          max-w-[720px]
        ">
          Creating Travel Experiences That Connect People Through Community,
          Care & Planning
        </h2>

        {/* IMAGE */}
        <div className="mt-5 sm:mt-6">
          <div className="overflow-hidden rounded-[16px] sm:rounded-[18px] md:rounded-[20px]">
            <img
              src={aboutImg}
              alt="Travel community"
              className="
                w-full object-cover
                h-[200px]
                sm:h-[280px]
                md:h-[360px]
                lg:h-[420px]
              "
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="
          mt-7
          grid grid-cols-1
          gap-y-4
          md:grid-cols-2
          md:gap-x-14
          lg:gap-x-20
        ">
          <p className="text-black/60 text-[12px] sm:text-[13px] max-w-[460px]">
            Founded on the belief that travel should be personal and enriching,
            we reimagined how people experience it together. Our passion for
            meaningful journeys has grown into a trusted travel brand.
          </p>

          <p className="text-black/60 text-[12px] sm:text-[13px] max-w-[460px]">
            We have evolved with our travelers. From weekend getaways to group
            journeys, every itinerary reflects our commitment to authenticity
            and safety. Our focus is on bringing travelers together
          </p>
        </div>

      </div>

      {/* 🔥 MARQUEE CSS */}
      <style>
        {`
          .animate-marquee {
            display: flex;
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}