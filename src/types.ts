export interface ProjectCardData {
  styleType:
    | "intro"
    | "drawing"
    | "finance"
    | "rag"
    | "cli"
    | "scoreloser"
    | "wordgame"
    | "dink"
    | "recipepicker";
  frontTitle: string;
  fontClass: string;
  badges: string[];
  backContent: {
    title: string;
    role: string;
    timeline: string;
    takeaways: string[];
  };
  githubUrl?: string;
  url?: {
    label: string;
    href: string;
  };
  comingSoon?: boolean;
}
