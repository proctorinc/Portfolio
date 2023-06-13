import { RefObject } from "react";
import { motion } from "framer-motion";

import SKILLS from "../../data/skills.json";
import { Tag } from "../../components/Tag";
import { formatToIcon } from "../../utils";

type SkillsSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Skills = (props: SkillsSectionProps) => {
  const { innerRef } = props;
  return (
    <section
      id="skills"
      ref={innerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-clip bg-slate-900"
    >
      <div className="shadow-b-2 absolute -top-[55vw] z-10 h-full w-full">
        <svg
          id="visual"
          className="flex-no-shrink bottom-0 z-40 h-[80vw] w-full fill-current"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <motion.path
            d="M0 313L25 318.2C50 323.3 100 333.7 150 341.2C200 348.7 250 353.3 300 351.7C350 350 400 342 450 337.7C500 333.3 550 332.7 600 334C650 335.3 700 338.7 750 337.5C800 336.3 850 330.7 875 327.8L900 325L900 451L875 451C850 451 800 451 750 451C700 451 650 451 600 451C550 451 500 451 450 451C400 451 350 451 300 451C250 451 200 451 150 451C100 451 50 451 25 451L0 451Z"
            fill="#0f172a"
          ></motion.path>
        </svg>
      </div>
      <h1 className="py-32 text-6xl font-extrabold">Skills</h1>
      <div className="z-20  grid max-w-[1000px] grid-cols-1 gap-16 p-10 sm:grid-cols-2">
        {SKILLS.map((column) => {
          const Icon = formatToIcon(column.icon);
          return (
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
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <Icon weight="fill" size={25} />
                <h2 className="py-3 text-3xl font-bold">{column.type}</h2>
              </div>
              <div className="flex w-full flex-wrap gap-1">
                {column.values.map((value) => (
                  <Tag key={value}>{value}</Tag>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
