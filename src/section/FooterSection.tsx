import { facebook, likedinWhite, twitterWhite } from "../assets/icons";
import { Button } from "../components/Button";

const FooterSection = () => {
  return (
    <div className="relative h-[85vh] bg-primaryBGblack px-2 font-NotoSans md:h-[52vh] md:px-4 lg:h-[60vh]">
      {/* Part 1 */}
      <div className="absolute -top-52 mt-20 flex h-[20rem] w-[22rem] flex-col items-center justify-center rounded-3xl border-2 bg-buttonYellow md:-top-56 md:w-[45rem] lg:-top-2/3 lg:w-[70rem] lg:translate-x-[12rem] lg:px-4 lg:py-4">
        <div className="mt-10 space-y-2 text-center md:space-y-4 lg:space-y-8">
          <h1 className="px-2 py-2 text-center text-xl font-bold uppercase md:text-2xl lg:text-4xl">
            Our white paper is now available
          </h1>
          <p className="text-lg font-medium text-secondaryBGgray">
            The following is a list of exchanges where FirmaChain
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between rounded-2xl border-2 bg-primaryBGblack px-2 py-2 md:w-[28rem] md:px-4 lg:w-2/3 lg:px-8">
          <input
            className="w-2/4 rounded-md bg-primaryBGblack px-1 py-2 text-sm font-semibold text-transparent placeholder:text-white"
            type="email"
            name="email"
            placeholder="Enter your mail address"
          />
          <Button
            label="Subscribe now"
            width="w-32 md:w-32 lg:w-60"
            borderRadius="rounded-lg"
          />
        </div>
      </div>

      {/* Part 2 */}
      <div className="absolute mt-60 flex h-24 w-full flex-col px-4 md:px-8 lg:bottom-0 lg:flex-row lg:items-center lg:justify-between lg:px-44">
        {/* Left part (Links) */}
        <div className="flex flex-col text-base font-medium text-textGray lg:flex-row lg:space-x-6">
          <h2>Home</h2>
          <h2>White paper</h2>
          <h2>Terms of use</h2>
        </div>

        {/* Right part (Social media and copyright) */}
        <div className="mt-12 flex flex-col lg:mt-0 lg:flex-row lg:items-center lg:justify-center">
          <div className="flex gap-4 space-x-2">
            <img className="h-10 w-10" src={facebook} alt="Facebook" />
            <img className="h-10 w-10" src={twitterWhite} alt="Twitter" />
            <img className="h-10 w-10" src={likedinWhite} alt="LinkedIn" />
          </div>
          <div className="mt-8 text-base font-medium text-textGray lg:ml-4 lg:mt-0">
            <h1>Copyright &copy; FirmaChain Pvt. Ltd. | All Rights Reserved</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
