"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { ProjectCardData } from "@/src/types";

// Component imports
import { IntroCard } from "./cards/IntroCard";
import { DrawingCard } from "./cards/DrawingCard";
import { FinanceCard } from "./cards/FinanceCard";
import { RagCard } from "./cards/RagCard";
import { CliCard } from "./cards/CliCard";
import { ScoreLoserCard } from "./cards/ScoreLoserCard";
import { WordGameCard } from "./cards/WordGameCard";
import { RecipePickerCard } from "./cards/RecipePickerCard";
import { DinkCard } from "./cards/DinkCard";

interface PortfolioCardProps {
  project: ProjectCardData;
  index: number;
  activeIndex: number;
  isFlipped: boolean;
  handleFlip: (index: number) => void;
  onCardClick: (index: number) => void;
}

export function PortfolioCard({
  project,
  index,
  activeIndex,
  isFlipped,
  handleFlip,
  onCardClick,
}: PortfolioCardProps) {
  const offset = index - activeIndex;
  const isActive = index === activeIndex;

  // Track viewport height on the client to scale the Framer Motion 'x' translation step proportionally
  const [spreadMultiplier, setSpreadMultiplier] = useState(260);

  useEffect(() => {
    const handleResize = () => {
      // Scales the step distance based on the responsive card width (~81% of card width)
      const cardHeight = window.innerHeight * 0.55; // matching the 55vh in CSS
      const cardWidth = cardHeight * (16 / 21);
      setSpreadMultiplier(cardWidth * 0.81);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculatedZIndex = isActive ? 100 : 50 - Math.abs(offset) - index;

  const renderCardSide = (side: "front" | "back") => {
    switch (project.styleType) {
      case "intro":
        return <IntroCard project={project} side={side} />;
      case "drawing":
        return <DrawingCard project={project} side={side} />;
      case "finance":
        return <FinanceCard project={project} side={side} />;
      case "rag":
        return <RagCard project={project} side={side} />;
      case "cli":
        return <CliCard project={project} side={side} />;
      case "scoreloser":
        return <ScoreLoserCard project={project} side={side} />;
      case "wordgame":
        return <WordGameCard project={project} side={side} />;
      case "recipepicker":
        return <RecipePickerCard project={project} side={side} />;
      case "dink":
        return <DinkCard project={project} side={side} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      initial={{
        x: offset * spreadMultiplier,
        scale: isActive ? 1 : 0.82,
        zIndex: calculatedZIndex,
        opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.35 : 0,
      }}
      animate={{
        x: offset * spreadMultiplier,
        scale: isActive ? 1 : 0.82,
        zIndex: calculatedZIndex,
        opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.35 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      onClick={() => onCardClick(index)}
      // Aspect ratio: 16/21. Base sizing scales from 420px on mobile to 55vh on desktops.
      className="absolute w-[320px] h-[420px] md:h-[55vh] md:w-[calc(55vh*16/21)] cursor-pointer select-none rounded-xl"
    >
      <motion.div
        className="relative w-full h-full shadow-2xl rounded-2xl shadow-white/30"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* STRUCTURAL FRONT CONTAINER LAYER */}
        <div
          /* CRITICAL FIX: stopPropagation prevents input focus clicks
            from triggering onCardClick() on the parent component container.
          */
          onClick={(e) => {
            if (isActive) {
              e.stopPropagation();
            }
          }}
          className="absolute flex flex-col inset-0 w-full h-full backface-hidden overflow-hidden shadow-2xl rounded-2xl border border-slate-200/30 isolation-auto"
        >
          {renderCardSide("front")}
        </div>

        {/* STRUCTURAL BACK CONTAINER LAYER */}
        <div className="absolute top flex flex-col inset-0 w-full h-full backface-hidden rotate-y-180 shadow-2xl rounded-2xl border border-slate-200/30 bg-[#121215] p-4 md:p-[5%] justify-between">
          {renderCardSide("back")}
        </div>
      </motion.div>

      <div
        onClick={(e) => {
          e.stopPropagation();
          handleFlip(index);
        }}
        className="absolute p-4 -top-12 z-50 right-2 flex items-center justify-end text-[10px] font-mono text-zinc-200 gap-1 mt-2"
      >
        <RotateCcw className="w-3 h-3" /> Click to flip
      </div>
    </motion.div>
  );
}
