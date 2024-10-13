import { FeatureInfo } from "../../constant";
import { LeftImg } from "../assets/images";
import { HeadingDiv, SecondaryButton } from "../components/Button";

const FeatSection = () => {
  const renderFeatureItems = () => {
    return FeatureInfo.map((elem) => (
      <div
        key={elem.id}
        className="lspace-y-4 lrounded-2xl lg:mt- md:px- md:w-[28rem cursor-pointer px-4 py-4 hover:border-white hover:bg-white hover:shadow-lg hover:shadow-black/20 md:h-[10rem]"
      >
        <h1 className="text-lg font-bold">{elem.heading}</h1>
        <ul className="list-inside list-disc space-y-4 pl-4 text-base font-normal text-secondaryBGgray">
          <li>{elem.sub1}</li>
          <li>{elem.sub2}</li>
        </ul>
      </div>
    ));
  };

  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-between bg-textWhite px-4 pt-20 md:px-8 lg:flex-nowrap lg:px-36 lg:py-36">
      {/* Left Section */}
      <div className="h-1/2 w-[60rem] space-y-8 px-2 lg:space-y-5">
        <HeadingDiv
          label="Features"
          width="w-[8rem]"
          height="h-[3rem]"
          text="text-sm"
          font="font-medium"
        />
        <h1 className="text-xl font-semibold uppercase tracking-wide md:text-2xl lg:text-4xl">
          Forgery and Tamper Proof
        </h1>
        <p className="w-2/3 text-base font-medium text-secondaryBGgray lg:w-[30rem]">
          DONUE is available on both Web & Mobile, covering all the steps
          required for closing a contract.
        </p>

        {/* Left Image */}
        <div className="md:h-[30rem] md:w-[35rem] lg:h-[28rem] lg:w-[30rem]">
          <img src={LeftImg} alt="leftImg" />
        </div>

        {/* Learn More Button */}
        <SecondaryButton
          label="Learn More"
          textColor="text-primaryBGblack"
          border="border-primaryBGblack"
          arrow="black"
          padding="px-5"
          font="font-medium"
        />
      </div>

      {/* Right Section */}
      <div className="space-y-6 py-10 md:px-10">{renderFeatureItems()}</div>
    </div>
  );
};

export default FeatSection;
