import React from "react";

import trip1 from "../../assets/journey/similar-1.jpg";
import trip2 from "../../assets/journey/similar-2.jpg";
import trip3 from "../../assets/journey/similar-3.jpg";
import trip4 from "../../assets/journey/similar-4.jpg";

const journeys = [
  {
    image: trip1,
    badge: "7 Days / 6 Nights",
    title: "Italy Classic",
    price: "From $1,400 / Per Person",
  },
  {
    image: trip2,
    badge: "6 Days / 5 Nights",
    title: "Paris Classics",
    price: "From $1,500 / Per Person",
  },
  {
    image: trip3,
    badge: "5 Days / 4 Nights",
    title: "Paris Getaway",
    price: "From $1,100 / Per Person",
  },
  {
    image: trip4,
    badge: "8 Days / 7 Nights",
    title: "Africa Experience",
    price: "From $2,200 / Per Person",
  },
];

export default function SimilarJourneys() {
  return (
    <section className="w-full bg-[#f5f5f3] py-14 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[13px] font-medium text-[#6d6d6d]">△ Similar Tour</p>
          <h2 className="mx-auto mt-2 max-w-[520px] text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#103a43] sm:text-[34px] md:text-[42px]">
            Journeys Designed For Every Travel Style
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {journeys.map((item) => (
            <div
              key={item.title}
              className="group rounded-[22px] bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-[18px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[#1b1b1b] backdrop-blur">
                  {item.badge}
                </span>
              </div>

              <div className="px-1 pb-1 pt-4">
                <h3 className="text-[18px] font-semibold text-[#1b1b1b]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] text-[#666]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-black/8 pt-5 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[#7b7b7b]">
            Explore more journeys waiting for you
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-[#0b5b63] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-[#08474d]">
            View All
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0b5b63]">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}