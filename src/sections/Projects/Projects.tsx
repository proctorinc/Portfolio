import { RefObject } from "react";

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
      className="flex w-full flex-col items-center justify-center gap-20 bg-slate-900 pt-20 pb-64"
    >
      <h1 ref={innerRef} className="pt-28 text-6xl font-extrabold">
        Projects
      </h1>
      {PROJECTS.map((projectData, i) => (
        <Project key={i} data={projectData} index={i} />
      ))}
    </section>
  );
};
