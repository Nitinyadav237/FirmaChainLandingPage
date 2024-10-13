import { AppInfo } from "../../constant";
import { RightImg } from "../assets/images";
import { HeadingDiv, SecondaryButton } from "../components/Button";

const AppSection = () => {
  const renderAppFeatures = () => {
    return AppInfo.map((elem, i) => (
      <div key={i} className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondaryBGgray/25">
          <img className="h-8 w-8" src={elem.image} alt={elem.label} />
        </div>
        <h2 className="font-NotoSans text-base font-medium text-textWhite">
          {elem.label}
        </h2>
      </div>
    ));
  };

  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-between border-b border-buttonYellow/20 bg-primaryBGblack px-4 md:px-8 lg:flex-nowrap lg:px-36 lg:py-36">
      {/* Left Section */}
      <div className="mt-14 w-[60rem] space-y-5 px-2">
        <HeadingDiv
          label="Application"
          width="w-[8rem]"
          height="h-[3rem]"
          text="text-sm"
          font="font-medium"
        />
        <h1 className="text-xl font-semibold uppercase tracking-wide text-textWhite md:text-2xl lg:text-4xl">
          Service Application Core
        </h1>
        <p className="text-base font-medium text-textGray lg:w-[30rem]">
          DONUE is available on both Web & Mobile, covering all the steps
          required for closing a contract.
        </p>

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
      </div>

      {/* Right Section */}
      <div className="mt-2 flex w-full items-center">
        <img src={RightImg} alt="RightImg" />
      </div>
    </div>
  );
};

export default AppSection;
