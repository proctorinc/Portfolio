import { motion, useScroll } from "framer-motion"
import { RefObject } from "react";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>
}

const Main = (props: MainSectionProps) => {
  const { innerRef } = props;

  return (
    <section ref={innerRef} className="relative flex flex-col items-center justify-center w-full h-screen transition-bg-[url('/images/blob-scene-haikei-2.svg')] duration-1000 ease-in-out bg-cover p-20">
      <motion.div className="w-full">
        <motion.h1
          className="text-7xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-slate-200 to-slate-200"
          initial={{
            translateY: 500,
          }}
          animate={{
            translateY: 0,
            transition: {
              duration: 2.5,
              type: "spring",
              stiffness: 45,
            }
          }}
        >
          Matt Proctor
        </motion.h1>
        <motion.h2
          className="text-2xl text-slate-400 font-extralight"
          initial={{
            opacity: 0,
            translateY: -50,
          }}
          animate={{
            opacity: 0.5,
            translateY: 0,
            transition: {
              delay: 0.75,
              duration: 0.25,
              type: "spring",
              stiffness: 45,
            }
          }}
        >
          A security minded, full stack developer
        </motion.h2>
      </motion.div>
    </section>
  )
}

export default Main