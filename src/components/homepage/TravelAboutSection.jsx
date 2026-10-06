import { useEffect, useRef, useState } from "react";
import { Info, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import hpd4 from "../../assets/hpd4.png";
import hpd3 from "../../assets/hpd3.png";
import { i } from "framer-motion/client";

export default function TravelAboutSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#f7f7f5] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 xl:px-20 2xl:px-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
          {/* Left Content */}
          <div className="flex flex-col justify-between gap-8">
            <div
              className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-16 opacity-0 blur-sm"
              }`}
            >
              <div className="mb-5 flex items-center gap-2 text-[13px] font-medium text-[#5d6663] sm:text-sm">
                <Info className="h-4 w-4" strokeWidth={1.8} />
                <span>About Us</span>
              </div>

              <h2 className="max-w-[680px] text-[2rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#17363a] sm:text-[2.4rem] md:text-[2.9rem] lg:text-[3.35rem] xl:text-[3.8rem]">
                Meaningful Travel Experiences, Thoughtfully Crafted
              </h2>

              <p className="mt-5 max-w-[640px] text-sm leading-7 text-[#5c6260] sm:text-[15px] md:text-base">
                We are passionate travel experts creating unforgettable journeys
                beyond sightseeing. Every itinerary combines comfort, discovery,
                and meaningful experiences.
              </p>
            </div>

            {/* Bottom Left Image */}
            <div
              className={`group overflow-hidden rounded-[24px] transition-all duration-[1300ms] delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView
                  ? "translate-y-0 scale-100 opacity-100 rotate-0"
                  : "translate-y-20 scale-90 opacity-0 -rotate-2"
              }`}
            >
              <div
                className={
                  inView ? "animate-float-slow will-change-transform" : ""
                }
              >
                <img
                  src={hpd3}
                  alt="Travel experience"
                  className="h-[220px] w-full scale-[1.04] object-cover transition-transform duration-700 group-hover:scale-[1.09] sm:h-[260px] md:h-[300px] lg:h-[290px] xl:h-[330px]"
                />
              </div>
            </div>
          </div>

          {/* Right Large Image */}
          <div
            className={`group overflow-hidden rounded-[24px] transition-all duration-[1400ms] delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              inView
                ? "translate-y-0 scale-100 opacity-100 rotate-0"
                : "translate-y-24 scale-90 opacity-0 rotate-2"
            }`}
          >
            <div
              className={
                inView ? "animate-float-medium will-change-transform" : ""
              }
            >
              <img
                src={hpd4}
                alt="Travel destination"
                className="h-[320px] w-full scale-[1.03] object-cover transition-transform duration-700 group-hover:scale-[1.08] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[680px] xl:min-h-[760px]"
              />
            </div>
          </div>
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
