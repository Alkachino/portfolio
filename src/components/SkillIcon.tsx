import {
  Code,
  Database,
  GitBranch,
  BrainCircuit,
  Container,
  Server,
  Github,
  Layers3,
  PenTool,
  Palette,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { FirebaseLogo } from "./icons/FirebaseLogo";
import { NextJsLogo } from "./icons/NextJsLogo";
import { PostgreSqlLogo } from "./icons/PostgreSqlLogo";
import { VercelLogo } from "./icons/VercelLogo";

interface SkillIconProps extends LucideProps {
  name: string;
}

export const SkillIcon = ({ name, ...props }: SkillIconProps) => {
  const lowerCaseName = name.toLowerCase();

  switch (lowerCaseName) {
    // Languages
    case "javascript":
    case "typescript":
    case "python":
    case "html5":
    case "css3":
    case "c++":
    case "java":
    case "html/css":
      return <Code {...props} />;
    case "sql":
      return <Database {...props} />;

    // Frameworks
    case "react":
    case "node.js":
    case "express":
    case "django":
      return <Code {...props} />;
    case "next.js":
      return <NextJsLogo {...props} />;

    // Databases
    case "mongodb":
    case "database":
    case "mysql":
      return <Database {...props} />;
    case "postgresql":
      return <PostgreSqlLogo {...props} />;
    case "firebase":
      return <FirebaseLogo {...props} />;

    // DevOps & Containers
    case "docker":
      return <Container {...props} />;
    case "kubernetes":
      return <Server {...props} />;
    case "git":
      return <GitBranch {...props} />;
    case "github":
      return <Github {...props} />;
    case "vercel":
      return <VercelLogo {...props} />;

    // AI
    case "genkit":
    case "tensorflow.js":
    case "langchain":
    case "ai":
    case "apis de ia generativa":
    case "nltk":
      return <BrainCircuit {...props} />;
    
    // UI & Design
    case "tailwind css":
    case "shadcn/ui":
      return <Palette {...props} />;

    // Other
    case "d3.js":
      return <PenTool {...props}/>;
    case "websocket":
      return <Layers3 {...props}/>;
    case "headless cms":
      return <Database {...props}/>;
      
    default:
      return <Code {...props} />;
  }
};
