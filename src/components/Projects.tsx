import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PageTransition } from "./PageTransition";
import voxyImg from "../assets/voxy.png";
import cdssImg from "../assets/cdss.png";
import adaImg from "../assets/ada.png";
import tictactoeImg from "../assets/tictactoe.png";

interface Project {
  title: string;
  category: string;
  roles: string[];
  type: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  image: string;
  isOngoing?: boolean;
}

const projects: Project[] = [
  {
    title: "Voxy",
    category: "Full Stack AI",
    roles: ["Dashboard Architecture", "API Orchestration", "State Management"],
    type: "Web App",
    description: "Collaborated with a team to architect a high-performance business dashboard for a multilingual AI voice assistant. My focus was on solving complex server-state synchronization issues by integrating TanStack Query, and engineering seamless communication layers between the frontend and AI-driven backend APIs to help small businesses automate customer support across voice and text.",
    stack: ["Next.js", "JavaScript", "Supabase", "TanStack Query", "AI Integration"],
    link: "https://voxyvoice.vercel.app/",
    github: undefined,
    image: voxyImg
  },
  {
    title: "CDSS",
    category: "HealthTech / SaaS",
    roles: ["Dashboard Engineering", "System Architecture", "State Management"],
    type: "Medical System",
    description: "As part of a collaborative effort, I engineered a Clinical Decision Support System (CDSS) currently deployed at a clinic in OAU. I architected a comprehensive admin dashboard that enables healthcare providers to deliver personalized, evidence-based recommendations, integrated MongoDB/Mongoose for complex patient data modeling, and utilized Zustand for high-performance state management within clinical workflows.",
    stack: ["Next.js", "MongoDB", "Zustand", "Tailwind CSS", "Cloudinary"],
    link: "https://cdss.samkiel.dev",
    github: "https://github.com/Abraham123-dev/CDSS",
    image: cdssImg
  },
  {
    title: "Ada (Clone)",
    category: "UI Engineering / Motion",
    roles: ["Motion Architecture", "UI Implementation"],
    type: "High-Fidelity Replica",
    description: "Engineered a pixel-perfect clone of the Ada.cx landing page, focusing on replicating the premium brand's aesthetic. I orchestrated complex scroll-triggered sequences using GSAP and built fluid micro-interactions with Framer Motion, resulting in a high-performance replica that mirrors the original platform's sophisticated user experience.",
    stack: ["React", "GSAP", "Framer Motion", "TypeScript", "Tailwind CSS"],
    link: "https://ada-cl.vercel.app/",
    github: undefined,
    image: adaImg
  },
  {
    title: "Tic Tac Toe (Twist)",
    category: "AI Game / Web App",
    roles: ["AI Logic Development", "Game Mechanics Engineering", "Front-End Implementation"],
    type: "Web Game",
    description: "Engineered a unique web-based Tic Tac Toe game, introducing a custom rule set that challenges traditional gameplay. I developed a smart, adaptive AI logic designed to dynamically strategize and respond to the game's novel mechanics, providing a challenging and engaging experience for players.",
    stack: ["React", "JavaScript", "AI Logic", "Game Development"],
    link: "https://tic-tac-toe-ruby-alpha.vercel.app/",
    github: undefined, // Add your GitHub link here if available
    image: tictactoeImg
  },
  {
    title: "BRAUDLE",
    category: "Ongoing / AI Education",
    roles: ["Sole Developer", "AI Architecture", "Full Stack Development"],
    type: "Personal AI Tutor",
    description: "Think of BRAUDLE as a super-intelligent, personal tutor that lives in your computer. Braudle is a high-fidelity AI tutor designed to move students away from passive summaries and toward deep conceptual mastery. Built for students who want to actually understand their subjects, Braudle uses a Socratic 'Teach Mode' to identify logic gaps and build mental models.",
    stack: ["Next.js", "Node.js", "AI Integration", "Socratic Logic"],
    isOngoing: true,
    githubFrontend: "https://github.com/Abraham123-dev/braudle-frontend",
    githubBackend: "https://github.com/Abraham123-dev/braudle-backend",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop"
  },
];

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <PageTransition>
      <section className="min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 px-5 md:px-12 lg:px-24">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[9rem] font-bold tracking-tighter mb-12 md:mb-16 leading-none">
            Projects
          </h1>
        </FadeIn>

        {/* Projects List */}
        <div className="flex flex-col border-t border-foreground/10">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => {
              const isExpanded = expandedProject === project.title;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  key={project.title}
                  className="flex flex-col border-b border-foreground/10"
                >
                  {/* Clickable Header Row */}
                  <div 
                    onClick={() => toggleProject(project.title)}
                    className="group relative flex items-center justify-between py-6 md:py-10 lg:py-12 cursor-pointer transition-colors duration-500 hover:border-foreground/30"
                  >
                    <div className="flex items-center gap-4 md:gap-8 w-1/2 md:w-5/12 lg:w-1/3">
                      <h4 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter transition-colors duration-500 flex items-center gap-4 ${isExpanded ? 'text-foreground' : 'text-foreground/40 group-hover:text-foreground'}`}>
                        {project.title}
                        {project.isOngoing && (
                          <span className="px-2 py-0.5 border border-accent text-accent text-[8px] font-mono uppercase tracking-widest rounded-full opacity-60">Ongoing</span>
                        )}
                      </h4>
                    </div>

                    <div className={`hidden md:block text-xs lg:text-sm font-mono transition-colors duration-500 w-3/12 lg:w-1/3 text-center ${isExpanded ? 'text-foreground/80' : 'text-muted/60 group-hover:text-foreground/80'}`}>
                      {project.roles.join(" / ")}
                    </div>

                    <div className="flex items-center justify-end w-1/2 md:w-4/12 lg:w-1/3 relative gap-4">
                      <span className={`text-[10px] sm:text-sm font-mono transition-colors duration-500 z-20 text-right ${isExpanded ? 'text-foreground' : 'text-muted/60 group-hover:text-foreground'}`}>
                        {project.type}
                      </span>
                      
                      <div className="relative w-4 h-4 flex items-center justify-center ml-2 md:ml-4">
                        <motion.span 
                          animate={{ rotate: isExpanded ? 180 : 0, opacity: isExpanded ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute w-full h-[1.5px] bg-foreground"
                        />
                        <motion.span 
                          animate={{ rotate: isExpanded ? 0 : 90 }}
                          transition={{ duration: 0.3 }}
                          className="absolute w-full h-[1.5px] bg-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 md:pb-16 pt-4 md:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10 order-2 lg:order-1">
                            <div>
                              <h5 className="text-[10px] sm:text-xs font-mono tracking-widest text-muted uppercase mb-4">/ Overview</h5>
                              <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed text-balance">
                                {project.description}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-[10px] sm:text-xs font-mono tracking-widest text-muted uppercase mb-4">/ Stack</h5>
                              <ul className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                  <li key={tech} className="px-3 py-1.5 border border-foreground/20 rounded-full text-[10px] sm:text-xs font-mono text-foreground/80">
                                    {tech}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="pt-2 flex flex-wrap gap-6">
                              {[
                                { key: 'link', label: 'Visit Site' },
                                { key: 'github', label: 'Source Code' },
                                { key: 'githubFrontend', label: 'Frontend Source' },
                                { key: 'githubBackend', label: 'Backend Source' }
                              ].map((link) => {
                                const url = project[link.key as keyof Project];
                                if (typeof url !== 'string') return null;
                                
                                return (
                                  <a key={link.key} href={url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-accent hover:text-foreground transition-colors duration-300 w-fit">
                                    {link.label}
                                    <span className="w-8 h-[1px] bg-accent group-hover:bg-foreground transition-colors duration-300 relative">
                                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-accent group-hover:border-foreground rotate-45 transition-colors duration-300" />
                                    </span>
                                  </a>
                                );
                              })}
                            </div>
                          </div>

                          <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="w-full aspect-[16/10] bg-[#111] rounded-2xl overflow-hidden relative group shadow-2xl">
                              <img 
                                src={project.image} 
                                alt={`${project.title} preview`} 
                                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                              />
                              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}