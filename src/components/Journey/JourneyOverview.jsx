import React from "react";
import {
  Clock3,
  CalendarDays,
  Users,
  MapPin,
  CircleDollarSign,
  CheckCircle2,
} from "lucide-react";

import overviewImg from "../../assets/journey/morocco-overview.jpg";

const details = [
  { icon: Clock3, label: "Duration", value: "8 Days / 7 Nights" },
  { icon: CalendarDays, label: "Departure", value: "November 2026" },
  { icon: Users, label: "Group Size", value: "15 Travelers" },
  { icon: CircleDollarSign, label: "Price", value: "$1,600" },
  { icon: MapPin, label: "Inclusions", value: "Stay, meals, tours" },
];

const highlights = [
  "Historic medinas and markets",
  "Desert landscapes and cultural camps",
  "Traditional architecture and cuisine",
  "Authentic local experiences",
];

export default function JourneyOverview() {
  return (
    <section className="w-full bg-[#f5f5f3] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
        {/* Left */}
        <div>
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[14px]">🧭</span>
              <h2 className="text-[20px] font-semibold text-[#1b1b1b] sm:text-[22px]">
                Trip Overview
              </h2>
            </div>

            <p className="max-w-[760px] text-[13px] leading-6 text-[#666] sm:text-[14px]">
              This Morocco journey introduces rich traditions, vibrant markets,
              and dramatic desert landscapes. Designed for cultural immersion,
              the trip balances city exploration and scenic moments for a truly
              memorable travel experience.
            </p>

            <p className="mt-4 max-w-[760px] text-[13px] leading-6 text-[#666] sm:text-[14px]">
              Morocco’s colors, textures, and storytelling traditions create a
              journey that feels immersive from beginning to end.
            </p>
          </div>

          <div className="overflow-hidden rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <img
              src={overviewImg}
              alt="Morocco coast"
              className="h-[240px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[380px]"
            />
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[14px]">✨</span>
              <h3 className="text-[18px] font-semibold text-[#1b1b1b] sm:text-[20px]">
                Trip Highlights
              </h3>
            </div>

            <ul className="space-y-2 text-[13px] leading-6 text-[#666] sm:text-[14px]">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0b5b63]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="lg:pt-2">
          <div className="sticky top-24 rounded-[20px] border border-black/5 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:p-6">
            <h3 className="border-b border-black/8 pb-3 text-[18px] font-semibold text-[#1b1b1b]">
              Trip Details
            </h3>

            <div className="mt-4 space-y-4">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex items-center gap-2 text-[#666]">
                      <Icon className="h-4 w-4 text-[#0b5b63]" />
                      <span className="text-[13px] sm:text-[14px]">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-right text-[13px] font-medium text-[#222] sm:text-[14px]">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5b63] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-[#08474d]">
              Book a trip
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0b5b63]">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}