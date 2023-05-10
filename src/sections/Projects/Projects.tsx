import { RefObject } from "react";
import { Bar } from "@visx/shape";

import { Project } from "./components";
import PROJECTS from "../../data/projects.json";

type ProjectsSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Projects = (props: ProjectsSectionProps) => {
  const { innerRef } = props;

  return (
    <section
      id="projects"
      ref={innerRef}
      className="flex w-full flex-col items-center justify-center bg-slate-900 pt-20 pb-64"
    >
      <div className="absolute h-full w-full">
        <Bar fill={`url(#lines)`} width="100%" height="100%" />
      </div>
      <h1 className="text-6xl font-extrabold">Projects</h1>
      {PROJECTS.map((projectData, i) => (
        <Project key={i} data={projectData} index={i} />
      ))}
    </section>
  );
};
