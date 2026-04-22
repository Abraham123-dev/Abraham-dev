import { useState, useEffect, ReactNode } from "react";
import { cn } from "../utils/cn";

interface EmergeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Emerge({ children, delay = 0, className }: EmergeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // A tiny buffer ensures the initial hidden state is painted to the DOM 
    // before we trigger the transition to the visible state.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay + 20);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "transition-all duration-1000 ease-out will-change-transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
