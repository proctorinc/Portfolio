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
      className="relative my-64 flex h-screen w-full flex-col items-center justify-center overflow-x-clip"
    >
      <BlobAnimation scrollModifier={scrollYProgress} />
      <ScaleAnimation scrollModifier={scrollYProgress}>
        <h1 className="text-6xl font-extrabold">Skills</h1>
        <div className="grid grid-cols-4 p-10">
          {SKILLS.map((column) => (
            <div key={column.type}>
              <h2 className="text-3xl">{column.type}</h2>
              <ul>
                {column.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScaleAnimation>
    </section>
  );
};
