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
    <section id="home" ref={innerRef} className="-mt-20">
      <Background />
      <div className="fixed -z-10 flex h-screen w-full flex-col items-center justify-center overflow-clip bg-cover px-5 pt-40 sm:px-20">
        <motion.div
          ref={contentRef}
          className="grid h-screen w-full grid-cols-1 pb-40 md:grid-cols-2"
        >
          <div className="sm:items-left flex h-fit w-full flex-col items-center justify-center gap-2 sm:h-full">
            <Title />
            <SubTitle />
          </div>
          <div className="flex items-center justify-center">
            <ProfilePicture />
          </div>
        </motion.div>
      </div>
      <div className="h-screen w-full"></div>
    </section>
  );
};
