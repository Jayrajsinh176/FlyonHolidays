import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toursData } from "../data/toursData";
import { ChevronDown, ChevronUp, CheckCircle2, ArrowLeft } from "lucide-react";

export default function TourDetails() {
  const { slug } = useParams();
  const tour = toursData.find((item) => item.slug === slug);

  const [openDay, setOpenDay] = useState(null);

  if (!tour) {
    return (
      <section className="min-h-screen bg-[#f5f3ef] px-4 pb-16 pt-28">
        <h2 className="text-3xl font-semibold text-[#0f4c5a]">
          Tour not found
        </h2>
      </section>
    );
  }

  return (
    <section className="-mt-20 min-h-screen bg-[#f5f3ef] px-4 pb-16 pt-20 sm:px-5 sm:pt-24 md:px-10 lg:px-22">
      <div className="w-full px-0 sm:px-0 lg:px-6 xl:px-8 2xl:px-10">
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[60%_40%]">
          <div className="space-y-6">
            <div className="rounded-[18px] bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] sm:p-5">
              <h2 className="flex items-center gap-2 text-[20px] font-semibold text-[#0f4c5a] sm:text-[22px]">
                <CheckCircle2 size={18} className="text-[#0f4c5a]" />
                Trip Overview
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-[#0f4c5a] sm:text-[18px]">
                {tour.overview}
              </p>

              <div className="mt-5 overflow-hidden rounded-[16px]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="h-[220px] w-full object-cover object-center sm:h-[320px] lg:h-[480px]"
                />
              </div>
            </div>

            <div className="rounded-[18px] bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] sm:p-5">
              <h2 className="flex items-center gap-2 text-[20px] font-semibold text-[#0f4c5a] sm:text-[22px]">
                <CheckCircle2 size={18} className="text-[#0f4c5a]" />
                Trip Highlights
              </h2>

              <ul className="mt-4 space-y-2 text-[15px] text-[#0f4c5a] sm:text-[18px]">
                {tour.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[18px] bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] sm:p-5">
              <h2 className="text-[20px] font-semibold text-[#0f4c5a] sm:text-[22px]">
                Itinerary
              </h2>

              <div className="mt-4 space-y-3">
                {tour.itinerary.map((item, index) => {
                  const isOpen = openDay === index;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setOpenDay(index)}
                      onMouseLeave={() => setOpenDay(null)}
                      onClick={() =>
                        setOpenDay(openDay === index ? null : index)
                      }
                      className="cursor-pointer overflow-hidden rounded-[14px] border border-[#0f4c5a] bg-[#faf9f6] transition duration-300"
                    >
                      <div className="flex w-full items-center justify-between gap-3 px-4 py-3">
                        <p className="text-[15px] font-semibold leading-6 text-[#0f4c5a] sm:text-[18px]">
                          {item.day}: {item.title}
                        </p>

                        {isOpen ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </div>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-[#0f4c5a] px-4 py-3 text-[14px] text-[#0f4c5a] sm:text-[18px]">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[18px] bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] sm:p-5">
              <h2 className="text-[20px] font-medium text-[#0f4c5a] sm:text-[22px]">
                What’s Included
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {tour.included.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[12px] border bg-[#faf9f6] px-4 py-3 text-[15px] text-[#0f4c5a] sm:text-[18px]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 xl:sticky xl:top-24 xl:self-start">
            <div className="-mt-14 rounded-[18px] bg-[#ffffff] p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)] sm:p-6 lg:p-8">
              <h3 className="text-[20px] font-semibold text-[#0f4c5a] sm:text-[22px]">
                Trip Details
              </h3>

              <div className="mt-4 space-y-3 text-[15px] text-[#0f4c5a] sm:text-[18px]">
                <p><b>Duration:</b> {tour.duration}</p>
                <p><b>Group Size:</b> {tour.groupSize}</p>
                <p><b>Price:</b> {tour.priceLabel}</p>
                <p><b>Destination:</b> {tour.destination}</p>
                <p><b>Best Time:</b> {tour.bestTime}</p>
                <p><b>Stay:</b> {tour.stay}</p>
              </div>

              {/* ✅ ONLY CHANGE */}
              <Link to="/contact">
                <button className="mt-5 w-full rounded-full bg-[#0b5663] py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#094854] sm:py-2 sm:text-base">
                  Book a trip
                </button>
              </Link>
            </div>

            <Link
              to="/tours"
              className="flex w-full items-center justify-center gap-2 rounded-full border bg-white px-4 py-3 text-sm font-bold text-[#0f4c5a] shadow sm:py-2.5"
            >
              <ArrowLeft size={16} />
              Back to Tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}