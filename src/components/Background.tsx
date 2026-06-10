import { ProjectCardData } from "../types";
import { CliCardBackground } from "./cards/CliCard";
import { DinkCardBackground } from "./cards/DinkCard";
import { DrawingCardBackground } from "./cards/DrawingCard";
import { FinanceCardBackground } from "./cards/FinanceCard";
import { IntroCardBackground } from "./cards/IntroCard";
import { RagCardBackground } from "./cards/RagCard";
import { RecipePickerCardBackground } from "./cards/RecipePickerCard";
import { ScoreLoserCardBackground } from "./cards/ScoreLoserCard";
import { WordGameCardBackground } from "./cards/WordGameCard";

interface BackgroundProps {
  project: ProjectCardData;
}

export function Background({ project }: BackgroundProps) {
  switch (project.styleType) {
    case "intro":
      return <IntroCardBackground project={project} />;
    case "drawing":
      return <DrawingCardBackground project={project} />;
    case "finance":
      return <FinanceCardBackground project={project} />;
    case "rag":
      return <RagCardBackground project={project} />;
    case "cli":
      return <CliCardBackground project={project} />;
    case "scoreloser":
      return <ScoreLoserCardBackground project={project} />;
    case "wordgame":
      return <WordGameCardBackground project={project} />;
    case "recipepicker":
      return <RecipePickerCardBackground project={project} />;
    case "dink":
      return <DinkCardBackground project={project} />;
    default:
      return null;
  }
}
