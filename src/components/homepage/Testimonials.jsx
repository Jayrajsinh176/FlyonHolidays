import React from "react";
import { MoveUpRight } from "lucide-react";
import ScrollStack from "./ScrollStack";
import { Link } from "react-router-dom";

import h171 from "../../assets/h171.webp";
import h172 from "../../assets/h172.webp";
import h173 from "../../assets/h173.webp";
import h174 from "../../assets/h174.webp";
import { i } from "framer-motion/client";

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Travel Blogger",
    image: h171,
    text: "This platform made my travel planning effortless. Everything felt smooth, modern, and beautifully designed.",
  },
  {
    id: 2,
    name: "James Walker",
    role: "Adventure Photographer",
    image: h172,
    text: "I loved how immersive the experience feels. The visuals, layout, and storytelling are all top class.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Luxury Explorer",
    image: h173,
    text: "A stunning interface with a premium feel. It helped me discover destinations in a much more engaging way.",
  },
  {
    id: 4,
    name: "Liam Brown",
    role: "Digital Nomad",
    image: h174,
    text: "The section animations and scroll interaction feel amazing. It gives a very polished and professional look.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f5f6fb] px-4 py-20 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Testimonials
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Real Travel Stories From Around The World
          </h2>
        </div>

        <ScrollStack itemHeight={460}>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 px-2 md:grid-cols-2"
            >
              {/* Left image card */}
              <div className="relative flex items-start justify-center md:justify-end">
                <div className="w-full max-w-[220px] overflow-hidden rounded-[20px] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:max-w-[260px] md:w-[320px] md:max-w-none lg:w-[400px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[260px] w-full rounded-[16px] object-cover sm:h-[320px] md:h-[420px] lg:h-[500px]"
                  />
                </div>
              </div>

              {/* Right content card */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-full max-w-[280px] rounded-[20px] bg-white px-4 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:max-w-[360px] sm:px-5 sm:py-6 md:h-[300px] md:w-[360px] md:max-w-none lg:w-[500px]">
                  <div className="mb-2 text-2xl leading-none text-neutral-800">
                    “
                  </div>

                  <p className="text-sm leading-6 text-neutral-600">
                    {item.text}
                  </p>

                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-neutral-900 sm:text-base">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollStack>

        <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-5 sm:mt-12 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
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
