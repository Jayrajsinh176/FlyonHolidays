import React from "react";
import { MoveUpRight, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

import h7 from "../../assets/h7.png";
import h8 from "../../assets/h8.png";
import h9 from "../../assets/h9.png";
import h10 from "../../assets/h10.png";
import { i } from "framer-motion/client";

const packages = [
  {
    id: 1,
    image: h7,
    days: "8 Days / 7 Nights",
    title: "Morocco Desert Journey",
    price: "From $ 1,600 / Per Person",
  },
  {
    id: 2,
    image: h8,
    days: "8 Days / 7 Nights",
    title: "Italy Classic",
    price: "From $ 1,600 / Per Person",
  },
  {
    id: 3,
    image: h9,
    days: "8 Days / 7 Nights",
    title: "Africa Experience",
    price: "From $ 1,600 / Per Person",
  },
  {
    id: 4,
    image: h10,
    days: "8 Days / 7 Nights",
    title: "Japan Spring",
    price: "From $ 1,600 / Per Person",
  },
];

export default function JourneyPackages() {
  return (
    <section className="w-full bg-[#f7f7f5] px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Top heading */}
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12 lg:mb-14">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-[#6d6d6d] sm:text-xs">
            <Mountain className="h-3.5 w-3.5" strokeWidth={1.8} />
            <span>Handcrafted Tour Packages</span>
          </div>

          <h2 className="max-w-[620px] text-[28px] font-medium leading-[1.2] text-[#143c46] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Journeys Designed For Every
            <br className="hidden sm:block" />
            Travel Style
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {packages.map((item) => (
            <div key={item.id} className="group">
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="relative aspect-[0.78/1] overflow-hidden rounded-[24px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-[#4d4d4d] backdrop-blur-md sm:left-4 sm:top-4">
                    {item.days}
                  </div>
                </div>
              </div>

              <div className="px-1 pt-4">
                <h3 className="text-[17px] font-medium text-[#1b1b1b] sm:text-[18px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-[#6e6e6e] sm:text-sm">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line + button */}
        <div className="mt-10 flex flex-col gap-5 sm:mt-12 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4 lg:flex-1">
            <p className="whitespace-nowrap text-[12px] text-[#666] sm:text-[13px]">
              Explore more journeys waiting for you
            </p>
            <div className="hidden h-px flex-1 bg-[#d9d9d9] sm:block" />
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <Link to="/tours">
              <button className="rounded-full bg-[#0f4c5a] px-5 py-3 text-[13px] font-medium text-white transition hover:bg-[#0c3f4a] sm:px-6 sm:text-sm">
                View Packages
              </button>
            </Link>

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f4c5a] text-white transition hover:bg-[#0c3f4a]">
              <MoveUpRight className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
