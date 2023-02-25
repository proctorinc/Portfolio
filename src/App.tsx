import { useRef } from "react";

import { Footer, Navbar } from "./components";
import { Main } from "./sections/Main";
import { Skills } from "./sections/Skills/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navbarProps = {
    homeRef,
    skillsRef,
    experienceRef,
    projectsRef,
    contactRef,
  };

  return (
    <>
      <Navbar {...navbarProps} />
      <Main innerRef={homeRef} />
      <Skills innerRef={skillsRef} />
      <Experience innerRef={experienceRef} />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;
