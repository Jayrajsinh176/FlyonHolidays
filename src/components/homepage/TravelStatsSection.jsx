import React, { useEffect, useRef, useState } from "react";
import {
  Anchor,
  Palmtree,
  Plane,
  MapPinned,
  Sparkles,
  CircleDot,
} from "lucide-react";

const stats = [
  {
    id: 1,
    value: 10,
    suffix: "",
    label: "Years Experience",
    size: "lg",
    position:
      "relative mx-auto md:mx-0 md:translate-y-[30px] lg:translate-y-[55px] xl:translate-y-[70px] 2xl:translate-y-[90px]",
    orbitDuration: "11s",
  },
  {
    id: 2,
    value: 99,
    suffix: "%",
    label: "Retention Rate",
    size: "md",
    position:
      "relative mx-auto md:mx-0 md:translate-y-0 lg:-translate-y-[8px] xl:-translate-y-[18px] 2xl:-translate-y-[30px]",
    orbitDuration: "9s",
  },
  {
    id: 3,
    value: 50,
    suffix: "k",
    label: "Tour Completed",
    size: "lg",
    position:
      "relative mx-auto md:mx-0 md:translate-y-[30px] lg:translate-y-[55px] xl:translate-y-[80px] 2xl:translate-y-[95px]",
    orbitDuration: "10s",
  },
  {
    id: 4,
    value: 70,
    suffix: "k",
    label: "Happy Travellers",
    size: "md",
    position:
      "relative mx-auto md:mx-0 md:translate-y-0 lg:-translate-y-[6px] xl:-translate-y-[16px] 2xl:-translate-y-[28px]",
    orbitDuration: "12s",
  },
];

function useCountUp(end, startCounting, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, startCounting, duration]);

  return count;
}

function StatCircle({ item, startCounting }) {
  const count = useCountUp(item.value, startCounting);

  const sizeMap = {
    lg: {
      wrap:
        "w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[310px] xl:h-[310px] 2xl:w-[340px] 2xl:h-[340px]",
      inner:
        "w-[164px] h-[164px] sm:w-[190px] sm:h-[190px] md:w-[198px] md:h-[198px] lg:w-[228px] lg:h-[228px] xl:w-[254px] xl:h-[254px] 2xl:w-[282px] 2xl:h-[282px]",
      number:
        "text-[30px] sm:text-[34px] md:text-[38px] lg:text-[46px] xl:text-[52px] 2xl:text-[54px]",
      label:
        "text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
    },
    md: {
      wrap:
        "w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] md:w-[222px] md:h-[222px] lg:w-[260px] lg:h-[260px] xl:w-[290px] xl:h-[290px] 2xl:w-[320px] 2xl:h-[320px]",
      inner:
        "w-[146px] h-[146px] sm:w-[174px] sm:h-[174px] md:w-[182px] md:h-[182px] lg:w-[212px] lg:h-[212px] xl:w-[240px] xl:h-[240px] 2xl:w-[266px] 2xl:h-[266px]",
      number:
        "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px]",
      label:
        "text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px]",
    },
  };

  const current = sizeMap[item.size];

  return (
    <div className={item.position}>
      <div
        className={`stat-orbit ${current.wrap} relative flex items-center justify-center rounded-full border border-[#0f4c5a]`}
        style={{ "--orbit-duration": item.orbitDuration }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(33,181,231,0.06),transparent_65%)]" />
        <div className="absolute inset-0 rounded-full border border-[#21b5e7]/20 shadow-[0_0_40px_rgba(33,181,231,0.08)]" />

        <div className="orbit-rotator absolute inset-0">
          <div className="orbit-dot" />
        </div>

        <div
          className={`${current.inner} relative z-10 flex flex-col items-center justify-center rounded-full border border-white/60 bg-[#dce8ee] text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]`}
        >
          <h3
            className={`${current.number} font-semibold leading-none tracking-[-0.03em] text-[#0c1b24]`}
          >
            {count}
            {item.suffix}
          </h3>

          <p
            className={`${current.label} mt-3 max-w-[80%] font-medium leading-[1.15] tracking-[-0.03em] text-[#0c1b24]`}
          >
            {item.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TravelStatsSection() {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="-mt-12 relative overflow-hidden bg-[#f5f5f2] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-14 xl:py-32 2xl:px-20 2xl:py-36 min-h-[760px] sm:min-h-[860px] lg:min-h-[800px] xl:min-h-[1000px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(33,181,231,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(33,181,231,0.05),transparent_26%)]" />

      <Plane className="absolute left-[4%] top-[28%] h-8 w-8 text-[#0f4c5a]/75 animate-float-slow sm:h-10 sm:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16" />
      <MapPinned className="absolute left-[7%] top-[18%] h-6 w-6 text-[#0f4c5a]/70 animate-float-medium sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
      <Anchor className="absolute right-[3%] top-[7%] h-8 w-8 text-[#0f4c5a]/80 animate-float-slow sm:h-10 sm:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16" />
      <Palmtree className="absolute bottom-[4%] left-[2%] h-10 w-10 text-[#0f4c5a]/75 animate-float-medium sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
      <Sparkles className="absolute right-[8%] top-[46%] h-4 w-4 text-[#0f4c5a]/85 animate-pulse-soft sm:h-5 sm:w-5" />
      <CircleDot className="absolute left-[45%] top-[11%] h-3.5 w-3.5 text-[#0f4c5a]/90 animate-pulse-soft sm:h-4 sm:w-4" />

      <div className="mt-20 relative mx-auto max-w-[1600px]">
        <div className="mb-12 text-center sm:mb-14 md:mb-16 lg:mb-20 -mt-30 xl:mb-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#21b5e7]/20 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0f4c5a] backdrop-blur-sm sm:text-[11px] md:text-[12px]">
            <Sparkles className="h-4 w-4" />
            Why Travelers Choose Us
          </span>

          <h2 className="mt-10 mx-auto mt-4 max-w-[320px] text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#173042] sm:max-w-[480px] sm:text-[34px] md:max-w-[620px] md:text-[42px] lg:max-w-[760px] lg:text-[50px] xl:max-w-[820px] xl:text-[58px]">
            Trusted Travel Experiences Built Around Real Results
          </h2>

          <p className="mx-auto mt-4 max-w-[320px] text-[14px] leading-6 text-[#5f6f7c] sm:max-w-[500px] sm:text-[15px] md:max-w-[620px] md:text-[15px] lg:max-w-[720px] lg:text-[16px]">
            From unforgettable journeys to long-term traveler loyalty, our
            numbers reflect the care, planning, and premium experience behind
            every trip we design.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-10 lg:gap-12 xl:grid-cols-4 xl:items-start xl:gap-8 2xl:gap-10">
          {stats.map((item) => (
            <StatCircle
              key={item.id}
              item={item}
              startCounting={startCounting}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulseSoft {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); }
        }

        .orbit-rotator {
          animation: orbitSpin var(--orbit-duration) linear infinite;
          transform-origin: center;
          z-index: 2;
        }

        .orbit-dot {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: #0f4c5a;
          box-shadow:
            0 0 0 4px rgba(33, 181, 231, 0.16),
            0 0 18px rgba(33, 181, 231, 0.35);
        }

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: floatMedium 7.5s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulseSoft 3s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .orbit-dot {
            top: -7px;
            width: 16px;
            height: 16px;
          }
        }

        @media (min-width: 1280px) {
          .orbit-dot {
            top: -8px;
            width: 18px;
            height: 18px;
            box-shadow:
              0 0 0 6px rgba(33, 181, 231, 0.18),
              0 0 24px rgba(33, 181, 231, 0.4);
          }
        }
      `}</style>
    </section>
  );
}