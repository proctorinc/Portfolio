import { motion, MotionValue } from "framer-motion";

type BackgroundProps = {
  scrollModifier: MotionValue<number>;
};

export const Background = (props: BackgroundProps) => {
  const { scrollModifier } = props;

  return (
    <motion.div
      className="gradient-background #bg-[url('/images/space-background.jpeg')] absolute -z-20 h-full w-full bg-cover bg-no-repeat"
      style={{ y: scrollModifier }}
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
