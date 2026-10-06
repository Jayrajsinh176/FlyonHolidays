import React, { useEffect, useRef, useState } from "react";

function ScrollStackItem({ children, index, activeIndex }) {
  const diff = index - activeIndex;
  const clamped = Math.max(-2, Math.min(2, diff));

  const translateY = clamped * 28;
  const scale = 1 - Math.abs(clamped) * 0.04;
  const opacity = Math.abs(clamped) > 2 ? 0 : 1;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
        zIndex: 30 - Math.abs(diff),
      }}
    >
      {children}
    </div>
  );
}

export default function ScrollStack({ children, itemHeight = 460 }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = React.Children.toArray(children);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const progress = window.scrollY - sectionTop + window.innerHeight * 0.35;

      const next = Math.floor(progress / itemHeight);
      const safeIndex = Math.max(0, Math.min(next, items.length - 1));

      setActiveIndex(safeIndex);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length, itemHeight]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${items.length * itemHeight + 300}px` }}
    >
      <div className="sticky top-24 h-[460px]">
        {items.map((child, index) => (
          <ScrollStackItem
            key={index}
            index={index}
            activeIndex={activeIndex}
          >
            {child}
          </ScrollStackItem>
        ))}
      </div>
    </div>
  );
}