import { RefObject } from "react";

import { Project } from "./components";
import PROJECTS from "../../data/projects.json";
import { Button } from "../../components";
import { ArrowSquareOut, Code } from "phosphor-react";
import { ProjectStack } from "./components/Project/ProjectStack";

type ProjectsSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Projects = (props: ProjectsSectionProps) => {
  const { innerRef } = props;

  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center justify-center gap-20 bg-[#121f39] pt-20"
    >
      <h1 ref={innerRef} className="pt-28 text-6xl font-extrabold">
        Projects
      </h1>
      {PROJECTS.slice(0, 3).map((projectData, i) => (
        <Project key={projectData.title} data={projectData} index={i} />
      ))}
      <div className="flex flex-col gap-5 text-center">
        <h2 className="pt-28 text-5xl font-extrabold">
          Checkout my other projects
        </h2>
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <h3 className="py-1 text-xl font-extralight text-slate-400 sm:text-2xl">
            See my everything I'm working on here:
          </h3>
          <Button
            onClick={() =>
              (window.location.href = "https:/github.com/proctorinc")
            }
          >
            <ArrowSquareOut weight="fill" size={15} />
            github.com/proctorinc
          </Button>
        </div>
      </div>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-5 px-3 pb-20 text-center sm:grid-cols-2 sm:px-10 lg:max-w-[1000px] lg:grid-cols-3">
        {PROJECTS.slice(3).map((project) => (
          <div
            key={project.title}
            className="flex w-full flex-col justify-center gap-3"
          >
            <div
              style={{
                backgroundImage: `/static/images/${project.image_urls[0]}`,
              }}
              className="group relative flex aspect-square w-full flex-col rounded-xl bg-white/10 bg-cover"
            >
              <div className="absolute z-10 hidden h-full w-full flex-col items-center justify-center gap-5 rounded-xl bg-gray-900/50 p-3 backdrop-blur-md group-hover:flex">
                <p className="">
                  {project.subtitle}
                  {project.image_urls[0]}
                </p>
                <ProjectStack
                  className="justify-center"
                  stack={project.stack}
                />
                <div className="float-end flex justify-center gap-3">
                  {project?.app_url && (
                    <Button
                      onClick={() =>
                        project.app_url
                          ? (window.location.href = project.app_url)
                          : null
                      }
                    >
                      <ArrowSquareOut weight="fill" size={15} />
                      <span>Visit App</span>
                    </Button>
                  )}
                  {project?.git_url && (
                    <Button
                      onClick={() => (window.location.href = project.git_url)}
                    >
                      <Code weight="fill" size={15} />
                      <span>View code</span>
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-end p-2 pt-5">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
