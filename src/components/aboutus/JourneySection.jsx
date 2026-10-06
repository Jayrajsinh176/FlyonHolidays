import React from "react";
import { HeartHandshake } from "lucide-react";
import a3 from "../../assets/a3.png"; // replace with your image

export default function JourneySection() {
  return (
    <section className="w-full bg-[#f5f5f3] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16">
      <div className="mx-auto max-w-[1220px]">
        {/* top heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4a4a4a] sm:text-[14px]">
            <HeartHandshake className="h-4 w-4 stroke-[1.8]" />
            <span>Our Journey</span>
          </div>

          <h2 className="mt-4 text-[32px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#062b35] sm:text-[38px] md:text-[46px] lg:text-[54px]">
            From A Simple Idea To A Trusted
            <br className="hidden sm:block" />
            <span className="sm:ml-2">Travel Partner</span>
          </h2>
        </div>

        {/* content */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-14 md:gap-10 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-16">
          {/* image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[30px]">
              <img
                src={a3}
                alt="Our Journey"
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[430px] xl:h-[450px]"
              />
            </div>
          </div>

          {/* right content */}
          <div className="w-full lg:max-w-[520px]">
            <div>
              <h3 className="text-[28px] font-semibold leading-tight text-[#151515] sm:text-[32px]">
                Foundation
              </h3>
              <p className="mt-4 text-[18px] leading-[1.7] text-[#4f4f4f] sm:text-[17px]">
                Founded in 2021, we aimed to make travel meaningful and seamless.
                What began as an idea for solo explorers has evolved into a top
                travel brand, offering weekend getaways, group trips, retreats
                and journeys.
              </p>
            </div>

            <div className="mt-10 sm:mt-12">
              <h3 className="text-[28px] font-semibold leading-tight text-[#151515] sm:text-[32px]">
                Future Goals
              </h3>
              <p className="mt-4 text-[18px] leading-[1.7] text-[#4f4f4f] sm:text-[17px]">
                We are committed to expanding offerings with local guides,
                ensuring travelers enjoy unique experiences. Our mission is to
                empower exploration, creating lasting memories and connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}