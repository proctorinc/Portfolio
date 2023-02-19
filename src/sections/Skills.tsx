import { RefObject } from "react";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>
}

const Skills = (props: MainSectionProps) => {
  const { innerRef } = props;

  const skills = {
    "Python": ["General"],
    "JavaScript": ["General"]
  }

  return (
    <section ref={innerRef} className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-6xl font-extrabold">Skills</h1>
      <div className="grid grid-cols-4">
        <div>
          <h2 className="text-3xl">General</h2>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
            <li>Groovy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl">Web</h2>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl">Backend</h2>
          <ul>
            <li>Django</li>
            <li>Node JS</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl">Database</h2>
          <ul>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Firestore</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills