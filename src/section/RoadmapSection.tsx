import {
  containerVariants,
  diamondVariants,
  itemVariants,
} from "../../Animation";
import { roadmapData } from "../../constant";
import { SmokyBg } from "../assets/images";
import { HeadingDiv } from "./../components/Button";
import { motion } from "framer-motion";

const RoadmapSection = () => {
  return (
    <div className="relative hidden min-h-max flex-col items-center bg-primaryBGblack py-20 font-NotoSans md:flex">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src={SmokyBg}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="z-10 flex flex-col items-center space-y-5"
      >
        <HeadingDiv
          label="RoadMap"
          width="w-[20rem]"
          height="h-[5rem]"
          text="text-3xl"
          font="font-bold"
        />
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-medium text-white"
        >
          How we are building the future of E-contract
        </motion.h1>
      </motion.div>

      {/* Roadmap */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mt-60 flex flex-col items-center justify-center gap-20 pb-[82rem]"
      >
        {/* Vertical Line */}
        <div className="absolute -top-36 z-0 h-[83rem] w-2 rounded-full bg-gradient-to-b from-primaryBGblack to-buttonYellow md:-left-28 lg:-left-1"></div>

        <div className="relative">
          {roadmapData.map((elem, index) => (
            <div key={elem.heading} className="relative">
              {/* Quarter Info */}
              <motion.div
                variants={itemVariants}
                className="w-30 absolute -mt-10 px-2 py-2 text-3xl font-semibold tracking-wide text-buttonYellow md:-left-[22rem] lg:-left-[19rem]"
                style={{ top: `${index * 350 + 55}px` }}
              >
                {elem.quarter}
              </motion.div>

              {/* Center Diamond (Marker) */}
              <motion.div
                variants={itemVariants}
                className="absolute z-20 mt-3 flex rotate-45 items-center justify-center md:-left-[8.6rem] lg:-left-[2rem]"
                style={{ top: `${index * 350}px` }}
              >
                <motion.div
                  variants={diamondVariants}
                  className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-buttonYellow"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-buttonYellow">
                    <div className="h-12 w-12 rounded-lg bg-buttonYellow"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Info */}
              <motion.div
                variants={itemVariants}
                className="absolute -mt-10 space-y-3 rounded-2xl border-2 border-buttonYellow/40 px-6 py-6 pr-20 text-textGray md:-right-[22rem] md:w-[25rem] lg:-right-[38rem] lg:w-[30rem]"
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
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapSection;
