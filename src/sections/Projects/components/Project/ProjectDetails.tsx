import { ArrowSquareOut, Code } from "phosphor-react";
import { Button } from "../../../../components";
import { ProjectType } from "../../types";
import { ProjectStack } from "./ProjectStack";

type ProjectDetailsProps = {
  data: ProjectType;
};

export const ProjectDetails = (props: ProjectDetailsProps) => {
  const { data: project } = props;

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold">{project.title}</h2>
        <h3 className="py-1 text-3xl font-extralight text-slate-400">
          {project.subtitle}
        </h3>
      </div>
      <ProjectStack stack={project.stack} />
      <p className="text-md font-light text-slate-200">{project.description}</p>
      <div className="flex gap-3">
        <Button onClick={() => (window.location.href = project.git_url)}>
          <Code weight="fill" size={15} />
          <span>View code</span>
        </Button>
        {project?.app_url && (
          <Button
            onClick={() =>
              project.app_url ? (window.location.href = project.app_url) : null
            }
          >
            <ArrowSquareOut weight="fill" size={15} />
            <span>Visit App</span>
          </Button>
        )}
      </div>
    </>
  );
};
