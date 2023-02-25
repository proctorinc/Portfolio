import { RefObject } from "react";
import { motion } from "framer-motion";
import { StackCluster } from "./components";
import { Bar } from "@visx/shape";
import { ArrowSquareOut, Code, PlayCircle } from "phosphor-react";

type ProjectsSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

export const Projects = (props: ProjectsSectionProps) => {
  const { innerRef } = props;

  // const { scrollYProgress } = useScroll({
  //   target: innerRef,
  //   offset: ["start start", "end start"]
  // })

  const projects = [
    {
      title: "Dink",
      subtitle: "Fullstack financial budgeting app",
      image_url: "dink-image.png",
      git_url: "https://github.com/proctorinc/Dink",
      stack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "react-router",
        "react-query",
        "Framer Motion",
        "Plaid API",
        "NodeJS",
        "Express",
        "REST",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Phosphor Icons",
        "Vitest",
        "MSW",
        "RTL",
      ],
      description:
        "Dink is an all-in-one budgeting app that helps you keep track of your short term and long term financial goals. It synchronizes your bank account data live using the Plaid API to connect bank accounts and manage account transactions. You can create monthly budgets to track income and expenses. While also keeping track of your savings and allocating them to specific goals",
    },
    {
      title: "StudFinder",
      subtitle: "A date matching app for trade professionals",
      image_url: "studfinder-image.png",
      git_url: "https://github.com/proctorinc/StudFinder",
      app_url: "https://findyourstud.web.app",
      stack: [
        "React",
        "Vite",
        "CSS Modules",
        "React",
        "Random user API",
        "Vitest",
        "MSW",
        "RTL",
      ],
      description:
        "A simple, fun dating app that lets you rate other potential matches. Uses an API to randomly generate user profiles for you to rate with a random user image. Give each profile a rating from 1-5. Use the stud finder to try and find a stud!",
    },
    {
      title: "The Daily Gerth",
      subtitle: "Daily social media for a cat named 'Gerth'",
      image_url: "thedailygerth-image.png",
      git_url: "https://github.com/proctorinc/TheDailyGerth",
      app_url: "https://thedailygerth.web.app",
      stack: [
        "React",
        "Next JS",
        "Tailwind CSS",
        "DaisyUI",
        "Phosphor Icons",
        "Firebase",
        "Firestore",
      ],
      description:
        "Social media app that posts one picture for all users to see and rate. Once you rate the daily image you can see what other users rated as well. Uses Firestore snapshots so that ratings and other data updates in realtime. Users can view each other's profiles and see their favorite pictures and top ratings.",
    },
    {
      title: "Bugfixpy",
      subtitle: "Python command line tool for fixing bugs in Git repositories",
      image_url: "Bug Fix Project Image",
      git_url: "https://github.com/proctorinc/bugfixpy",
      stack: [
        "Python",
        "Command Line",
        "Git",
        "GitHub",
        "Jira API",
        "CMS API",
        "VS Code",
      ],
      description:
        "Command line program that automates Github commands and Jira commands to automate a bug fixing process. This program clones repositories, opens VSCode and tracks changes in multiple branches, commits changes, and automatically cherry-picks commits if necessary. The program then transitions the related Jira ticket using the Jira API and comments commit message. This program improved the speed of bug fixes from 1 hour to 15 minutes on average.",
    },
    {
      title: "Mobile Notes App",
      subtitle: "Google Keep notes app clone",
      image_url: "Notes App Project Image",
      git_url: "https://github.com/proctorinc/NotesApp",
      stack: ["React Native", "Expo", "SQLite"],
      description:
        "Modified Google Keep clone that works on Android and IOS. Saves notes to local SQLite database. Has feature to search through all notes.",
    },
  ];

  return (
    <section
      ref={innerRef}
      className="flex w-full flex-col items-center justify-center pt-40 pb-64"
    >
      <div className="absolute h-full w-full">
        <Bar fill={`url(#lines)`} width="100%" height="100%" />
      </div>
      <h1 className="text-6xl font-extrabold">Projects</h1>
      {projects.map((project) => (
        <div
          key={project.image_url}
          className="flex w-full items-center px-20 py-20"
        >
          <div className="w-2/5">
            <motion.div
              className="relative flex h-96 w-full items-end justify-center overflow-clip"
              initial={{
                opacity: 0,
                scale: 0.8,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 h-3/4 w-full rounded-xl border-2 border-slate-600 bg-slate-500/20">
                <svg className="h-full w-full">
                  <Bar fill={`url(#smallerlines)`} width="100%" height="100%" />
                </svg>
              </div>
              <div className="absolute bottom-0 z-50 h-2 w-3/4 border-b-2 border-slate-600"></div>
              <motion.div
                className="relative flex h-80 w-full justify-center rounded-t-md"
                initial={{
                  scale: 1,
                  y: 0,
                }}
                whileHover={{
                  scale: 1.3,
                  y: "-15%",
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
              >
                <div className="absolute bottom-0 z-30 h-fit w-[141px] rounded-2xl bg-slate-100 pt-4 shadow-2xl shadow-slate-900">
                  <motion.img
                    className="h-full w-full object-contain"
                    src={`/images/${project.image_url}`}
                    alt={project.image_url}
                  />
                </div>
                <motion.img
                  className="absolute bottom-0 z-40 h-full w-full object-contain"
                  style={{ y: "40px" }}
                  src="/images/phone-frame-2.png"
                  alt="phone frame"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="relative flex w-3/5 flex-col gap-3 pl-20 pt-24">
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold">{project.title}</h2>
              <h3 className="py-1 text-3xl font-extralight text-slate-400">
                {project.subtitle}
              </h3>
            </div>
            <StackCluster stack={project.stack} />
            <p className="text-md font-light text-slate-200">
              {project.description}
            </p>
            <div className="flex gap-3">
              <motion.div
                className="flex w-fit items-center gap-1 rounded-md border border-slate-700 py-2 px-3 text-xs text-slate-400 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-[#1252a5]/50 hover:text-slate-50"
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.25,
                  },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = project.git_url)}
              >
                <Code weight="fill" size={15} />
                <span>View code</span>
              </motion.div>
              {project?.app_url && (
                <motion.div
                  className="flex w-fit items-center gap-1 rounded-md border border-slate-700 py-2 px-3 text-xs text-slate-400 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-[#1252a5]/50 hover:text-slate-50"
                  initial={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = project.app_url)}
                >
                  <ArrowSquareOut weight="fill" size={15} />
                  <span>Visit App</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
