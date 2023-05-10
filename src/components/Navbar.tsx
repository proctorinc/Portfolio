import { MouseEventHandler, RefObject, useState } from "react";
import { motion } from "framer-motion";

type NavbarProps = {
  homeRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
};

type NavButtonProps = {
  children: String;
  onClick: MouseEventHandler;
};

export const Navbar = (props: NavbarProps) => {
  const { homeRef, skillsRef, experienceRef, projectsRef, contactRef } = props;
  const [open, setOpen] = useState(false);

  const NavButton = (props: NavButtonProps) => {
    const { children, onClick } = props;

    return (
      <motion.button
        className="w-full rounded-md px-3 py-4 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-[#1252a5]/50 hover:text-slate-50 sm:w-fit sm:py-1"
        onClick={onClick}
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.25,
          },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  };

  return (
    <nav
      className={`${
        open
          ? "-mb-[368px] bg-slate-900/50 backdrop-blur-md"
          : "-mb-20 backdrop-blur-sm"
      } min-h-16 sticky top-0 z-50 flex w-full flex-col justify-end gap-2 rounded-b-xl p-3 sm:flex-row sm:justify-center`}
    >
      <NavButton onClick={() => setOpen((prev) => !prev)}>Menu</NavButton>
      <div className="hidden sm:flex">
        <NavButton
          onClick={() => {
            if (homeRef.current) {
              homeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Home
        </NavButton>
        <NavButton
          onClick={() => {
            if (skillsRef.current) {
              skillsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Skills
        </NavButton>
        <NavButton
          onClick={() => {
            if (experienceRef.current) {
              experienceRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Experience
        </NavButton>
        <NavButton
          onClick={() => {
            if (projectsRef.current) {
              projectsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Projects
        </NavButton>
        <NavButton
          onClick={() => {
            if (contactRef.current) {
              contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            }
          }}
        >
          Contact
        </NavButton>
      </div>
      {open && (
        <div>
          <NavButton
            onClick={() => {
              if (homeRef.current) {
                homeRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setOpen(false);
              }
            }}
          >
            Home
          </NavButton>
          <NavButton
            onClick={() => {
              if (skillsRef.current) {
                skillsRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setOpen(false);
              }
            }}
          >
            Skills
          </NavButton>
          <NavButton
            onClick={() => {
              if (experienceRef.current) {
                experienceRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setOpen(false);
              }
            }}
          >
            Experience
          </NavButton>
          <NavButton
            onClick={() => {
              if (projectsRef.current) {
                projectsRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setOpen(false);
              }
            }}
          >
            Projects
          </NavButton>
          <NavButton
            onClick={() => {
              if (contactRef.current) {
                contactRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
                setOpen(false);
              }
            }}
          >
            Contact
          </NavButton>
        </div>
      )}
    </nav>
  );
};
