import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Code2, Layout, FileCode, Layers, Server, Sparkles, Image, Palette, BookOpen } from 'lucide-react';

const skillsData = [
  { name: 'HTML', percentage: 95, icon: <FileCode className="w-6 h-6 text-cream" />, desc: 'Semantic HTML5, Accessibility & SEO' },
  { name: 'CSS', percentage: 90, icon: <Layout className="w-6 h-6 text-cream" />, desc: 'Modern CSS3, Grid/Flexbox, Animations' },
  { name: 'JavaScript', percentage: 85, icon: <Code2 className="w-6 h-6 text-cream" />, desc: 'ES6+, Async, DOM & Logic' },
  { name: 'Next.js', percentage: 85, icon: <Sparkles className="w-6 h-6 text-cream" />, desc: 'App Router, SSR, SSG & Full Stack' },
  { name: 'React', percentage: 80, icon: <Layers className="w-6 h-6 text-cream" />, desc: 'Hooks, Context, State & Custom Components' },
  { name: 'Tailwind', percentage: 80, icon: <Sparkles className="w-6 h-6 text-cream" />, desc: 'Custom Config, Design Tokens & Glass UI' },
  { name: 'Node.js', percentage: 75, icon: <Server className="w-6 h-6 text-cream" />, desc: 'Express APIs, Middleware & REST Services' },
  { name: 'Photoshop', percentage: 85, icon: <Image className="w-6 h-6 text-cream" />, desc: 'Image Editing, Mockups & Retouching' },
  { name: 'Illustrator', percentage: 80, icon: <Palette className="w-6 h-6 text-cream" />, desc: 'Vector Branding, Logos & Artboards' },
  { name: 'InDesign', percentage: 75, icon: <BookOpen className="w-6 h-6 text-cream" />, desc: 'Editorial Layout, Posters & Typography' },
];

const SkillRingCard = ({ skill, index, isInView }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0;
        const step = skill.percentage / 50;
        const interval = setInterval(() => {
          current += step;
          if (current >= skill.percentage) {
            setProgress(skill.percentage);
            clearInterval(interval);
          } else {
            setProgress(Math.ceil(current));
          }
        }, 20);
        return () => clearInterval(interval);
      }, index * 80);

      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isInView, skill.percentage, index]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card p-6 rounded-3xl border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all duration-500 group hover:-translate-y-3 hover:border-cream/40 preserve-3d flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
    >
      {/* Dynamic Background Hover Glow */}
      <div className="absolute -inset-10 bg-gradient-to-br from-mediumBrown/30 via-cream/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 pointer-events-none"></div>

      {/* 3D Ring Progress System */}
      <div className="relative w-36 h-36 flex items-center justify-center mb-5 preserve-3d">
        
        {/* SVG Ring */}
        <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500" viewBox="0 0 120 120">
          <defs>
            <linearGradient id={`ring-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8DEC9" />
              <stop offset="50%" stopColor="#D4A373" />
              <stop offset="100%" stopColor="#533C2A" />
            </linearGradient>
            <filter id={`glow-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Ring Track */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="stroke-darkBrown/80 group-hover:stroke-darkBrown transition-colors duration-300"
            strokeWidth="10"
            fill="transparent"
          />

          {/* Animated Animated Progress Ring */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={`url(#ring-gradient-${index})`}
            strokeWidth="10"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            filter={`url(#glow-${index})`}
            className="transition-all duration-500 ease-out"
          />
        </svg>

        {/* Center Percentage & Icon Container with slick hover zoom */}
        <div className="absolute inset-4 rounded-full bg-black/85 border border-cream/20 group-hover:border-cream/60 flex flex-col items-center justify-center shadow-inner group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(232,222,201,0.3)] transition-all duration-500 preserve-3d">
          <div className="mb-1 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
            {skill.icon}
          </div>
          <span className="text-xl font-extrabold text-cream font-mono tracking-tight group-hover:text-amber-200 transition-colors">
            {progress}%
          </span>
        </div>
      </div>

      {/* Skill Meta Info */}
      <h3 className="text-lg font-bold text-cream mb-1 group-hover:text-amber-200 transition-colors">{skill.name}</h3>
      <p className="text-xs text-cream/60 leading-relaxed max-w-[200px] group-hover:text-cream/80 transition-colors">{skill.desc}</p>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mediumBrown/30 border border-cream/20 text-cream text-xs font-bold uppercase tracking-widest animate-float">
            <Cpu className="w-4 h-4 text-cream" />
            <span>Technical & Creative Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Skills <span className="text-gradient bg-gradient-to-r from-cream via-amber-200 to-mediumBrown bg-clip-text text-transparent">& Progress Ring System</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed">
            Interactive circular progress rings highlighting expertise across web engineering (Next.js, React, Node) and Adobe creative design suite.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <SkillRingCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
