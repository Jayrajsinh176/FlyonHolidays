import React from "react";
import ctaBg from "../../assets/journey/footer-cta.jpg";

const marqueeItems = [
  "Luxury & Budget Travel",
  "Visa Assistance",
  "Hotel Bookings",
  "Transfers & Rentals",
  "Custom Tours",
  "Worldwide Destinations",
];

export default function JourneyFooterCta() {
  const loopItems = [...marqueeItems, ...marqueeItems];

  return (
    <footer className="w-full bg-black text-white">
      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="relative h-[340px] sm:h-[420px] md:h-[500px] lg:h-[560px]">
          <img
            src={ctaBg}
            alt="Travel CTA"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="mx-auto max-w-[700px] text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[42px] md:text-[54px] lg:text-[64px]">
                Turn Your Travel Dreams Into Reality
              </h2>

              <p className="mx-auto mt-4 max-w-[520px] text-[13px] leading-6 text-white/80 sm:text-[14px]">
                From the first idea to the final detail, we design journeys
                you’ll remember forever.
              </p>

              <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-[#111] transition hover:bg-[#f1f1f1]">
                Book a trip
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b5b63] text-white">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/10 py-3">
        <div className="marquee-track flex min-w-max items-center gap-10">
          {loopItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-3 text-[12px] text-white/80 sm:text-[13px]"
            >
              <span>✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-[16px] font-semibold">Pages</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-white/70">
              <li>Home</li>
              <li>About</li>
              <li>Tours</li>
              <li>Book a Trip</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold">Documentation</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-white/70">
              <li>Blogs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold">Social</h3>
            <div className="mt-4 flex items-center gap-4 text-white/80">
              <span>🌐</span>
              <span>📸</span>
              <span>💼</span>
              <span>✕</span>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-[13px] text-white/60">
              Designed for modern travel experiences
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>All rights reserved for Exotic Infotech</p>
          <p>Designed by your team</p>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 24s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
}