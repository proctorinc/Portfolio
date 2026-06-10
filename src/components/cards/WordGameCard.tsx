"use client";

import { ProjectCardData } from "@/src/types";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";

// Scrabble letter point distribution map
const SCRABBLE_POINTS: Record<string, number> = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
const LETTERS = Object.keys(SCRABBLE_POINTS);

// ============================================================================
// FRONT SIDE
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  return (
    <>
      {/*
      <div className="w-full flex-1 flex items-center justify-center relative my-2 z-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-2.5 rotate-[-4deg] bg-amber-100/60 p-3 rounded-xl border-2 border-dashed border-amber-900/20 shadow-sm backdrop-blur-[2px]">
          {[
            { letter: "W", score: 4 },
            { letter: "O", score: 1 },
            { letter: "R", score: 1 },
            { letter: "D", score: 2 },
          ].map((tile, i) => (
            <div
              key={i}
              className="relative w-11 h-12 bg-gradient-to-b from-[#fcedc7] to-[#e6ca94] border-2 border-amber-950/80 rounded-lg flex items-center justify-center shadow-[0_3px_0px_#9c7c44]"
            >
              <span className="text-xl font-serif font-bold text-amber-950 select-none">
                {tile.letter}
              </span>
              <span className="absolute bottom-1 right-1.5 text-[8px] font-sans font-bold text-amber-900/80 leading-none">
                {tile.score}
              </span>
            </div>
          ))}
        </div>
      </div>*/}
      <div className="relative flex flex-col gap-3 pb-10 z-20">
        <div className="text-left w-full pt-1 flex justify-between items-end z-10 pointer-events-none">
          <h2 className="text-xl font-serif font-black tracking-tight leading-none text-amber-950">
            {project.frontTitle}
          </h2>
          <span className="text-[9px] font-mono text-amber-900/60 font-semibold">
            {project.url?.label}
          </span>
        </div>
      </div>

      {/* 3D Perspective wrapper & Group trigger */}
      <div className="absolute top-0 perspective-1000 mx-4 scale-75 z-10 rotate-3">
        <div
          className="relative rounded-4xl bg-[#e7cfaf]/77 pt-5 overflow-clip border-4 border-black shadow-[6px_6px_0px_0px_rgba(1,1,1,0.7)] shadow-black/80
                     transform-gpu transition-all duration-500 ease-out
                     group-hover:scale-105 group-hover:[transform:rotateX(4deg)_rotateY(-8deg)]

                     /* The Glint Effect */
                     before:absolute before:inset-0 before:z-10
                     before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                     before:-translate-x-full before:-skew-x-12
                     group-hover:before:animate-[glint_0.8s_ease-in-out_forwards]"
        >
          {/* Dynamic Island / Notch */}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 bg-black rounded-full w-4 h-4 shadow-inner shadow-white/50 z-20" />
          <Image
            alt="scrabble image"
            width={1000}
            height={1000}
            className="object-fill w-full cursor pointer-events-none select-none [-webkit-user-drag:none]"
            src="/wordgame.png"
          />
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
    <div className="flex flex-col justify-between h-full text-left z-10 pointer-events-none">
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
// MAIN CONTAINER
// ============================================================================
export function WordGameCard({
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
    <div className="group w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#fff6e0] to-[#f4e3be] relative overflow-hidden">
      <Front project={project} />

      <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 pt-4 z-10 pointer-events-none">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className="text-[10px] w-fit font-mono tracking-wide px-2 py-0.5 rounded bg-[#f4e3be]/90 text-amber-900 font-bold border border-amber-950/10"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// INFINITE DROP PHYSICS BACKGROUND
// ============================================================================
export function WordGameCardBackground({
  project,
}: {
  project: ProjectCardData;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!sceneRef.current || !canvasRef.current) return;

    const container = sceneRef.current;
    const canvas = canvasRef.current;

    // Get current container constraints
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Matter.js Setup
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;

    const engine = Engine.create({
      gravity: { y: 0.6, scale: 0.001 }, // Gentle natural falling gravity
    });

    const world = engine.world;

    // Setup custom rendering direct onto canvas
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: width,
        height: height,
        background: "transparent",
        wireframes: false, // Turn off wireframes to render actual custom skins
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 2. Create Solid Bounds (Bottom, Left, Right walls)
    const wallThickness = 60;
    const floor = Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width * 2,
      wallThickness,
      {
        isStatic: true,
        render: { visible: false },
      },
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height * 2,
      {
        isStatic: true,
        render: { visible: false },
      },
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 2,
      {
        isStatic: true,
        render: { visible: false },
      },
    );

    World.add(world, [floor, leftWall, rightWall]);

    // Track active tumbling tiles
    let tiles: Array<{
      body: Matter.Body;
      letter: string;
      score: number;
    }> = [];

    // 3. Tile Generation Engine Loop
    const spawnTile = () => {
      const tileWidth = 28;
      const tileHeight = 32;

      // Randomly spawn across the width, staying slightly away from edges
      const randomX = Math.random() * (width - tileWidth * 2) + tileWidth;
      const spawnY = -tileHeight;

      const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      const score = SCRABBLE_POINTS[letter];

      // Build physics body wrapper
      const tileBody = Bodies.rectangle(
        randomX,
        spawnY,
        tileWidth,
        tileHeight,
        {
          restitution: 0.35, // Medium bounce properties
          friction: 0.1, // Slidability friction when rubbing other tiles
          angle: Math.random() * Math.PI, // Random air rotation offset
          render: {
            visible: false, // Hidden because we override draw logic below manually
          },
        },
      );

      tiles.push({ body: tileBody, letter, score });
      World.add(world, tileBody);

      // Memory Management: Keep max 65 background tiles to protect CPU cycles & frame drops
      if (tiles.length > 65) {
        const oldest = tiles.shift();
        if (oldest) World.remove(world, oldest.body);
      }
    };

    // Spawn a new individual piece every 850 milliseconds infinitely
    const spawnInterval = setInterval(spawnTile, 850);

    // 4. Custom Canvas Rendering Engine Overlays
    Matter.Events.on(render, "afterRender", () => {
      const context = canvas.getContext("2d");
      if (!context) return;

      tiles.forEach((tile) => {
        const { position, angle } = tile.body;
        const w = 28;
        const h = 32;
        const radius = 4; // Corner rounding smoothness

        context.save();
        context.translate(position.x, position.y);
        context.rotate(angle);

        // --- Draw Translucent Wood Scrabble Tile Body ---
        context.beginPath();
        context.moveTo(-w / 2 + radius, -h / 2);
        context.lineTo(w / 2 - radius, -h / 2);
        context.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + radius);
        context.lineTo(w / 2, h / 2 - radius);
        context.quadraticCurveTo(w / 2, h / 2, w / 2 - radius, h / 2);
        context.lineTo(-w / 2 + radius, h / 2);
        context.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - radius);
        context.lineTo(-w / 2, -h / 2 + radius);
        context.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + radius, -h / 2);
        context.closePath();

        // 3D Rim shading extrusion style
        context.fillStyle = "rgba(156, 124, 68, 0.08)";
        context.fill();

        // Face plate structure
        context.lineWidth = 1;
        context.strokeStyle = "rgba(120, 45, 10, 0.05)";
        context.stroke();

        context.fillStyle = "rgba(251, 243, 213, 0.12)"; // Faded base tint overlay
        context.fill();

        // --- Draw Letter Characters (Updated to Solid Dark Black) ---
        context.fillStyle = "#000000";
        context.font = "bold 14px Georgia, serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(tile.letter, -2, 0);

        // --- Draw Score Numerical Points (Updated to Solid Dark Black) ---
        context.font = "bold 6px sans-serif";
        context.fillText(tile.score.toString(), 8, 9);

        context.restore();
      });
    });

    // 5. Handle Resize Adjustments cleanly
    const handleResize = () => {
      if (!sceneRef.current) return;
      width = container.clientWidth;
      height = container.clientHeight;

      canvas.width = width;
      canvas.height = height;
      render.options.width = width;
      render.options.height = height;

      // Relocate static bound anchors to match new width/height rules
      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + wallThickness / 2,
      });
      Matter.Body.setPosition(leftWall, {
        x: -wallThickness / 2,
        y: height / 2,
      });
      Matter.Body.setPosition(rightWall, {
        x: width + wallThickness / 2,
        y: height / 2,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup physics on unmount
    return () => {
      clearInterval(spawnInterval);
      window.removeEventListener("resize", handleResize);
      Matter.Events.off(render, "afterRender", () => {});
      World.clear(world, false);
      Engine.clear(engine);
      Render.stop(render);
      runner.enabled = false;
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pb-30"
      />
    </div>
  );
}
