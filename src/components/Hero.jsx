import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const roles = [
  "Ingénieur Full-Stack",
  "Architecte SaaS",
  "Développeur Spring Boot",
  "Expert React & Next.js",
];

function TypewriterText({ words }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const word = words[currentWord];
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentWord, words]);

  return (
    <span>
      <span className="text-gradient">{displayed}</span>
      <span style={{ color: '#6c5fff', animation: 'pulse 1s infinite', fontWeight: 300 }}>|</span>
    </span>
  );
}

// Floating code snippets decoration
const codeSnippets = [
  { text: 'const dev = new Engineer();', x: '68%', y: '20%', delay: 0 },
  { text: '@SpringBootApplication', x: '72%', y: '45%', delay: 0.5 },
  { text: 'docker-compose up -d', x: '65%', y: '68%', delay: 1 },
  { text: 'git push origin main', x: '70%', y: '82%', delay: 1.5 },
];

export default function Hero() {
  const canvasRef = useRef(null);

  // Dot grid canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 40;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(
            Math.pow(x - canvas.width * 0.35, 2) +
            Math.pow(y - canvas.height * 0.5, 2)
          );
          const wave = Math.sin(time * 0.8 + dist * 0.012) * 0.5 + 0.5;
          const alpha = wave * 0.18 * (1 - Math.min(dist / (canvas.width * 0.7), 1));

          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(108, 95, 255, ${alpha})`;
          ctx.fill();
        }
      }
      time += 0.04;
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#060609',
      }}
    >
      {/* Animated dot grid canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.9,
        }}
      />

      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,95,255,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '15%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 900, margin: '0 auto', padding: '0 3rem',
        paddingTop: '6rem',
      }}>

        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="section-number"
          style={{ marginBottom: '2rem' }}
        >
          <span>00</span>
          <span>Introduction</span>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
            <span className="live-dot" />
            Disponible immédiatement
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginBottom: '1.25rem',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>Mohamedali</span>
          <br />
          <span className="text-gradient-subtle">MAGRI</span>
        </motion.h1>

        {/* Role typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontWeight: 500,
            marginBottom: '2rem',
            height: '2.5rem',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          <TypewriterText words={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: '3rem',
          }}
        >
          Conception et développement de plateformes SaaS scalables et de solutions
          de santé digitale robustes — avec une passion pour l'architecture propre
          et les produits à fort impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="#experience" className="btn-primary">
            Voir mon parcours
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-outline">
            Me contacter
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            display: 'flex', gap: '3rem', marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '2+', label: "Ans d'expérience" },
            { value: '10+', label: 'Projets livrés' },
            { value: '5+', label: 'Solutions SaaS' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontSize: '2rem', fontWeight: 800,
                background: 'linear-gradient(135deg, #fff 0%, #a29eff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '0.25rem',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 1.5 + snippet.delay, duration: 0.8 },
            y: { delay: 1.5 + snippet.delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            left: snippet.x, top: snippet.y,
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem',
            color: 'rgba(108,95,255,0.4)',
            background: 'rgba(108,95,255,0.04)',
            border: '1px solid rgba(108,95,255,0.1)',
            padding: '0.4rem 0.8rem',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          {snippet.text}
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.span
          style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', fontWeight: 700 }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} color="rgba(108,95,255,0.5)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
