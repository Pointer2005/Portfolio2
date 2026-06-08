import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub,
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiMongodb 
} from 'react-icons/si';

export const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "GitHub", icon: FaGithub, color: "text-foreground" },
    ]
  }
];
