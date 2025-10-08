import { placeholderImages } from "@/lib/placeholder-images";
import type { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
  name: "Adrian Oviedo",
  title: "Convierto ideas en soluciones de software robustas.",
  summary: "Futuro Ingeniero en Computación apasionado por el desarrollo backend. Me especializo en crear aplicaciones eficientes y escalables con Python, Django y PostgreSQL.",
  about: {
    professionalStory: [
      "Soy un estudiante de último año de Ingeniería en Computación en la UAEMex con una profunda pasión por la tecnología. Mi enfoque principal es el desarrollo backend, donde disfruto diseñando la lógica y la arquitectura que da vida a las aplicaciones web.",
      "Mi experiencia se centra en el ecosistema de Python, utilizando el framework Django para construir aplicaciones seguras y mantenibles, y PostgreSQL para garantizar la integridad y eficiencia de los datos. Soy un firme creyente en el aprendizaje continuo, siempre explorando nuevas tecnologías como Docker y las APIs de IA Generativa para mejorar mis procesos de desarrollo.",
    ],
    education: "Ingeniería en Computación - Universidad Autónoma del Estado de México (UAEMex)",
    careerGoals: "Busco una oportunidad profesional donde pueda aplicar mi habilidad para la resolución de problemas y contribuir a proyectos desafiantes que generen un impacto real.",
    image: placeholderImages.get("about-portrait")!,
  },
  skills: [
    {
      name: "Lenguajes",
      skills: ["Python", "C++", "Java", "SQL", "TypeScript"],
    },
    {
      name: "Frameworks",
      skills: ["Django", "Next.js", "React"],
    },
    {
      name: "Bases de Datos",
      skills: ["PostgreSQL", "MySQL", "Firebase"],
    },
    {
      name: "DevOps",
      skills: ["Docker", "Git", "GitHub"],
    },
    {
      name: "I.A.",
      skills: ["APIs de IA Generativa", "NLTK", "Genkit"],
    },
    {
      name: "Portfolio Web",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN/UI", "Genkit"],
    }
  ],
  projects: [
    {
      title: "Chatbot de Buenas Prácticas para General Motors",
      description: "Lideré el desarrollo de un prototipo funcional de chatbot diseñado para resolver consultas técnicas de los trabajadores, mejorando el acceso a la información. Implementé toda la lógica de procesamiento de lenguaje natural en Python con la librería NLTK y desarrollé la interfaz de usuario con HTML, CSS y JavaScript. Este proyecto fue una excelente oportunidad para aplicar un ciclo de desarrollo completo en un contexto universitario-industrial.",
      technologies: ["Python", "NLTK", "JavaScript", "HTML/CSS", "Git"],
      githubUrl: "https://github.com/Alkachino",
      liveUrl: undefined,
      image: placeholderImages.get("project-1")!,
    },
  ],
  certifications: [
    {
      name: "Especialidad en Tratamiento de Datos",
      issuer: "Capacítate para el Empleo",
      date: "2023",
    },
    {
      name: "Introduction to Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "2022",
    },
    {
      name: "Universidad Python: De Cero a Experto",
      issuer: "Udemy",
      date: "En curso",
    },
    {
      name: "SQL y MySQL para Análisis de Datos",
      issuer: "Udemy",
      date: "En curso",
    },
    {
      name: "Desarrollo con Inteligencia Artificial",
      issuer: "BIG school",
      date: "En curso",
    },
  ],
  contact: {
    email: "aoviedo.eng@proton.me",
    socials: [
      { name: "GitHub", url: "https://github.com/Alkachino" },
      { name: "LinkedIn", url: "https://linkedin.com/in/adrian-oviedo-moreno" },
    ],
  },
  cvUrl: "#",
};
