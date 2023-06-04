import { useRef } from "react";

import { Footer, Navbar } from "./components";
import { Main } from "./sections/Main";
import { Skills } from "./sections/Skills/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { About } from "./sections/About";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navbarProps = {
    homeRef,
    aboutRef,
    skillsRef,
    experienceRef,
    projectsRef,
    contactRef,
  };

  return (
    <div className="relative overflow-clip">
      <Navbar {...navbarProps} />
      <div className="relative">
        <Main innerRef={homeRef} />
        <About innerRef={aboutRef} />
        <Skills innerRef={skillsRef} />
        <Experience innerRef={experienceRef} contactRef={contactRef} />
        <Projects innerRef={projectsRef} />
        <Contact innerRef={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
