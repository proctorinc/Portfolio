"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { ProjectCardData } from "@/src/types";
import { PortfolioCard } from "@/src/components/PortfolioCard";
import { Background } from "@/src/components/Background";

const PROJECTS: ProjectCardData[] = [
  {
    styleType: "intro",
    frontTitle: "Matt Proctor",
    fontClass: "font-intro",
    badges: [
      "Software developer",
      "SDLC/Secure SDLC",
      "LLMs",
      "AI Automation",
      "Internal tooling",
      "BIG TIME",
      "SaaS tier 1 troubleshooting",
      "Security audits",
    ],
    backContent: {
      title: "Matt Proctor",
      role: "Software Engineer",
      timeline: "Present",
      takeaways: [
        "Specializing in AI-driven automation, scalable APIs, and high-integrity code architecture.",
        "Based in Beaverton, Oregon. Passionate about building bulletproof, highly-polished user interfaces.",
      ],
    },
    githubUrl: "https://github.com/proctorinc",
  },
  {
    styleType: "scoreloser",
    frontTitle: "SCORE_LOSER",
    fontClass: "font-mono",
    badges: ["Next.js", "Tailwind", "Zustand", "PWA"],
    backContent: {
      title: "ScoreLoser Tracker",
      role: "Personal Project",
      timeline: "2026",
      takeaways: [
        "Designed an ultra-minimalist, sleek mobile-first scoreboard utility app explicitly tailored for golf-style card games and low-score victory structures.",
        "Implemented localized client state synchronization to cache game configurations instantaneously for offline tabletop environments.",
      ],
    },
    githubUrl: "https://github.com/proctorinc/GameTracker",
  },
  {
    styleType: "rag",
    frontTitle: "Support ticket LLM RAG Search",
    fontClass: "font-rag",
    badges: ["LlamaIndex", "Qdrant", "React", "Spring Boot"],
    backContent: {
      title: "AI & RAG Architecture",
      role: "Secure Code Warrior",
      timeline: "Feb 2025 - Present",
      takeaways: [
        "Architected a production-ready RAG application chaining multi-stage LLM queries to parse data.",
        "Slashed customer MTTR by 40% and boosted semantic data retrieval accuracy by 25%.",
      ],
    },
    githubUrl: "https://github.com/proctorinc/RecipePicker",
  },
  {
    styleType: "cli",
    frontTitle: "bugfix.py",
    fontClass: "font-cli",
    badges: ["Python", "CLI", "Automation", "Security"],
    backContent: {
      title: "Workflow Automation Tooling",
      role: "Secure Code Warrior",
      timeline: "Sep 2021 - Feb 2025",
      takeaways: [
        "Designed and shipped a custom Python CLI triage utility to automate repository cloning pipelines.",
        "Reduced overall bug-fix latency by 75%, reclaiming over 300 annual operational engineering hours.",
      ],
    },
    githubUrl: "https://github.com/proctorinc/bugfixpy",
  },
  {
    styleType: "drawing",
    frontTitle: "The Daily Doodle",
    fontClass: "font-drawing",
    badges: ["Golang", "React", "AWS S3", "Gin"],
    backContent: {
      title: "Daily Drawing Social Media",
      role: "Personal Project",
      timeline: "May 2025 - Jan 2026",
      takeaways: [
        "Engineered a full-stack REST API with passwordless JWT authentication and secure S3 uploads.",
        "Achieved near-instant load times using TanStack Query caching and highly-optimized data fetching.",
      ],
    },
    githubUrl: "https://github.com/proctorinc/drawer",
    url: {
      label: "wordgame.mattyp.app",
      href: "https://wordgame.mattyp.app",
    },
  },
  {
    styleType: "wordgame",
    frontTitle: "Scrabble",
    fontClass: "font-serif",
    badges: ["TypeScript", "Canvas UI", "Web Audio API", "Algorithms"],
    backContent: {
      title: "Tactile Scrabble Game Engine",
      role: "Personal Project",
      timeline: "2026",
      takeaways: [
        "Engineered a rich, cartoon-realistic custom rendering viewport that emulates physical wood tiles, smooth shadows, and warm gameboard canvas layouts.",
        "Integrated highly performant dictionary lookup arrays and recursive move validations directly into the game loop framework.",
      ],
    },
    url: {
      label: "wordgame.mattyp.com",
      href: "https://wordgame.mattyp.com",
    },
  },
  {
    styleType: "finance",
    frontTitle: "Financial GraphQL API",
    fontClass: "font-finance",
    badges: ["Go", "GraphQL", "sqlc", "NLP"],
    backContent: {
      title: "Financial GraphQL API",
      role: "Personal Project",
      timeline: "August 2024",
      takeaways: [
        "Solved complex database N+1 problems via GraphQL Dataloaders to batch-fetch transaction data safely.",
        "Integrated NLP and fuzzy-finding algorithms to dynamically map and link merchant transactions.",
      ],
    },
    githubUrl: "https://github.com/proctorinc/Banker-API",
  },
  {
    styleType: "recipepicker",
    frontTitle: "RECIPE_PICKER",
    fontClass: "font-sans font-black",
    badges: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    backContent: {
      title: "RecipePicker Application",
      role: "Personal Project",
      timeline: "2026",
      takeaways: [
        "Engineered an elegant Pinterest-style visual image masonry discovery interface to explore and organize kitchen prep instructions.",
        "Integrated AI generation loops to parse snapshot uploads of raw ingredients and produce context-aware recipe profiles instantly.",
      ],
    },
    githubUrl: "https://github.com/proctorinc/RecipePicker",
    comingSoon: true,
  },
  {
    styleType: "dink",
    frontTitle: "DINK_BUDGET",
    fontClass: "font-sans font-black",
    badges: ["React", "Drizzle ORM", "SQLite", "Turso"],
    backContent: {
      title: "Dink Budgeting App", //[cite: 1]
      role: "Personal Project", //[cite: 1]
      timeline: "Oct 2025 - Apr 2026", //[cite: 1]
      takeaways: [
        "Designed and compiled a warm, rounded-brutalist financial budgeting dashboard to seamlessly manage savings pipelines[cite: 1].",
        "Architected relational database tables leveraging Drizzle ORM and edge-replicated SQLite queries backed by Turso[cite: 1].",
      ],
    },
    githubUrl: "https://github.com/proctorinc/Dink",
    comingSoon: true,
  },
];

export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  const handleNext = () => {
    setFlippedCardId(null);
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setFlippedCardId(null);
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleCardClick = (index: number) => {
    setFlippedCardId(null);
    setActiveIndex(index);
  };

  const handleCardFlip = (index: number) => {
    if (index !== activeIndex) {
      // If clicking a background card, focus it instead of flipping it
      setFlippedCardId(null);
      setActiveIndex(index);
    } else {
      // Toggle flip state only on the active card
      setFlippedCardId(flippedCardId === index ? null : index);
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0c0e] text-zinc-100 flex flex-col justify-between overflow-hidden font-sans select-none">
      {/* External Typography Injections */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600&family=JetBrains+Mono:wght@700&family=Orbitron:wght@700&family=Share+Tech+Mono&family=Syne:wght@800&display=swap"
        rel="stylesheet"
      />

      {/* Persistent App Header */}
      <header className="px-4 pt-6 max-w-4xl w-full mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center z-10">
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-zinc-300">
            Matt Proctor
          </span>
          <span className="text-xs tracking-[0.2em] font-mono text-zinc-500">
            matthewalanproctor@gmail.com
          </span>
        </div>
        <a
          href="mailto:matthewalanproctor@gmail.com"
          className="text-zinc-300 border border-zinc-500 rounded-xl px-4 py-3 font-mono text-xs"
        >
          Get in touch
        </a>
      </header>

      {PROJECTS.map((project, index) => {
        if (index === activeIndex) {
          return (
            <Background key={`project-background-${index}`} project={project} />
          );
        }
      })}

      {/* 3D Carousel Viewport */}
      <div className="relative w-full my-auto flex flex-col items-center justify-center">
        <div className="relative w-full max-w-5xl h-[460px] flex items-center justify-center perspective-1000">
          {PROJECTS.map((project, index) => (
            <PortfolioCard
              key={`project-${index}`}
              project={project}
              index={index}
              activeIndex={activeIndex}
              isFlipped={flippedCardId === index}
              handleFlip={handleCardFlip}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls & Pagination Indicators */}
      <footer className="w-full max-w-xl mx-auto flex flex-col items-center gap-6 z-10 pb-4">
        {/* Dynamic Width Dot Sliders */}
        <div className="flex items-center gap-4 h-4 relative">
          {PROJECTS.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                onClick={() => {
                  setFlippedCardId(null);
                  setActiveIndex(index);
                }}
                className="cursor-pointer relative h-2 flex items-center"
                style={{ width: isActive ? "64px" : "16px" }}
              >
                {isActive ? (
                  <motion.div
                    layoutId="activeIndicator"
                    className="h-1.5 w-16 bg-zinc-400 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="h-2 w-2 bg-zinc-700 hover:bg-zinc-500 rounded-full transition-colors duration-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* Tactile Arrow Triggers */}
        <div className="flex items-center gap-8">
          <button
            onClick={handlePrev}
            className="p-4 bg-black/80 text-zinc-500 hover:text-zinc-200 transition-colors duration-200 border border-zinc-200/10 rounded-xl"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              setFlippedCardId((prev) => (prev === null ? activeIndex : null))
            }
            className="p-4 bg-black/80 text-zinc-500 hover:text-zinc-200 transition-colors duration-200 border border-zinc-200/10 rounded-xl"
            aria-label="Previous Project"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-4 bg-black/80 text-zinc-500 hover:text-zinc-200 transition-colors duration-200 border border-zinc-200/10 rounded-xl"
            aria-label="Next Project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Global CSS for 3D Engine Context and Design Fonts */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .font-intro {
          font-family: "Syne", sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .font-drawing {
          font-family: "Fredoka", sans-serif;
          font-weight: 600;
        }
        .font-finance {
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          letter-spacing: -0.04em;
        }
        .font-rag {
          font-family: "Orbitron", sans-serif;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .font-cli {
          font-family: "Share Tech Mono", monospace;
          letter-spacing: -0.01em;
        }
      `}</style>
    </main>
  );
}
