import { Bar } from "@visx/shape";
import { motion } from "framer-motion";

type ProjectImageProps = {
  src: string;
};

export const ProjectImage = (props: ProjectImageProps) => {
  const { src } = props;
  return (
    <motion.div
      className="relative flex h-96 w-full items-end justify-center overflow-y-clip"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
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
        <motion.img
          className="absolute bottom-0 z-40 h-full w-full object-contain"
          style={{ y: "40px" }}
          src={`/static/images/${src}`}
          alt={src}
          onContextMenu={() => false}
        />
      </motion.div>
    </motion.div>
  );
};
