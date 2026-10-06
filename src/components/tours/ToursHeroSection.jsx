import React, { useState } from "react";
import t1 from "../../assets/t1.png";
import Navbar from "../Navbar"; // adjust path if needed

const ToursHeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      <section className="relative min-h-[260px] overflow-hidden rounded-b-[28px] sm:min-h-[340px] lg:min-h-[430px]">
        <img
          src={t1}
          alt="Curated tours hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.34)_100%)]" />

        {/* exact navbar icon like image */}
        {/* <button
          onClick={() => setOpen(true)}
          type="button"
          aria-label="Open menu"
          className="absolute right-6 top-5 z-20 flex h-8 w-8 items-center justify-center text-white sm:right-8 sm:top-6 lg:right-10 lg:top-7"
        >
          <span className="relative block h-4 w-5">
            <span className="absolute left-0 top-0 block h-[1.5px] w-5 rounded-full bg-white" />
            <span className="absolute left-0 bottom-0 block h-[1.5px] w-5 rounded-full bg-white" />
          </span>
        </button> */}

        <div className="relative z-10 mx-auto flex min-h-[260px] max-w-[1400px] items-center justify-center px-4 text-center sm:min-h-[340px] sm:px-6 lg:min-h-[430px] lg:px-8">
          <div>
            <h1 className="text-[34px] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[50px] md:text-[62px] lg:text-[76px]">
              Curated Tours
            </h1>
            <p className="mt-3 text-[13px] font-normal text-white/90 sm:text-[15px] md:text-[18px]">
              Curated journeys designed to be felt, not rushed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToursHeroSection;