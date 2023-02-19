import { motion } from "framer-motion"

export const Title = () => {
  const title = "Matt Proctor"
  const titleAnimations = {
    show: {
      transition: { staggerChildren: 0.1, staggerDirection: 1 },
    },
  };
  const characterAnimations = {
    hidden: {
      y: "200%",
    },
    show: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 }
    }
  }
  
  return (
    <motion.div
      className="overflow-hidden"
      variants={titleAnimations}
      initial="hidden"
      animate="show"
    >
      {title.split("").map((character, i) => {
        return (
          <motion.span
            key={i}
            style={{display: "inline-block"}}
            className={`${character === " " && "px-2"} text-7xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-slate-200 to-slate-200`}
            variants={characterAnimations}
          >
            {character}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
