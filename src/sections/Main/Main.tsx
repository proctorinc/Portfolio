import { RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Background, ProfilePicture, SubTitle, Title } from "./components";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Main = (props: MainSectionProps) => {
  const { innerRef } = props;
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end start"],
  });

  const scrollProgress = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);

  return (
    <section id="home" ref={innerRef} className="-mt-20 sm:-mt-[72px]">
      <motion.div
        className="fixed -z-10 flex h-screen w-full flex-col items-center justify-center overflow-clip bg-cover px-5 pt-40 sm:px-20"
        style={{ opacity: scrollProgress }}
      >
        <Background />
        <div className="grid h-screen w-full grid-cols-1 pb-40 md:grid-cols-2">
          <div className="sm:items-left flex h-fit w-full flex-col items-center justify-center gap-2 sm:h-full">
            <Title />
            <SubTitle />
          </div>
          <div className="order-first flex items-center justify-center sm:order-last">
            <ProfilePicture />
          </div>
        </div>
      </motion.div>
      <div ref={contentRef} className="h-screen w-full"></div>
    </section>
  );
};
