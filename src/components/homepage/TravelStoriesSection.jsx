import h181 from "../../assets/h181.png";
import h182 from "../../assets/h182.png";
import h183 from "../../assets/h183.png";
import h184 from "../../assets/h184.png";
import h185 from "../../assets/h185.png";
import h186 from "../../assets/h186.png";
import h187 from "../../assets/h187.png";
import h188 from "../../assets/h188.png";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  { id: 1, image: h181, alt: "Couple walking near the beach" },
  { id: 2, image: h182, alt: "Traveler walking in forest" },
  { id: 3, image: h183, alt: "Traveler with luggage at sunset" },
  { id: 4, image: h184, alt: "Explorer in snowy mountains" },
  { id: 5, image: h185, alt: "Lake and mountain view" },
  { id: 6, image: h186, alt: "Traveler watching sunset" },
  { id: 7, image: h187, alt: "Traveler sitting in mountains" },
  { id: 8, image: h188, alt: "Traveler in nature" },
];

const marqueeStories = [...stories, ...stories];

export default function TravelStoriesSection() {
  return (
    <section className="w-full overflow-hidden bg-[#f3f3f3] py-12 sm:py-16 lg:py-20">
      {/* top content (KEEP CENTERED) */}
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium text-[#6b6b6b] sm:text-[12px]">
            <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-[3px] border border-[#8f8f8f]">
              <span className="h-[5px] w-[5px] rounded-full bg-[#8f8f8f]" />
            </span>
            <span>Vibe with Us</span>
          </div>

          <h2 className="mx-auto max-w-[330px] text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#183540] sm:max-w-[560px] sm:text-[40px] lg:max-w-[760px] lg:text-[52px]">
            Real Travel Stories From Around The World
          </h2>
        </div>
      </div>

      {/* ✅ FULL WIDTH SLIDER (EDGE TO EDGE) */}
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="travel-marquee flex w-max items-center gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6 lg:px-8">
          {marqueeStories.map((story, index) => (
            <div
              key={`${story.id}-${index}`}
              className="group relative h-[220px] w-[150px] shrink-0 overflow-hidden rounded-[22px] sm:h-[270px] sm:w-[185px] md:h-[310px] md:w-[200px] lg:h-[340px] lg:w-[198px] xl:h-[360px] xl:w-[210px]"
            >
              <img
                src={story.image}
                alt={story.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* bottom text */}
      {/* bottom bar */}
      <div className="mx-auto mt-10 flex w-full max-w-[1600px] flex-col gap-5 px-4 sm:mt-12 sm:px-6 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-4 lg:flex-1">
          <p className="whitespace-nowrap text-[12px] text-[#666] sm:text-[13px]">
            Tag #VibeWithTravellio to get featured.
          </p>
          <div className="hidden h-px flex-1 bg-[#d9d9d9] sm:block" />
        </div>

        <div className="flex items-center gap-2 self-start lg:self-auto">
          <Link to="/tours">
            <button className="rounded-full bg-[#0f4c5a] px-5 py-3 text-[13px] font-medium text-white transition hover:bg-[#0c3f4a] sm:px-6 sm:text-sm">
              View Packages
            </button>
          </Link>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f4c5a] text-white transition hover:bg-[#0c3f4a]">
            <MoveUpRight className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
