 const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay between container and first child
        staggerChildren: 0.3, // Stagger child elements animation
        staggerDirection: 1, // Animate children sequentially
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } }, 
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
  const diamondVariants = {
    hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } }, 
    show: { opacity: 1, scale: 1, rotate:"45deg" ,transition: { duration: 0.5 } },
};
  const imageVariants = {
    hidden: { x: -200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }, // Added ease
    },
  };

  export {containerVariants,itemVariants,imageVariants,diamondVariants}