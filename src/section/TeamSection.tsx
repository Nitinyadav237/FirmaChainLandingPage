import { PartnersInfo } from "../../constant";
import { HeadingDiv } from "../components/Button";
import Card from "../components/Card";

const TeamSection = () => {
  const renderPartners = () => {
    return PartnersInfo.concat(PartnersInfo).map((elem, index) => (
      <div key={index} className="h-40 w-40 flex-shrink-0">
        <img
          className="h-full w-full object-contain"
          src={elem.image}
          alt="logo"
        />
      </div>
    ));
  };

  return (
    <div className="h-[330vh] md:h-[230vh] bg-textWhite px-4 pt-20 md:px-8 lg:h-[200vh] lg:px-44 lg:py-20">
      {/* Team Section */}
      <div className="z-10 flex flex-col items-center space-y-5">
        <HeadingDiv
          label="Team"
          width="w-[20rem]"
          height="h-[5rem]"
          text="text-3xl"
          font="font-bold"
        />
        <p className="text-center text-base font-medium text-secondaryBGgray lg:w-3/5">
          A team is defined as a group of people who perform interdependent
          tasks to work toward accomplishing a common mission or specific
          objective.
        </p>
      </div>

      {/* Card Section */}
      <Card />

      {/* Partners Section */}
      <div>
        {/* Partners Heading */}
        <div className="z-10 mt-20 flex flex-col items-center space-y-5">
          <HeadingDiv
            label="Partners"
            width="w-[20rem]"
            height="h-[5rem]"
            text="text-3xl"
            font="font-bold"
          />
          <p className="w-3/5 text-center text-base font-medium text-secondaryBGgray">
            Participants' interactions create a virtuous cycle within the
            FirmaChain ecosystem.
          </p>
        </div>

        {/* Partners Marquee */}
        <div className="mt-2 overflow-hidden md:mt-4 lg:mt-20">
          <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
            {renderPartners()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
