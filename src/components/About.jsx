import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Zap, Award, Compass, GraduationCap, Image as ImageIcon } from 'lucide-react';
import youssefImg from '../Images/Youssef.jpeg';
import certFrontEnd from '../Images/youssef wahed FrontEnd.png';
import certBackEnd from '../Images/Youssef Waheed BackEnd.png';
import certGraphic from '../Images/Youssef Wahed Hassan Graphic.png';

const About = () => {
  const highlights = [
    {
      icon: <Layers className="w-6 h-6 text-cream" />,
      title: 'Full Stack Web Dev',
      description: '3 years crafting responsive web apps with React, Next.js, Node, and Tailwind CSS.',
    },
    {
      icon: <Zap className="w-6 h-6 text-cream" />,
      title: 'Graphic Design Suite',
      description: 'Mastery of Photoshop, Illustrator, and InDesign for brand identity and visual UI/UX.',
    },
    {
      icon: <Award className="w-6 h-6 text-cream" />,
      title: 'Academic Distinction',
      description: 'Graduated with Distinction, ranking 9th in the Programming Department at HTI Beni Suef.',
    },
  ];

  const certificates = [
    {
      title: 'Front-End Development Certification',
      issuer: 'Youssef Wahed Khattab',
      img: certFrontEnd,
      desc: 'Verified expertise in modern HTML5, CSS3, JavaScript, React, and responsive UI frameworks.',
    },
    {
      title: 'Back-End Development Certification',
      issuer: 'Youssef Wahed Khattab',
      img: certBackEnd,
      desc: 'Mastery of Node.js, RESTful API design, server architectures, and database management.',
    },
    {
      title: 'Graphic Design & UI Certification',
      issuer: 'Youssef Wahed Khattab',
      img: certGraphic,
      desc: 'Professional certification in visual graphics, branding, typography, and Adobe Photoshop/Illustrator.',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mediumBrown/30 border border-cream/20 text-cream text-xs font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-cream" />
            <span>My Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-gradient bg-gradient-to-r from-cream via-amber-200 to-mediumBrown bg-clip-text text-transparent">Youssef Wahed Khattab</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed">
            Combining 3 years of web engineering experience with creative graphic design precision to craft complete digital products.
          </p>
        </motion.div>

        {/* Bio & Profile Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-cream">
                Web Engineer & Creative Designer
              </h3>
              <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
                I am <strong className="text-cream font-semibold">Youssef Wahed Khattab</strong>, based in Cairo, Egypt. Over the past <strong>3 years in the web field</strong>, I have designed and developed full-stack web applications, custom e-commerce stores, and high-impact graphic design branding.
              </p>
              <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
                I hold a <strong>Bachelor's Degree in Technology (Programming specialization)</strong> from the <strong>Higher Technological Institute in Beni Suef (Class of 2022–2026)</strong>. I graduated with <strong>Distinction</strong> and earned the <strong>9th rank in my department</strong>.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-cream/15">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-2 p-3 rounded-xl bg-black/40 border border-cream/10">
                  <div className="p-2 rounded-lg bg-mediumBrown/40 w-fit">{item.icon}</div>
                  <h4 className="font-semibold text-cream text-sm">{item.title}</h4>
                  <p className="text-xs text-cream/60 leading-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Profile Photo Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-card p-6 rounded-3xl border border-cream/20 shadow-3d flex flex-col justify-between preserve-3d"
          >
            <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden border border-cream/20 group cursor-pointer shadow-2xl">
              <img
                src={youssefImg}
                alt="Youssef Wahed Khattab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono text-amber-200 uppercase tracking-widest mb-1">Full Stack & Design</span>
                <h4 className="text-xl font-extrabold text-cream">Youssef Wahed Khattab</h4>
                <p className="text-xs text-cream/70">Higher Technological Institute in Beni Suef • 2022–2026</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Verified Professional Certifications Showcase */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-cream flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cream" />
                <span>Verified Certifications & Credentials</span>
              </h3>
              <p className="text-sm text-cream/60">Professional specialization credentials in Front-End, Back-End, and Graphic Design.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-4 rounded-2xl border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all duration-300 group preserve-3d flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-cream/15 mb-4 group-hover:border-cream/40 transition-colors">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-cream text-black text-xs font-bold shadow-lg">
                      View Certificate
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-cream group-hover:text-amber-200 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-cream/60 leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
