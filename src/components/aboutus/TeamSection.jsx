import React from "react";
import { Users } from "lucide-react";

import a41 from "../../assets/a41.png";
import a42 from "../../assets/a42.png";
import a43 from "../../assets/a43.png";
import a44 from "../../assets/a44.png";

const teamMembers = [
  {
    id: 1,
    name: "James Carter",
    role: "Operations Manager",
    image: a41,
  },
  {
    id: 2,
    name: "Sophia Bennett",
    role: "Travel Expert",
    image: a42,
  },
  {
    id: 3,
    name: "Willy Johnson",
    role: "Trip Lead",
    image: a43,
  },
  {
    id: 4,
    name: "Olivia Scott",
    role: "Operations Manager",
    image: a44,
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#f5f5f3] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-16">
      <div className="mx-auto max-w-[1220px]">
        {/* Top heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4d4d4d] sm:text-[14px]">
            <Users className="h-4 w-4 stroke-[1.8]" />
            <span>Our Team</span>
          </div>

          <h2 className="mt-4 text-[30px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#062b35] sm:text-[38px] md:text-[46px] lg:text-[54px]">
            The Minds And Hearts Shaping
            <br className="hidden sm:block" />
            <span className="sm:ml-2">Every Travel Experience</span>
          </h2>
        </div>

        {/* Team cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full">
              <div className="overflow-hidden rounded-[24px] bg-white/40">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[320px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[430px] xl:h-[450px]"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-[24px] font-medium leading-tight text-[#151515] sm:text-[26px]">
                  {member.name}
                </h3>
                <p className="mt-1 text-[16px] leading-[1.5] text-[#5a5a5a] sm:text-[17px]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}