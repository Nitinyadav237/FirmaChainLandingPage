import { facebook, likedinWhite, twitterWhite } from "../assets/icons";
import { Button } from "../components/Button";

const FooterSection = () => {
  return (
    <div className="relative flex h-2/3 items-center justify-center bg-primaryBGblack px-3 py-56 font-NotoSans md:h-[52vh] md:px-4 lg:h-[60vh] lg:px-40">
      {/* Part 1 */}
      <div className="absolute -top-1/4 flex max-w-full flex-col items-center justify-center space-y-6 rounded-3xl bg-buttonYellow px-2 py-5 md:px-20 lg:-top-1/3 lg:px-40">
        <div className="text-center md:space-y-4 lg:space-y-8">
          <h1 className="px-4 py-4 text-center text-xl font-bold uppercase md:text-2xl lg:text-4xl">
            Our white paper is now available
          </h1>
          <p className="px-8 text-lg font-medium text-secondaryBGgray lg:text-2xl">
            The following is a list of exchanges where FirmaChain
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 rounded-2xl bg-primaryBGblack px-4 py-2">
          <input
            className="w-3/4 rounded-md bg-primaryBGblack px-1 py-2 text-sm font-semibold text-transparent placeholder:text-white"
            type="email"
            name="email"
            placeholder="Enter your mail address"
          />
          <Button
            label="Subscribe now"
            width="w-28 md:w-32 lg:w-60"
            borderRadius="rounded-lg"
          />
        </div>
      </div>

      {/* Part 2 */}
      <div className="absolute mb-2 mt-6 flex h-24 max-w-max flex-col px-4 md:px-8 lg:bottom-8 lg:flex-row lg:items-center lg:justify-between lg:px-9">
        {/* Left part (Links) */}
        <div className="flex flex-col py-2 text-base font-medium text-textGray lg:flex-row lg:space-x-6">
          <h2>Home</h2>
          <h2>White paper</h2>
          <h2>Terms of use</h2>
        </div>

        {/* Right part (Social media and copyright) */}
        <div className="mt-12 flex flex-col lg:ml-20 lg:mt-0 lg:flex-row lg:items-center lg:justify-between">
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
