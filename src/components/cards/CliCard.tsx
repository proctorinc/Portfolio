"use client";

import { ProjectCardData } from "@/src/types";
import { cn } from "@/src/utils";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// ============================================================================
// TYPING EFFECT COMPONENT (DELETE TO BEGINNING OF WORD)
// ============================================================================
function TypingDescription({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [cursorPos, setCursorPos] = useState<number>(text.length);
  const isLooping = useRef(false);

  useEffect(() => {
    setDisplayText(text);

    if (isLooping.current) return;
    isLooping.current = true;

    let active = true;
    let timerId: NodeJS.Timeout;

    const runSimulation = async () => {
      const delay = (ms: number) =>
        new Promise((res) => {
          timerId = setTimeout(res, ms);
        });

      let currentIdx = text.length;

      while (active) {
        // 1. Idle phase
        await delay(3000 + Math.random() * 2000);
        if (!active) break;

        // 2. Pick a random target index (avoiding the immediate starting boundaries)
        const targetIdx = Math.floor(Math.random() * (text.length - 15)) + 10;

        // 3. Move the cursor character-by-character to the target location
        while (currentIdx !== targetIdx) {
          if (currentIdx < targetIdx) {
            currentIdx++;
          } else {
            currentIdx--;
          }
          setCursorPos(currentIdx);
          await delay(50 + Math.random() * 30);
          if (!active) break;
        }
        if (!active) break;

        // Pause briefly upon arrival
        await delay(600);

        // 4. Calculate exactly how many characters back to the nearest space
        const leftSideString = text.slice(0, targetIdx);

        // Find the index of the closest space looking backwards from our target position
        const lastSpaceIdx = leftSideString.lastIndexOf(" ");

        // If no space is found, we delete all the way to the beginning of the string (0)
        const deletionStartBound = lastSpaceIdx === -1 ? 0 : lastSpaceIdx;
        const deleteCount = targetIdx - deletionStartBound;

        // Skip execution if we are already sitting on a space or have nothing to delete
        if (deleteCount <= 0) {
          continue;
        }

        const rightSide = text.slice(targetIdx);
        const targetSegment = text.slice(deletionStartBound, targetIdx);
        const permanentLeft = text.slice(0, deletionStartBound);

        // 5. Backspace letters one by one back to the start of the word
        for (let i = 1; i <= deleteCount; i++) {
          const currentDeletedLeft = targetSegment.slice(
            0,
            targetSegment.length - i,
          );
          setDisplayText(permanentLeft + currentDeletedLeft + rightSide);

          currentIdx = permanentLeft.length + currentDeletedLeft.length;
          setCursorPos(currentIdx);

          await delay(90 + Math.random() * 40); // slightly faster deletion cadence
          if (!active) break;
        }

        // Pause briefly while the word is cleared out
        await delay(500);
        if (!active) break;

        // 6. Type the original word characters back in one by one
        for (let i = 1; i <= deleteCount; i++) {
          const currentRestoredLeft = targetSegment.slice(0, i);
          setDisplayText(permanentLeft + currentRestoredLeft + rightSide);

          currentIdx = permanentLeft.length + currentRestoredLeft.length;
          setCursorPos(currentIdx);

          await delay(130 + Math.random() * 70);
          if (!active) break;
        }
      }
    };

    runSimulation();

    return () => {
      active = false;
      clearTimeout(timerId);
      isLooping.current = false;
    };
  }, [text]);

  const leftText = displayText.slice(0, cursorPos);
  const rightText = displayText.slice(cursorPos);

  return (
    <p className="text-sm text-slate-400 font-sans whitespace-pre-wrap">
      {leftText}
      <span className="inline-block bg-amber-400 text-transparent w-[2px] h-[1.15em] translate-y-[2px] animate-pulse mx-[0.5px]">
        |
      </span>
      {rightText}
    </p>
  );
}

// ============================================================================
// FRONT SIDE
// ============================================================================
function Front({ project }: { project: ProjectCardData }) {
  const originalDescription =
    "A command line automation tool for automating the the security remediation process";

  return (
    <>
      <div
        className={cn(
          "flex flex-col text-left w-full pt-1 gap-2",
          project.fontClass,
        )}
      >
        <h2 className="text-xl tracking-tight leading-none text-zinc-100">
          {project.frontTitle}
        </h2>
        <div className="flex flex-col gap-1 text-sm pt-3">
          <span className="text-green-300">
            $root:[main] {">"}{" "}
            <span className="text-blue-400">python3 bugfix.py --auto</span>
          </span>{" "}
          <TypingDescription text={originalDescription} />
        </div>
      </div>

      <div className="pt-4">
        <Image
          alt="bugfixpy image"
          width={1000}
          height={1000}
          className="w-full cursor pointer-events-none select-none [-webkit-user-drag:none]"
          src="/bugfixpy-1.png"
        />
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
export function CliCard({
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
    <div className="w-full h-full p-6 flex flex-col justify-between border border-zinc-800 bg-[#242424]">
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

export function CliCardBackground({ project }: { project: ProjectCardData }) {
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pool of realistic looking dev, system, and git logs to stream over the screen
  const commandPool = [
    "git add . && git commit -m 'fix: resolve race conditions'",
    "npm run build -- --profile --verbose",
    "docker build -t app/prod:latest . --no-cache",
    "curl -X POST https://api.internal/v1/deploy -H 'Authorization: Bearer ***'",
    "python3 -m pytest tests/test_security.py --disable-warnings",
    "grep -r 'TODO' ./src/components/ui/card",
    "aws s3 sync ./out s3://prod-static-assets-bucket --delete",
    "kubectl rollout status deployment/web-server -n production",
    "sed -i 's/development/production/g' .env.production",
    "npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
    "ssh -i ~/.ssh/prod_key.pem admin@10.0.4.12 'df -h'",
    "tar -czvf backup_$(date +%F).tar.gz ./data/db",
    "openssl rand -base64 32 >> .env.local",
    "sudo systemctl restart nginx.service && systemctl status nginx",
  ];

  // 1. Simulates typing/printing logs infinitely character-by-character
  useEffect(() => {
    // Fill the screen with an initial set of static lines so it doesn't start completely blank
    const initialLogs = Array.from({ length: 15 }, () => {
      const randomCommand =
        commandPool[Math.floor(Math.random() * commandPool.length)];
      return `user@machine:~$ ${randomCommand}`;
    });
    setLogs(initialLogs);

    let timerId: NodeJS.Timeout;
    let active = true;

    const streamLogs = async () => {
      const delay = (ms: number) =>
        new Promise((res) => {
          timerId = setTimeout(res, ms);
        });

      while (active) {
        // Random pause between starting a brand new command line (500ms to 1200ms)
        await delay(500 + Math.random() * 700);
        if (!active) break;

        const nextCommand =
          commandPool[Math.floor(Math.random() * commandPool.length)];

        // 1. Insert an empty command prompt line first
        setLogs((prev) => [...prev, "user@machine:~$ "]);

        // 2. Type out the command string character-by-character
        for (let i = 1; i <= nextCommand.length; i++) {
          // Adjust typing cadence per letter (30ms to 70ms) to feel like real typing
          await delay(30 + Math.random() * 40);
          if (!active) break;

          const currentTypedChunk = nextCommand.slice(0, i);

          setLogs((prev) => {
            if (prev.length === 0) return prev;
            // Target only the very last line in our log array and update its content
            const updatedLogs = [...prev];
            updatedLogs[updatedLogs.length - 1] =
              `user@machine:~$ ${currentTypedChunk}`;
            return updatedLogs;
          });
        }
      }
    };

    streamLogs();

    return () => {
      active = false;
      clearTimeout(timerId);
    };
  }, []);

  // 2. Automatically triggers a scroll behavior to keep the viewport anchored to the bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [logs]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="absolute inset-0 w-full h-full p-4 overflow-hidden bg-[#0d1117] pointer-events-none select-none"
    >
      {/* Scrollable sub-container containing the logs */}
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col gap-1 overflow-y-auto font-mono text-[12px] pb-10 leading-relaxed text-zinc-600 custom-scrollbar opacity-35"
      >
        {logs.map((log, idx) => (
          <div
            key={idx}
            className="whitespace-pre truncate w-full text-white/60"
          >
            {/* Highlight the shell prompt with a different color tone to look realistic */}
            <span className="text-green-500">user@machine:~$</span>{" "}
            {log.replace("user@machine:~$ ", "")}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
