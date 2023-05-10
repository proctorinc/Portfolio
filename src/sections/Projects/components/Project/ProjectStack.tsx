import { motion } from "framer-motion";

type StackClusterProps = {
  stack: string[];
};

type StackItemProps = {
  name: string;
};

const StackItem = (props: StackItemProps) => {
  const { name } = props;
  return (
    <motion.div
      className="rounded-md bg-slate-400/20 py-1 px-2 text-slate-300 hover:bg-slate-400/50"
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.25,
        },
      }}
    >
      {name}
    </motion.div>
  );
};

export const ProjectStack = (props: StackClusterProps) => {
  const { stack } = props;

  return (
    <div className="flex flex-wrap gap-1 text-xs">
      {stack.map((name, i) => (
        <StackItem key={i} name={name} />
      ))}
    </div>
  );
};
