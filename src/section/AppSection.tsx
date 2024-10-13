import { AppInfo } from "../../constant";
import { RightImg } from "../assets/images";
import { HeadingDiv, SecondaryButton } from "../components/Button";
import { motion } from 'framer-motion';
import { imageVariants,containerVariants,itemVariants } from "../../Animation";

const AppSection = () => {
  const renderAppFeatures = () => {
    return AppInfo.map((elem, i) => (
      <motion.div
         variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        key={i} className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondaryBGgray/25">
          <motion.img variants={imageVariants}   className="h-8 w-8" src={elem.image} alt={elem.label} />
        </div>
        <motion.h2 variants={itemVariants}  className="font-NotoSans text-base font-medium text-textWhite">
          {elem.label}
        </motion.h2>
      </motion.div>
    ));
  };

  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-between border-b border-buttonYellow/20 bg-primaryBGblack px-4 md:px-8 lg:flex-nowrap lg:px-36 lg:py-36">
      {/* Left Section */}
      <motion.div
         variants={containerVariants}
          initial="hidden"
          whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        
        className="mt-14 w-[60rem] space-y-5 px-2">
        <HeadingDiv
          label="Application"
          width="w-[8rem]"
          height="h-[3rem]"
          text="text-sm"
          font="font-medium"
        />
        <motion.h1 variants={itemVariants} className="text-xl font-semibold uppercase tracking-wide text-textWhite md:text-2xl lg:text-4xl">
          Service Application Core
        </motion.h1>
        <motion.p variants={itemVariants} className="text-base font-medium text-textGray lg:w-[30rem]">
          DONUE is available on both Web & Mobile, covering all the steps
          required for closing a contract.
        </motion.p>

        {renderAppFeatures()}

        {/* Learn More Button */}
        <SecondaryButton
          label="Visit Donue"
          textColor="text-textWhite"
          border="border-buttonYellow"
          arrow="white"
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
        className="mt-2 flex w-full items-center">
        <motion.img variants={imageVariants} src={RightImg} alt="RightImg" />
      </motion.div>
    </div>
  );
};

export default AppSection;
