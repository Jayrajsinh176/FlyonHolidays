import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  Compass, // 
  PlaneTakeoff,
  MapPinned,
  Menu,
  X,
} from "lucide-react";

export default function TravelGlassNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 1, icon: House, label: "Home", href: "/" },
    { id: 2, icon: Compass, label: "About", href: "/about" }, // 
    { id: 3, icon: PlaneTakeoff, label: "Tours", href: "/tours" },
    { id: 4, icon: MapPinned, label: "Book a Trip", href: "/contact" },
  ];

  return (
    <>
      {/* desktop left sidebar */}
      <aside className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex">
        <div className="flex w-[90px] flex-col items-center rounded-[38px] border border-[#0f4c5a] bg-[#0f4c5a]/50 py-4 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
          <div className="mb-4 h-px w-10 bg-white/30" />

          <nav className="flex flex-col items-center gap-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className="group flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-white/95 transition hover:bg-[#0f4c5a]"
                  aria-label={item.label}
                >
                  <Icon
                    size={26}
                    strokeWidth={2.2}
                    className="transition duration-300 group-hover:scale-110"
                  />

                  <span className="mt-1 text-[11px] font-medium text-center leading-tight">
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          <div className="my-5 h-px w-10 bg-white/30" />
        </div>
      </aside>

      {/* mobile top bar */}
      <div className="fixed left-0 top-0 z-50 mt-4 w-full px-4 pt-4 md:hidden">
        <div className="flex items-center justify-between rounded-full border border-[#0f4c5a] bg-[#0f4c5a]/50 px-4 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
          <div className="text-sm font-medium tracking-wide text-white">
            Flyon Holidays
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[420px] pt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[28px] border border-[#0f4c5a] bg-[#0f4c5a]/70 p-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-white transition hover:bg-white/10"
                >
                  <Icon size={22} strokeWidth={2.2} />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}