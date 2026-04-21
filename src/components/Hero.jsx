import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code2, Cpu } from 'lucide-react';
import Canvas3D from './Canvas3D';

const roles = [
  "Ingénieur Full-Stack",
  "Spécialiste SaaS & Santé",
  "Développeur Spring Boot",
  "Expert React & Next.js",
  "Passionné Architecture Propre",
];

function TypewriterText({ words }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const word = words[currentWord];

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentWord, words]);

  return (
    <span className="text-gradient font-bold text-teal-400">
      {displayed}
      <span className="animate-pulse text-zinc-400 font-light">|</span>
    </span>
  );
}

const highlights = [
  { icon: <Code2 className="w-4 h-4" />, label: "Full-Stack" },
  { icon: <Cpu className="w-4 h-4" />, label: "SaaS & APIs" },
  { icon: <Sparkles className="w-4 h-4" />, label: "2+ ans exp." },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Canvas3D />
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* Left side content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-bold text-teal-300 glass-panel border-teal-500/30">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_#14b8a6]" />
              Disponible immédiatement
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-none"
          >
            Mohamedali <br />
            <span className="text-white glow-text">MAGRI</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl font-medium mb-8 h-12"
          >
            <TypewriterText words={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Conception et développement de plateformes SaaS scalables et de solutions de santé digitale robustes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
          >
            {highlights.map((h, i) => (
              <span key={i} className="flex items-center gap-2 badge px-4 py-2 border-zinc-800 hover:border-brand-500/40 transition-colors">
                {h.icon}
                {h.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a href="#projects" className="btn-primary px-10 py-4 text-lg">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-secondary px-8 py-4">
              Me contacter
            </a>
          </motion.div>
        </div>

        {/* Right side spacer for Agent */}
        <div className="flex-1 w-full h-[400px] lg:h-[600px] pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase font-bold">Scroll</span>
          <ChevronDown className="w-5 h-5 text-brand-500/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
