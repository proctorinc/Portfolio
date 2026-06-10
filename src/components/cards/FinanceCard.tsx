"use client";

import { ProjectCardData } from "@/src/types";
import { motion } from "framer-motion";

// ============================================================================
// FRONT SIDE
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  return (
    <>
      <div className="text-left w-full pt-1">
        <h2
          className={`text-xl tracking-tight leading-none ${project.fontClass} text-emerald-400`}
        >
          {project.frontTitle}
        </h2>
      </div>

      <div className="w-full flex-1 flex items-center justify-center relative opacity-80 mt-2">
        <div className="w-full max-w-[200px] font-mono text-[11px] text-emerald-500/50 space-y-1 text-left">
          <div>❯ Object.keys(tx_batch)</div>
          <div className="text-zinc-600"> .dataloader(128ms)</div>
          <div className="h-12 w-full border-l border-b border-emerald-900/60 mt-4 relative">
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
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
export function FinanceCard({
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
    <div className="w-full h-full p-6 flex flex-col justify-between border border-emerald-950/40 bg-[#090d16]">
      <Front project={project} />

      <div className="flex flex-wrap gap-1.5 pt-4">
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
  );
}

export function FinanceCardBackground({
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
      className="absolute w-full h-full p-6 flex flex-col justify-between bg-[radial-gradient(#37373b_1px,transparent_1px)] [background-size:30px_30px]"
    />
  );
}
