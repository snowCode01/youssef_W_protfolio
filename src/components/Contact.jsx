import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, Dribbble, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/snowcode01' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://https://www.linkedin.com/in/youssef-w-khattab-a74592374/.com' }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
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
            <MessageSquare className="w-4 h-4 text-cream" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Connect & <span className="text-gradient bg-gradient-to-r from-cream via-amber-200 to-mediumBrown bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed">
            Reach out for web development projects, Next.js applications, graphic design artboards, or full-time opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Youssef's Contact Details & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl border border-cream/20 shadow-3d space-y-6 preserve-3d">
              <h3 className="text-2xl font-bold text-cream">Contact Information</h3>
              <p className="text-sm text-cream/70 leading-relaxed">
                Feel free to reach out via phone, email, or message. I respond promptly to inquiries.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-cream/10">
                  <div className="p-3 rounded-xl bg-mediumBrown/40 text-cream border border-cream/20">
                    <Mail className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <span className="text-xs text-cream/50 uppercase font-mono tracking-wider block">Email Address</span>
                    <a href="mailto:youssefforbusiness2@gmail.com" className="text-sm font-semibold text-cream hover:text-amber-200 transition-colors">
                      youssefforbusiness2@gmail.com
                    </a>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-cream/10">
                  <div className="p-3 rounded-xl bg-mediumBrown/40 text-cream border border-cream/20">
                    <Phone className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <span className="text-xs text-cream/50 uppercase font-mono tracking-wider block">Contact Phone Number</span>
                    <a href="tel:01153873586" className="text-sm font-semibold text-cream hover:text-amber-200 transition-colors">
                      01153873586
                    </a>
                  </div>
                </div>

                {/* Residence Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-cream/10">
                  <div className="p-3 rounded-xl bg-mediumBrown/40 text-cream border border-cream/20">
                    <MapPin className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <span className="text-xs text-cream/50 uppercase font-mono tracking-wider block">Residence</span>
                    <span className="text-sm font-semibold text-cream">Cairo, Egypt</span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-cream/15">
                <span className="text-xs font-semibold text-cream/60 uppercase tracking-wider block mb-4">
                  Social Channels & Repositories
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl glass-card border border-cream/20 text-cream hover:bg-cream hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-cream/20 shadow-3d hover:shadow-3d-hover transition-all preserve-3d">
              <h3 className="text-2xl font-bold text-cream mb-6">Send Youssef a Message</h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! Your message has been received. Youssef will get back to you shortly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-cream/70">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Mohamed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-cream/20 text-cream placeholder-cream/40 focus:outline-none focus:border-cream focus:ring-2 focus:ring-cream/30 transition-all shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-cream/70">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-cream/20 text-cream placeholder-cream/40 focus:outline-none focus:border-cream focus:ring-2 focus:ring-cream/30 transition-all shadow-inner"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-semibold uppercase tracking-wider text-cream/70">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Web Development or Graphic Design Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-cream/20 text-cream placeholder-cream/40 focus:outline-none focus:border-cream focus:ring-2 focus:ring-cream/30 transition-all shadow-inner"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-cream/70">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="5"
                    required
                    placeholder="Describe your project, timeline, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-cream/20 text-cream placeholder-cream/40 focus:outline-none focus:border-cream focus:ring-2 focus:ring-cream/30 transition-all shadow-inner resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  id="contact-submit-btn"
                  className="w-full py-4 rounded-xl bg-mediumBrown text-cream font-bold text-base border border-cream/30 shadow-[0_10px_30px_rgba(83,60,42,0.6)] hover:shadow-[0_15px_35px_rgba(232,222,201,0.35)] hover:bg-cream hover:text-black transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 preserve-3d flex items-center justify-center gap-3 cursor-pointer"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
