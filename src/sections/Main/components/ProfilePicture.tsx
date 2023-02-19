import { motion } from "framer-motion"

export const ProfilePicture = () => {
  return (
    <motion.div className="border-2 border-slate-600 rounded-xl w-72 h-72 bg-slate-400/20"
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
        transition: {
          delay: 2,
          duration: 1.5,
          type: "spring",
          stiffness: 40,
        }
      }}
    >
      {/* Add profile picture here */}
    </motion.div>
  )
}
