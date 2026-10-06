import React, { useMemo, useState } from "react";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ht1 from "../../assets/ht1.png";
import ht2 from "../../assets/ht2.png";
import ht3 from "../../assets/ht3.png";
import ht4 from "../../assets/ht4.png";
import ht5 from "../../assets/ht5.png";
import ht6 from "../../assets/ht6.png";
import ht7 from "../../assets/ht7.png";
import ht8 from "../../assets/ht8.png";
import ht9 from "../../assets/ht9.png";
import ht10 from "../../assets/ht10.png";
import ht11 from "../../assets/ht11.png";
import ht12 from "../../assets/ht12.png";

const destinations = [
  {
    id: 1,
    slug: "italy-amalfi-coast",
    title: "Italy - Amalfi Coast",
    image: ht1,
    price: 1480,
    packages: "24+ Packages",
    tag: "Romantic Coast",
    details:
      "Luxury coastline, boutique stays, scenic viewpoints, and premium dining.",
    plan: [
      "Day 1: Arrival and private transfer",
      "Day 2: Positano exploration",
      "Day 3: Amalfi and Ravello",
      "Day 4: Sunset boat cruise",
    ],
  },
  {
    id: 2,
    slug: "greece-santorini",
    title: "Greece - Santorini",
    image: ht2,
    price: 1620,
    packages: "19+ Packages",
    tag: "Island Escape",
    details:
      "Iconic sunsets, cliffside stays, sea cruises, and premium island experiences.",
    plan: [
      "Day 1: Sunset check-in",
      "Day 2: Oia village",
      "Day 3: Catamaran cruise",
      "Day 4: Winery dinner",
    ],
  },
  {
    id: 3,
    slug: "spain-barcelona",
    title: "Spain - Barcelona",
    image: ht3,
    price: 1190,
    packages: "16+ Packages",
    tag: "City & Culture",
    details:
      "Beach energy, iconic architecture, shopping streets, and lively nightlife.",
    plan: [
      "Day 1: Gothic Quarter",
      "Day 2: Sagrada Familia",
      "Day 3: Beach and tapas",
      "Day 4: Shopping tour",
    ],
  },
  {
    id: 4,
    slug: "portugal-lisbon",
    title: "Portugal - Lisbon",
    image: ht4,
    price: 980,
    packages: "21+ Packages",
    tag: "Relaxed Escape",
    details:
      "Affordable luxury with viewpoints, old streets, food tours, and elegant stays.",
    plan: [
      "Day 1: Alfama walk",
      "Day 2: Belém district",
      "Day 3: Sintra trip",
      "Day 4: Food experience",
    ],
  },
  {
    id: 5,
    slug: "croatia-dubrovnik",
    title: "Croatia - Dubrovnik",
    image: ht5,
    price: 1340,
    packages: "14+ Packages",
    tag: "Historic Coast",
    details:
      "Old town charm, sea views, island trips, and unforgettable sunset dining.",
    plan: [
      "Day 1: Old Town tour",
      "Day 2: Beach day",
      "Day 3: Island escape",
      "Day 4: Sunset dinner",
    ],
  },
  {
    id: 6,
    slug: "turkey-cappadocia",
    title: "Turkey - Cappadocia",
    image: ht6,
    price: 1260,
    packages: "17+ Packages",
    tag: "Adventure",
    details:
      "Balloon rides, cave hotels, dramatic valleys, and artisan local culture.",
    plan: [
      "Day 1: Cave hotel",
      "Day 2: Balloon ride",
      "Day 3: Valley hike",
      "Day 4: Local market tour",
    ],
  },
  {
    id: 7,
    slug: "paris-luxury-classic",
    title: "France - Paris",
    image: ht7,
    price: 1710,
    packages: "28+ Packages",
    tag: "Luxury Classic",
    details:
      "Iconic landmarks, romantic evenings, luxury shopping, and river cruises.",
    plan: [
      "Day 1: Eiffel Tower",
      "Day 2: Louvre visit",
      "Day 3: Shopping and cafés",
      "Day 4: Seine cruise",
    ],
  },
  {
    id: 8,
    slug: "austria-vienna",
    title: "Austria - Vienna",
    image: ht8,
    price: 1120,
    packages: "12+ Packages",
    tag: "Elegant City",
    details:
      "Palaces, classical music, museums, cafés, and refined European charm.",
    plan: [
      "Day 1: Historic center",
      "Day 2: Palace visit",
      "Day 3: Museums",
      "Day 4: Concert night",
    ],
  },
  {
    id: 9,
    slug: "switzerland-interlaken",
    title: "Switzerland - Interlaken",
    image: ht9,
    price: 1890,
    packages: "18+ Packages",
    tag: "Alpine Escape",
    details:
      "Mountains, lakes, scenic rail trips, and premium outdoor adventures.",
    plan: [
      "Day 1: Lakeside arrival",
      "Day 2: Jungfrau trip",
      "Day 3: Village walk",
      "Day 4: Panorama train",
    ],
  },
  {
    id: 10,
    slug: "netherlands-amsterdam",
    title: "Netherlands - Amsterdam",
    image: ht10,
    price: 1290,
    packages: "15+ Packages",
    tag: "Canal City",
    details:
      "Canal cruises, museums, cycling routes, boutique hotels, and lively squares.",
    plan: [
      "Day 1: Canal cruise",
      "Day 2: Museum district",
      "Day 3: Countryside visit",
      "Day 4: Shopping and cafés",
    ],
  },
  {
    id: 11,
    slug: "czech-republic-prague",
    title: "Czech Republic - Prague",
    image: ht11,
    price: 1060,
    packages: "20+ Packages",
    tag: "Old Town Magic",
    details:
      "Castle views, historic bridges, river walks, and classic city-break energy.",
    plan: [
      "Day 1: Old Town",
      "Day 2: Prague Castle",
      "Day 3: River cruise",
      "Day 4: Market streets",
    ],
  },
  {
    id: 12,
    slug: "norway-oslo-fjords",
    title: "Norway - Oslo Fjords",
    image: ht12,
    price: 1760,
    packages: "10+ Packages",
    tag: "Nordic Premium",
    details:
      "Scenic fjords, modern stays, coastal beauty, and elegant Nordic comfort.",
    plan: [
      "Day 1: Oslo center",
      "Day 2: Fjord cruise",
      "Day 3: Museum day",
      "Day 4: Waterfront dining",
    ],
  },
];

export default function TopDestinationsScroll() {
  const [paused, setPaused] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const marqueeItems = useMemo(() => [...destinations, ...destinations], []);

  const handleCardTouch = (uniqueId) => {
    setPaused(true);
    setActiveId((prev) => (prev === uniqueId ? null : uniqueId));
  };

  return (
    <section className="w-full overflow-hidden bg-[#f6f6f3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-6 px-4 sm:mb-8 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#173042]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173042]/70 shadow-sm sm:text-[12px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
              Trending Escapes
            </span>
          </div>

          <h2 className="mt-4 text-center text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#173042] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            Top Trending Travel Destinations
          </h2>

          <p className="mx-auto mt-3 max-w-[760px] text-center text-[14px] leading-6 text-[#637381] sm:text-[15px] md:text-[16px]">
            Discover premium travel plans for European travelers with luxury
            stays, curated experiences, and elegant short escapes.
          </p>
        </div>

        <div
          className="relative"
          onMouseLeave={() => {
            setPaused(false);
            setActiveId(null);
          }}
        >
          <div className="overflow-hidden">
            <div
              className={`marquee-track flex w-max gap-4 px-4 sm:gap-5 sm:px-6 lg:gap-6 lg:px-8 xl:px-10 ${
                paused ? "is-paused" : ""
              }`}
            >
              {marqueeItems.map((item, index) => {
                const uniqueId = `${item.id}-${index}`;
                const isActive = activeId === uniqueId;

                return (
                  <div
                    key={uniqueId}
                    className="relative shrink-0"
                    onMouseEnter={() => {
                      setPaused(true);
                      setActiveId(uniqueId);
                    }}
                    onMouseLeave={() => {
                      setActiveId(null);
                    }}
                    onTouchStart={(e) => {
                      const tag = e.target.tagName?.toLowerCase();
                      if (tag === "a" || tag === "button") return;
                      e.stopPropagation();
                      handleCardTouch(uniqueId);
                    }}
                  >
                    <div className="w-[220px] sm:w-[240px] md:w-[250px] lg:w-[270px] xl:w-[285px]">
                      <div className="group relative overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_8px_26px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[380px] md:h-[400px] lg:h-[430px]"
                        />

                        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/35 to-transparent sm:h-28" />

                        <div
                          className={`absolute inset-0 z-20 transition-all duration-300 ${
                            isActive
                              ? "opacity-100"
                              : "pointer-events-none opacity-0"
                          }`}
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,34,47,0.78)_0%,rgba(9,31,43,0.90)_100%)] backdrop-blur-[2px]" />

                          <div className="absolute inset-0 flex flex-col justify-between p-3 text-center sm:p-5">
                            <div>
                              <div className="flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[11px]">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <circle cx="12" cy="11" r="2.5" />
                                </svg>
                                <span>{item.tag}</span>
                              </div>

                              <h3 className="mt-2 text-[16px] font-semibold leading-tight text-white sm:mt-3 sm:text-[20px]">
                                {item.title}
                              </h3>

                              <div className="mt-2 inline-flex items-center justify-center rounded-full border border-[#5be39b]/20 bg-[#1a6c58]/40 px-3 py-1.5 text-[12px] font-semibold text-[#6ff0ae] shadow-[0_8px_20px_rgba(0,0,0,0.18)] sm:mt-3 sm:px-4 sm:py-2 sm:text-[14px]">
                                From ${item.price}
                              </div>

                              <p className="mt-3 px-1 text-[11px] leading-5 text-white/85 sm:mt-4 sm:text-[13px] sm:leading-6">
                                {item.details}
                              </p>
                            </div>

                            <div className="mt-3 shrink-0 sm:mt-4">
                              <div className="rounded-[16px] border border-white/10 bg-white/10 p-2.5 text-left backdrop-blur-md sm:rounded-[18px] sm:p-4">
                                <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[11px]">
                                  Travel Plan
                                </p>

                                <div className="space-y-1 sm:space-y-2">
                                  {item.plan.map((day, i) => (
                                    <div
                                      key={i}
                                      className="flex items-start gap-2 text-[9px] leading-4 text-white/90 sm:text-[12px] sm:leading-5"
                                    >
                                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6ff0ae]" />
                                      <span>{day}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Link
                                to={`/tours/${item.slug}`}
                                onTouchStart={(e) => e.stopPropagation()}
                                onClick={(e) => e.stopPropagation()}
                                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#123042] transition duration-300 hover:scale-[1.01] hover:bg-[#eaf9f2] sm:mt-4 sm:py-3 sm:text-[14px] relative z-30"
                                aria-label={`Explore ${item.title} package`}
                              >
                                Explore Package
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-1 pt-3 sm:pt-4">
                        <h3 className="text-center text-[16px] font-semibold text-[#101828] sm:text-[17px] lg:text-[18px]">
                          {item.title}
                        </h3>

                        <div className="mt-2 flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-3">
                          <p className="text-[13px] font-semibold text-[#2fb65d] sm:text-[14px]">
                            From ${item.price}
                          </p>
                          <span className="hidden h-1 w-1 rounded-full bg-[#98a2b3] sm:block" />
                          <p className="text-[12px] text-[#8d97a3] sm:text-[13px]">
                            {item.packages}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[1800px] flex-col gap-5 px-4 sm:mt-12 sm:px-6 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:px-8 xl:px-10">
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

      <style>{`
        .marquee-track {
          animation: destinationMarquee 58s linear infinite;
          will-change: transform;
        }

        .marquee-track.is-paused {
          animation-play-state: paused;
        }

        @keyframes destinationMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 42s;
          }
        }
      `}</style>
    </section>
  );
}