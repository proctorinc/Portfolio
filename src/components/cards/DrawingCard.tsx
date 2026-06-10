"use client";

import { ProjectCardData } from "@/src/types";
import DrawingCanvas from "../drawing/DrawingCanvas";
import { DrawingProvider } from "../drawing/DrawingContext";
import { cn } from "@/src/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// ============================================================================
// FRONT SIDE
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  return (
    <>
      <div
        className={cn("text-left w-full pt-1 rounded-2xl", project.fontClass)}
      >
        <h2 className="text-2xl md:text-3xl tracking-tight leading-none text-slate-900">
          {project.frontTitle}
        </h2>
        <p className="text-sm md:text-lg font-normal text-slate-900/40">
          A daily drawing app with friends
        </p>
      </div>

      <DrawingCanvas
        className="absolute scale-75 top-10 left-1/2 -translate-x-1/2"
        colors={["#FF6EA7", "#FF7B54", "#2BE3D5"]}
      />
      <p className="absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-2 text-xs text-slate-900/40">
        daily-doodle.app
      </p>

      <div className="absolute top-4 right-4 w-fit flex-1 flex items-center justify-center mt-2">
        <div className="relative w-16 h-16 overflow-clip bg-white border-2 border-black/70 rounded-2xl rotate-6 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
          <div className="h-full w-full rounded-full flex items-center justify-center text-xl">
            <Image
              alt="Daily Doodle"
              src="/daily-doodle.png"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================================
// BACK SIDE
// ============================================================================
function Back({ project }: { project: ProjectCardData }) {
  return (
    <div className="flex flex-col justify-between h-full text-left">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-medium tracking-tight text-zinc-200">
              {project.backContent.title}
            </h3>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">
              {project.backContent.role}
            </p>
          </div>
          <span className="text-[10px] text-zinc-600 font-mono bg-zinc-900/80 px-2 py-1 rounded border border-zinc-800/40">
            {project.backContent.timeline}
          </span>
        </div>

        <div className="mt-6 space-y-3.5">
          {project.backContent.takeaways.map((point, i) => (
            <div
              key={i}
              className="flex gap-2.5 items-start text-xs text-zinc-400 leading-relaxed"
            >
              <span className="text-zinc-600 font-mono mt-0.5">0{i + 1}.</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN CONTAINER & OUTER STYLES
// ============================================================================
export function DrawingCard({
  project,
  side,
}: {
  project: ProjectCardData;
  side: "front" | "back";
}) {
  if (side === "back") {
    return <Back project={project} />;
  }

  return (
    <DrawingProvider localStorageKey="MY_DRAWING">
      <div
        className="w-full h-full p-6 flex flex-col justify-between"
        style={{
          background: "linear-gradient(135deg, #ffe3e3 0%, #fbc5c5 100%)",
        }}
      >
        <Front project={project} />
      </div>
    </DrawingProvider>
  );
}

export function DrawingCardBackground({
  project,
}: {
  project: ProjectCardData;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const colors = ["#FF6EA7", "#FF7B54", "#2BE3D5"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isDrawingActive = true;

    const initStrokeSettings = (context: CanvasRenderingContext2D) => {
      context.lineWidth = 8;
      context.lineCap = "round";
      context.lineJoin = "round";
    };

    // By isolating the dimensions check to window or containerRef, we avoid canvas clearing issues
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // If dimensions haven't actually changed, skip resize to prevent auto-clearing the canvas
      if (
        canvas.width === rect.width * window.devicePixelRatio &&
        canvas.height === rect.height * window.devicePixelRatio
      ) {
        return;
      }

      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;

      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStrokeSettings(ctx);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Give it safe fallback dimensions if rect initialization is instant
    const logicalWidth = canvas.width / window.devicePixelRatio || 500;
    const logicalHeight = canvas.height / window.devicePixelRatio || 500;

    const particles = colors.map((color) => ({
      x: Math.random() * logicalWidth,
      y: Math.random() * logicalHeight,
      angle: Math.random() * Math.PI * 2,
      speed: 1.2,
      color: color,
    }));

    const animate = () => {
      if (!isDrawingActive || !canvasRef.current) return;

      const w = canvasRef.current.width / window.devicePixelRatio;
      const h = canvasRef.current.height / window.devicePixelRatio;

      // Ensure properties don't zero out during transition states
      if (w === 0 || h === 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x, p.y);

        p.angle += (Math.random() - 0.5) * 0.25;

        let nextX = p.x + Math.cos(p.angle) * p.speed;
        let nextY = p.y + Math.sin(p.angle) * p.speed;

        let wrapped = false;

        if (nextX < 0) {
          nextX += w;
          wrapped = true;
        } else if (nextX > w) {
          nextX -= w;
          wrapped = true;
        }

        if (nextY < 0) {
          nextY += h;
          wrapped = true;
        } else if (nextY > h) {
          nextY -= h;
          wrapped = true;
        }

        if (!wrapped) {
          ctx.lineTo(nextX, nextY);
          ctx.stroke();
        } else {
          ctx.moveTo(nextX, nextY);
        }

        p.x = nextX;
        p.y = nextY;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Give framer motion a brief window to compute initial transition before starting paths
    const delayTimeout = setTimeout(() => {
      animate();
    }, 50);

    return () => {
      isDrawingActive = false;
      clearTimeout(delayTimeout);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="absolute inset-0 w-full h-full"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />
    </div>
  );
}
