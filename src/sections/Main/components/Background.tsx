import { motion, MotionValue } from "framer-motion";

export const Background = () => {
  return (
    <motion.div
      className="gradient-background #bg-[url('/images/space-background.jpeg')] absolute -z-20 h-full w-full bg-cover bg-no-repeat"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 1.75,
          ease: "easeIn",
        },
      }}
    ></motion.div>
  );
};
