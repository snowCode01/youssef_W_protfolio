import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Download, Eye, FileText, Briefcase, GraduationCap, Award, X, CheckCircle, Phone, Mail, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import cvPdf from '../info/youssefcv.pdf';

const experienceList = [
  {
    role: 'Full Stack Web Developer & Graphic Designer',
    company: 'Independent & Production Projects',
    period: '2023 - Present',
    description: '3 years of hands-on experience building full-stack web applications, e-commerce stores, responsive React & Next.js apps, and visual graphic branding.',
    highlights: [
      'Engineered production web platforms including Sugarwise World and JOO Store',
      'Developed 2D/3D CSS animations and Next.js full-stack solutions',
      'Designed vector branding artboards, logos, and UI layout systems',
    ],
  },
  {
    role: 'Frontend & UI Developer',
    company: 'Web Application Projects',
    period: '2021 - 2023',
    description: 'Constructed responsive user interfaces, Bootstrap web portals, and custom CSS animations for client applications.',
    highlights: [
      'Built Future House architecture showcase with Bootstrap 4 & JS',
      'Created Clothes Anime web storefront with CSS 3D transforms',
    ],
  },
];

const educationList = [
  {
    degree: 'Bachelor’s Degree in Technology (Programming Specialization)',
    institution: 'Higher Technological Institute in Beni Suef',
    period: '2022 – 2026',
    grade: 'Distinction (Grade: Excellent)',
    rank: 'Ranked 9th in Programming Department',
    details: 'Focused on Software Engineering, Web Development, Algorithms, Database Management, and UI/UX Design.',
  },
];

const Resume = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    confetti({
      particleCount: 150,
      spread: 85,
      origin: { y: 0.6 },
      colors: ['#E8DEC9', '#533C2A', '#2B1D17', '#ffffff'],
    });

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <section id="resume" className="py-24 relative z-10 overflow-hidden">
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
            <FileText className="w-4 h-4 text-cream" />
            <span>Official Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Interactive <span className="text-gradient bg-gradient-to-r from-cream via-amber-200 to-mediumBrown bg-clip-text text-transparent">CV & Qualifications</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed">
            3 Years of web development and graphic design experience backed by academic distinction from HTI Beni Suef.
          </p>
        </motion.div>

        {/* PROMINENT 3D BUTTONS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all mb-16 max-w-3xl mx-auto text-center preserve-3d border-glow-pulse"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-cream mb-3 flex items-center justify-center gap-2">
            <span>Displaying Official CV</span>
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          </h3>
          <p className="text-cream/70 text-sm mb-8 max-w-xl mx-auto">
            Inspect Youssef Wahed Khattab's CV file (<code className="text-cream bg-black/60 px-2 py-0.5 rounded border border-cream/20 font-mono">src/info/youssefcv.pdf</code>).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            
            {/* View CV Button */}
            <button
              onClick={() => setModalOpen(true)}
              id="view-cv-btn"
              className="btn-shine group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-mediumBrown text-cream font-bold text-base border border-cream/30 shadow-[0_12px_35px_rgba(83,60,42,0.7)] hover:shadow-[0_20px_45px_rgba(232,222,201,0.4)] hover:bg-cream hover:text-black transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 active:scale-95 preserve-3d cursor-pointer"
            >
              <Eye className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              <span>View CV (youssefcv.pdf)</span>
            </button>

            {/* Download CV Button */}
            <a
              href={cvPdf}
              download="youssefcv.pdf"
              onClick={handleDownloadCV}
              id="download-cv-btn"
              className="btn-shine group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cream text-black font-bold text-base shadow-[0_12px_35px_rgba(232,222,201,0.4)] hover:shadow-[0_20px_45px_rgba(83,60,42,0.7)] hover:bg-mediumBrown hover:text-cream border border-mediumBrown/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 active:scale-95 preserve-3d cursor-pointer"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV PDF</span>
            </a>

          </div>

          {downloadSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 inline-flex items-center gap-2 text-emerald-400 font-medium text-xs sm:text-sm bg-emerald-950/80 px-5 py-2.5 rounded-full border border-emerald-500/40 shadow-lg"
            >
              <CheckCircle className="w-4.5 h-4.5 text-emerald-400" />
              <span>youssefcv.pdf downloaded successfully!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Academic & Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-cream flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-mediumBrown/40 border border-cream/20 shadow-md">
                <GraduationCap className="w-6 h-6 text-cream" />
              </div>
              <span>Higher Education & Distinction</span>
            </h3>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1.5 preserve-3d space-y-4 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-mediumBrown/50 border border-cream/20 text-cream text-xs font-mono">
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold group-hover:scale-105 transition-transform">
                      {edu.grade}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-extrabold text-cream group-hover:text-amber-200 transition-colors">{edu.degree}</h4>
                    <p className="text-sm font-semibold text-cream/80 mt-1">{edu.institution}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/60 border border-cream/15 text-xs text-cream/90 flex items-center gap-3 shadow-inner">
                    <Award className="w-5 h-5 text-amber-300 flex-shrink-0 animate-pulse" />
                    <span><strong>Department Rank:</strong> {edu.rank}</span>
                  </div>

                  <p className="text-xs text-cream/70 leading-relaxed">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-cream flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-mediumBrown/40 border border-cream/20 shadow-md">
                <Briefcase className="w-6 h-6 text-cream" />
              </div>
              <span>Web & Design Experience (3 Years)</span>
            </h3>

            <div className="space-y-6">
              {experienceList.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1.5 group preserve-3d"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg sm:text-xl font-bold text-cream group-hover:text-amber-200 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="px-3 py-1 rounded-full bg-cream/10 border border-cream/20 text-cream text-xs font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-cream/70 mb-3">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-cream/80 leading-relaxed mb-4">{exp.description}</p>

                  <ul className="space-y-1.5 border-t border-cream/10 pt-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-cream/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream group-hover:scale-125 transition-transform"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Interactive PDF & CV Modal Viewer displaying src/info/youssefcv.pdf */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card p-6 sm:p-10 rounded-3xl border border-cream/30 shadow-3d-hover text-cream space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-mediumBrown/40 text-cream hover:bg-cream hover:text-black transition-all hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>

              {/* CV Header */}
              <div className="border-b border-cream/20 pb-6 space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-extrabold text-cream">YOUSSEF WAHED KHATTAB</h3>
                  <span className="px-3 py-1 rounded-full bg-cream/10 border border-cream/30 text-cream text-xs font-mono">youssefcv.pdf</span>
                </div>
                <p className="text-cream/90 text-lg font-medium">Full Stack Web Developer & Graphic Designer</p>
                <div className="flex flex-wrap gap-4 text-xs text-cream/70 pt-1">
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cream" /> youssefforbusiness2@gmail.com</span>
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cream" /> 01153873586</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cream" /> Cairo, Egypt</span>
                </div>
              </div>

              {/* PDF Container displaying exact src/info/youssefcv.pdf */}
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden bg-black border border-cream/30 shadow-2xl">
                <iframe
                  src={cvPdf}
                  title="Youssef Wahed Khattab CV Document"
                  className="w-full h-full border-none"
                ></iframe>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-cream/20 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-amber-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF in New Browser Tab</span>
                </a>

                <a
                  href={cvPdf}
                  download="youssefcv.pdf"
                  onClick={handleDownloadCV}
                  className="btn-shine px-6 py-2.5 rounded-xl bg-cream text-black font-bold text-sm hover:bg-mediumBrown hover:text-cream transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF (youssefcv.pdf)</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
