import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? 'glass-nav py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-cream/15'
            : 'glass-nav-light py-3.5 shadow-[0_10px_30px_rgba(43,29,23,0.15)] border-b border-darkBrown/15'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-mediumBrown to-darkBrown flex items-center justify-center border border-cream/30 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 preserve-3d">
              <Sparkles className="w-5 h-5 text-cream animate-pulse" />
              <div className="absolute -inset-1 rounded-xl bg-cream/20 blur-sm -z-10 group-hover:bg-cream/50 transition-all"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-wider uppercase font-sans group-hover:text-amber-200 transition-colors">
              YOUSSEF<span className="text-cream text-gradient bg-gradient-to-r from-cream via-amber-200 to-mediumBrown bg-clip-text text-transparent">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-darkBrown/40 p-1.5 rounded-full border border-cream/15 backdrop-blur-lg shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeSection === link.id
                    ? 'text-black bg-cream font-bold shadow-[0_0_20px_rgba(232,222,201,0.6)] scale-105'
                    : darkMode
                    ? 'text-cream/80 hover:text-cream hover:bg-mediumBrown/50 hover:scale-105'
                    : 'text-darkBrown hover:text-mediumBrown hover:bg-cream/40 hover:scale-105'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side: Theme Toggle & Mobile Button */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="theme-toggle-btn"
              aria-label="Toggle Theme"
              className={`relative p-2.5 rounded-xl border transition-all duration-300 group hover:scale-110 active:scale-95 shadow-lg ${
                darkMode
                  ? 'bg-mediumBrown/30 border-cream/20 text-cream hover:bg-mediumBrown/60 hover:shadow-[0_0_20px_rgba(232,222,201,0.4)]'
                  : 'bg-cream/80 border-darkBrown/20 text-darkBrown hover:bg-cream hover:shadow-[0_0_20px_rgba(83,60,42,0.4)]'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-300 group-hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon className="w-5 h-5 text-darkBrown group-hover:-rotate-45 transition-transform duration-500" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-mediumBrown/30 border border-cream/20 text-cream hover:scale-105 active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 p-4 rounded-2xl glass-card border border-cream/20 flex flex-col gap-2 animate-fadeIn shadow-3d">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-cream text-black font-bold shadow-md'
                    : 'text-cream/90 hover:bg-mediumBrown/50 hover:pl-6'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
