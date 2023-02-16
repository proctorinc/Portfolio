import { RefObject } from "react"

type NavbarProps = {
  homeRef: RefObject<HTMLDivElement>,
  skillsRef: RefObject<HTMLDivElement>,
  experienceRef: RefObject<HTMLDivElement>,
  projectsRef: RefObject<HTMLDivElement>,
  contactRef: RefObject<HTMLDivElement>,
}

const Navbar = (props:NavbarProps) => {
  const { homeRef, skillsRef, experienceRef, projectsRef, contactRef } = props;
  
  return (
    <nav className="sticky flex justify-center w-full flex gap-10 top-0 z-50 h-16 -mb-16">
        <button className=""
          onClick={() => {
            if (homeRef.current) {
              homeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })}
            }
        }
        >
          Home
        </button>
        <button
          onClick={() => {
            if (skillsRef.current) {
              skillsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })}
            }
          }
        >
          Skills
        </button>
        <button
          onClick={() => {
            if (experienceRef.current) {
              experienceRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })}
            }
          }
        >
          Experience
        </button>
        <button
          onClick={() => {
            if (projectsRef.current) {
              projectsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })}
            }
          }
        >
          Projects
        </button>
        <button
          onClick={() => {
            if (contactRef.current) {
               contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })}
            }
          }
        >
          Contact
        </button>
      </nav>
  )
}

export default Navbar