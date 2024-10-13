import { TeamInfo } from "../../constant";

const Card = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-nowrap">
        {TeamInfo.map(
          ({
            id,
            image,
            name,
            title,
            summary,
            twitterHref,
            twitterImg,
            linkedinHref,
            linkedinImg,
          }) => (
            <div
              key={id}
              className="flex h-[25rem] w-[25rem] flex-col items-center justify-center rounded-3xl bg-white p-5 md:h-[28rem] md:w-[35rem]"
            >
              {/* Image */}
              <div className="h-[7rem] w-[7rem] overflow-hidden rounded-full md:h-[9rem] md:w-[9rem]">
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt={`${name} photo`}
                />
              </div>

              {/* Info */}
              <div className="mt-2 flex flex-col items-center justify-center px-4 text-center">
                <h2 className="text-lg font-semibold text-primaryBGblack md:text-3xl">
                  {name}
                </h2>
                <h4 className="text-base font-medium text-secondaryBGgray md:text-lg">
                  {title}
                </h4>
                <p className="mt-4 text-sm font-medium text-secondaryBGgray/70 md:text-base">
                  {summary}
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-4 flex gap-4">
                <a href={twitterHref} target="_blank" rel="noopener noreferrer">
                  <img className="h-8 w-8" src={twitterImg} alt="Twitter" />
                </a>
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-8 w-8" src={linkedinImg} alt="LinkedIn" />
                </a>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Card;
