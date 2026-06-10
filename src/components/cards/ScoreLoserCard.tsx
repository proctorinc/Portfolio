"use client";

import { ProjectCardData } from "@/src/types";
import Image from "next/image";
import { motion } from "framer-motion";

// ============================================================================
// FRONT SIDE
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  return (
    <>
      {/* Sleek App Branding */}
      <div className="flex flex-col gap-3 pb-10">
        <div className="text-left w-full pt-1 flex justify-between items-center">
          <h2 className="text-xl font-sans font-bold tracking-tight leading-none text-zinc-100">
            ScoreLoser
          </h2>
          <span className="text-[9px] font-mono text-zinc-500 tracking-wider">
            scoreloser.mattyp.app
          </span>
        </div>
        <p className="text-sm text-gray-500 font-semibold">
          A mobile app for tracking scores with your friends
        </p>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="text-[10px] font-mono tracking-wide px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/50"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* 3D Perspective wrapper & Group trigger */}
      <div className="perspective-1000 mx-4">
        <div
          className="relative rounded-t-4xl pt-10 bg-black overflow-clip border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] shadow-gray-200/10
                     transform-gpu transition-all duration-500 ease-out
                     group-hover:scale-105 group-hover:[transform:rotateX(4deg)_rotateY(-8deg)]

                     /* The Glint Effect */
                     before:absolute before:inset-0 before:z-10
                     before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                     before:-translate-x-full before:-skew-x-12
                     group-hover:before:animate-[glint_0.8s_ease-in-out_forwards]"
        >
          {/* Dynamic Island / Notch */}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 bg-black rounded-full w-[80px] h-6 shadow-inner shadow-white/50 z-20" />

          <Image
            alt="scoreloser image"
            width={1000}
            height={1000}
            className="object-fill w-full cursor pointer-events-none select-none [-webkit-user-drag:none]"
            src="/score-loser.png"
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
export function ScoreLoserCard({
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
    <div
      className="group w-full h-full p-6 flex flex-col justify-between border border-zinc-800/80 bg-gradient-to-b from-[#111115] to-[#0a0a0c]"
      style={{
        background:
          "radial-gradient(circle at center, #262626 0%, #000000 100%)",
      }}
    >
      <Front project={project} />
    </div>
  );
}

export function ScoreLoserCardBackground({
  project,
}: {
  project: ProjectCardData;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
      }}
      // Added background color, dot grid gradient, and background sizing
      className="absolute w-full h-full p-6 flex flex-col justify-between bg-black"
    />
  );
}
