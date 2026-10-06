import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const itineraryData = [
  {
    title: "Day 1: Arrival & Orientation",
    content:
      "Arrive in Morocco, transfer to your stay, meet the guide, and enjoy a relaxed welcome briefing with local dinner.",
  },
  {
    title: "Day 2: Highlights & Culture",
    content:
      "Explore iconic cultural landmarks, bustling souks, and artisan streets while discovering local traditions.",
  },
  {
    title: "Day 3: Art, History & Experiences",
    content:
      "Visit architectural sites, museums, and heritage spaces, followed by a curated cultural experience.",
  },
  {
    title: "Day 4: Neighborhoods & Local Life",
    content:
      "Walk through residential districts, community markets, and hidden corners to see everyday Moroccan life.",
  },
  {
    title: "Day 5: Leisure & Optional Activities",
    content:
      "Free day for personal exploration, spa, shopping, guided add-ons, or a relaxed local café experience.",
  },
  {
    title: "Day 6: Departure",
    content:
      "Enjoy breakfast, last-minute photos and shopping, then transfer for your departure.",
  },
];

export default function JourneyItinerary() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#f5f5f3] pb-12 sm:pb-14 md:pb-16">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px] space-y-3">
          {itineraryData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-[16px] border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <span className="text-[14px] font-medium text-[#1b1b1b] sm:text-[15px]">
                    {item.title}
                  </span>

                  <span className="shrink-0 text-[#0b5b63]">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-black/5 px-4 pb-4 pt-3 text-[13px] leading-6 text-[#666] sm:px-5 sm:text-[14px]">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}