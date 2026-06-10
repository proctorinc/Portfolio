import { useDrawing } from "./DrawingContext";
import type { FC } from "react";
import { cn } from "@/src/utils";
import { Eraser, Undo2 } from "lucide-react";

type Props = {
  colors: Array<string>;
};

export const Toolbar: FC<Props> = ({ colors }) => {
  const { selectedColor, setSelectedColor, selectEraser, undo, canUndo } =
    useDrawing();

  return (
    <div className="flex flex-col gap-4 overflow-clip bg-[#f5f4f0] border-3 border-border rounded-2xl w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
      <div className="flex gap-4 p-4 flex-row justify-between items-center w-full">
        <div className="flex gap-4 flex-wrap">
          {colors.map((color, index) => (
            <button
              key={`toolbar-color-${index}`}
              className={cn(
                "w-10 h-10 border-3 border-primary cursor-pointer rounded-md hover:opacity-80 hover:scale-110 transition-all duration-300",
                selectedColor === color && "ring-4 ring-primary border-none",
              )}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={selectEraser}
            disabled={!canUndo}
            className={cn(
              "w-10 h-10 flex items-center justify-center cursor-pointer disabled:cursor-default rounded-md disabled:opacity-30 disabled:scale-100 bg-base text-primary hover:opacity-80 hover:scale-110 transition-all duration-300",
              !selectedColor && "ring-4 ring-primary",
            )}
          >
            <Eraser className="size-6" />
          </button>
          <button
            onClick={undo}
            disabled={!canUndo}
            className="w-10 h-10 flex items-center justify-center cursor-pointer disabled:cursor-default rounded-md disabled:opacity-30 disabled:scale-100 bg-base text-primary hover:opacity-80 hover:scale-110 transition-all duration-300"
          >
            <Undo2 className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
