import { ProjectType } from "../../types";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectImage } from "./ProjectImage";

type ProjectProps = {
  data: ProjectType;
  index: number;
};

export const Project = (props: ProjectProps) => {
  const { data: project, index } = props;
  const ordering = index % 2 === 0 ? "order-first sm:order-last" : "";

  return (
    <div
      key={project.image_url}
      className="flex w-full flex-col items-center px-5 py-20 sm:flex-row sm:gap-20 sm:px-20"
    >
      <div className={`${ordering} w-full sm:order-last sm:w-2/5`}>
        <ProjectImage src={project.image_url} />
      </div>
      <div className="relative flex w-full flex-col gap-3 pt-5 sm:w-3/5 sm:pt-24">
        <ProjectDetails data={project} />
      </div>
    </div>
  );
};
