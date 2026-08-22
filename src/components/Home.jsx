import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe, Sparkles, Terminal, Award } from 'lucide-react';
import youssefImg from '../Images/Youssef.jpeg';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cream/20 text-cream text-xs sm:text-sm font-medium tracking-wide shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span>Available for Web & Graphic Design Projects</span>
              <Sparkles className="w-4 h-4 text-cream ml-1 animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-gradient bg-gradient-to-r from-cream via-amber-100 to-mediumBrown bg-clip-text text-transparent drop-shadow-md">Youssef Wahed</span> <br />
              Khattab
            </h1>

            {/* Subheading Description */}
            <p className="text-lg sm:text-xl text-cream/80 dark:text-cream/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Full Stack Web Developer & Graphic Designer with <strong className="font-semibold text-cream">3 Years of Hands-on Web Field Experience</strong>. Specializing in modern web applications, Next.js, React, Tailwind CSS, and visual brand identity design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-mediumBrown text-cream font-bold text-base shadow-[0_10px_30px_rgba(83,60,42,0.6)] hover:shadow-[0_15px_35px_rgba(232,222,201,0.3)] hover:bg-cream hover:text-black transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 preserve-3d"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass-card text-cream border border-cream/30 font-semibold text-base shadow-2xl hover:bg-mediumBrown/40 transition-all duration-300 hover:border-cream/60 transform hover:-translate-y-1"
              >
                <Terminal className="w-5 h-5 text-cream" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-cream/15 max-w-lg mx-auto lg:mx-0">
              <div className="glass-card p-3 rounded-xl text-center border border-cream/10">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cream font-mono">3+</span>
                <span className="text-xs text-cream/70">Years Web Exp</span>
              </div>
              <div className="glass-card p-3 rounded-xl text-center border border-cream/10">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cream font-mono">Distinction</span>
                <span className="text-xs text-cream/70">HTI Beni Suef</span>
              </div>
              <div className="glass-card p-3 rounded-xl text-center border border-cream/10">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cream font-mono">9th</span>
                <span className="text-xs text-cream/70">In Department</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Central Profile Picture (Youssef.jpeg) with 3D Orbital Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative min-h-[420px] sm:min-h-[500px]"
          >
            {/* Ambient Background Glow behind profile */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-mediumBrown/40 via-darkBrown/60 to-cream/20 blur-3xl -z-10 animate-pulse-glow"></div>

            {/* Main Orbital System Container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center preserve-3d">
              
              {/* ORBITAL RING 1 (Inner Ring - Tilt X 65deg, Y 15deg) */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cream/30 animate-orbit-1 pointer-events-none preserve-3d shadow-[0_0_15px_rgba(232,222,201,0.2)]">
                {/* Orbital Sphere 1 */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-cream via-amber-200 to-mediumBrown shadow-[0_0_20px_rgba(232,222,201,0.9)] border border-white flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5 text-black" />
                </div>
              </div>

              {/* ORBITAL RING 2 (Middle Ring - Tilt X 45deg, Y -25deg) */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border-2 border-solid border-mediumBrown/60 animate-orbit-2 pointer-events-none preserve-3d shadow-[0_0_25px_rgba(83,60,42,0.4)]">
                {/* Orbital Sphere 2 */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-mediumBrown to-darkBrown border border-cream/70 shadow-[0_0_20px_rgba(232,222,201,0.8)] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-cream animate-spin-slow" />
                </div>
              </div>

              {/* ORBITAL RING 3 (Outer Ring - Tilt X 75deg, Y 35deg) */}
              <div className="absolute -inset-12 sm:-inset-16 rounded-full border border-dotted border-cream/40 animate-orbit-3 pointer-events-none preserve-3d">
                {/* Orbital Sphere 3 */}
                <div className="absolute -bottom-4 left-1/3 w-9 h-9 rounded-full bg-cream text-black font-bold text-xs flex items-center justify-center shadow-[0_0_25px_rgba(232,222,201,1)] border-2 border-darkBrown">
                  <Cpu className="w-4 h-4 text-darkBrown" />
                </div>
              </div>

              {/* Central Circular Profile Picture Container (Youssef.jpeg) */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-br from-mediumBrown via-darkBrown to-black border-2 border-cream/40 shadow-3d hover:shadow-3d-hover transition-all duration-500 group overflow-hidden cursor-pointer preserve-3d">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-darkBrown/80 flex items-center justify-center border border-cream/20">
                  <img
                    src={youssefImg}
                    alt="Youssef Wahed Khattab - Profile Photo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-100 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 px-4 py-1.5 rounded-full bg-black/80 border border-cream/30 text-cream text-xs font-semibold backdrop-blur-md shadow-lg group-hover:translate-y-[-4px] transition-transform">
                    Youssef Wahed
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
