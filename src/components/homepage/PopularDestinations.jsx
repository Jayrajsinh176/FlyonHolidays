import React, { useRef } from "react";
import { Crown, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import hpd1 from "../../assets/hpd1.png";
import hpd2 from "../../assets/hpd2.png";
import hpd3 from "../../assets/hpd3.png";
import hpd4 from "../../assets/hpd4.png";
import hpd5 from "../../assets/hpd5.png";

const destinations = [
  {
    id: 1,
    title: "Maldives Paradise",
    country: "Maldives",
    description: "Crystal clear waters and pristine beaches await your arrival",
    image: hpd1,
  },
  {
    id: 2,
    title: "Santorini Escape",
    country: "Greece",
    description:
      "Whitewashed beauty and endless blue sea views in every direction",
    image: hpd2,
  },
  {
    id: 3,
    title: "Bali Retreat",
    country: "Indonesia",
    description:
      "Tropical landscapes, peaceful temples, and unforgettable sunsets",
    image: hpd3,
  },
  {
    id: 4,
    title: "Dubai Nights",
    country: "UAE",
    description:
      "Luxury experiences, iconic skylines, and vibrant desert energy",
    image: hpd4,
  },
  {
    id: 5,
    title: "Egypt Wonders",
    country: "Egypt",
    description:
      "Ancient history, golden sands, and timeless cultural treasures",
    image: hpd5,
  },
];

export default function PopularDestinations() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const indexFloat = useTransform(
    scrollYProgress,
    [0, 1],
    [0, destinations.length - 1]
  );

  return (
    <section
      ref={sectionRef}
      style={{ height: `${destinations.length * 100}vh` }}
      className="relative w-full bg-[#071018]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Dynamic background images */}
        <div className="absolute inset-0">
          {destinations.map((item, index) => (
            <BackgroundLayer
              key={item.id}
              image={item.image}
              title={item.title}
              index={index}
              indexFloat={indexFloat}
            />
          ))}
        </div>

        {/* same background overlays kept */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,8,14,0.72)_0%,rgba(6,15,23,0.36)_24%,rgba(8,18,27,0.16)_52%,rgba(8,18,27,0.30)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.42),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_34%,rgba(255,244,247,0.18),transparent_22%),radial-gradient(circle_at_15%_76%,rgba(126,225,255,0.52),transparent_30%),radial-gradient(circle_at_28%_58%,rgba(150,235,255,0.16),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.00)_24%,rgba(255,255,255,0.00)_72%,rgba(0,0,0,0.18)_100%)]" />

        {/* center glow kept */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[340px] w-[340px] rounded-full bg-cyan-200/10 blur-[95px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] lg:h-[460px] lg:w-[460px]" />
        </div>

        {/* content */}
        <div className="-mt-10 relative z-10 mx-auto flex h-full max-w-[1400px] items-start justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full pt-[88px] text-center text-white sm:pt-[96px] md:pt-[102px]">
            <div className="mb-8 flex items-center justify-center gap-2 text-[11px] font-medium text-white/82 sm:text-[12px]">
              <Crown className="h-[13px] w-[13px]" strokeWidth={1.7} />
              <span>Most Exotic Destinations</span>
            </div>

            <h2 className="mb-14 mx-auto max-w-[720px] text-[28px] font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-[36px] md:text-[46px] lg:text-[56px]">
              Discover Your Next Dream Destination
            </h2>

            <div className="mt-6 flex justify-center sm:mt-7 md:mt-8 lg:mt-6">
              <div className="relative w-[252px] sm:w-[270px] md:w-[292px] lg:w-[400px]">
                <div className="absolute inset-0 rounded-[28px] bg-cyan-200/8 blur-[42px]" />

                <div
                  className="mt-2 relative h-[388px] sm:h-[420px] md:h-[456px] lg:h-[480px]"
                  style={{ perspective: "1800px" }}
                >
                  {destinations.map((card, index) => (
                    <CardLayer
                      key={card.id}
                      card={card}
                      index={index}
                      indexFloat={indexFloat}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundLayer({ image, title, index, indexFloat }) {
  const distance = useTransform(indexFloat, (v) => Math.abs(v - index));

  const opacity = useTransform(
    distance,
    [0, 0.45, 1, 1.4],
    [1, 0.72, 0.12, 0]
  );

  const scale = useTransform(distance, [0, 1.2], [1, 1.08]);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
      />
    </motion.div>
  );
}

function CardLayer({ card, index, indexFloat }) {
  const distance = useTransform(indexFloat, (v) => Math.abs(v - index));

  const opacity = useTransform(
    distance,
    [0, 0.2, 0.8, 1.2],
    [1, 0.95, 0.2, 0]
  );

  const rotateX = useTransform(indexFloat, (v) => {
    const delta = v - index;
    return delta * -180;
  });

  const zIndex = useTransform(distance, [0, 1], [30, 1]);

  return (
    <motion.div
      style={{
        rotateX,
        opacity,
        zIndex,
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0"
    >
      {/* front */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] shadow-[0_20px_55px_rgba(0,0,0,0.34)] backdrop-blur-[3px]"
        style={{ backfaceVisibility: "hidden" }}
      >
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,12,18,0.08)_0%,rgba(8,12,18,0.12)_32%,rgba(8,10,14,0.54)_100%)]" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white/88 backdrop-blur-sm">
          <MapPin className="h-3 w-3" />
          <span>{card.country}</span>
        </div>

        <div className="absolute left-5 right-5 top-[50%] -translate-y-1/2 text-left">
          <h3 className="text-[27px] font-semibold leading-[0.94] tracking-[-0.03em] text-white sm:text-[29px] md:text-[31px]">
            {formatTitle(card.title)}
          </h3>

          <p className="mt-3 max-w-[210px] text-[11px] leading-[1.6] text-white/74 sm:text-[12px]">
            {card.description}
          </p>
        </div>

        <div className="absolute bottom-4 left-0 w-full px-4 text-center text-[10px] font-medium text-white/62">
          Scroll to explore more destinations
        </div>
      </div>

      {/* back */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] shadow-[0_20px_55px_rgba(0,0,0,0.34)]"
        style={{
          transform: "rotateX(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src={card.image}
          alt={`${card.title} back`}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,12,18,0.12)_0%,rgba(8,12,18,0.16)_32%,rgba(8,10,14,0.52)_100%)]" />
      </div>
    </motion.div>
  );
}

function formatTitle(title) {
  const words = title.split(" ");
  if (words.length <= 1) return title;

  const middle = Math.ceil(words.length / 2);

  return (
    <>
      {words.slice(0, middle).join(" ")}
      <br />
      {words.slice(middle).join(" ")}
    </>
  );
}