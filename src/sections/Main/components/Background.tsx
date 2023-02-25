import { motion, MotionValue } from "framer-motion";

type BackgroundProps = {
  scrollModifier: MotionValue<number>;
};

export const Background = (props: BackgroundProps) => {
  const { scrollModifier } = props;

  return (
    <motion.div
      className="absolute gradient-background w-full h-full bg-cover bg-no-repeat #bg-[url('/images/space-background.jpeg')] -z-20"
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
