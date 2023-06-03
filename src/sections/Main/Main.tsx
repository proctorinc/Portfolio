import { RefObject, useRef } from "react";
import { motion } from "framer-motion";
import { Background, ProfilePicture, SubTitle, Title } from "./components";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Main = (props: MainSectionProps) => {
  const { innerRef } = props;

  return (
    <section id="home" ref={innerRef} className="-mt-20 sm:-mt-[72px]">
      <div className="fixed -z-10 flex h-screen w-full flex-col items-center justify-center overflow-clip bg-cover px-5 pt-40 sm:px-20">
        <Background />
        <motion.div className="grid h-screen w-full grid-cols-1 pb-40 md:grid-cols-2">
          <div className="sm:items-left flex h-fit w-full flex-col items-center justify-center gap-2 sm:h-full">
            <Title />
            <SubTitle />
          </div>
          <div className="order-first flex items-center justify-center sm:order-last">
            <ProfilePicture />
          </div>
        </motion.div>
      </div>
      <div className="h-screen w-full"></div>
    </section>
  );
};
