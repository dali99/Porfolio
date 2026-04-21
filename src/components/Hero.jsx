import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code2, Cpu } from 'lucide-react';
import Canvas3D from './Canvas3D';

const roles = [
  "Ingénieur Full-Stack",
  // "Développeur Spring Boot",
  // "Architecte SaaS",
  "Développeur React.js",
  // "Expert DevOps",
];

function TypewriterText({ words }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentWord, words]);

  return (
    <span className="text-gradient">
      {displayed}
      <span className="animate-pulse text-brand-400">|</span>
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
      
      {/* Ambient glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-brand-500/8 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,184,166,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        <div className="flex-1 text-center lg:text-left">
          
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold text-brand-300"
            style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Disponible pour de nouveaux projets
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight"
          >
            Mohamedali <br />
            <span className="text-white glow-text">MAGRI</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6 h-10"
          >
            <TypewriterText words={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Conception et développement de plateformes SaaS scalables et de solutions de santé digitale robustes.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10"
          >
            {highlights.map((h, i) => (
              <span key={i} className="flex items-center gap-1.5 badge">
                {h.icon}
                {h.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </motion.div>
        </div>

        <div className="flex-1 w-full h-[300px] lg:h-[500px] hidden lg:block" />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs text-zinc-600 tracking-widest uppercase">Défiler</span>
          <ChevronDown className="w-6 h-6 text-brand-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
