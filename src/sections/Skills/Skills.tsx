import { RefObject } from "react";
import { motion, useScroll } from "framer-motion";
import { BlobAnimation } from "./components";
import { ScaleAnimation } from "./components/ScaleAnimation";

import SKILLS from "../../data/skills.json";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Skills = (props: MainSectionProps) => {
  const { innerRef } = props;

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="skills"
      ref={innerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-clip bg-slate-900"
    >
      <div className="absolute -top-[65vw] -z-10 w-full">
        <svg
          className="flex-no-shrink bottom-0 w-full fill-current"
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
          ></motion.path>
        </svg>
      </div>
      <h1 className="text-6xl font-extrabold">Skills</h1>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-3">
        {SKILLS.map((column) => (
          <motion.div
            key={column.type}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }}
          >
            <h2 className="text-3xl font-bold">{column.type}</h2>
            <ol className="grid grid-cols-2 pt-3 sm:grid-cols-1">
              {column.values.map((value) => (
                <li className="pr-5 font-light text-slate-400" key={value}>
                  {value}
                </li>
              ))}
            </ol>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
