"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectCardData } from "@/src/types";
import { motion } from "framer-motion";

const RANDOM_QUOTES = [
  "The true sign of intelligence is not knowledge but imagination.",
  "Reality is merely an illusion, albeit a very persistent one.",
  "Move fast and break things. Unless you are breaking things, you are not moving fast enough.",
  "The best way to predict the future is to invent it.",
  "Hardware is the part of a computer that you can kick; software is the part that you can only curse.",
  "I think, therefore I am a terminal instance running deep within an unmonitored server grid.",
  "Simplicity is the ultimate sophistication.",
];

// ============================================================================
// MATRIX RAIN BACKGROUND EFFECT (FIXED WITH RESIZEOBSERVER)
// ============================================================================
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let columns = 0;
    let drops: number[] = [];
    const chars = "010101ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿ".split("");
    const fontSize = 10;

    // Dynamically recalculate dimensions when parent container bounds shift
    const resizeCanvas = (width: number, height: number) => {
      canvas.width = width;
      canvas.height = height;

      const newColumns = Math.floor(width / fontSize);
      // Only reset/extend drops array if the width grows significantly
      if (newColumns > columns) {
        const additionalDrops = Array(newColumns - columns).fill(1);
        drops = [...drops, ...additionalDrops];
        columns = newColumns;
      }
    };

    // Watch parent dimensions safely
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        resizeCanvas(width, height);
      }
    });

    resizeObserver.observe(parent);

    const draw = () => {
      ctx.fillStyle = "rgba(11, 14, 21, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(14, 165, 233, 0.15)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// ============================================================================
// FRONT SIDE
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  return (
    <>
      <div className="text-left w-full pt-1 z-10 relative">
        <h2
          className={`text-xl tracking-tight leading-none ${project.fontClass} text-sky-400`}
        >
          {project.frontTitle}
        </h2>
      </div>

      <div className="w-full flex-1 flex items-center justify-center relative opacity-80 mt-2 min-h-[140px] z-10">
        {/* Pulse elements explicitly indexed over the canvas background */}
        <div className="relative w-full flex items-center justify-center scale-90">
          <div className="absolute w-24 h-24 border border-sky-500/20 rounded-full animate-pulse" />
          <div className="w-16 h-16 border border-dashed border-sky-400/30 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_15px_#38bdf8]" />
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
export function RagCard({
  project,
  side,
}: {
  project: ProjectCardData;
  side: "front" | "back";
}) {
  const [inputValue, setInputValue] = useState("");
  const [aiOutput, setAiOutput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const streamTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    };
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    setAiOutput("");
    setIsTyping(true);
    setInputValue("");
    if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);

    const randomQuote =
      RANDOM_QUOTES[Math.floor(Math.random() * RANDOM_QUOTES.length)];
    const words = randomQuote.split(" ");
    let currentWordIndex = 0;
    let accumulatedText = "";

    const streamWords = () => {
      if (currentWordIndex < words.length) {
        accumulatedText +=
          (currentWordIndex === 0 ? "" : " ") + words[currentWordIndex];
        setAiOutput(accumulatedText);
        currentWordIndex++;
        streamTimeoutRef.current = setTimeout(streamWords, 180);
      } else {
        setIsTyping(false);
      }
    };

    streamTimeoutRef.current = setTimeout(streamWords, 300);
  };

  if (side === "back") {
    return <Back project={project} />;
  }

  return (
    <div
      className="w-full h-full p-6 flex flex-col justify-between border border-sky-950/30 relative overflow-hidden min-h-[460px]"
      style={{
        background:
          "radial-gradient(circle at center, #131921 0%, #080a0f 100%)",
      }}
    >
      {/* Background matrix context */}
      <MatrixRain />

      <Front project={project} />

      {/* AI Chat Bot Interface Layer */}
      <div className="mt-4 z-10 relative space-y-3">
        {/* Output Log display box */}
        {(aiOutput || isTyping) && (
          <div className="p-3 bg-zinc-950/85 backdrop-blur-sm border border-sky-950/50 rounded text-left font-mono text-xs text-sky-200/90 leading-relaxed min-h-[52px]">
            <span className="text-sky-500 font-bold mr-1.5">AI:</span>
            {aiOutput}
            {isTyping && (
              <span className="animate-pulse inline-block w-1.5 h-3.5 bg-sky-400 ml-1 vertical-middle" />
            )}
          </div>
        )}

        {/* Input bar */}
        <form onSubmit={handleSend} className="flex gap-2 w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
            placeholder={
              isTyping ? "AI is generating..." : "Ask the AI assistant..."
            }
            className="flex-1 px-3 py-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/80 rounded text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-sky-500/50 disabled:opacity-50 transition-colors font-mono"
          />
          <button
            type="submit"
            disabled={isTyping || !inputValue.trim()}
            className="px-3 py-2 bg-sky-950/60 hover:bg-sky-900/80 text-sky-400 border border-sky-800/40 hover:border-sky-500/50 rounded text-xs font-mono disabled:opacity-40 disabled:hover:bg-sky-950/40 transition-all"
          >
            Send
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-4 z-10 relative">
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

export function RagCardBackground({ project }: { project: ProjectCardData }) {
  return <MatrixRain />;
}
