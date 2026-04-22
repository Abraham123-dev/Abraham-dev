import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = useMemo(() => [
    { name: "BIO", path: "/bio" },
    { name: "PROJECTS", path: "/projects" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "SKILLS", path: "/skills" }
  ], []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-5 md:px-12 md:py-6 lg:px-24 bg-background/90 backdrop-blur-md border-b border-foreground/5"
      >
        <Link to="/" className="text-sm font-bold tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-300 z-50 relative">
          Abraham
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono tracking-widest text-muted">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`transition-colors duration-300 ${isActive ? 'text-foreground font-bold' : 'hover:text-foreground'}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link 
            to="/contact"
            className={`text-xs font-mono tracking-widest uppercase border px-5 py-2 lg:px-6 lg:py-2 rounded-full transition-all duration-300 ${
              location.pathname === '/contact' 
                ? 'bg-foreground text-background border-foreground' 
                : 'border-foreground/20 hover:bg-foreground hover:text-background'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-end gap-[6px] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-[2px] bg-foreground origin-center"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4, width: "100%" } : { rotate: 0, y: 0, width: "60%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-[2px] bg-foreground origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background/95 flex flex-col items-center justify-center px-5"
          >
            <ul className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <Link 
                      to={link.path} 
                      className={`text-3xl sm:text-5xl font-bold tracking-tighter uppercase transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground hover:text-accent/70'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.1, ease: "easeOut" }}
                className="mt-8"
              >
                <Link 
                  to="/contact"
                  className="text-sm font-mono tracking-widest uppercase border border-foreground/20 px-8 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
                >
                  Contact Me
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
