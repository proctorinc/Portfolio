import { RefObject } from "react";

type ProjectsSectionProps = {
  innerRef: RefObject<HTMLDivElement>
}

const Projects = (props: ProjectsSectionProps) => {
  const { innerRef } = props;

  return (
    <section ref={innerRef} className="flex flex-col items-center justify-center w-full h-screen">
      <h1>Projects</h1>
    </section>
  )
}

export default Projects