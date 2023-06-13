import { Bar } from "@visx/shape";
import { motion } from "framer-motion";
import { Tag } from "../../../../components/Tag";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";

type ProjectImageProps = {
  images: string[];
};

export const ProjectImage = (props: ProjectImageProps) => {
  const { images } = props;
  const [imageIndex, setImageIndex] = useState(0);

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
      <div className="absolute bottom-0 z-40 h-2 w-3/4 border-b-2 border-slate-600"></div>
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
          className="not-draggable absolute bottom-0 z-40 h-full w-full object-contain"
          style={{ y: "40px" }}
          src={`/static/images/${images[imageIndex]}`}
          alt={images[imageIndex]}
          onContextMenu={() => false}
        />
      </motion.div>
      <div className="absolute left-0 flex h-full w-14 items-center justify-start px-1.5 pt-28">
        {imageIndex > 0 && (
          <Tag
            className="py-2"
            onClick={() => setImageIndex((prev) => prev - 1)}
          >
            <ArrowLeft size={25} />
          </Tag>
        )}
      </div>
      <div className="absolute right-0 flex h-full w-14 items-center justify-end px-1.5 pt-28">
        {imageIndex < images.length - 1 && (
          <Tag
            className="py-2"
            onClick={() => setImageIndex((prev) => prev + 1)}
          >
            <ArrowRight size={25} />
          </Tag>
        )}
      </div>
    </motion.div>
  );
};
