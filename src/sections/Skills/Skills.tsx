import { RefObject } from "react";
import { useScroll } from "framer-motion";
import { BlobAnimation } from "./components";
import { ScaleAnimation } from "./components/ScaleAnimation";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Skills = (props: MainSectionProps) => {
  const { innerRef } = props;

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start end", "end start"],
  });

  const skills = [
    { type: "General", values: ["Python", "JavaScript", "Java", "C++", "C", "Groovy"] },
    { type: "Web", values: ["React", "TypeScript", "HTML", "CSS", "BootStrap", "Styled Components", "TailwindCSS"] },
    { type: "Backend", values: ["NodeJS", "ExpressJS", "Express Sessions", "Passport JS", "JWT", "Django", "Firebase"] },
    { type: "Database", values: ["SQL", "PostgreSQL", "Firestore", "MongoDB", "Mongoose", "SQLite"]}
  ]

  return (
    <section
      ref={innerRef}
      className="relative my-64 flex h-screen w-full flex-col items-center justify-center overflow-x-clip"
    >
      <BlobAnimation scrollModifier={scrollYProgress} />
      <ScaleAnimation scrollModifier={scrollYProgress}>
        <h1 className="text-6xl font-extrabold">Skills</h1>
        <div className="grid grid-cols-4 p-10">
          {skills.map((column) => (
            <div>
              <h2 className="text-3xl">{column.type}</h2>
              <ul>
                {column.values.map((value) => (
                  <li>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScaleAnimation>
    </section>
  );
};
