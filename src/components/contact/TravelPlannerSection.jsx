import { useState } from "react";

const destinations = [
  "Bali",
  "Dubai",
  "Maldives",
  "Thailand",
  "Singapore",
  "Europe",
  "Other",
];

const contactCards = [
  {
    title: "Call Us",
    value: "+91 9409411724",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.26a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "info@Example.co",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Location",
    value: "Bharuch",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

export default function TravelPlannerSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <section className="w-full bg-[#efefef] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1820px] rounded-[34px] bg-[#efefef] px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-20 lg:py-20 xl:px-28">
        <div className="mx-auto grid max-w-[1160px] items-start gap-10 lg:grid-cols-[1fr_550px] lg:gap-16 xl:gap-20">
          
          {/* Left */}
          <div className="pt-2">
            <h2 className="max-w-[540px] text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0f4c5a] sm:text-[42px] lg:text-[56px]">
              
              {/* ✅ Added span heading */}
              <span className="mb-3 block text-[14px] font-medium uppercase tracking-[0.2em] text-[#0f4c5a]/70">
                Travel Planning
              </span>

              Plan Your Next Journey With Us
            </h2>

            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.45] text-[#0f4c5a] sm:text-[18px]">
              Share your travel details and let our travel experts design the
              perfect experience for you.
            </p>

            <div className="mt-10 overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1400&auto=format&fit=crop"
                alt="Travel group"
                className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[300px]"
              />
            </div>

            <div className="mt-5">
              <p className="text-[18px] font-semibold text-[#0f4c5a]">
                Reach out to us.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {contactCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[16px] border border-[#0f4c5a] bg-[#f5f5f5] px-5 py-6 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center text-[#0f4c5a]">
                      {item.icon}
                    </div>
                    <p className="text-[15px] font-medium text-[#0f4c5a]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="mt-10 rounded-[26px] border border-[#0f4c5a] bg-[#f4f4f4] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-6 lg:p-7"
            >
              <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">

                <div className="sm:col-span-2">
                  <label className="mb-3 block text-[15px] font-semibold text-[#0f4c5a]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="h-[54px] w-full rounded-[18px] border border-[#0f4c5a] bg-[#ececec] px-5 text-[15px] text-[#0f4c5a] outline-none placeholder:text-[#808080]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[15px] font-semibold text-[#0f4c5a]">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-[54px] w-full rounded-[18px] border border-[#0f4c5a] bg-[#ececec] px-5 text-[15px] text-[#0f4c5a] outline-none placeholder:text-[#808080]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[15px] font-semibold text-[#0f4c5a]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[54px] w-full rounded-[18px] border border-[#0f4c5a] bg-[#ececec] px-5 text-[15px] text-[#0f4c5a] outline-none placeholder:text-[#808080]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[15px] font-semibold text-[#0f4c5a]">
                    Select Destination
                  </label>
                  <div className="relative">
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="h-[54px] w-full appearance-none rounded-[18px] border border-[#0f4c5a] bg-[#ececec] px-5 pr-12 text-[15px] text-[#0f4c5a] outline-none"
                    >
                      <option value="">Select destination</option>
                      {destinations.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7c7c7c]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-[15px] font-semibold text-[#0f4c5a]">
                    Select Dates
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="h-[54px] w-full rounded-[18px] border border-[#0f4c5a] bg-[#ececec] px-5 text-[15px] text-[#808080] outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-3 block text-[15px] font-semibold text-[#0f4c5a]">
                    Description
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[108px] w-full resize-none rounded-[18px] border border-[#0f4c5a] bg-[#ececec] px-5 py-4 text-[15px] text-[#0f4c5a] outline-none placeholder:text-[#808080]"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="flex h-[48px] w-full items-center justify-center rounded-full border border-[#0f4c5a] bg-transparent text-[16px] font-medium text-[#757575] transition hover:bg-[#0f4c5a] hover:text-white"
                  >
                    Submit
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}