import React from "react";
import { Link } from "react-router-dom";
import f1 from "../../src/assets/f1.png";

const scrollItems = [
  "🍹 Luxury & Budget Travel",
  "🧳 Visa Assistance",
  "🏨 Hotel Bookings",
  "🚗 Transfers & Rentals",
  "✈️ Custom Tours",
  "🌍 Worldwide Destinations",
];

const marqueeItems = [...scrollItems, ...scrollItems, ...scrollItems];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src={f1}
          alt="Travel background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* corrected overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black via-black/92 to-transparent" />

      <div className="relative z-10">
        {/* hero section */}
        <div className="mx-auto flex min-h-[520px] max-w-[1600px] flex-col items-center justify-center px-4 pt-16 text-center sm:min-h-[620px] sm:px-6 sm:pt-20 lg:min-h-[690px] lg:px-8 lg:pt-24">
          <h2 className="max-w-[760px] text-[34px] font-normal leading-[1.08] tracking-[-0.045em] text-white sm:text-[52px] md:text-[68px] lg:text-[82px]">
            Turn Your Travel
            <br />
            Dreams Into Reality
          </h2>

          <p className="mt-5 max-w-[560px] text-[13px] font-normal leading-[1.55] text-white/80 sm:mt-6 sm:text-[14px] md:text-[16px]">
            From the first idea to the final detail, we design journeys you'll
            remember forever.
          </p>

          <div className="mt-8 sm:mt-10">
            <button className="group inline-flex items-center overflow-hidden rounded-full bg-white text-[#0f4c5a] shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >
                <span className="px-6 py-3 text-[14px] font-bold sm:px-7 sm:py-3.5 sm:text-[15px]">
                  Book a trip
                </span>
              </Link>

              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white sm:h-[48px] sm:w-[48px]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* moving strip */}
        <div className="border-y border-white/10 bg-black/20 py-3">
          <div className="overflow-hidden">
            <div className="footer-marquee flex w-max items-center whitespace-nowrap">
              {marqueeItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center text-[12px] font-normal text-white/90 sm:text-[14px]"
                >
                  <span className="px-4 sm:px-5">{item}</span>
                  <span className="text-white/45">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* lower footer */}
        <div className="bg-black/808">
          <div className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div>
                <Link to="/" className="inline-block">
                  <img
                    src="/logo.png"
                    alt="Flyon Holidays"
                    className="w-[170px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)] transition hover:scale-[1.03] sm:w-[200px]"
                  />
                </Link>
                <p className="mt-4 max-w-[260px] text-[14px] leading-[1.6] text-white/68">
                  Make moments, not just trips.
                </p>
              </div>

              <div>
                <h3 className="mb-5 text-[16px] font-medium text-white/95">
                  Navigation
                </h3>

                <ul className="space-y-3 text-[15px] text-white/68">
                  <li>
                    <Link to="/" className="transition hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="transition hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/tours" className="transition hover:text-white">
                      Tours
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="transition hover:text-white">
                      Book a Trip
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:flex md:justify-end">
                <div>
                  <h3 className="mb-5 text-[16px] font-medium text-white/95">
                    Social
                  </h3>

                  <div className="flex items-center gap-5">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="text-white/90 transition hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8"
                        stroke="currentColor"
                        strokeWidth="1.55"
                      >
                        <circle cx="12" cy="12" r="8.6" />
                        <path d="M14.2 8.5H13c-.95 0-1.5.56-1.5 1.55V12H10v2h1.5v3.4h2.1V14H15l.28-2h-1.68v-1.18c0-.38.18-.62.6-.62h1.28V8.5Z" />
                      </svg>
                    </a>

                    <a
                      href="#"
                      aria-label="Instagram"
                      className="text-white/90 transition hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8"
                        stroke="currentColor"
                        strokeWidth="1.55"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3.5" />
                        <circle
                          cx="16.9"
                          cy="7.2"
                          r="0.7"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    </a>

                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="text-white/90 transition hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8"
                        stroke="currentColor"
                        strokeWidth="1.55"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="2.2" />
                        <path d="M8.1 10.2V17" strokeLinecap="round" />
                        <path
                          d="M11.9 17v-3.45a2.05 2.05 0 0 1 4.1 0V17"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="8.1"
                          cy="7.7"
                          r="0.9"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    </a>

                    <a
                      href="#"
                      aria-label="X"
                      className="text-white/90 transition hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M6 5L18 19" strokeLinecap="round" />
                        <path d="M18 5L6 19" strokeLinecap="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <div className="flex flex-col gap-3 text-[13px] text-white/58 md:flex-row md:items-center md:justify-center">
                <p>
                  @2026 Flyon Holidays all rights reserved. Developed by{" "}
                  <a
                    href="https://exoticinfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-link text-[#0d5b96] text-base font-bold relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0d5b96] after:transition-all hover:after:w-full"
                  >
                    Exoticinfotech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-marquee {
          animation: footerScroll 30s linear infinite;
        }

        .footer-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes footerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 640px) {
          .footer-marquee {
            animation-duration: 18s;
          }
        }
      `}</style>
    </footer>
  );
}
