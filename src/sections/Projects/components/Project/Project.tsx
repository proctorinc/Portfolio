import { ProjectType } from "../../types";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectImage } from "./ProjectImage";

type ProjectProps = {
  data: ProjectType;
  index: number;
};

export const Project = (props: ProjectProps) => {
  const { data: project, index } = props;

  return (
    <div
      key={project.image_url}
      className="flex w-full items-center gap-20 px-20 py-20"
    >
      {index % 2 == 0 ? (
        <>
          <div className="w-2/5">
            <ProjectImage src={project.image_url} />
          </div>
          <div className="relative flex w-3/5 flex-col gap-3 pt-24">
            <ProjectDetails data={project} />
          </div>
        </>
      ) : (
        <>
          <div className="relative flex w-3/5 flex-col gap-3 pt-24">
            <ProjectDetails data={project} />
          </div>
          <div className="w-2/5">
            <ProjectImage src={project.image_url} />
          </div>
        </>
      )}
    </div>
  );
};
