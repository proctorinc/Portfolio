"use client";

export const CANVAS_WIDTH = 400;
export const CANVAS_HEIGHT = 400;
export const CURSOR_SIZE = 20;

export const createCursorImage = (color: string | null) => {
  if (typeof document === "undefined") return;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (ctx) {
    canvas.width = CURSOR_SIZE;
    canvas.height = CURSOR_SIZE;
    ctx.fillStyle = color ?? "lightgray";
    ctx.beginPath();
    ctx.arc(CURSOR_SIZE / 2, CURSOR_SIZE / 2, CURSOR_SIZE / 2, 0, Math.PI * 2); // Draw a circle
    ctx.fill();
  }

  return canvas.toDataURL();
};
