import React, { useState } from "react";
import heroBg from "../../assets/ch1.png";
import Navbar from "../Navbar"; // ✅ import your navbar

export default function ContactHero() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <section className="relative h-[320px] w-full overflow-hidden sm:h-[380px] md:h-[460px] lg:h-[520px]">
      
      {/* Background */}
      <img
        src={heroBg}
        alt="Travel hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 🔥 MENU BUTTON */}
      {/* <div className="absolute right-5 top-5 z-20 sm:right-8 sm:top-7">
        <button
          onClick={() => setOpenNavbar(true)} // ✅ open navbar
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          aria-label="Menu"
        >
          <span className="block text-xl leading-none">≡</span>
        </button>
      </div> */}

      {/* 🔥 NAVBAR OVERLAY */}
      <Navbar open={openNavbar} setOpen={setOpenNavbar} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-[900px]">
          <h1 className="text-[34px] font-semibold leading-[1.05] text-white sm:text-[46px] md:text-[60px] lg:text-[72px]">
            Start Your Journey
          </h1>
          <p className="mt-3 text-[13px] font-medium text-white/90 sm:text-[15px] md:text-[17px]">
            Tell us your destination &amp; we’ll plan the rest.
          </p>
        </div>
      </div>
    </section>
  );
}