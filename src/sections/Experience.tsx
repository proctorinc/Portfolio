import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

const Experience = (props: MainSectionProps) => {
  const { innerRef } = props;
  const { scrollY } = useScroll({
    target: innerRef,
    offset: ["start center", "end start"],
  });
  const scrollProgress = useTransform(scrollY, [0, 4000], [-1000, -30]);

  const jobs = [
    {
      title: "Bachelor's Computer Science,",
      subtitle: "Cyber Security Concentration",
      company: "George Fox University",
      dateRange: "August 2017-May 2021",
    },
    {
      title: "Cyber Security Intern",
      company: "Swan Island Networks",
      dateRange: "May 2021-July 2021",
    },
    {
      title: "Technical Support Engineer",
      company: "Secure Code Warrior",
      dateRange: "September 2021-Current",
    },
  ];

  return (
    <section
      ref={innerRef}
      className="relative flex flex-col items-center justify-center w-full gradient-dark-to-light shadow-inner-2xl shadow-slate-900 pt-64 pb-96"
    >
      <h1 className="text-6xl font-extrabold">Experience</h1>
      <div className="flex w-full pt-20 pb-96">
        <div className="flex justify-end items-end w-1/4 px-10">
          <div className="relative flex flex-col items-center justify-around border-2 border-slate-600 rounded-full w-3 h-screen bg-slate-400/20">
            {jobs.map((_, i) => (
              <div
                key={i}
                className="border-2 border-slate-600 rounded-full w-6 h-6 bg-slate-400/20"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-around w-3/4 h-screen">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{
                scale: 0,
                x: -500,
              }}
              whileInView={{
                scale: 1,
                x: 0,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">{job.title}</h2>
              {job?.subtitle && (
                <h2 className="text-3xl font-bold">{job.subtitle}</h2>
              )}
              <h3 className="text-2xl font-extralight text-slate-400">
                {job.company}
              </h3>
              <p className="text-md text-slate-600">{job.dateRange}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 h-96 w-full">
        <svg
          className="-mt-96 flex-no-shrink fill-current w-full"
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
            style={{ y: scrollProgress }}
          ></motion.path>
          <motion.rect
            style={{ y: scrollProgress }}
            x="0"
            y="600"
            width="900"
            height="2000"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
};

export default Experience;
