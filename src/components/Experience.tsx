import { FadeIn } from "./FadeIn";
import { PageTransition } from "./PageTransition";

const experiences = [
  {
    company: "Axile",
    type: "Ticketing & Event Management Platform",
    role: "Front-End Engineer",
    period: "Jan 2026 — Present",
    description: "Worked on a ticketing platform enabling event organizers to manage events, ticket sales, dashboards, and analytics. Focused on creating seamless user journeys and robust internal tooling.",
    link: "https://axile.ng",
    skills: [
      "UI architecture",
      "API integrations",
      "Dashboard systems",
      "Performance optimization",
      "Reusable component systems"
    ]
  },
  {
    company: "Codveda Technologies",
    type: "Frontend Development",
    role: "Frontend Developer Intern",
    period: "Mar 2026 — Apr 2026",
    description: "Worked on calm interfaces to strengthen my skills as a frontend developer. Integrated basic HTML, CSS, and JavaScript to build responsive and user-friendly web components.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "Interface design",
      "Responsive layouts",
      "Frontend fundamentals"
    ]
  },
  {
    company: "UserTesting",
    type: "User Experience Research Platform",
    role: "Usability Tester & QA",
    period: "May 2024 — Oct 2024",
    description: "Evaluated digital products for usability, accessibility, and overall user experience. Identified software defects and provided actionable feedback to improve product quality and user journeys.",
    skills: [
      "Usability testing",
      "Quality assurance",
      "Bug tracking",
      "UX evaluation",
      "User feedback analysis"
    ]
  }
];

const education = [
  {
    institution: "Obafemi Awolowo University",
    type: "Undergraduate Degree",
    degree: "Software Engineering",
    period: "Oct 2024 — Present",
    description: "Pursuing a comprehensive curriculum in software engineering, building a strong foundation in core computer science principles, system design, and modern software development methodologies.",
    skills: [
      "Algorithms",
      "Data Structures",
      "System Architecture",
      "Software Development Life Cycle"
    ]
  }
];

export function Experience() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 px-5 md:px-12 lg:px-24">
        
        {/* Experience Section */}
        <FadeIn delay={0.2}>
          <h3 className="text-[10px] sm:text-xs font-mono tracking-widest text-muted uppercase mb-16 md:mb-24">Experience</h3>
        </FadeIn>

        <div className="flex flex-col gap-20 md:gap-24 lg:gap-32 mb-32 md:mb-40">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-8 border-b border-foreground/10 pb-12 md:pb-16 last:border-0 last:pb-0">
              <div className="md:col-span-4 lg:col-span-4">
                <FadeIn delay={0.3 + (index * 0.1)}>
                  <h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">{exp.company}</h4>
                  <p className="text-muted text-xs sm:text-sm font-mono tracking-wide uppercase leading-relaxed max-w-xs md:pr-4">
                    {exp.type}
                  </p>
                </FadeIn>
              </div>
              
              <div className="md:col-span-8 lg:col-span-8">
                <FadeIn delay={0.4 + (index * 0.1)}>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 md:mb-8 gap-2 md:gap-4">
                    <h5 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium italic text-foreground/90">{exp.role}</h5>
                    <span className="text-xs sm:text-sm text-muted font-mono tracking-widest uppercase">{exp.period}</span>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.5 + (index * 0.1)}>
                  <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed mb-8 md:mb-12 max-w-2xl text-balance">
                    {exp.description}
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.6 + (index * 0.1)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8 md:gap-x-12 text-sm md:text-base text-foreground/80 font-medium">
                    {exp.skills.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4 group">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 flex-shrink-0" />
                        <span className="group-hover:text-foreground transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                {exp.link && (
                  <FadeIn delay={0.7 + (index * 0.1)}>
                    <div className="mt-10 md:mt-12">
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-accent hover:text-foreground transition-colors duration-300 w-fit"
                      >
                        Visit Site
                        <span className="w-8 h-[1px] bg-accent group-hover:bg-foreground transition-colors duration-300 relative">
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-accent group-hover:border-foreground rotate-45 transition-colors duration-300" />
                        </span>
                      </a>
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <FadeIn delay={0.4}>
          <h3 className="text-[10px] sm:text-xs font-mono tracking-widest text-muted uppercase mb-16 md:mb-24">Education</h3>
        </FadeIn>

        <div className="flex flex-col gap-20 md:gap-24 lg:gap-32">
          {education.map((edu, index) => (
            <div key={edu.institution} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-8 border-b border-foreground/10 pb-12 md:pb-16 last:border-0 last:pb-0">
              <div className="md:col-span-4 lg:col-span-4">
                <FadeIn delay={0.5 + (index * 0.1)}>
                  <h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">{edu.institution}</h4>
                  <p className="text-muted text-xs sm:text-sm font-mono tracking-wide uppercase leading-relaxed max-w-xs md:pr-4">
                    {edu.type}
                  </p>
                </FadeIn>
              </div>
              
              <div className="md:col-span-8 lg:col-span-8">
                <FadeIn delay={0.6 + (index * 0.1)}>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 md:mb-8 gap-2 md:gap-4">
                    <h5 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium italic text-foreground/90">{edu.degree}</h5>
                    <span className="text-xs sm:text-sm text-muted font-mono tracking-widest uppercase">{edu.period}</span>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.7 + (index * 0.1)}>
                  <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed mb-8 md:mb-12 max-w-2xl text-balance">
                    {edu.description}
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.8 + (index * 0.1)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8 md:gap-x-12 text-sm md:text-base text-foreground/80 font-medium">
                    {edu.skills.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4 group">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 flex-shrink-0" />
                        <span className="group-hover:text-foreground transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>

      </section>
    </PageTransition>
  );
}
