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
import { PythonLogo } from "./icons/PythonLogo";
import { CppLogo } from "./icons/CppLogo";
import { JavaLogo } from "./icons/JavaLogo";
import { TypeScriptLogo } from "./icons/TypeScriptLogo";
import { DjangoLogo } from "./icons/DjangoLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { MySqlLogo } from "./icons/MySqlLogo";
import { TailwindCssLogo } from "./icons/TailwindCssLogo";
import { HuggingFaceLogo } from "./icons/HuggingFaceLogo";

interface SkillIconProps extends LucideProps {
  name: string;
}

export const SkillIcon = ({ name, ...props }: SkillIconProps) => {
  const lowerCaseName = name.toLowerCase();

  switch (lowerCaseName) {
    // Languages
    case "javascript":
      return <Code {...props} />;
    case "typescript":
      return <TypeScriptLogo {...props} />;
    case "python":
      return <PythonLogo {...props} />;
    case "html5":
    case "css3":
    case "html/css":
      return <Code {...props} />;
    case "c++":
      return <CppLogo {...props} />;
    case "java":
      return <JavaLogo {...props} />;
    case "sql":
      return <Database {...props} />;

    // Frameworks
    case "react":
      return <ReactLogo {...props} />;
    case "node.js":
    case "express":
      return <Code {...props} />;
    case "django":
        return <DjangoLogo {...props} />;
    case "next.js":
      return <NextJsLogo {...props} />;

    // Databases
    case "mongodb":
    case "database":
      return <Database {...props} />;
    case "mysql":
      return <MySqlLogo {...props} />;
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
    case "hugging face":
        return <HuggingFaceLogo {...props} />;
    
    // UI & Design
    case "tailwind css":
      return <TailwindCssLogo {...props} />;
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
