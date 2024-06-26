import { RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import JOBS from "../../data/jobs.json";
import { Button } from "../../components";
import { PatternLines } from "@visx/pattern";
import { Bar } from "@visx/shape";
import { CaretDown, Question } from "phosphor-react";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
};

export const Experience = (props: MainSectionProps) => {
  const { innerRef, contactRef } = props;
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end start", "end end"],
  });

  const waveMotion = useTransform(scrollYProgress, [0, 1], ["5vh", "-25vh"]);
  const boxHeight = useTransform(scrollYProgress, [1, 0], ["26vh", "-4vh"]);

  return (
    <section
      ref={contentRef}
      id="experience"
      className="gradient-dark-to-light relative flex w-full flex-col items-center justify-center pb-80 pt-64 shadow-inner-2xl shadow-slate-900"
    >
      <h1 ref={innerRef} className="pt-28 text-6xl font-extrabold">
        Experience
      </h1>
      <div className="flex w-full pr-5 pt-20 sm:pb-96">
        <div className="flex w-1/5 items-end justify-end px-10 sm:w-1/4">
          <div className="relative flex h-[1250px] w-3 flex-col items-center justify-around rounded-full border-2 border-slate-600 bg-slate-400/20 shadow-xl">
            {JOBS.map((_, i) => (
              <div
                key={i}
                className="h-6 w-6 rounded-full border-2 border-slate-600 bg-slate-400/20"
              />
            ))}
          </div>
        </div>
        <div className="z-20 flex w-4/5 max-w-[1000px] flex-col justify-around sm:w-3/4">
          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              className="-mt-10 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center sm:gap-5"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <div className="relative flex h-28 w-28 items-center justify-center rounded-xl border-2 border-slate-600 bg-slate-500/20 shadow-xl">
                <svg className="absolute h-full w-full">
                  <PatternLines
                    id="smallerlines"
                    stroke="rgb(255, 255, 255, 0.01)"
                    strokeWidth={2}
                    width={50}
                    height={50}
                    orientation={["vertical", "horizontal"]}
                  />
                  <Bar fill={`url(#smallerlines)`} width="100%" height="100%" />
                </svg>
                <motion.div
                  className="absolute p-5"
                  initial={{
                    scale: 1,
                    y: 0,
                  }}
                  whileHover={{
                    scale: 1.5,
                    y: -15,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  }}
                >
                  <img
                    className="aspect-square max-h-24 rounded-full bg-white object-contain p-1"
                    src={`/static/images/${job.image}`}
                  />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold sm:text-3xl">{job.title}</h2>
                {job?.subtitle && (
                  <h2 className="text-lg font-bold sm:text-2xl">
                    {job.subtitle}
                  </h2>
                )}
                <h3 className="text-lg italic text-slate-400 sm:text-2xl">
                  {job.company}
                </h3>
                <p className="text-md font-semibold text-slate-500">
                  {job.dateRange}
                </p>
                {/* {job.description.length > 0 && (
                  <Button className="mt-3">
                    <CaretDown weight="fill" size={15} />
                    <span>more</span>
                  </Button>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 z-40 -mt-2 w-full bg-[#121f39]"
        style={{ height: boxHeight }}
      />
      <motion.svg
        className="flex-no-shrink absolute bottom-0 z-10 -mt-2 w-full fill-current"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        style={{ y: waveMotion }}
      >
        <motion.path
          d="M0 455L16.7 448C33.3 441 66.7 427 100 415.8C133.3 404.7 166.7 396.3 200 406.2C233.3 416 266.7 444 300 458.3C333.3 472.7 366.7 473.3 400 462.2C433.3 451 466.7 428 500 427.3C533.3 426.7 566.7 448.3 600 464.8C633.3 481.3 666.7 492.7 700 500.8C733.3 509 766.7 514 800 494.3C833.3 474.7 866.7 430.3 883.3 408.2L900 386L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z"
          fill="#121f39"
          strokeLinecap="round"
          strokeLinejoin="miter"
          className="mt-20"
        ></motion.path>
      </motion.svg>
    </section>
  );
};
