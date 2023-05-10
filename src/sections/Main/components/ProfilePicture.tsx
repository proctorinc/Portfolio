import { PatternLines } from "@visx/pattern";
import { Bar } from "@visx/shape";
import { motion } from "framer-motion";

export const ProfilePicture = () => {
  return (
    <motion.div
      className="h-64 w-64 rounded-xl border-2 border-slate-600 bg-slate-500/20 sm:h-80 sm:w-80"
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
        },
      }}
    >
      <svg className="h-full w-full">
        <PatternLines
          id="smallerlines"
          stroke="rgb(255, 255, 255, 0.01)"
          strokeWidth={2}
          width={50}
          height={50}
          orientation={["vertical", "horizontal"]}
        />
        <Bar fill={`url(#smallerlines)`} width="100%" height="100%" />
      </svg>
      {/* Add profile picture here */}
    </motion.div>
  );
};
