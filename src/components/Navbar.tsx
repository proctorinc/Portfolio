import { MouseEventHandler, RefObject } from "react"
import { motion } from "framer-motion"

type NavbarProps = {
  homeRef: RefObject<HTMLDivElement>,
  skillsRef: RefObject<HTMLDivElement>,
  experienceRef: RefObject<HTMLDivElement>,
  projectsRef: RefObject<HTMLDivElement>,
  contactRef: RefObject<HTMLDivElement>,
}

type NavButtonProps = {
  children: String,
  onClick: MouseEventHandler,
}

const Navbar = (props:NavbarProps) => {
  const { homeRef, skillsRef, experienceRef, projectsRef, contactRef } = props;

  const NavButton = (props:NavButtonProps) => {
    const { children, onClick } = props;

    return (
      <motion.button
        className="hover:bg-black/20 hover:text-slate-50 px-3 rounded-md text-slate-400"
        onClick={onClick}
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.25
          }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <nav className="sticky flex justify-center gap-2 w-full flex top-0 z-50 h-16 -mb-16 backdrop-blur-md #bg-slate-900/70 p-3">
        <NavButton
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
        </NavButton>
        <NavButton
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
        </NavButton>
        <NavButton
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
        </NavButton>
        <NavButton
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
        </NavButton>
        <NavButton
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
        </NavButton>
      </nav>
  )
}

export default Navbar