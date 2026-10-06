import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import all1 from "../../assets/all1.gif";
import nature1 from "../../assets/nature1.gif";
import romantic2 from "../../assets/romantic2.gif";
import advanture from "../../assets/advanture.gif";
import group from "../../assets/group.gif";
import honeymoon from "../../assets/honeymoon.gif";
import short from "../../assets/short.gif";
import summer from "../../assets/summer.gif";
import fixed from "../../assets/fixed.gif";
import supper from "../../assets/supper.gif";
import supper1 from "../../assets/supper1.gif";

import { MV, FR, ID, AE, IT, CH, TH, US } from "country-flag-icons/react/3x2";
import { toursData } from "../../data/toursData";

const locations = [
  { name: "Maldives", Flag: MV },
  { name: "Paris", Flag: FR },
  { name: "Bali", Flag: ID },
  { name: "Dubai", Flag: AE },
  { name: "Rome", Flag: IT },
  { name: "Switzerland", Flag: CH },
  { name: "Bangkok", Flag: TH },
  { name: "New York", Flag: US },
];

const categories = [
  { id: 1, name: "All", image: all1 },
  { id: 2, name: "Nature", image: nature1 },
  { id: 3, name: "Romantic", image: romantic2 },
  { id: 4, name: "Adventure", image: advanture },
  { id: 5, name: "Group Tours", image: group },
  { id: 6, name: "Honeymoon", image: honeymoon },
  { id: 7, name: "Short Breaks", image: short },
  { id: 8, name: "Summer 2026 Tour", image: summer },
  { id: 9, name: "Fixed Departure 2026", image: fixed },
  { id: 10, name: "Discovery Tours", image: supper1 },
  { id: 11, name: "Super Seller Packages", image: supper },
];

const ITEMS_PER_LOAD = 8;

const ToursGridSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const filteredTours = useMemo(() => {
    if (activeCategory === "All") return toursData;

    return toursData.filter((tour) => {
      const matchesMainCategory = tour.category === activeCategory;
      const matchesExtraCategory =
        Array.isArray(tour.categories) && tour.categories.includes(activeCategory);

      return matchesMainCategory || matchesExtraCategory;
    });
  }, [activeCategory]);

  const visibleTours = filteredTours.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTours.length;

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setVisibleCount(ITEMS_PER_LOAD);
  };

  return (
    <section className="relative z-10 overflow-hidden rounded-t-[28px] bg-[#f3f3f1] pb-14 pt-6 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-10">
      <div className="mb-6 w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...locations, ...locations].map((loc, i) => {
            const Flag = loc.Flag;

            return (
              <div
                key={i}
                className="mx-8 flex items-center gap-3 text-[14px] font-medium text-[#0f4c5a] sm:text-[16px]"
              >
                <Flag className="h-[16px] w-[24px] rounded-sm shadow-sm" />
                <span>{loc.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-7 sm:gap-x-6 sm:gap-y-8">
          {categories.map((item) => {
            const isActive = activeCategory === item.name;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCategoryClick(item.name)}
                className={`flex min-w-[72px] flex-col items-center justify-center rounded-[16px] px-3 py-3 transition-all duration-300 sm:min-w-[82px] sm:px-4 ${
                  isActive
                    ? "border border-[#0f4c5a] bg-[#84cedf] shadow-[0_6px_18px_rgba(0,0,0,0.05)]"
                    : "border border-transparent hover:border-[#84cedf] hover:bg-[#84cedf]/70"
                }`}
              >
                <div className="flex h-[72px] w-[72px] items-center justify-center overflow-hidden sm:h-[76px] sm:w-[76px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full scale-[1.30] object-contain object-center"
                  />
                </div>

                <span className="mt-2 text-center text-[11px] font-medium leading-[1.25] text-[#0f4c5a] sm:text-[14px]">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTours.map((tour) => (
            <Link
              key={tour.id}
              to={`/tours/${tour.slug}`}
              className="group block"
            >
              <article>
                <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_10px_28px_rgba(15,76,90,0.06)]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-[290px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 rounded-full bg-[#0f4c5a]/85 px-3 py-1 text-[10px] text-white backdrop-blur-sm">
                    {tour.duration}
                  </div>

                  <div className="absolute bottom-3 left-3 rounded-full bg-[#0f4c5a] px-3 py-1 text-[10px] font-medium text-[#ffffff] backdrop-blur-sm">
                    {tour.category}
                  </div>
                </div>

                <div className="px-1 pt-3">
                  <h3 className="text-[16px] font-medium text-[#0f4c5a] transition duration-300 group-hover:text-[#0a4654]">
                    {tour.title}
                  </h3>

                  <p className="mt-1 text-[13px] text-[#0f4c5a]">
                    From <span className="font-medium">{tour.priceLabel}</span> / Per Person
                  </p>

                  <p className="mt-1 text-[12px] text-[#0f4c5a]">
                    {tour.destination}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="mt-10 text-center text-[15px] font-medium text-[#0f4c5a]">
            No tours found in this category.
          </div>
        )}

        {hasMore && filteredTours.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
              className="rounded-full bg-[#0f4c5a] px-6 py-2.5 text-[13px] font-medium text-white transition duration-300 hover:bg-[#0f4c5a]"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <style>
        {`
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default ToursGridSection;