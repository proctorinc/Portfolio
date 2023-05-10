import { RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Background, ProfilePicture, SubTitle, Title } from "./components";
import { WaveTransition } from "../../components/Transitions";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Main = (props: MainSectionProps) => {
  const { innerRef } = props;
  const contentRef = useRef(null);
  const { scrollYProgress: scrollProgressFromTop } = useScroll({
    target: contentRef,
    offset: ["end end", "end start"],
  });
  const { scrollY } = useScroll({
    target: innerRef,
    offset: ["center center", "end start"],
  });
  const waveOneSpeed = useTransform(
    scrollProgressFromTop,
    [0, 1],
    ["20%", "-60%"]
  );
  const waveTwoSpeed = useTransform(
    scrollProgressFromTop,
    [0, 1],
    ["15%", "-45%"]
  );
  const waveThreeSpeed = useTransform(
    scrollProgressFromTop,
    [0, 1],
    ["13%", "-25%"]
  );
  const waveFourSpeed = useTransform(
    scrollProgressFromTop,
    [0, 1],
    ["8%", "-15%"]
  );
  const waveFiveSpeed = useTransform(
    scrollProgressFromTop,
    [0, 1],
    ["5%", "-4%"]
  );

  return (
    <section
      id="home"
      ref={innerRef}
      className="relative flex w-full flex-col items-center justify-center overflow-clip bg-cover px-5 sm:py-28 sm:px-20"
    >
      <Background scrollModifier={scrollY} />
      <motion.div
        ref={contentRef}
        className="grid h-screen w-full grid-cols-1 pb-40 sm:grid-cols-2"
        style={{ y: scrollY }}
      >
        <div className="sm:items-left flex h-fit w-full flex-col items-center justify-center sm:h-full">
          <Title />
          <SubTitle />
        </div>
        <div className="order-first flex items-center justify-center sm:order-last">
          <ProfilePicture />
        </div>
      </motion.div>
      <WaveTransition
        waveOneSpeed={waveOneSpeed}
        waveTwoSpeed={waveTwoSpeed}
        waveThreeSpeed={waveThreeSpeed}
        waveFourSpeed={waveFourSpeed}
        waveFiveSpeed={waveFiveSpeed}
      />
    </section>
  );
};
