import { RefObject } from "react";
import { useScroll } from "framer-motion";
import { BlobAnimation } from "./components";
import { ScaleAnimation } from "./components/ScaleAnimation";

import SKILLS from "../../data/skills.json";
import { RadialGradient } from "@visx/gradient";
import { Bar, Circle } from "@visx/shape";

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
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-clip bg-slate-900 py-64"
    >
      <BlobAnimation scrollModifier={scrollYProgress} />
      <ScaleAnimation scrollModifier={scrollYProgress}>
        <h1 className="text-6xl font-extrabold">Skills</h1>
        <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-4">
          {SKILLS.map((column) => (
            <div key={column.type}>
              <h2 className="text-3xl font-bold">{column.type}</h2>
              <ol className="grid grid-cols-2 pt-3 sm:grid-cols-1">
                {column.values.map((value) => (
                  <li className="pr-5 font-light text-slate-400" key={value}>
                    {value}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </ScaleAnimation>
    </section>
  );
};
