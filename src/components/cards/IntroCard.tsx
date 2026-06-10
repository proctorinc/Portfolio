"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCardData } from "@/src/types";

function Front({ project }: { project: ProjectCardData }) {
  return (
    <>
      <div className="text-left w-full pt-1">
        <h2
          className={`text-xl tracking-tight uppercase leading-none ${project.fontClass} text-zinc-100`}
        >
          {project.frontTitle}
        </h2>
      </div>

      <div className="pt-4 px-8">
        <Image
          alt="Profile Picture"
          width={100}
          height={100}
          loading="eager"
          className="w-full"
          src="/me/80859455.png"
        />
      </div>
    </>
  );
}

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

export function IntroCard({
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
      className="w-full h-full p-6 flex flex-col justify-between border border-zinc-800/40"
      style={{
        background:
          "radial-gradient(circle at 10% 20%, #1e1e24 0%, #121214 90%)",
      }}
    >
      <Front project={project} />

      {/* Shared bottom badge drawer on front */}
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

export function IntroCardBackground({ project }: { project: ProjectCardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
      }}
    />
  );
}
