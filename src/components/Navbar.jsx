import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import n1 from "../../src/assets/n1.png";

export default function Navbar({ open, setOpen }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let openTimer;
    let closeTimer;

    if (open) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";

      openTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
    } else {
      document.body.style.overflow = "auto";
      setIsVisible(false);

      closeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 900); // smoother close timing
    }

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-black/40 backdrop-blur-[20px] transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* PANEL */}
      <div
        className={`absolute inset-0 transform transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="relative h-full w-full overflow-y-auto">
          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center text-white lg:h-14 lg:w-14"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 lg:h-10 lg:w-10"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
            >
              <path d="M6 6L18 18" strokeLinecap="round" />
              <path d="M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 pt-20 pb-10 lg:pt-12">
            
            {/* LOGO */}
            <h2 className="text-[26px] font-bold text-white sm:text-[32px] lg:text-[42px]">
              Flyon Holidays
            </h2>

            <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-10">
                <div className="rounded-[24px] overflow-hidden shadow-xl max-w-[360px]">
                  <img
                    src={n1}
                    alt="preview"
                    className="w-full h-[250px] object-cover lg:h-[380px]"
                  />
                </div>

                {/* CONTACT */}
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Get In Touch
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-4">
                    <a
                      href="mailto:Info@Example.co"
                      className="rounded-full border border-white/20 px-6 py-3 text-white backdrop-blur-lg hover:bg-white/20 transition"
                    >
                      Info@Example.co
                    </a>

                    <a
                      href="tel:9409411724"
                      className="rounded-full border border-white/20 px-6 py-3 text-white backdrop-blur-lg hover:bg-white/20 transition"
                    >
                      94094 11724
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col justify-center">
                <ul className="space-y-6 lg:space-y-10">
                  
                  <li>
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="text-[32px] lg:text-[40px] font-semibold text-white hover:text-white/70 transition"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/company"
                      onClick={() => setOpen(false)}
                      className="text-[32px] lg:text-[40px] font-semibold text-white hover:text-white/70 transition"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/services"
                      onClick={() => setOpen(false)}
                      className="text-[32px] lg:text-[40px] font-semibold text-white hover:text-white/70 transition"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/letsconnect"
                      onClick={() => setOpen(false)}
                      className="text-[32px] lg:text-[40px] font-semibold text-white hover:text-white/70 transition"
                    >
                      Book A Trip
                    </Link>
                  </li>

                </ul>

                {/* SOCIAL */}
                <div className="mt-10 flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-md hover:scale-110 transition">
                    F
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-md hover:scale-110 transition">
                    I
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}