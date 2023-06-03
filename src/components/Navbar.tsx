import { MouseEventHandler, ReactNode, RefObject, useState } from "react";
import { motion } from "framer-motion";
import { Desktop, Hamburger, List, X } from "phosphor-react";

type NavbarProps = {
  homeRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
};

type NavButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
};

export const Navbar = (props: NavbarProps) => {
  const { homeRef, skillsRef, experienceRef, projectsRef, contactRef } = props;
  const [open, setOpen] = useState(false);

  const NavButton = (props: NavButtonProps) => {
    const { children, onClick, className } = props;

    return (
      <motion.button
        className={`flex w-full items-center justify-center gap-2 rounded-md px-3 py-4 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-[#1252a5]/50 hover:text-slate-50 sm:w-fit sm:py-1 ${
          className ?? ""
        }`}
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
        open ? "" : "backdrop-blur-sm"
      } min-h-16 sticky top-0 z-50 flex w-full flex-col justify-end gap-2 p-3 sm:flex-row sm:justify-center`}
    >
      <div className="flex w-full justify-start sm:hidden">
        <NavButton
          className="w-12 justify-between sm:hidden"
          onClick={() => setOpen(true)}
        >
          <List weight="fill" size={25} />
        </NavButton>
      </div>
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
        <div className="absolute top-0 left-0 z-50 flex h-screen w-full flex-col items-center bg-slate-900/50 px-3 py-3 backdrop-blur-lg sm:hidden">
          <div className="flex w-full justify-start">
            <NavButton
              className="w-12 justify-between sm:hidden"
              onClick={() => setOpen(false)}
            >
              <X weight="fill" size={25} />
            </NavButton>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center px-14 pb-20">
            <NavButton
              className="text-xl"
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
              className="text-xl"
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
              className="text-xl"
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
              className="text-xl"
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
              className="text-xl"
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
        </div>
      )}
    </nav>
  );
};
