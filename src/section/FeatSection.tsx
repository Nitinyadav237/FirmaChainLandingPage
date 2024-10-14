import { FeatureInfo } from "../../constant";
import { LeftImg } from "../assets/images";
import { HeadingDiv, SecondaryButton } from "../components/Button";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from "../../Animation";

const FeatSection = () => {
  const renderFeatureItems = () => {
    return FeatureInfo.map((elem, i) => (
      <div
        key={i}
        className="cursor-pointer px-4 py-4 hover:border-white hover:bg-white hover:shadow-lg hover:shadow-black/20 md:h-[10rem] md:w-[28rem] md:px-8 lg:space-y-4 lg:rounded-2xl"
      >
        <motion.h1 variants={itemVariants} className="text-lg font-bold">
          {elem.heading}
        </motion.h1>
        <motion.ul
          variants={itemVariants}
          className="list-inside list-disc space-y-4 pl-4 text-base font-normal text-secondaryBGgray"
        >
          <li>{elem.sub1}</li>
          <li>{elem.sub2}</li>
        </motion.ul>
      </div>
    ));
  };

  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-between bg-textWhite px-4 pt-20 md:px-8 lg:flex-nowrap lg:px-36 lg:py-36">
      {/* Left Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="h-1/2 w-[60rem] space-y-8 px-2 lg:space-y-5"
      >
        <HeadingDiv
          label="Features"
          width="w-[8rem]"
          height="h-[3rem]"
          text="text-sm"
          font="font-medium"
        />
        <motion.h1
          variants={itemVariants}
          className="text-xl font-semibold uppercase tracking-wide md:text-2xl lg:text-4xl"
        >
          Forgery and Tamper Proof
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="w-2/3 text-base font-medium text-secondaryBGgray lg:w-[30rem]"
        >
          DONUE is available on both Web & Mobile, covering all the steps
          required for closing a contract.
        </motion.p>

        {/* Left Image */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:h-[30rem] md:w-[35rem] lg:h-[28rem] lg:w-[30rem]"
        >
          <motion.img variants={imageVariants} src={LeftImg} alt="leftImg" />
        </motion.div>

        {/* Learn More Button */}
        <SecondaryButton
          label="Learn More"
          textColor="text-primaryBGblack"
          border="border-primaryBGblack"
          arrow="black"
          padding="px-5"
          font="font-medium"
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6 py-10 md:px-10"
      >
        {renderFeatureItems()}
      </motion.div>
    </div>
  );
};

export default FeatSection;
