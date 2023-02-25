import { RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Background,
  ProfilePicture,
  SocialMediaCluster,
  SubTitle,
  Title,
  WaveTransition,
} from "./components";
import "./main.css";

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
      ref={innerRef}
      className="relative flex flex-col items-center justify-center w-full bg-cover p-28 overflow-clip"
    >
      <Background scrollModifier={scrollY} />
      <motion.div
        ref={contentRef}
        className="grid grid-cols-2 w-full h-screen pb-40"
        style={{ y: scrollY }}
      >
        <motion.div className="flex flex-col justify-center">
          <Title />
          <SubTitle />
          {/* <SocialMediaCluster /> */}
        </motion.div>
        <motion.div className="flex items-center justify-center">
          <ProfilePicture />
        </motion.div>
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
