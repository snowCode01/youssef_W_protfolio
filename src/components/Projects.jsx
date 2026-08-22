import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Palette, Layers, Eye, X, Sparkles, Filter } from 'lucide-react';

import jooStoreImg from '../Images/Joo Store.png';
import clothesAnimeImg from '../Images/Clothes Anime.png';
import futureHouseImg from '../Images/Future House.png';
import sugarWiseImg from '../Images/sugarWise.png';

import aswanPosterImg from '../Images/Aswan-Poster.png';
import artboardImg from '../Images/Artboard 1.png';
import uiuxImg from '../Images/UIUX.jpg';
import flutterImg from '../Images/Flutter.jpg';
import logoImg from '../Images/logo.png';
import logo2Img from '../Images/logo2.png';

const projectsList = [
  // Programming Projects
  {
    id: 'joo-store',
    title: 'JOO Store',
    category: 'Programming',
    link: 'https://snowcode01.github.io/Joo_store/',
    image: jooStoreImg,
    description: 'The first e-commerce store project created using HTML5 and CSS3 featuring custom product layouts and responsive styling.',
    tools: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox'],
  },
  {
    id: 'clothes-anime',
    title: 'Clothes Anime Store',
    category: 'Programming',
    link: 'https://snowcode01.github.io/clothes_anime/',
    image: clothesAnimeImg,
    description: 'An interactive anime-themed apparel website showcasing custom 2D & 3D CSS keyframe animations and dynamic layout structures.',
    tools: ['HTML5', 'CSS3', '2D Animations', '3D CSS Transforms'],
  },
  {
    id: 'future-house',
    title: 'Future House Real Estate',
    category: 'Programming',
    link: 'https://snowcode01.github.io/web-three-3/',
    image: futureHouseImg,
    description: 'A futuristic real-estate showcase application developed with HTML, CSS, Bootstrap 4 framework, and custom JavaScript interactions.',
    tools: ['HTML5', 'CSS3', 'Bootstrap 4', 'JavaScript'],
  },
  {
    id: 'sugarwise',
    title: 'Sugarwise World Platform',
    category: 'Programming',
    link: 'https://sugarwiseworld.com',
    image: sugarWiseImg,
    description: 'A full-scale production web application for Sugarwise World built with React, Node.js, Tailwind CSS, and REST API services.',
    tools: ['React.js', 'Node.js', 'Tailwind CSS', 'REST API'],
  },

  // Graphic Design Projects
  {
    id: 'aswan-poster',
    title: 'Aswan Cultural Poster Design',
    category: 'Graphic Design',
    link: null,
    image: aswanPosterImg,
    description: 'High-impact cultural poster artwork celebrating Egyptian heritage, combining vibrant color grading and custom typography in Adobe Photoshop & Illustrator.',
    tools: ['Photoshop', 'Illustrator', 'Poster Design', 'Typography'],
  },
  {
    id: 'brand-artboard',
    title: 'Brand Artboard & Visual Identity',
    category: 'Graphic Design',
    link: null,
    image: artboardImg,
    description: 'Complete brand visual identity design including vector logo marks, color hierarchy guidelines, and marketing artboard layouts.',
    tools: ['Illustrator', 'Photoshop', 'Brand Identity', 'Vector Art'],
  },
  {
    id: 'uiux-app',
    title: 'Mobile & Web UI/UX Design System',
    category: 'Graphic Design',
    link: null,
    image: uiuxImg,
    description: 'Modern user interface design mockup and UX layout system designed for cross-platform mobile and web applications.',
    tools: ['Figma', 'Photoshop', 'UI/UX Design', 'Wireframing'],
  },
  {
    id: 'flutter-ui',
    title: 'Flutter App Layout & Component Kit',
    category: 'Graphic Design',
    link: null,
    image: flutterImg,
    description: 'Clean mobile application visual layout design with custom UI components, iconography, and color scheme.',
    tools: ['Figma', 'Photoshop', 'Mobile UI', 'Prototyping'],
  },
  {
    id: 'logo-brand-mark',
    title: 'Vector Brand Logo Mark 01',
    category: 'Graphic Design',
    link: null,
    image: logoImg,
    description: 'Custom vector logo mark crafted for modern digital brand presence with scalable geometry.',
    tools: ['Illustrator', 'Vector Design', 'Logo Branding'],
  },
  {
    id: 'logo-brand-mark-2',
    title: '3D Emblem & Emblem Logo 02',
    category: 'Graphic Design',
    link: null,
    image: logo2Img,
    description: '3D emblem vector logo concept exploring lighting depth, metallic accents, and minimal branding geometry.',
    tools: ['Illustrator', 'Photoshop', '3D Emblem Design'],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === 'All'
    ? projectsList
    : projectsList.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mediumBrown/30 border border-cream/20 text-cream text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-cream" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            My Featured <span className="text-gradient bg-gradient-to-r from-cream via-amber-200 to-mediumBrown bg-clip-text text-transparent">Projects & Designs</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed">
            Explore programming web applications and creative graphic design artboards. Click any project to view tools used, details, and live site links.
          </p>
        </motion.div>

        {/* Category Tabs: All, Programming, Graphic Design */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'All', label: 'All Projects', icon: <Layers className="w-4 h-4" /> },
            { id: 'Programming', label: 'Programming', icon: <Code2 className="w-4 h-4" /> },
            { id: 'Graphic Design', label: 'Graphic Design', icon: <Palette className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 preserve-3d cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-cream text-black shadow-[0_0_20px_rgba(232,222,201,0.6)] scale-105'
                  : 'glass-card text-cream hover:bg-mediumBrown/40 border border-cream/20'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-3xl overflow-hidden border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all duration-300 group cursor-pointer preserve-3d flex flex-col justify-between"
              >
                {/* Project Image Preview */}
                <div className="relative w-full aspect-video overflow-hidden bg-black/80 border-b border-cream/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <span className="px-5 py-2.5 rounded-full bg-cream text-black font-bold text-xs shadow-2xl flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-cream/30 backdrop-blur-md text-cream text-[11px] font-mono font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Info Summary */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-cream group-hover:text-amber-200 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    {project.link && <ExternalLink className="w-4 h-4 text-cream/60 group-hover:text-cream" />}
                  </h3>

                  <p className="text-xs text-cream/70 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-mediumBrown/40 border border-cream/15 text-cream text-[10px] font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 rounded-lg bg-cream/10 text-cream text-[10px]">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Project Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card p-6 sm:p-8 rounded-3xl border border-cream/30 shadow-3d-hover text-cream space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/70 border border-cream/30 text-cream hover:bg-cream hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal High-Res Image Header */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-cream/20 shadow-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              {/* Details Header */}
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-mediumBrown/60 border border-cream/20 text-cream text-xs font-mono">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-cream">{selectedProject.title}</h3>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-cream uppercase tracking-wider">Project Overview</h4>
                <p className="text-sm text-cream/80 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Tools Used Pills */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-cream uppercase tracking-wider">Technologies & Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-mediumBrown/50 border border-cream/20 text-cream text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Action Button */}
              {selectedProject.link && (
                <div className="pt-4 border-t border-cream/20 flex items-center justify-end">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-cream text-black font-bold text-sm hover:bg-mediumBrown hover:text-cream transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
