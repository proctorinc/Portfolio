"use client";

import { ProjectCardData } from "@/src/types";
import { motion } from "framer-motion";

// ============================================================================
// FRONT SIDE
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  return (
    <>
      <div
        className="absolute top-2 left-2 z-50 flex flex-col items-center justify-center h-24 w-24 bg-gradient-to-tr from-[#FF3B87] via-[#FF6EA7] to-[#FFE3EC] shadow-xl text-black font-black -rotate-12 dropping-shadow-md"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 12%, 78% 6%, 82% 23%, 98% 22%, 93% 39%, 100% 50%, 93% 61%, 98% 78%, 82% 77%, 78% 94%, 61% 88%, 50% 100%, 39% 88%, 22% 94%, 18% 77%, 2% 78%, 7% 61%, 0% 50%, 7% 39%, 2% 22%, 18% 23%, 22% 6%, 39% 12%)",
        }}
      >
        <p className="text-sm tracking-tight uppercase transform scale-95">
          Coming
        </p>
        <p className="text-sm tracking-tight uppercase transform scale-95">
          Soon
        </p>
      </div>
      {/* Friendly Rounded Brutalist Header */}
      <div className="text-left w-full pt-1 flex justify-between items-center">
        <h2 className="text-2xl font-black tracking-tight leading-none text-zinc-900 font-sans">
          dink.
        </h2>
        <div className="w-7 h-7 rounded-full bg-violet-400 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold text-xs text-zinc-900">
          $
        </div>
      </div>

      {/* Chunk-Border Tactile Budget Widget Graphics */}
      <div className="w-full flex-1 flex flex-col justify-center items-center relative my-2">
        <div className="w-full max-w-[210px] bg-amber-50 border-2 border-zinc-900 rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] transition-transform hover:rotate-0">
          <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-0.5">
            Savings Target
          </span>
          <div className="flex justify-between items-end mb-2">
            <span className="text-xl font-black text-zinc-900">$12,450</span>
            <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-100 border border-emerald-800 px-1.5 py-0.5 rounded">
              +8.4%
            </span>
          </div>
          {/* Brutalist Progress Bar */}
          <div className="w-full h-3 bg-zinc-200 border-2 border-zinc-900 rounded-full overflow-hidden">
            <div className="h-full w-[72%] bg-violet-400 border-r-2 border-zinc-900" />
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
export function DinkCard({
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
    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#faf6ee] to-[#f0e6d2]">
      <Front project={project} />

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/10">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className="text-[10px] font-mono tracking-wide px-2 py-0.5 rounded bg-zinc-900 border border-zinc-900 text-amber-50 font-bold shadow-[1px_1px_0px_rgba(0,0,0,1)]"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

export function DinkCardBackground({ project }: { project: ProjectCardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
      }}
      // Added background color, dot grid gradient, and background sizing
      className="absolute w-full h-full p-6 flex flex-col justify-between"
    />
  );
}
