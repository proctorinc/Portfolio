import { Tag } from "../../../../components/Tag";

type StackClusterProps = {
  stack: string[];
};

export const ProjectStack = (props: StackClusterProps) => {
  const { stack } = props;

  return (
    <div className="flex flex-wrap gap-1 text-xs">
      {stack.map((name, i) => (
        <Tag key={i}>
          <span>{name}</span>
        </Tag>
      ))}
    </div>
  );
};
