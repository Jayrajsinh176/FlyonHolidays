import React, { useMemo, useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "What type of trips do you offer?",
    answer:
      "We offer curated group trips, luxury getaways, adventure tours, family holidays, honeymoon packages, and customized travel experiences.",
  },
  {
    id: 2,
    question: "Are your trips suitable for solo travelers?",
    answer:
      "Yes. Many of our itineraries are designed for solo travelers with comfort and safety.",
  },
  {
    id: 3,
    question: "Do you handle flights and visas?",
    answer:
      "Yes, we assist with flights, visa guidance, hotel bookings, and complete travel planning.",
  },
  {
    id: 4,
    question: "Will there be on-ground support during the trip?",
    answer:
      "Yes. We provide full local support and coordination during your journey.",
  },
  {
    id: 5,
    question: "How do I book a trip?",
    answer:
      "Submit an inquiry and our team will guide you through the booking process.",
  },
  {
    id: 6,
    question: "What is included in the trip cost?",
    answer:
      "Typically accommodation, transport, and selected experiences are included.",
  },
  {
    id: 7,
    question: "What payment options are available?",
    answer:
      "We provide flexible payment options depending on your trip.",
  },
  {
    id: 8,
    question: "Is travel insurance mandatory?",
    answer:
      "Not mandatory but strongly recommended.",
  },
];


// ✅ ICON
function PlusToXIcon({ open }) {
  return (
    <div className="relative flex h-[20px] w-[20px] items-center justify-center">
      <span
        className={`absolute h-[1.8px] w-[15px] bg-[#0f4c5a] rounded-full transition-all duration-300 ${
          open ? "rotate-45" : ""
        }`}
      />
      <span
        className={`absolute h-[15px] w-[1.8px] bg-[#0f4c5a] rounded-full transition-all duration-300 ${
          open ? "rotate-45" : ""
        }`}
      />
    </div>
  );
}


// ✅ CARD
function FAQCard({ item, open, setOpenId }) {
  return (
    <div
      onMouseEnter={() => setOpenId(item.id)}
      onMouseLeave={() => setOpenId(null)} // ✅ hover leave close
      className="rounded-[26px] border border-[#0f4c5a] transition-all duration-500"
    >
      <button
        onClick={() => setOpenId(prev => (prev === item.id ? null : item.id))}
        className="w-full text-left"
      >
        <div className="flex min-h-[86px] items-center justify-between px-[24px] py-[24px]">
          <h3 className="text-[16px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#0f4c5a] sm:text-[17px]">
            {item.question}
          </h3>

          <PlusToXIcon open={open} />
        </div>

        <div
          className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <p
              className={`px-[24px] pb-[24px] text-[14px] leading-[1.8] text-[#0f4c5a] transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {item.answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}


// ✅ MAIN SECTION
export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const { left, right } = useMemo(() => {
    return {
      left: faqItems.filter((_, i) => i % 2 === 0),
      right: faqItems.filter((_, i) => i % 2 !== 0),
    };
  }, []);

  return (
    <section className="w-full bg-[#f3f3f1] px-4 pt-[90px] pb-[110px]">
      <div className="mx-auto max-w-[1180px]">

        {/* FAQ LABEL */}
        <div className="mb-[18px] flex items-center justify-center gap-2">
          <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#0f4c5a] text-[13px] text-[#0f4c5a]">
            ?
          </div>
          <span className="text-[13px] font-semibold text-[#0f4c5a]">
            FAQ
          </span>
        </div>

        {/* HEADING (MATCH IMAGE) */}
        <div className="mx-auto mb-[70px] max-w-[650px] text-center">
          <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#0f4c5a] sm:text-[44px] md:text-[52px] lg:text-[48px]">
            Everything You Need To Know
            <br />
            Before You Travel
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <div className="space-y-[24px]">
            {left.map(item => (
              <FAQCard
                key={item.id}
                item={item}
                open={openId === item.id}
                setOpenId={setOpenId}
              />
            ))}
          </div>

          <div className="mt-[24px] space-y-[24px] md:mt-0">
            {right.map(item => (
              <FAQCard
                key={item.id}
                item={item}
                open={openId === item.id}
                setOpenId={setOpenId}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}