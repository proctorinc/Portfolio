import { motion } from "framer-motion";
import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = (props: TagProps) => {
  const { children, className } = props;

  return (
    <motion.div
      className={`w-fit select-none rounded-md bg-slate-400/20 py-1 px-2 text-sm text-slate-300 hover:bg-slate-400/50 sm:text-xs ${className}`}
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.2,
        transition: {
          duration: 0.2,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
