import { rightArrowBlack, rightArrowWhite } from "../assets/icons";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  width: string;
  borderRadius: string;
}

export const Button = ({ label, width, borderRadius }: ButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`${width} flex h-16 items-center justify-center px-4 py-4 font-NotoSans text-base font-semibold md:px-4 md:text-lg lg:px-8 lg:text-xl ${borderRadius} cursor-pointer bg-buttonYellow`}
    >
      <h1 className="text-center uppercase text-primaryBGblack">{label}</h1>
    </motion.div>
  );
};

interface SecondaryButtonProps {
  label: string;
  border?: string;
  width?: string;
  padding: string;
  textColor?: string;
  font: string;
  arrow: "white" | "black";
}

export const SecondaryButton = ({
  label,
  border,
  width,
  padding,
  textColor,
  font,
  arrow,
}: SecondaryButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`border-2 ${border} ${width} flex cursor-pointer items-center justify-center gap-2 rounded-full ${padding} bg-transparent py-3 ${textColor} ${font}`}
    >
      {label}
      <img
        className="h-8 w-8"
        src={arrow === "white" ? rightArrowWhite : rightArrowBlack}
        alt={arrow}
      />
    </motion.button>
  );
};

interface HeadingDivProps {
  label: string;
  width: string;
  height: string;
  text: string;
  font: string;
}

export const HeadingDiv = ({
  label,
  width,
  height,
  text,
  font,
}: HeadingDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`${width} ${height} flex items-center justify-center rounded-custom-shape border-4 border-buttonYellow bg-buttonYellow px-4 py-2 uppercase`}
    >
      <h1 className={`text-primaryBGblack ${text} ${font} tracking-wide`}>
        {label}
      </h1>
    </motion.div>
  );
};
