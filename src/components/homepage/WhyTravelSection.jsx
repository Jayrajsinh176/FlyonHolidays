import React from "react";
import h16bc from "../../assets/h16bc.png";
import h16sm from "../../assets/h16sm.png";

const features = [
  {
    title: "Authentic Experiences",
    desc: "Trips tailored to your style and your budget.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 md:h-7 md:w-7"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3v7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7c0 2.2 1.8 4 4 4s4-1.8 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10v11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10c.8-1.5 2.1-2.3 3.5-2.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 10c-.8-1.5-2.1-2.3-3.5-2.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Culinary Adventures",
    desc: "Savor local cuisines with guided food tours.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 md:h-7 md:w-7"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 10h14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10c0 4 2 7 5 7s5-3 5-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4v3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 3v4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 4v3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Trusted Partnerships",
    desc: "Handpicked hotels, guides, and local experiences.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 md:h-7 md:w-7"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8.5 12.5l2.2 2.2 4.8-4.8" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M4 12c0-1.4.7-2.7 1.9-3.4.2-1.4 1.3-2.6 2.8-2.8C9.4 4.7 10.7 4 12 4s2.6.7 3.3 1.8c1.4.2 2.6 1.3 2.8 2.8 1.2.7 1.9 2 1.9 3.4s-.7 2.7-1.9 3.4c-.2 1.4-1.3 2.6-2.8 2.8-.7 1.1-2 1.8-3.3 1.8s-2.6-.7-3.3-1.8c-1.4-.2-2.6-1.3-2.8-2.8C4.7 14.7 4 13.4 4 12Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cultural Immersion",
    desc: "Engage with local traditions and communities.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 md:h-7 md:w-7"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8 13c-2.2 0-4 1.8-4 4v1h8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 13c2.2 0 4 1.8 4 4v1h-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyTravelSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={h16bc}
          alt="Aurora background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark/soft overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.05),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.18))]" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* Top label */}
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-white/85 sm:text-xs">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M12 21s-6-3.8-6-9a4 4 0 0 1 7-2.6A4 4 0 0 1 18 12c0 5.2-6 9-6 9Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 9.5h.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Why Travel With Us</span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-3 max-w-[760px] text-center text-[30px] font-normal leading-[1.18] tracking-[-0.03em] text-white sm:text-[40px] md:text-[52px] lg:text-[58px]">
          Book With Confidence, Travel
          <br />
          With Peace Of Mind
        </h2>

        {/* Main content */}
        <div className="mx-auto mt-10 grid max-w-[1120px] grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-[0.93fr_1.07fr] lg:gap-5">
          {/* Left image card */}
          <div className="overflow-hidden rounded-[26px] bg-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]">
              <img
                src={h16sm}
                alt="Camp under the stars"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right glass panel */}
          <div className="rounded-[26px] border border-white/8 bg-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-[8px]">
            <div className="flex h-full flex-col px-5 py-4 sm:px-6 sm:py-5 md:px-7 lg:px-7 lg:py-5">
              {features.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex gap-4 py-5 sm:gap-5 sm:py-6 ${
                    index !== features.length - 1 ? "border-b border-white/8" : ""
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-white/95">{item.icon}</div>

                  <div>
                    <h3 className="text-[18px] font-normal leading-tight text-white sm:text-[20px] md:text-[24px] lg:text-[25px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-white/68 sm:text-[14px] md:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}