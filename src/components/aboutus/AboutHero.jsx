import React, { useState } from "react";
import heroImg from "../../assets/ahbc.jpeg";
import Navbar from "../Navbar";

export default function AboutHero() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <section className="w-full bg-[#f5f5f2] p-0">
      <div className="relative h-[260px] w-full overflow-hidden sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[620px]">
        {/* Background image */}
        <img
          src={heroImg}
          alt="About our Enthusiasm"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/28" />

        {/* Warm left glow like screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffb15a]/40 via-transparent to-transparent" />

        {/* Soft cinematic top fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/18" />

        {/* Top floating glass nav pill */}
        {/* <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2 sm:top-4 md:top-5">
          <button
            onClick={() => setOpenNavbar(true)}
            aria-label="Open menu"
            className="group flex h-[42px] w-[180px] items-center justify-end rounded-full border border-white/10 bg-white/15 px-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-white/20 hover:scale-[1.03] sm:h-[48px] sm:w-[210px] md:h-[54px] md:w-[250px] lg:h-[58px] lg:w-[285px]"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-5 rounded-full bg-white/90 transition-all duration-300 group-hover:w-6 sm:w-6" />
              <span className="block h-[2px] w-5 rounded-full bg-white/90 transition-all duration-300 group-hover:w-4 sm:w-6" />
            </div>
          </button>
        </div> */}

        {/* Navbar overlay */}
        <Navbar open={openNavbar} setOpen={setOpenNavbar} />

        {/* Center content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center sm:px-6 md:px-10">
          <div className="max-w-[95%] sm:max-w-4xl lg:max-w-6xl">
            <h1 className="text-[30px] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-[46px] md:text-[64px] lg:text-[82px] xl:text-[92px] 2xl:text-[104px]">
              About our Enthusiasm
            </h1> 

            <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-[1.25] text-white/90 sm:mt-4 sm:max-w-[520px] sm:text-[16px] md:max-w-[700px] md:text-[22px] lg:mt-5 lg:max-w-[900px] lg:text-[28px] xl:text-[30px]">
              Curated journeys designed to be felt, not rushed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}