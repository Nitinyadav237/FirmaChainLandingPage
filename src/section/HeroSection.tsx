import { HeroInfo } from "../../constant";
import { HeroImg } from "../assets/images";
import { Button, HeadingDiv, SecondaryButton } from "../components/Button";
import Navbar from "./../components/Navbar";
const HeroSection = () => {
  return (
    <>
      <div className="h-[220vh] bg-primaryBGblack text-textWhite md:h-[180vh] lg:h-[160vh]">
        <Navbar />
        {/* hero */}
        <div className="h-[90vh] flex-col px-4 font-NotoSans md:px-8 lg:flex lg:flex-row lg:px-36">
          <div className="uppercase lg:w-2/3">
            <div className="mt-20">
              <h1 className="text-2xl leading-3 tracking-wider md:text-6xl lg:text-7xl">
                A blockchain
              </h1>
              <span className="mt-6 inline-block text-4xl font-bold tracking-wider md:text-7xl">
                based e-contract
              </span>
            </div>
            <div className="mt-10 space-y-5 md:mt-16">
              <HeadingDiv
                label="Platform"
                width="lg:w-[35rem] "
                height="h-20"
                text="lg:text-6xl md:text-4xl text-2xl"
                font="font-bold"
              />

              <p className="text-sm font-medium text-textGray md:text-base lg:w-2/3">
                unlocking new limits of electronic contracts with blockchain
                technology, firmachain seeks to
              </p>
            </div>

            {/* button */}
            <div className="mt-10 flex flex-wrap gap-6 md:gap-8">
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
            </div>
          </div>

          <div className="mt-6 flex w-full items-center px-2 py-2 lg:mt-1 lg:w-1/3">
            <img src={HeroImg} alt="HeroImg" />
          </div>
        </div>
        <div className="justify mt-72 flex items-center px-2 md:mt-96 md:px-4 lg:mt-10 lg:justify-center lg:px-20">
          <div className="flex h-56 w-full flex-wrap items-center justify-center gap-2 md:py-4 lg:h-44 lg:w-[70rem] lg:flex-nowrap">
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
        </div>
      </div>
    </>
  );
};

export default HeroSection;
