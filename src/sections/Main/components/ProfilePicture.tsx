import { PatternLines } from "@visx/pattern";
import { Bar } from "@visx/shape";
import { motion } from "framer-motion";

export const ProfilePicture = () => {
  return (
    <motion.div
      className="border-2 border-slate-600 rounded-xl w-80 h-80 bg-slate-500/20"
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
      <svg className="w-full h-full">
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
