import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bar } from "@visx/shape";
import { SocialMediaCluster } from "./Main/components";

type ContactSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

const Contact = (props: ContactSectionProps) => {
  const { innerRef } = props;
  const { scrollY } = useScroll({
    target: innerRef,
    offset: ["end start", "end end"],
  });
  const scrollProgress = useTransform(scrollY, [0, 4000], [-1000, -30]);

  return (
    <section
      ref={innerRef}
      className="gradient-light-to-dark relative flex w-full flex-col items-center justify-center pt-64"
    >
      <div className="absolute top-0 h-96 w-full">
        <svg
          className="flex-no-shrink -mt-[500px] w-full fill-current"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <motion.path
            d="M0 455L16.7 448C33.3 441 66.7 427 100 415.8C133.3 404.7 166.7 396.3 200 406.2C233.3 416 266.7 444 300 458.3C333.3 472.7 366.7 473.3 400 462.2C433.3 451 466.7 428 500 427.3C533.3 426.7 566.7 448.3 600 464.8C633.3 481.3 666.7 492.7 700 500.8C733.3 509 766.7 514 800 494.3C833.3 474.7 866.7 430.3 883.3 408.2L900 386L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z"
            fill="#0f172a"
            strokeLinecap="round"
            strokeLinejoin="miter"
            style={{ y: scrollProgress, rotate: 180 }}
          ></motion.path>
        </svg>
      </div>
      <div className="flex h-screen items-center justify-center">
        <div className="relative rounded-xl border-2 border-slate-600 bg-slate-500/20">
          <div className="absolute z-10 h-full w-full">
            <svg className="h-full w-full">
              <Bar fill={`url(#smallerlines)`} width="100%" height="100%" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 p-10 text-center">
            <h1 className="text-5xl font-extrabold">Matt Proctor</h1>
            <h2 className="text-xl font-extralight text-slate-300">
              matthewalanproctor@gmail.com
            </h2>
            <h2 className="text-xl font-extralight text-slate-300">
              425.295.4143
            </h2>
            <SocialMediaCluster />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
