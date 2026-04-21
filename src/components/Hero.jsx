import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Canvas3D from './Canvas3D';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Canvas3D />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-brand-400 font-medium tracking-wider uppercase mb-3"
          >
            Ingénieur Logiciel Full-Stack
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          >
            Mohamedali <br />
            <span className="text-gradient">MAGRI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Conception et développement de plateformes SaaS scalables et de solutions de santé digitale robustes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-brand-500 text-zinc-950 font-semibold hover:bg-brand-400 transition-colors shadow-[0_0_20px_rgba(20,184,166,0.3)]">
              Voir mon travail
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-white transition-colors backdrop-blur-sm">
              Me contacter
            </a>
          </motion.div>
        </motion.div>

        <div className="flex-1 w-full h-[300px] lg:h-[500px] hidden lg:block" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-brand-400 opacity-70 hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.div>
    </section>
  );
}
