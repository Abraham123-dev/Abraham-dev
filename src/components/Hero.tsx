import { FadeIn } from "./FadeIn";
import { Emerge } from "./Emerge";
import { PageTransition } from "./PageTransition";
import abrahamImg from "../assets/Abraham.jpg";

export function Hero() {
  return (
    <PageTransition>
      <section id="bio" className="min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-16 px-5 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Column */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col z-10">
            <FadeIn delay={0.2}>
              <p className="text-xs font-mono tracking-widest uppercase text-muted mb-4 md:mb-6">Hi, I'm</p>
            </FadeIn>
            
            {/* Replaced FadeIn with the new Emerge component for the main title */}
            <Emerge delay={300}>
              <h1 className="text-[16vw] sm:text-[14vw] md:text-[11vw] lg:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-2 pb-2">
                Abraham
              </h1>
            </Emerge>
            
            <FadeIn delay={0.4}>
              <h2 className="text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[5.5rem] font-medium text-foreground/80 leading-none mb-8 md:mb-12 mt-2">
                Front-End Engineer.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <p className="max-w-xl text-sm sm:text-base md:text-lg text-muted leading-relaxed mb-12 md:mb-16 text-balance pr-4 md:pr-8 lg:pr-0">
                Abraham is a Front-End Engineer focused on building scalable, high-performance web applications using modern technologies. He is currently expanding into backend development and AI engineering for more context.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="flex flex-wrap gap-4 md:gap-8 text-[10px] sm:text-xs font-mono tracking-widest text-muted/60 uppercase">
                <span>Based in Nigeria,</span>
                <span className="hidden sm:inline">•</span>
                <span>Software Engineering</span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Editorial Image Anchor */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col items-center md:items-end text-center md:text-right pt-4 md:pt-0">
            <FadeIn delay={0.7} direction="left" className="w-full flex flex-col items-center md:items-end">
              <div className="bg-accent text-accent-foreground px-4 py-2 md:px-5 md:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8 md:mb-10 shadow-[0_0_30px_rgba(249,168,212,0.15)] inline-block">
                SOFTWARE ENGINEERING
              </div>
              
              <div className="w-full max-w-60 sm:max-w-70 md:max-w-75 lg:max-w-85 aspect-3/4 bg-[#111] rounded-2xl overflow-hidden relative group shadow-2xl">
                <img 
                  src={abrahamImg} 
                  alt="Portrait of Abraham" 
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
              </div>
              
              <p className="max-w-60 text-[10px] sm:text-xs font-mono text-muted uppercase tracking-widest leading-relaxed mt-6 md:mt-8 text-center md:text-right">
                Building calm, scalable interfaces for product-led teams.
              </p>
            </FadeIn>
          </div>
          
        </div>
      </section>
    </PageTransition>
  );
}
