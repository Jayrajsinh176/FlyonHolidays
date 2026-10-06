import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BadgeDollarSign, PlaneTakeoff, Gem, Compass } from "lucide-react";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h4 from "../../assets/h4.png";
import h10 from "../../assets/h10.png";
import hv from "../../assets/hv.mp4";

const cards = [
  {
    id: 1,
    img: h1,
    alt: "Mountain destination",
    position:
      "left-[4%] top-[18%] w-[18vw] min-w-[82px] max-w-[142px] -rotate-[8deg] sm:left-[5%] sm:w-[15vw] md:w-[12vw] lg:w-[10vw]",
  },
  {
    id: 2,
    img: h2,
    alt: "Bridge destination",
    position:
      "right-[4%] top-[17%] w-[18vw] min-w-[82px] max-w-[142px] rotate-[8deg] sm:right-[5%] sm:w-[15vw] md:w-[12vw] lg:w-[10vw]",
  },
  {
    id: 3,
    img: h10,
    alt: "Sphinx destination",
    position:
      "left-[4%] bottom-[16%] w-[19vw] min-w-[86px] max-w-[144px] -rotate-[8deg] sm:left-[5%] sm:w-[15.5vw] md:w-[12.5vw] lg:w-[10.2vw]",
  },
  {
    id: 4,
    img: h4,
    alt: "Taj Mahal destination",
    position:
      "right-[4%] bottom-[16%] w-[19vw] min-w-[86px] max-w-[144px] rotate-[8deg] sm:right-[5%] sm:w-[15.5vw] md:w-[12.5vw] lg:w-[10.2vw]",
  },
];

const promoItems = [
  {
    icon: BadgeDollarSign,
    text: "Summer Trip Deal — Save $250 on selected packages",
  },
  {
    icon: PlaneTakeoff,
    text: "Limited Time Offer — Book your summer escape now",
  },
  {
    icon: Gem,
    text: "Get $250 OFF on luxury summer journeys",
  },
  {
    icon: Compass,
    text: "Special Summer Discount — Enjoy premium travel for less",
  },
];

const stats = [
  {
    text: "4.9 stars (541k Reviews)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[13px] w-[13px]"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <path
          d="M12 17.3 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.3Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "50k travellers",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[13px] w-[13px]"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <path d="M16 19a4 4 0 0 0-8 0" strokeLinecap="round" />
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeLinecap="round" />
        <path d="M20 19a4 4 0 0 0-3-3.87" strokeLinecap="round" />
        <path d="M17 5.13a3 3 0 0 1 0 5.74" strokeLinecap="round" />
        <path d="M4 19a4 4 0 0 1 3-3.87" strokeLinecap="round" />
        <path d="M7 5.13a3 3 0 0 0 0 5.74" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "1+ million followers",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[13px] w-[13px]"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const reveal = (
    base = "",
    active = "translate-y-0 opacity-100 scale-100",
    hidden = "translate-y-[50px] opacity-0 scale-[0.96]",
  ) =>
    `${base} transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
      show ? active : hidden
    }`;

  return (
    <section
      ref={sectionRef}
      className="relative h-[700px] min-h-[700px] overflow-hidden bg-[#0a2230] text-white"
    >
      <div className="absolute left-0 top-0 z-40 w-full overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="marquee-track flex min-w-max items-center py-2.5">
          {[...promoItems, ...promoItems].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="mx-3 flex items-center gap-2 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.14em] text-[#00ffd9] sm:mx-4 sm:gap-3 sm:text-[10px] md:mx-5 md:text-[11px] lg:text-[12px]"
              >
                <Icon
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  strokeWidth={1.9}
                />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={hv}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.10),rgba(0,0,0,0.02),rgba(0,0,0,0.24))]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[34%] bg-[linear-gradient(to_top,#f6f6f3_0%,#f6f6f3_37%,rgba(246,246,243,0.5)_57%,rgba(246,246,243,0.3)_70%,rgba(246,246,243,0)_97%)]" />

      <div className="ml-30 mr-30 pointer-events-none absolute inset-0 z-20 hidden sm:block">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute ${card.position} hero-float-${card.id} transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              show
                ? "translate-y-0 opacity-100 scale-100"
                : index % 2 === 0
                  ? "translate-y-16 opacity-0 scale-90"
                  : "-translate-y-16 opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${200 + index * 140}ms` }}
          >
            <div className="mb-30 overflow-hidden rounded-[18px]">
              <img
                src={card.img}
                alt={card.alt}
                className="aspect-[1.42/1] w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 sm:hidden">
        {[
          {
            src: h1,
            alt: "Mountain destination",
            className:
              "left-[4%] top-[18%] w-[18vw] min-w-[68px] max-w-[86px] -rotate-[8deg]",
            float: "hero-float-1",
          },
          {
            src: h2,
            alt: "Bridge destination",
            className:
              "right-[4%] top-[17%] w-[18vw] min-w-[68px] max-w-[86px] rotate-[8deg]",
            float: "hero-float-2",
          },
          {
            src: h10,
            alt: "Sphinx destination",
            className:
              "left-[4%] bottom-[16%] w-[18.5vw] min-w-[70px] max-w-[88px] -rotate-[8deg]",
            float: "hero-float-3",
          },
          {
            src: h4,
            alt: "Taj Mahal destination",
            className:
              "right-[4%] bottom-[16%] w-[18.5vw] min-w-[70px] max-w-[88px] rotate-[8deg]",
            float: "hero-float-4",
          },
        ].map((item, index) => (
          <div
            key={item.alt}
            className={`absolute ${item.className} ${item.float} transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              show
                ? "translate-y-0 opacity-100 scale-100"
                : index % 2 === 0
                  ? "translate-y-14 opacity-0 scale-90"
                  : "-translate-y-14 opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${220 + index * 130}ms` }}
          >
            <div className="overflow-hidden rounded-[14px]">
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[1.42/1] w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 mx-auto flex h-[700px] min-h-[700px] max-w-[1400px] items-center justify-center px-4 pt-8 text-center sm:px-6 sm:pt-9 lg:px-8">
        <div className="w-full max-w-[860px] px-4 pt-10 sm:px-10 sm:pt-16 md:px-14 md:pt-20 lg:px-20 xl:px-24">
          <div
            className={reveal(
              "mb-3 flex justify-center sm:mb-4",
              "translate-y-0 opacity-100 scale-100",
              "translate-y-[40px] opacity-0 scale-[0.9]",
            )}
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Flyon Holidays"
                className="block w-[120px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:w-[150px] md:w-[170px] lg:w-[190px]"
              />
              <span aria-hidden="true" className="logo-shine" />
            </div>
          </div>

          <h1
            className={reveal(
              "mx-auto max-w-[760px] text-[26px] font-semibold leading-[1.06] tracking-[-0.04em] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.20)] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[66px]",
              "translate-y-0 opacity-100 scale-100",
              "translate-y-[70px] opacity-0 scale-[0.96]",
            )}
          >
            Experience the World,
            <br />
            Not Just the Map
          </h1>

          <p
            className={reveal(
              "mx-auto mt-4 max-w-[560px] px-2 text-[11px] font-medium leading-[1.5] text-white/92 sm:px-0 sm:text-[12px] md:mt-5 md:text-[14px] lg:text-[16px]",
              "translate-y-0 opacity-100",
              "translate-y-8 opacity-0",
            )}
            style={{ transitionDelay: "180ms" }}
          >
            Curated Journeys Designed To Be Felt, Not Rushed.
          </p>

          <div
            className={reveal(
              "mt-6 flex items-center justify-center gap-2 sm:mt-7",
              "translate-y-0 opacity-100",
              "translate-y-10 opacity-0",
            )}
            style={{ transitionDelay: "320ms" }}
          >
            <Link to="/contact">
              <button className="rounded-full bg-white px-4 py-2 text-[11px] font-bold text-[#233844] shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition hover:scale-[1.03] sm:px-5 sm:py-2.5 sm:text-[13px] md:px-6 md:text-[15px]">
                Book & Save $250
              </button>
            </Link>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#233844] shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition hover:scale-[1.03] sm:h-9 sm:w-9 md:h-10 md:w-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            className={reveal(
              "mb-60 hidden flex-wrap items-center justify-center gap-4 text-[11px] font-bold text-white/90 md:flex lg:mt-16 lg:gap-6 lg:text-[13px]",
              "translate-y-0 opacity-100",
              "translate-y-10 opacity-0",
            )}
            style={{ transitionDelay: "460ms" }}
          >
            {stats.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-white/90">{item.icon}</span>
                <span className="whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marqueeMove 24s linear infinite;
        }

        .logo-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            110deg,
            transparent 35%,
            rgba(255, 255, 255, 0.15) 42%,
            rgba(255, 255, 255, 0.85) 50%,
            rgba(255, 255, 255, 0.15) 58%,
            transparent 65%
          );
          background-size: 250% 100%;
          background-repeat: no-repeat;
          -webkit-mask: url(/logo.png) center / contain no-repeat;
          mask: url(/logo.png) center / contain no-repeat;
          mix-blend-mode: overlay;
          animation: logoShine 3.5s ease-in-out infinite;
        }

        @keyframes logoShine {
          0% { background-position: 150% 0; }
          60%, 100% { background-position: -50% 0; }
        }

        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0px) rotate(-8deg); }
          50% { transform: translateY(-10px) rotate(-7deg); }
        }

        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0px) rotate(8deg); }
          50% { transform: translateY(-12px) rotate(9deg); }
        }

        @keyframes heroFloat3 {
          0%, 100% { transform: translateY(0px) rotate(-8deg); }
          50% { transform: translateY(-9px) rotate(-9deg); }
        }

        @keyframes heroFloat4 {
          0%, 100% { transform: translateY(0px) rotate(8deg); }
          50% { transform: translateY(-11px) rotate(7deg); }
        }

        .hero-float-1 { animation: heroFloat1 6.2s ease-in-out infinite; }
        .hero-float-2 { animation: heroFloat2 7s ease-in-out infinite; }
        .hero-float-3 { animation: heroFloat3 6.5s ease-in-out infinite; }
        .hero-float-4 { animation: heroFloat4 7.3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
