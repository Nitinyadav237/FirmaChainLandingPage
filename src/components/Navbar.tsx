import { cross, down, hamburger, world } from "../assets/icons";
import { Logo } from "../assets/images";
import { navLinks, Feature } from "./../../constant";
import { Button } from "../components/Button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openFeat, setOpenFeat] = useState(false);

  const renderNavLinks = (isMobile = false) => {
    return navLinks.map((elem) => (
      <li key={elem.label} className="flex items-center justify-center">
        <a
          className={`flex items-center gap-1 font-NotoSans font-thin text-textGray ${isMobile ? "text-xl" : "text-lg"}`}
          href={elem.href}
        >
          {elem.label}
          {elem.label === "Features" && (
            <span
              className="group relative hidden h-8 w-8 cursor-pointer items-center justify-center lg:flex"
              onMouseEnter={() => setOpenFeat(!openFeat)}
            >
              <img className="h-5 w-5" src={down} alt="down" />
            </span>
          )}
        </a>
      </li>
    ));
  };

  return (
    <>
      <div className="flex items-center justify-between bg-primaryBGblack px-4 pt-20 font-NotoSans text-textWhite md:px-8 lg:px-36">
        {/* LOGO */}
        <div className="flex items-center justify-center">
          <img className="h-20 w-20 object-right" src={Logo} alt="Logo" />
          <h1 className="hidden text-2xl font-bold uppercase md:block">
            Firmachain
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden gap-10 lg:flex">{renderNavLinks()}</ul>

        {/* Button and Language Selection */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 lg:flex">
            <img className="h-10 w-10" src={world} alt="world_icon" />
            <span>EN</span>
          </div>
          <Button label="White Paper" borderRadius="rounded-full" width="" />
          <div className="cursor-pointer lg:hidden">
            <img
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      {open && (
        <div className="absolute right-4 h-[25rem] w-[20rem] rounded-3xl bg-secondaryBGgray/85 px-10 py-10 backdrop-blur-2xl">
          <div
            className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <img className="h-4 w-4" src={cross} alt="cross" />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="border-b-2 text-xl text-textWhite">Menu</h1>
            <ul className="flex flex-col gap-10">{renderNavLinks(true)}</ul>
          </div>
        </div>
      )}

      {/* Features Dropdown */}
      {openFeat && (
        <div className="group absolute left-1/2 h-[14rem] w-[12rem] -translate-x-1/2 rounded-3xl bg-secondaryBGgray/85 px-10 py-10">
          <div
            className="flex flex-col space-y-4"
            onMouseLeave={() => setOpenFeat(false)}
          >
            {Feature.map((elem) => (
              <li
                key={elem.id}
                className="list-decimal font-NotoSans text-base font-light"
              >
                <a href={elem.link}>{elem.label}</a>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
