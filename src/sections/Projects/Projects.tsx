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
          <h3 className="max-w-xs py-1 text-xl font-extralight text-slate-400 sm:max-w-5xl sm:text-2xl">
            Visit my GitHub to see everything I'm working on:
          </h3>
          <Button
            onClick={() =>
              (window.location.href = "https://github.com/proctorinc")
            }
          >
            <ArrowSquareOut weight="fill" size={15} />
            github.com/proctorinc
          </Button>
        </div>
      </div>
      <div className="grid w-full max-w-xl grid-cols-2 gap-3 px-5 pb-20 text-center sm:grid-cols-3 sm:gap-5 sm:px-10 lg:max-w-5xl lg:grid-cols-4">
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
              <div className="absolute z-20 hidden h-full w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-slate-800 bg-gray-900/70 p-3 backdrop-blur-md group-hover:flex sm:gap-5">
                <div className="flex flex-col gap-1 sm:gap-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.subtitle}</p>
                </div>
                <div className="float-end flex justify-center gap-1 sm:gap-3">
                  {project?.app_url && (
                    <Button
                      className="bg-gray-800/50"
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
                      className="hidden bg-gray-800/50 sm:flex"
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
                  <h3 className="px-2 text-xl font-extrabold">
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
