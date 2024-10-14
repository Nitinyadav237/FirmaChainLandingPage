import { containerVariants, itemVariants } from "../../Animation";
import { PartnersInfo } from "../../constant";
import { HeadingDiv } from "../components/Button";
import Card from "../components/Card";
import { motion } from "framer-motion";

const TeamSection = () => {
  // Render partners' logos
  const renderPartners = () => {
    return PartnersInfo.map((elem, index) => (
      <div key={index} className="h-40 w-40 flex-shrink-0">
        <img
          className="h-full w-full object-contain"
          src={elem.image}
          alt="logo"
        />
      </div>
    ));
  };

  // Marquee animation settings
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"], // Moves from 0% to -100%
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Loop type
          duration: 5, // Duration of one full cycle
          ease: "linear", // Linear easing for smooth animation
        },
      },
    },
  };

  return (
    <div className="min-h-max bg-textWhite px-4 pt-20 md:px-8 lg:px-44 lg:py-20">
      {/* Team Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="z-10 flex flex-col items-center space-y-5"
      >
        <HeadingDiv
          label="Team"
          width="w-[20rem]"
          height="h-[5rem]"
          text="text-3xl"
          font="font-bold"
        />

        <motion.p
          variants={itemVariants}
          className="text-center text-base font-medium text-secondaryBGgray lg:w-3/5"
        >
          A team is defined as a group of people who perform interdependent
          tasks to work toward accomplishing a common mission or specific
          objective.
        </motion.p>
      </motion.div>

      {/* Card Section */}
      <Card />

      {/* Partners Section */}
      <div>
        {/* Partners Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="z-10 mt-20 flex flex-col items-center space-y-5"
        >
          <HeadingDiv
            label="Partners"
            width="w-[20rem]"
            height="h-[5rem]"
            text="text-3xl"
            font="font-bold"
          />
          <motion.p
            variants={itemVariants}
            className="w-3/5 text-center text-base font-medium text-secondaryBGgray"
          >
            Participants' interactions create a virtuous cycle within the
            FirmaChain ecosystem.
          </motion.p>
        </motion.div>

        {/* Partners Marquee */}
        <div className="mt-2 overflow-hidden pb-48 pt-20 md:mt-4 lg:mt-20">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            {renderPartners()}
            {renderPartners()} {/* Render again to create a seamless loop */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
