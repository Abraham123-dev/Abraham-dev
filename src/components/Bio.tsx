import abrahamImg from "../assets/Abraham.jpg";
import { FadeIn } from "./FadeIn";
import { PageTransition } from "./PageTransition";

export function Bio() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 px-5 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 relative items-start">
          
          {/* Left Column: Title & Sticky Image */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col relative">
            <div className="sticky top-32">
              <FadeIn delay={0.2}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 md:mb-12">
                  Bio.
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                {/* Scaled down slightly */}
                <div className="w-full aspect-[3/4] bg-[#111] rounded-2xl overflow-hidden relative group max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] shadow-2xl">
                  <img 
                    src={abrahamImg} 
                    alt="Portrait of Abraham" 
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Biography Text */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col pt-4 md:pt-0 lg:pt-32">
            <FadeIn delay={0.4}>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-foreground/90 mb-8 md:mb-12 leading-tight">
                Building interfaces that work well and solve real problems.
              </h3>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 text-base sm:text-lg md:text-xl text-muted leading-relaxed text-balance font-light">
                <p>
                  I'm a Software Engineer focused on frontend development with over a year of experience building web products that scale. I work with product teams to deliver real value—partnering with backend developers, using APIs effectively, and making sure every solution actually solves a problem.
                </p>
                <p>
                  I've built platforms like ticketing systems at Axile and user research tools at UserTesting using React, Next.js, and TypeScript. I don't just write code—I solve problems. Whether it's building smooth interfaces, managing complex state, or making things faster, I think carefully about every decision. I build reusable components, systems that grow with your needs, and code that works for both users and your product goals.
                </p>
                <p>
                  I'm learning Backend Development and AI Engineering to become a more complete engineer. I want to build end-to-end solutions that make a real difference for the teams and products I work with.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 border-t border-foreground/10 pt-10 md:pt-12 lg:pt-16">
                <div>
                  <h4 className="text-[10px] sm:text-xs font-mono tracking-widest text-foreground uppercase mb-5">Core Focus</h4>
                  <ul className="text-sm md:text-base text-muted flex flex-col gap-3">
                    <li>UI Architecture</li>
                    <li>Design Systems</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-mono tracking-widest text-foreground uppercase mb-5">Current Pursuits</h4>
                  <ul className="text-sm md:text-base text-muted flex flex-col gap-3">
                    <li>Backend Architecture</li>
                    <li>AI Integration</li>
                    <li>System Design</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
