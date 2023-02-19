import { RefObject } from "react";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>
}

const Experience = (props: MainSectionProps) => {
  const { innerRef } = props;

  return (
    <section ref={innerRef} className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-6xl font-extrabold">Experience</h1>
      <h2>Technical Support Engineer</h2>
      <h3>Secure Code Warrior</h3>
      <p>September 2021-Current</p>
      <br />
      <h2>Cyber Security Intern</h2>
      <h3>Swan Island Networks</h3>
      <p>May 2021-July 2021</p>
      <br />
      <h2>Bachelor's Computer Science</h2>
      <h2>Cyber Security Concentration</h2>
      <h3>SGeorge Fox University</h3>
      <p>August 2017-May 2021</p>
    </section>
  )
}

export default Experience