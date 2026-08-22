import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ArrowUp, Sparkles } from 'lucide-react';

function App() {
  // Theme state: Default Dark Mode as requested
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative font-sans ${
        darkMode ? 'bg-black text-cream' : 'bg-[#f5f2eb] text-darkBrown'
      }`}
    >
      {/* 3D Animated WebGL / Three.js Background */}
      <Background3D darkMode={darkMode} />

      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-cream/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-mediumBrown flex items-center justify-center border border-cream/20">
              <Sparkles className="w-4 h-4 text-cream" />
            </div>
            <span className="font-bold tracking-wider text-sm uppercase">
              Youssef Wahed Khattab <span className="text-cream/50 font-normal">| Full Stack & Graphic Design</span>
            </span>
          </div>

          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Youssef Wahed Khattab. All rights reserved. Built with React & Tailwind CSS.
          </p>

          {/* Back to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-mediumBrown/40 border border-cream/20 text-cream hover:bg-cream hover:text-black transition-all shadow-lg transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
