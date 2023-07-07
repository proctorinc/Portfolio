import { ArrowSquareOut, Code } from "phosphor-react";
import { Button } from "../../../../components";
import { ProjectType } from "../../types";
import { ProjectStack } from "./ProjectStack";
import { motion } from "framer-motion";

type ProjectDetailsProps = {
  data: ProjectType;
};

export const ProjectDetails = (props: ProjectDetailsProps) => {
  const { data: project } = props;

  return (
    <motion.div
      className="relative flex w-full flex-col gap-5 pt-5 sm:w-3/5 sm:pt-24"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.25,
          ease: "easeIn",
        },
      }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold sm:text-5xl">{project.title}</h2>
        <h3 className="py-1 text-lg font-extralight text-slate-400 sm:text-2xl">
          {project.subtitle}
        </h3>
      </div>
      <ProjectStack stack={project.stack} />
      <p className="text-md font-light leading-7 text-slate-200">
        {project.description}
      </p>
      <div className="flex gap-3">
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
        {project?.git_url && (
          <Button onClick={() => (window.location.href = project.git_url)}>
            <Code weight="fill" size={15} />
            <span>View code</span>
          </Button>
        )}
      </div>
    </motion.div>
  );
};
