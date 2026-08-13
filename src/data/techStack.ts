import { FaReact, FaHtml5, FaSass, FaGitAlt, FaFigma } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
} from "react-icons/si";
import type { TechItem } from "./types";

export const techStack: TechItem[] = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "RTK Query", icon: SiReactquery },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "SCSS", icon: FaSass },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: FaFigma },
  { name: "Postman", icon: SiPostman },
];
