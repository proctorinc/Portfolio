import { Bar } from "@visx/shape";
import { motion } from "framer-motion";

type ProjectImageProps = {
  src: string;
};

export const ProjectImage = (props: ProjectImageProps) => {
  const { src } = props;
  return (
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
            src={`/static/images/${src}`}
            alt={src}
          />
        </div>
        <motion.img
          className="absolute bottom-0 z-40 h-full w-full object-contain"
          style={{ y: "40px" }}
          src="/static/images/phone-frame-2.png"
          alt="phone frame"
        />
      </motion.div>
    </motion.div>
  );
};
