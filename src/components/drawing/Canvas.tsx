import React, { forwardRef } from "react";
import { useDrawing } from "./DrawingContext";
import { CANVAS_HEIGHT, CANVAS_WIDTH, createCursorImage } from "./utils";

const Canvas = forwardRef<
  HTMLCanvasElement,
  React.HTMLProps<HTMLCanvasElement>
>((props, ref) => {
  const { selectedColor } = useDrawing();
  const { className, ...otherProps } = props;
  const cursorImage = createCursorImage(selectedColor);
  const cursorStyle = {
    cursor: `url(${cursorImage}), 8 8 auto`,
    touchAction: "none",
  };

  return (
    <canvas
      id="drawingCanvas"
      ref={ref}
      className="max-w-full"
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      style={{ ...cursorStyle }}
      {...otherProps}
    />
  );
});

Canvas.displayName = "Canvas";

export default Canvas;
