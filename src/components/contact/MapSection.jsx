import React from "react";
import { MapPin, Plane, Compass, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MapSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#efefef] px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#0f4c5a] bg-white px-4 py-2 text-sm font-medium text-[#0f4c5a] shadow-sm">
            <Globe className="h-4 w-4" />
            Explore Europe
          </div>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight text-[#0f4c5a] sm:text-4xl md:text-5xl">
            Discover Europe with smart travel planning
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#0f4c5a] sm:text-base">
            Explore beautiful destinations across Europe with smooth routes,
            premium experiences, and custom travel packages designed for modern
            travelers.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#0f4c5a] bg-white p-4 shadow-sm">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#b8f2f3] text-[#0f4c5a]">
                <Plane className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#0f4c5a] sm:text-base">
                Easy Routes
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#0f4c5a] sm:text-sm">
                Comfortable routes between Europe’s top destinations.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0f4c5a] bg-white p-4 shadow-sm">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#b8f2f3] text-[#0f4c5a]">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#0f4c5a] sm:text-base">
                Curated Trips
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#0f4c5a] sm:text-sm">
                Handpicked journeys for couples, families, and explorers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0f4c5a] bg-white p-4 shadow-sm">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#b8f2f3] text-[#0f4c5a]">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#0f4c5a] sm:text-base">
                Top Places
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#0f4c5a] sm:text-sm">
                Visit famous cities and hidden gems across Europe.
              </p>
            </div>
          </div>

          {/* ✅ ONLY CHANGE HERE */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
  onClick={() => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "instant" });
  }}
  className="rounded-full bg-[#0f4c5a] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[#0f4c5a]"
>
  Book Your Journey
</button>
          </div>
        </div>

        {/* Right Google Map */}
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-hidden rounded-[28px]">
              <iframe
                title="Europe Google Map"
                src="https://www.google.com/maps?q=Europe&z=4&output=embed"
                className="h-[380px] w-full border-0 sm:h-[460px] md:h-[520px] lg:h-[560px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="ml-90 absolute left-3 top-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0f4c5a]">
                  Featured Region
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[#0f4c5a] sm:text-base">
                  Europe Travel Map
                </h3>
                <p className="mt-1 text-xs text-[#0f4c5a] sm:text-sm">
                  France • Italy • Spain • Switzerland
                </p>
              </div>

              <div className="absolute bottom-3 right-3 w-[180px] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-5 sm:right-5 sm:w-[220px]">
                <p className="text-xs font-medium text-[#0f4c5a]">
                  Best for travelers in Europe
                </p>
                <h4 className="mt-1 text-sm font-semibold text-[#0f4c5a] sm:text-base">
                  Local luxury escapes
                </h4>
                <p className="mt-2 text-xs leading-6 text-[#0f4c5a] sm:text-sm">
                  Explore nearby destinations with smooth planning and premium
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}