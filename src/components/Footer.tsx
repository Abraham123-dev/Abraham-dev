export function Footer() {
  return (
    <footer className="w-full py-10 md:py-12 px-5 md:px-12 lg:px-24 border-t border-white/5 flex flex-row justify-between items-center text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] z-10 relative bg-[#050505]">
      <span className="text-muted/40 font-medium">© {new Date().getFullYear()} ABRAHAM.DEV</span>
      
      <div className="flex gap-8 md:gap-12">
        <a href="https://www.linkedin.com/in/abraham-oluwaniyi-888534366" target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-foreground transition-all duration-300">LINKEDIN</a>
        <a href="https://github.com/Abraham123-dev" target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-foreground transition-all duration-300">GITHUB</a>
        <a href="https://x.com/AbrahamDav11955" target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-foreground transition-all duration-300">X</a>
      </div>
    </footer>
  );
}
