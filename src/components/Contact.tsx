import { FadeIn } from "./FadeIn";
import { PageTransition } from "./PageTransition";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <PageTransition className="flex-grow flex flex-col">
      <section className="flex-grow pt-32 md:pt-40 pb-12 md:pb-16 px-5 md:px-12 lg:px-24 flex flex-col justify-between">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-12 lg:gap-16 mb-20 md:mb-32">
          {/* Left: Large Statement */}
          <div className="md:col-span-2 lg:col-span-6">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                Engineering<br />Interfaces<br />for Growth.
              </h1>
            </FadeIn>
          </div>

          {/* Middle: Quick Links */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-4 md:gap-6">
            <FadeIn delay={0.3}>
              <h3 className="text-base sm:text-lg md:text-xl font-mono tracking-widest text-foreground">/Quick links</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                {['Bio', 'Projects', 'Experience', 'Skills'].map((item) => (
                  <Link 
                    key={item}
                    to={`/${item.toLowerCase()}`} 
                    className="px-4 py-2 md:px-5 md:py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-background transition-colors duration-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-4 md:gap-6">
            <FadeIn delay={0.4}>
              <h3 className="text-base sm:text-lg md:text-xl font-mono tracking-widest text-foreground">/Reach out</h3>
              <div className="text-xs sm:text-sm text-muted flex flex-col gap-3 md:gap-4 mt-3 md:mt-4 font-mono tracking-wide">
                <a href="mailto:abrahamoluwaniyi50@gmail.com" className="hover:text-accent transition-colors duration-300 break-all">
                  abrahamoluwaniyi50@gmail.com
                </a>
                
                <div className="flex gap-4 md:gap-6 mt-1 md:mt-2">
                  <a href="https://github.com/Abraham123-dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300">GitHub</a>
                  <a href="https://x.com/AbrahamDav11955" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300">X</a>
                  <a href="https://www.linkedin.com/in/abraham-oluwaniyi-888534366" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300">LinkedIn</a>
                </div>

                <p className="leading-relaxed mt-2 md:mt-4">
                  Available for remote work, Contract roles & Full-time roles
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom: Massive Typography */}
        <div className="flex flex-col items-center w-full mt-auto overflow-hidden">
          <FadeIn delay={0.5} className="w-full">
            <h2 className="text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] font-bold tracking-tighter leading-none text-foreground text-center w-full whitespace-nowrap select-none opacity-90">
              Abraham.dev
            </h2>
          </FadeIn>
        </div>

      </section>
    </PageTransition>
  );
}
