import { HeroInfo } from "../../constant";
import { HeroImg } from "../assets/images";
import { Button, HeadingDiv, SecondaryButton } from "../components/Button";
import Navbar from "./../components/Navbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }, // Added ease
    },
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }, // Added ease
    },
  };

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }, // Added ease
    },
  };

  return (
    <>
      <div className="relative max-h-max bg-primaryBGblack pb-[48rem] text-textWhite lg:pb-[35rem]">
        <Navbar />
        {/* hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-[90vh] flex-col px-4 font-NotoSans md:px-8 lg:flex lg:flex-row lg:px-36"
        >
          <div className="py-20 uppercase lg:w-3/4">
            <div className="mt-2">
              <motion.h1
                variants={textVariants}
                className="text-2xl leading-3 tracking-wider md:text-6xl lg:text-7xl"
              >
                A blockchain
              </motion.h1>
              <motion.span
                variants={textVariants}
                className="mt-6 inline-block text-4xl font-bold tracking-wider md:text-7xl"
              >
                based e-contract
              </motion.span>
            </div>
            <div className="mt-10 space-y-5 md:mt-16">
              <HeadingDiv
                label="Platform"
                width="lg:w-[35rem] "
                height="h-20"
                text="lg:text-6xl md:text-4xl text-2xl"
                font="font-bold"
              />

              <motion.p
                variants={textVariants}
                className="text-sm font-medium text-textGray md:text-base lg:w-2/3"
              >
                unlocking new limits of electronic contracts with blockchain
                technology, firmachain seeks to
              </motion.p>
            </div>

            {/* button */}
            <motion.div
              variants={buttonVariants}
              className="mt-10 flex flex-wrap gap-6 md:gap-8"
            >
              <Button
                label="Get started"
                borderRadius="rounded-full"
                width="md:w-[20rem] w-[14rem] "
              />
              <SecondaryButton
                label="See how it works"
                padding="lg:px-10 "
                arrow="white"
                width="md:w-[20rem] w-[14rem] "
                font="text-xl"
              />
            </motion.div>
          </div>

          <motion.div
            variants={imageVariants}
            className="ml-2 mt-2 flex items-center justify-center py-2 lg:mt-20"
          >
            <img
              src={HeroImg}
              alt="HeroImg"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="absolute bottom-4 flex items-center justify-center px-2 lg:bottom-10 lg:justify-center lg:px-24"
        >
          <div className="flex w-full flex-wrap items-center justify-center gap-2 md:py-4 lg:h-44 lg:w-[70rem] lg:flex-nowrap">
            {HeroInfo.map((elem) => (
              <div key={elem.id} className="flex w-[15rem] lg:w-[20rem]">
                <div
                  className="h-20 w-[2.5rem] px-4 pl-2 text-2xl font-medium tracking-tighter text-transparent lg:pr-12 lg:text-5xl"
                  style={{ WebkitTextStroke: "1px #6a6e31" }}
                >
                  {elem.id}
                </div>

                <div className="w-full flex-col items-center justify-center lg:px-2">
                  <h2 className="text-lg font-medium uppercase text-textWhite md:text-lg">
                    {elem.heading}
                  </h2>
                  <p className="text:xs uppercase text-textGray/60">
                    {elem.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
