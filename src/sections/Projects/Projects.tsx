import { RefObject } from "react";

import { Project } from "./components";
import PROJECTS from "../../data/projects.json";
import { Button } from "../../components";
import { ArrowSquareOut, Code } from "phosphor-react";
import { ProjectStack } from "./components/Project/ProjectStack";
import { Bar } from "@visx/shape";

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
        <h2 className="pt-28 text-3xl font-extrabold sm:text-5xl">
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
      <div className="grid w-full max-w-3xl grid-cols-1 gap-5 px-3 pb-20 text-center sm:grid-cols-2 sm:px-10 lg:max-w-5xl lg:grid-cols-3">
        {PROJECTS.slice(3).map((project) => (
          <div
            key={project.title}
            className="relative flex w-full flex-col justify-center gap-3"
          >
            <div className="absolute h-full w-full rounded-xl border-2 border-slate-600 bg-slate-500/20">
              <svg className="h-full w-full">
                <Bar fill={`url(#smallerlines)`} width="100%" height="100%" />
              </svg>
            </div>
            <div className="group relative flex aspect-square w-full flex-col rounded-xl bg-contain">
              <div className="absolute z-10 hidden h-full w-full flex-col items-center justify-center gap-5 rounded-xl bg-gray-900/50 p-3 backdrop-blur-md group-hover:flex">
                <div className="flex flex-col gap-3 pt-5">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
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
                      <span>Visit</span>
                    </Button>
                  )}
                  {project?.git_url && (
                    <Button
                      onClick={() => (window.location.href = project.git_url)}
                    >
                      <Code weight="fill" size={15} />
                      <span>Code</span>
                    </Button>
                  )}
                </div>
              </div>
              {project.image_urls.length > 0 && (
                <img
                  src={`/static/images/${project.image_urls[0]}`}
                  className="aspect-square rounded-xl bg-cover"
                />
              )}
              {project.image_urls.length === 0 && (
                <div className="flex h-full w-full items-center justify-center">
                  <h3 className="text-xl font-extrabold">
                    Image Coming Soon...
                  </h3>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
