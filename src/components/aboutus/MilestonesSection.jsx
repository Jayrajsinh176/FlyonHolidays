import React, { useEffect, useMemo, useRef, useState } from "react";
import bgImg from "../../assets/a2bc.png";
import cardImg from "../../assets/a2fc.png";

const leftStats = [
  {
    id: 1,
    value: 10000,
    prefix: "",
    suffix: "+",
    label: "Trips",
    top: "top-[248px] xl:top-[258px] 2xl:top-[270px]",
  },
  {
    id: 2,
    value: 60,
    prefix: "",
    suffix: "+",
    label: "Destinations",
    top: "top-[386px] xl:top-[398px] 2xl:top-[410px]",
  },
  {
    id: 3,
    value: 100,
    prefix: "",
    suffix: "+",
    label: "Partners",
    top: "top-[524px] xl:top-[538px] 2xl:top-[550px]",
  },
];

const rightStats = [
  {
    id: 4,
    value: 50000,
    prefix: "",
    suffix: "+",
    label: "Travelers",
    top: "top-[248px] xl:top-[258px] 2xl:top-[270px]",
  },
  {
    id: 5,
    value: 99,
    prefix: "",
    suffix: "%",
    label: "Satisfaction",
    top: "top-[386px] xl:top-[398px] 2xl:top-[410px]",
  },
  {
    id: 6,
    value: 4.8,
    prefix: "",
    suffix: " / 5",
    label: "Rating",
    decimals: 1,
    top: "top-[524px] xl:top-[538px] 2xl:top-[550px]",
  },
];

function useCountUp(end, isVisible, trigger = 0, duration = 1800, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let frameId;
    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    setCount(0);
    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [end, isVisible, trigger, duration]);

  return decimals > 0 ? Number(count).toFixed(decimals) : Math.round(count).toLocaleString();
}

function StatValue({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  visible,
  trigger,
}) {
  const display = useCountUp(value, visible, trigger, 1800, decimals);

  return (
    <span className="text-[18px] font-medium leading-none tracking-[-0.03em] text-white xl:text-[19px] 2xl:text-[20px]">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function LeftStat({ item, visible, trigger }) {
  return (
    <div
      className={`absolute left-[86px] ${item.top} z-20 flex w-[540px] items-center xl:left-[110px] xl:w-[620px] 2xl:left-[148px] 2xl:w-[700px]`}
    >
      <div className="flex items-center gap-[12px]">
        <div className="flex h-[50px] items-center rounded-full border border-white/14 bg-white/[0.08] px-[16px] backdrop-blur-[10px] xl:h-[52px] xl:px-[18px]">
          <StatValue
            value={item.value}
            prefix={item.prefix}
            suffix={item.suffix}
            decimals={item.decimals || 0}
            visible={visible}
            trigger={trigger}
          />
        </div>

        <span className="text-[15px] font-medium text-white/82 xl:text-[16px]">
          {item.label}
        </span>
      </div>

      <div className="ml-[18px] h-px flex-1 bg-white/22" />
    </div>
  );
}

function RightStat({ item, visible, trigger }) {
  return (
    <div
      className={`absolute right-[86px] ${item.top} z-20 flex w-[540px] items-center xl:right-[110px] xl:w-[620px] 2xl:right-[148px] 2xl:w-[700px]`}
    >
      <div className="mr-[18px] h-px flex-1 bg-white/22" />

      <div className="flex items-center gap-[12px]">
        <div className="flex h-[50px] items-center rounded-full border border-white/14 bg-white/[0.08] px-[16px] backdrop-blur-[10px] xl:h-[52px] xl:px-[18px]">
          <StatValue
            value={item.value}
            prefix={item.prefix}
            suffix={item.suffix}
            decimals={item.decimals || 0}
            visible={visible}
            trigger={trigger}
          />
        </div>

        <span className="text-[15px] font-medium text-white/82 xl:text-[16px]">
          {item.label}
        </span>
      </div>
    </div>
  );
}

function MobileStat({ item, visible, trigger }) {
  return (
    <div className="flex items-center justify-between rounded-full border border-white/14 bg-white/[0.08] px-4 py-3 backdrop-blur-[10px]">
      <div className="rounded-full border border-white/14 bg-white/[0.08] px-3 py-1.5">
        <StatValue
          value={item.value}
          prefix={item.prefix}
          suffix={item.suffix}
          decimals={item.decimals || 0}
          visible={visible}
          trigger={trigger}
        />
      </div>

      <span className="ml-3 text-[14px] font-medium text-white/85">
        {item.label}
      </span>
    </div>
  );
}

export default function MilestonesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const allStats = useMemo(() => [...leftStats, ...rightStats], []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTrigger((prev) => prev + 1);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0e131b]">
      <div className="relative overflow-hidden">
        <img
          src={bgImg}
          alt="Milestones background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/28" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.22)_0%,rgba(8,10,14,0.08)_22%,rgba(8,10,14,0.18)_100%)]" />

        <div className="relative z-10 hidden h-[790px] lg:block xl:h-[840px] 2xl:h-[890px]">
          <h2 className="-mt-8 absolute left-1/2 top-[82px] z-30 -translate-x-1/2 text-center text-[40px] font-semibold tracking-[-0.04em] text-white xl:top-[88px] xl:text-[44px] 2xl:top-[94px] 2xl:text-[48px]">
            Milestones
          </h2>

          <div className="absolute left-1/2 top-[145px] z-30 -translate-x-1/2 xl:top-[156px] 2xl:top-[168px]">
            <div className="relative w-[360px] xl:w-[390px] 2xl:w-[420px]">
              <div className="overflow-hidden rounded-[30px] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <img
                  src={cardImg}
                  alt="Milestone traveler"
                  className="h-[530px] w-full object-cover xl:h-[565px] 2xl:h-[600px]"
                />
              </div>
            </div>
          </div>

          {leftStats.map((item) => (
            <LeftStat
              key={item.id}
              item={item}
              visible={visible}
              trigger={trigger}
            />
          ))}

          {rightStats.map((item) => (
            <RightStat
              key={item.id}
              item={item}
              visible={visible}
              trigger={trigger}
            />
          ))}
        </div>

        <div className="relative z-10 lg:hidden">
          <div className="mx-auto max-w-[760px] px-4 py-10 sm:px-6 sm:py-12">
            <h2 className="text-center text-[28px] font-semibold tracking-[-0.03em] text-white sm:text-[32px]">
              Milestones
            </h2>

            <div className="relative mx-auto mt-8 w-full max-w-[320px] sm:max-w-[360px]">
              <div className="absolute left-[24px] top-[-30px] z-20 h-[58px] w-[22px] rounded-t-[6px] bg-[linear-gradient(180deg,#d27935_0%,#964913_100%)] shadow-[0_8px_20px_rgba(0,0,0,0.22)]" />

              <div className="overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <img
                  src={cardImg}
                  alt="Milestone traveler"
                  className="h-[430px] w-full object-cover sm:h-[490px]"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {allStats.map((item) => (
                <MobileStat
                  key={item.id}
                  item={item}
                  visible={visible}
                  trigger={trigger}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}