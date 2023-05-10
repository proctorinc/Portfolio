import { RefObject } from "react";
import { useScroll, motion } from "framer-motion";

import { SocialMediaCluster } from "./components";
import { SmallWaveTransition } from "../../components/Transitions";

type ContactSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Contact = (props: ContactSectionProps) => {
  const { innerRef } = props;
  const { scrollY } = useScroll({
    target: innerRef,
    offset: ["end start", "end end"],
  });

  return (
    <section
      id="contact"
      ref={innerRef}
      className="gradient-light-to-dark relative flex w-full flex-col items-center justify-center pt-64"
    >
      <SmallWaveTransition scrollModifier={scrollY} />
      <div className="flex h-screen items-center justify-center">
        <motion.div
          className="flex flex-col gap-2 text-center"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          }}
        >
          <h1 className="text-5xl font-extrabold sm:py-5 sm:text-7xl">
            Matt Proctor
          </h1>
          <h2 className="text-xl font-extralight text-slate-300">
            matthewalanproctor@gmail.com
          </h2>
          <h2 className="text-xl font-extralight text-slate-300">
            425.295.4143
          </h2>
          <SocialMediaCluster />
        </motion.div>
      </div>
    </section>
  );
};
