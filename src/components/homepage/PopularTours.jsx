import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import tt1 from "../../assets/tt1.png";
import tt2 from "../../assets/tt2.jpg";
import tt3 from "../../assets/tt3.jpg";
import tt4 from "../../assets/tt4.jpg";
import tt5 from "../../assets/tt5.jpg";
import tt6 from "../../assets/tt6.jpg";
import { i } from "framer-motion/client";

const tours = [
  { id: 1, title: "Greece – Mandrakia in Milos", image: tt1, badge: "25% Off" },
  { id: 2, title: "Argentina – Great Diving Trip", image: tt2, badge: "" },
  { id: 3, title: "Two Moscow Tour of 7 days", image: tt3, badge: "" },
  {
    id: 4,
    title: "Austria – Vienna, Hallstatt",
    image: tt4,
    badge: "Special Offer",
  },
  { id: 5, title: "America – Grand Canyon", image: tt5, badge: "15% Off" },
  { id: 6, title: "Italy – Venice, Rome", image: tt6, badge: "" },
];

export default function PopularTours() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % tours.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  const visibleTours = Array.from({ length: cardsToShow }, (_, i) => {
    return tours[(startIndex + i) % tours.length];
  });

  return (
    <section className="w-full bg-[#f3f3f1] py-10 sm:py-12 md:py-16">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="mb-4 flex items-center justify-center gap-2">
          <MapPin className="h-5 w-5 text-black" />
          <span className="text-sm font-medium uppercase tracking-wide text-black">
            Explore Destinations
          </span>
        </div>

        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mt-4 text-center text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#173042] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            Freshly Added <span className="text-black">Tours</span>
          </h2>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9e9e7] hover:bg-[#ddd] sm:h-12 sm:w-12"
          >
            <ChevronLeft />
          </button>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {visibleTours.map((tour) => (
              <div key={`${tour.id}-${startIndex}`} className="group">
                <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                  <div className="relative aspect-[0.78/1] overflow-hidden rounded-[24px]">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {tour.badge && (
                      <div className="absolute left-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-[#4d4d4d] backdrop-blur-md sm:left-4 sm:top-4">
                        {tour.badge}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-1 pt-4">
                  <h3 className="text-[17px] font-medium text-[#1b1b1b] sm:text-[18px]">
                    {tour.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9e9e7] hover:bg-[#ddd] sm:h-12 sm:w-12"
          >
            <ChevronRight />
          </button>
        </div>

        {/* bottom bar */}
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
