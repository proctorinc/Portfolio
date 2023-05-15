import { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { onClick, children } = props;
  return (
    <motion.button
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
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
