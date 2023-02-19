import { PatternLines } from "@visx/pattern";
import { Bar } from "@visx/shape";
import { RefObject } from "react";

type ContactSectionProps = {
  innerRef: RefObject<HTMLDivElement>
}

const Contact = (props: ContactSectionProps) => {
  const { innerRef } = props;

  return (
    <section ref={innerRef} className="flex flex-col items-center justify-center w-full h-screen">
      <div className="absolute w-full h-full bg-cover bg-no-repeat #bg-[url('/images/space-background.jpeg')] -z-20">
        <svg className="w-full h-full">
          <PatternLines
            id="lines"
            stroke="rgb(75, 75, 75, 0.1)"
            strokeWidth={1}
            width={50}
            height={50}
            orientation={["vertical", "horizontal"]}
          />
          <Bar
            fill={`url(#lines)`}
            width="100%"
            height="100%"
          />
        </svg>
      </div>
      <div className="p-10 border-2 border-slate-600 rounded-xl bg-slate-400/20">
        <h1 className="text-4xl">Matt Proctor</h1>
        <h2 className="text-xl">425.295.4143</h2>
        <h2 className="text-xl">matthewalanproctor@gmail.com</h2>
      </div>
    </section>
  )
}

export default Contact