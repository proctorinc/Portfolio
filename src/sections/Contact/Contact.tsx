import { RefObject, useRef } from "react";
import { useScroll, motion } from "framer-motion";

import { SocialMediaCluster } from "./components";
import { SmallWaveTransition } from "../../components/Transitions";
import { Button } from "../../components";
import { Download } from "phosphor-react";

type ContactSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Contact = (props: ContactSectionProps) => {
  const { innerRef } = props;
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start start", "start end"],
  });

  return (
    <section
      id="contact"
      ref={innerRef}
      className="gradient-light-to-dark relative flex w-full flex-col items-center justify-center pt-[800px] sm:pt-[1250px]"
    >
      <SmallWaveTransition scrollModifier={scrollYProgress} />
      <div
        ref={contentRef}
        className="flex h-screen items-center justify-center"
      >
        <motion.div
          className="relative flex flex-col gap-2 text-center"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          }}
        >
          <h1 className="py-2 text-5xl font-extrabold sm:py-5 sm:text-7xl">
            Matt Proctor
          </h1>
          <h2 className="text-xl font-extralight text-slate-400">
            matthewalanproctor@gmail.com
          </h2>
          <h2 className="text-xl font-extralight text-slate-400">
            425.295.4143
          </h2>
          <SocialMediaCluster />
          <div className="absolute -bottom-20 flex w-full justify-center">
            <Button className="animate-pulse">
              <Download weight="fill" size={15} />
              <a
                href="/static/files/matt_proctor_resume.pdf"
                download="matt_proctor_resume.pdf"
              >
                Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
