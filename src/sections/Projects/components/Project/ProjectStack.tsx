import { Tag } from "../../../../components/Tag";

type StackClusterProps = {
  stack: string[];
  className?: string;
};

export const ProjectStack = (props: StackClusterProps) => {
  const { stack, className } = props;

  return (
    <div className={`flex flex-wrap gap-1 text-xs ${className ?? ""}`}>
      {stack.map((name, i) => (
        <Tag key={i}>
          <span>{name}</span>
        </Tag>
      ))}
    </div>
  );
};
