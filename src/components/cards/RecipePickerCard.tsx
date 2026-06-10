"use client";

import { ProjectCardData } from "@/src/types";
import { motion } from "framer-motion";

// ============================================================================
// FRONT SIDE (Rebuilt with real Masonry Image Nodes)
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  // --------------------------------------------------------------------------
  // 📝 DROP YOUR IMAGE URL STRINGS DIRECTLY IN THIS OBJECT:
  // --------------------------------------------------------------------------
  const IMAGES = {
    marryMeChickenTop:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=400", // Replace with your url
    marryMeChickenBottom:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400", // Replace with your url
    popTartTop:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400", // Replace with your url
    popTartBottom:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=400", // Replace with your url
  };

  return (
    <>
      {/* External Font Injection for the stylized recipe headers */}
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
      <link
        href="https://fonts.googleapis.com/css2?family=Chonburi&display=swap"
        rel="stylesheet"
      />

      {/* Top App Header Strip */}
      <div className="text-left w-full flex justify-between items-center pb-2 border-b border-zinc-200/60">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-[#4a3728] flex items-center justify-center text-[10px]">
            🍲
          </div>
          <div>
            <h2 className="text-xs font-serif font-black tracking-tight text-zinc-800 leading-none">
              Food Picker
            </h2>
            <span className="text-[8px] font-sans text-zinc-400 block mt-0.5">
              Matt's kitchen
            </span>
          </div>
        </div>
        <span className="text-[8px] font-mono text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded-full">
          ✨ AI Picker
        </span>
      </div>

      {/* Replicated Image Masonry Column Split */}
      <div className="w-full flex-1 grid grid-cols-2 gap-2 my-2 overflow-hidden items-stretch">
        {/* LEFT MASONRY COLUMN: Marry Me Chicken Style */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-200 shadow-xs bg-zinc-100 flex flex-col h-full group">
          {/* Top Food Image Layer */}
          <div className="relative flex-1 w-full overflow-hidden bg-zinc-200">
            <img
              src={IMAGES.marryMeChickenTop}
              alt="Marry Me Chicken Top"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Slicing Solid Colored Headline Bar */}
          <div className="bg-[#0f4c2a] py-2 px-1 text-center border-y border-emerald-950/20 z-10 relative">
            <p className="text-[9px] font-sans font-black tracking-tight text-[#e6f4ea] leading-tight uppercase">
              Marry Me Chicken <br />
              Pasta Recipe
            </p>
          </div>

          {/* Bottom Food Image Layer */}
          <div className="relative flex-1 w-full overflow-hidden bg-zinc-200">
            <img
              src={IMAGES.marryMeChickenBottom}
              alt="Marry Me Chicken Bottom"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT MASONRY COLUMN: Pop Tart Cookies Style */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-200 shadow-xs bg-[#f4ebd0] flex flex-col h-full group">
          {/* Top Cookie Image Layer */}
          <div className="relative flex-1 w-full overflow-hidden bg-zinc-200">
            <img
              src={IMAGES.popTartTop}
              alt="Pop Tart Cookies Top"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Thick Retro Banner Breakout */}
          <div className="bg-[#f4ebd0] py-1.5 px-1 text-center flex flex-col justify-center items-center z-10 relative border-y border-[#4a2e1b]/5">
            <span className="text-[7px] font-sans font-extrabold tracking-widest text-[#4a2e1b] uppercase leading-none">
              brown sugar
            </span>
            <span
              className="text-[12px] font-serif font-black text-[#4a2e1b] tracking-tighter uppercase leading-none my-0.5"
              style={{ fontFamily: "'Chonburi', serif" }}
            >
              POP TART
            </span>
            <span
              className="text-[10px] font-serif font-black text-[#4a2e1b] tracking-tight uppercase leading-none"
              style={{ fontFamily: "'Chonburi', serif" }}
            >
              COOKIES
            </span>
          </div>

          {/* Bottom Wire Rack Image Layer */}
          <div className="relative flex-1 w-full overflow-hidden bg-zinc-200">
            <img
              src={IMAGES.popTartBottom}
              alt="Pop Tart Cookies Bottom"
              className="absolute inset-0 w-full h-full object-cover"
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
export function RecipePickerCard({
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
    <div className="w-full h-full p-5 flex flex-col justify-between border border-zinc-200 bg-[#f9f8f4]">
      <Front project={project} />

      {/* Light Theme Footer Badges */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/80">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className="text-[9px] font-mono tracking-wide px-2 py-0.5 rounded bg-zinc-200/60 text-zinc-700 border border-zinc-300/30"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

const col1Heights = ["h-72", "h-48", "h-40", "h-56", "h-52"];
const col2Heights = ["h-44", "h-52", "h-52", "h-72", "h-48"];
const col3Heights = ["h-52", "h-56", "h-72", "h-44", "h-40"];

function MasonryGridBlock() {
  return (
    <div className="grid grid-cols-6 gap-3 w-full shrink-0 opacity-10">
      {/* Column 1 */}
      <div className="flex flex-col gap-3">
        {col1Heights.map((height, i) => (
          <div
            key={`col1-${i}`}
            className={`w-full ${height} rounded-2xl bg-zinc-100/40 border border-zinc-200/50 shadow-xs`}
          />
        ))}
      </div>
      {/* Column 2 */}
      <div className="flex flex-col gap-3">
        {col2Heights.map((height, i) => (
          <div
            key={`col2-${i}`}
            className={`w-full ${height} rounded-2xl bg-zinc-100/40 border border-zinc-200/50 shadow-xs`}
          />
        ))}
      </div>
      {/* Column 3 */}
      <div className="flex flex-col gap-3">
        {col3Heights.map((height, i) => (
          <div
            key={`col3-${i}`}
            className={`w-full ${height} rounded-2xl bg-zinc-100/40 border border-zinc-200/50 shadow-xs`}
          />
        ))}
      </div>
      {/* Column 1 */}
      <div className="flex flex-col gap-3">
        {col1Heights.map((height, i) => (
          <div
            key={`col1-${i}`}
            className={`w-full ${height} rounded-2xl bg-zinc-100/40 border border-zinc-200/50 shadow-xs`}
          />
        ))}
      </div>
      {/* Column 2 */}
      <div className="flex flex-col gap-3">
        {col2Heights.map((height, i) => (
          <div
            key={`col2-${i}`}
            className={`w-full ${height} rounded-2xl bg-zinc-100/40 border border-zinc-200/50 shadow-xs`}
          />
        ))}
      </div>
      {/* Column 3 */}
      <div className="flex flex-col gap-3">
        {col3Heights.map((height, i) => (
          <div
            key={`col3-${i}`}
            className={`w-full ${height} rounded-2xl bg-zinc-100/40 border border-zinc-200/50 shadow-xs`}
          />
        ))}
      </div>
    </div>
  );
}

export function RecipePickerCardBackground({
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
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 p-4 select-none"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)",
      }}
    >
      <motion.div
        className="flex flex-col gap-3 w-full"
        animate={{ y: [0, "-50%"] }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* These safely execute now without causing component re-registration */}
        <MasonryGridBlock />
        <MasonryGridBlock />
      </motion.div>
    </motion.div>
  );
}
