import { roadmapData } from "../../constant";
import { SmokyBg } from "../assets/images";
import { HeadingDiv } from "./../components/Button";

const RoadmapSection = () => {
  return (
    <div className="relative hidden flex-col items-center bg-primaryBGblack py-20 font-NotoSans md:flex md:h-[190vh] lg:h-[280vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src={SmokyBg}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Heading */}
      <div className="z-10 flex flex-col items-center space-y-5">
        <HeadingDiv
          label="RoadMap"
          width="w-[20rem]"
          height="h-[5rem]"
          text="text-3xl"
          font="font-bold"
        />
        <h1 className="text-3xl font-medium text-white">
          How we are building the future of E-contract
        </h1>
      </div>

      {/* Roadmap */}
      <div className="relative z-10 mt-60 flex flex-col items-center justify-center gap-20">
        {/* Vertical Line */}
        <div className="absolute -top-36 z-0 h-[83rem] w-2 rounded-full bg-gradient-to-b from-primaryBGblack to-buttonYellow md:-left-28 lg:-left-1"></div>

        <div className="relative">
          {roadmapData.map((elem, index) => (
            <div key={elem.heading} className="relative">
              {/* Quarter Info */}
              <div
                className="w-30 absolute -mt-10 px-2 py-2 text-3xl font-semibold tracking-wide text-buttonYellow md:-left-[22rem] lg:-left-[19rem]"
                style={{ top: `${index * 350 + 55}px` }}
              >
                {elem.quarter}
              </div>

              {/* Center Diamond (Marker) */}
              <div
                className="absolute z-20 mt-3 flex rotate-45 items-center justify-center md:-left-[8.6rem] lg:-left-[2rem]"
                style={{ top: `${index * 350}px` }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-buttonYellow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-buttonYellow">
                    <div className="h-12 w-12 rounded-lg bg-buttonYellow"></div>
                  </div>
                </div>
              </div>

              {/* Content Info */}
              <div
                className="absolute -mt-10 space-y-3 rounded-2xl border-2 border-buttonYellow/40 px-6 py-6 text-textGray md:-right-[22rem] md:w-[25rem] lg:-right-[42rem] lg:w-[32rem]"
                style={{ top: `${index * 350 + 40}px` }}
              >
                <h2 className="mb-2 text-xl font-bold">{elem.heading}</h2>
                <ul className="list-none space-y-2 pl-2">
                  {elem.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="dashed-circle">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
