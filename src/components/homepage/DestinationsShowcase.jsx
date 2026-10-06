import React, { useEffect, useRef, useState } from "react";
import h13 from "../../assets/h13.png";
import tt1 from "../../assets/tt1.png";
import h15 from "../../assets/h15.png";
import h12 from "../../assets/h12.png";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    image: h12,
    title: "Travel to the Future",
    desc: "A city of luxury and innovation, where tomorrow comes alive.",
    badge: "Dubai",
  },
  {
    id: 2,
    image: h13,
    title: "Travel Into Nature",
    desc: "Stunning landscapes and pure alpine beauty of the nature.",
    badge: "Nature",
  },
  {
    id: 3,
    image: tt1,
    title: "Greek Island Luxury",
    desc: "Experience timeless beauty with stunning coastlines, elegant architecture, and unforgettable sunsets.",
    badge: "Greece",
  },
  {
    id: 4,
    image: h15,
    title: "Travel Back in Time",
    desc: "Explore ancient wonders, monuments & stories in stone.",
    badge: "Egypt",
  },
];

export default function DestinationsShowcase() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f4ef] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* top label */}
        <div
          className={`mt-10 flex items-center justify-center gap-2 text-[11px] font-medium text-[#666] transition-all duration-700 ease-out ${
            show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="inline-flex h-4 w-4 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M12 3l2.7 5.46 6.03.88-4.36 4.25 1.03 6.01L12 16.77 6.6 19.6l1.03-6.01L3.27 9.34l6.03-.88L12 3z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Most Loved Destinations</span>
        </div>

        {/* heading */}
        <h2
          className={`mx-auto mt-3 max-w-[840px] text-center text-[29px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173844] transition-all duration-700 delay-100 ease-out sm:text-[36px] md:text-[44px] lg:text-[58px] ${
            show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Explore The World’s Most
          <br className="hidden sm:block" />
          Popular Destinations
        </h2>

        {/* mobile */}
        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {destinations.map((item, index) => {
            const fromTop = index % 2 === 0;
            const isTall = index === 1 || index === 3;

            return (
              <article
                key={item.id}
                className={`min-w-[78%] max-w-[290px] shrink-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  show
                    ? "translate-y-0 opacity-100 scale-100"
                    : fromTop
                      ? "-translate-y-20 opacity-0 scale-[0.96]"
                      : "translate-y-20 opacity-0 scale-[0.96]"
                }`}
                style={{ transitionDelay: `${index * 180 + 200}ms` }}
              >
                <div className="overflow-hidden rounded-[26px] shadow-[0_14px_34px_rgba(0,0,0,0.06)]">
                  <div
                    className={`relative ${isTall ? "h-[340px]" : "h-[250px]"}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-[#444] backdrop-blur-md">
                      {item.badge}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-[18px] font-medium text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-[#666]">
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* desktop */}
        <div className="mt-16 hidden grid-cols-4 gap-8 md:grid lg:gap-10">
          {destinations.map((item, index) => {
            const fromTop = index % 2 === 0;
            const isTall = index === 1 || index === 3;
            const textFirst = index === 1 || index === 3;

            return (
              <article
                key={item.id}
                className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  show
                    ? "translate-y-0 opacity-100 scale-100"
                    : fromTop
                      ? "-translate-y-24 opacity-0 scale-[0.96]"
                      : "translate-y-24 opacity-0 scale-[0.96]"
                }`}
                style={{ transitionDelay: `${index * 180 + 200}ms` }}
              >
                {textFirst && (
                  <div className="mb-4 pl-1 transition-all duration-700">
                    <h3 className="text-[18px] font-medium text-[#171717] lg:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-[270px] text-[14px] leading-[1.55] text-[#666] lg:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                )}

                <div className="overflow-hidden rounded-[26px] shadow-[0_14px_34px_rgba(0,0,0,0.06)]">
                  <div
                    className={`relative ${
                      isTall
                        ? "h-[330px] lg:h-[360px]"
                        : "h-[240px] lg:h-[290px]"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-[#444] backdrop-blur-md">
                      {item.badge}
                    </div>
                  </div>
                </div>

                {!textFirst && (
                  <div className="mt-4 pl-1 transition-all duration-700">
                    <h3 className="text-[18px] font-medium text-[#171717] lg:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-[270px] text-[14px] leading-[1.55] text-[#666] lg:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* bottom bar */}
        {/* bottom bar */}
        <div
          className={`mt-10 flex flex-col gap-5 transition-all duration-700 delay-[750ms] ease-out sm:mt-12 lg:mt-14 lg:flex-row lg:items-center lg:justify-between ${
            show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
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
