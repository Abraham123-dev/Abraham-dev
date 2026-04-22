import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLSpanElement>(null);
  const brahamContainerRef = useRef<HTMLDivElement>(null);
  const brahamTextRef = useRef<HTMLSpanElement>(null);
  const slashRef = useRef<HTMLSpanElement>(null);

  // useLayoutEffect runs BEFORE the browser paints the screen, 
  // completely eliminating the split-second "flash" glitch.
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    // gsap.context ensures all animations are scoped and cleaned up perfectly in React
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => {
          document.body.style.overflow = 'unset';
          onComplete();
        }
      });

      // Initial states are set before the user ever sees the screen
      gsap.set([aRef.current, brahamTextRef.current], { yPercent: 100 });
      gsap.set(slashRef.current, { opacity: 0, x: -20 });

      // 1. Reveal "Abraham" as a solid unit rising from the invisible floor
      tl.to([aRef.current, brahamTextRef.current], {
        yPercent: 0,
        duration: 1.2,
        ease: "expo.out",
      })
      // 2. Slide and fade in the "/." accent
      .to(slashRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      // 3. The Mechanical Crush: Snap the width to 0
      .to(brahamContainerRef.current, {
        width: 0,
        duration: 0.9,
        ease: "expo.inOut"
      }, "+=0.15")
      // 4. Lift the curtain
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut"
      }, "-=0.1");
    });

    return () => {
      ctx.revert(); // Clean up GSAP context on unmount
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
    >
      <div className="flex items-center justify-center text-[16vw] sm:text-[14vw] md:text-[11vw] lg:text-[9rem] font-bold tracking-tighter leading-none">
        
        {/* Mask wrapper for "A" */}
        <div className="overflow-hidden pb-2 -mb-2">
          <span ref={aRef} className="inline-block text-foreground will-change-transform">A</span>
        </div>
        
        {/* Mask wrapper for "braham" that will collapse */}
        <div ref={brahamContainerRef} className="overflow-hidden pb-2 -mb-2 will-change-[width]">
          <span ref={brahamTextRef} className="inline-block text-foreground whitespace-nowrap will-change-transform">
            braham
          </span>
        </div>
        
        {/* Wrapper for "/." */}
        <div className="pb-2 -mb-2 flex items-center">
          <span ref={slashRef} className="inline-block text-accent will-change-transform">/.</span>
        </div>

      </div>
    </div>
  );
}
