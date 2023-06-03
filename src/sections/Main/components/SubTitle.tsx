import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export const SubTitle = () => {
  const [index, setIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const subHeaders = [
    "Security minded, full stack developer",
    "Curious, enthusiastic learner",
    "Scripter, automator, and improver",
    "Clean code enthusiast",
    "Guy who loves to code",
  ];

  useEffect(() => {
    if (animationComplete) {
      const interval = setInterval(
        () =>
          setIndex((previous) =>
            previous === subHeaders.length - 1 ? 0 : previous + 1
          ),
        2000
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [animationComplete]);

  return (
    <motion.div
      className="relative flex h-20 w-fit text-center text-2xl font-extralight text-slate-500 md:text-3xl"
      initial={{
        opacity: 0,
        translateY: -50,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          delay: 1.5,
          duration: 0.25,
          type: "spring",
          stiffness: 45,
        },
      }}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      <motion.h2
        key={index}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        {subHeaders[index]}
      </motion.h2>
    </motion.div>
  );
};
