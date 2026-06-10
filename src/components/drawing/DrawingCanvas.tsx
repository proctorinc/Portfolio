import { type FC } from "react";
import Canvas from "./Canvas";
import { useDrawing } from "./DrawingContext";
import { Toolbar } from "./Toolbar";
import { cn } from "@/src/utils";

type Props = {
  colors?: Array<string>;
  className?: string;
};

const DrawingCanvas: FC<Props> = ({ colors, className }) => {
  const { canvasRef } = useDrawing();

  return (
    <div
      className={cn(
        "flex flex-col gap-4 text-[#635d4d] items-center w-full max-w-md",
        className,
      )}
    >
      <div
        className="absolute -top-4 -left-8 flex flex-col items-center justify-center h-24 w-24 bg-gradient-to-tr from-[#FF3B87] via-[#FF6EA7] to-[#FFE3EC] shadow-xl text-black font-black -rotate-12 dropping-shadow-md"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 12%, 78% 6%, 82% 23%, 98% 22%, 93% 39%, 100% 50%, 93% 61%, 98% 78%, 82% 77%, 78% 94%, 61% 88%, 50% 100%, 39% 88%, 22% 94%, 18% 77%, 2% 78%, 7% 61%, 0% 50%, 7% 39%, 2% 22%, 18% 23%, 22% 6%, 39% 12%)",
        }}
      >
        <p className="text-sm tracking-tight uppercase transform scale-95">
          Try it
        </p>
        <p className="text-sm tracking-tight uppercase transform scale-95">
          out!
        </p>
      </div>
      <div className="flex flex-col gap-4 overflow-clip bg-[#f5f4f0] border-3 border-border rounded-2xl w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] shadow-border">
        <Canvas ref={canvasRef} />
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        {colors && <Toolbar colors={colors} />}
      </div>
    </div>
  );
};

export default DrawingCanvas;
