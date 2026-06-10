import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Bio } from "./components/Bio";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { IntroAnimation } from "./components/IntroAnimation";

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <Router>
      {!introFinished && <IntroAnimation onComplete={() => setIntroFinished(true)} />}
      
      <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-accent selection:text-accent-foreground flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <AppRoutes />
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;