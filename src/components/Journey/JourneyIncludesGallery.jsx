import React from "react";

import gallery1 from "../../assets/journey/gallery-1.jpg";
import gallery2 from "../../assets/journey/gallery-2.jpg";
import gallery3 from "../../assets/journey/gallery-3.jpg";
import gallery4 from "../../assets/journey/gallery-4.jpg";

const included = [
  "Accommodation",
  "Selected meals",
  "Local transportation",
  "Guided cultural experiences",
];

const excluded = ["Flights", "Personal expenses", "Optional activities"];

const gallery = [gallery1, gallery2, gallery3, gallery4];

export default function JourneyIncludesGallery() {
  return (
    <section className="w-full bg-[#f5f5f3] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          <div className="mb-5 flex items-center gap-2">
            <span className="text-[16px]">✅</span>
            <h3 className="text-[18px] font-semibold text-[#1b1b1b] sm:text-[20px]">
              What&apos;s Included
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 text-[14px] font-semibold text-[#222]">
                Inclusions
              </h4>
              <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#666] sm:text-[14px]">
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-[14px] font-semibold text-[#222]">
                Exclusions
              </h4>
              <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#666] sm:text-[14px]">
                {excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={img}
                  alt={`Morocco gallery ${index + 1}`}
                  className="h-[180px] w-full object-cover sm:h-[220px] md:h-[260px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}