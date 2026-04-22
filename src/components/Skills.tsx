import { FadeIn } from "./FadeIn";
import { PageTransition } from "./PageTransition";

const skillGroups = [
  {
    title: "Front-End",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Animation",
    skills: ["Framer Motion", "GSAP", "CSS Transitions", "WebGL"]
  },
  {
    title: "Backend",
    skills: ["Supabase"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "Vercel"]
  },
  {
    title: "Currently Exploring",
    skills: ["Backend Development", "AI Engineering", "System Design"]
  }
];

export function Skills() {
  return (
    <PageTransition>
      <section id="skills" className="min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 px-5 md:px-12 lg:px-24 bg-[#080808]">
        <FadeIn delay={0.2}>
          <h3 className="text-[10px] sm:text-xs font-mono tracking-widest text-muted uppercase mb-16 md:mb-24">Skills & Stack</h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={0.3 + (index * 0.1)}>
              <div className="flex flex-col">
                <h4 className="text-[10px] sm:text-xs font-mono tracking-widest text-muted uppercase mb-6 md:mb-8 pb-3 md:pb-4 border-b border-foreground/10">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {group.skills.map((skill) => (
                    <li 
                      key={skill} 
                      className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 hover:text-accent hover:translate-x-2 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
