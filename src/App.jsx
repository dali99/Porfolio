import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Education  from './components/Education';
import Projects   from './components/Projects';
import Skills     from './components/Skills';
import Contact    from './components/Contact';
import ScrollHelpers from './components/ScrollHelpers';

// ─────────────────────────────────────────────────────────────
//  PRELOADER
// ─────────────────────────────────────────────────────────────
const LETTERS = ['M', '.', 'M', 'A', 'G', 'R', 'I'];

function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{
        clipPath: 'inset(0 0 100% 0)',
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Letters */}
      <div style={{ overflow: 'hidden', display: 'flex', gap: '0.04em' }}>
        {LETTERS.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.72, delay: 0.15 + i * 0.075, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-block',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              letterSpacing: '-0.04em',
              color: char === '.' ? '#7c3aed' : 'white',
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ width: 220, height: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ height: '100%', background: 'linear-gradient(to right, #7c3aed, #00ffd0)', borderRadius: 4 }}
        />
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.28em', textTransform: 'uppercase' }}
      >
        Portfolio · 2025
      </motion.span>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
//  CUSTOM CURSOR
// ─────────────────────────────────────────────────────────────
function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);
  const pos  = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf  = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };
    const onDown = () => ringRef.current?.classList.add('clicking');
    const onUp   = () => ringRef.current?.classList.remove('clicking');

    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top  = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(lerp);
    };
    raf.current = requestAnimationFrame(lerp);

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => ringRef.current?.classList.add('hovering'));
        el.addEventListener('mouseleave', () => ringRef.current?.classList.remove('hovering'));
      });
    };
    addHover();
    const obs = new MutationObserver(addHover);
    obs.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef}  className="cursor-dot"  />
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  DOT NAVIGATION
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'hero',       label: 'Accueil'      },
  { id: 'about',      label: 'Profil'       },
  { id: 'experience', label: 'Expérience'   },
  { id: 'education',  label: 'Formation'    },
  { id: 'projects',   label: 'Projets'      },
  { id: 'skills',     label: 'Compétences'  },
  { id: 'contact',    label: 'Contact'      },
];

function DotNav({ active }) {
  return (
    <nav className="dot-nav">
      {SECTIONS.map(s => (
        <a key={s.id} href={`#${s.id}`} className={`dot-nav-item${active === s.id ? ' is-active' : ''}`}>
          <span className="dot-nav-label">{s.label}</span>
          <span className="dot-nav-dot" />
        </a>
      ))}
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
//  TOP BAR
// ─────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Profil',      href: '#about'      },
  { label: 'Expérience',  href: '#experience' },
  { label: 'Formation',   href: '#education'  },
  { label: 'Projets',     href: '#projects'   },
  { label: 'Compétences', href: '#skills'     },
];

function TopBar({ scrolled }) {
  return (
    <header className={`top-bar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="logo">M<em>.</em>Magri</a>
      <nav className="top-nav hide-mobile">
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className="top-nav-link">{l.label}</a>
        ))}
      </nav>
      <a href="#contact" className="btn btn-violet" style={{ padding: '0.55rem 1.35rem', fontSize: '0.8rem', borderRadius: '10px' }}>
        <Mail size={14} /> Contact
      </a>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
//  APP
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [loaded,    setLoaded]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [progress,  setProgress]  = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Preloader timeout
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2300);
    return () => clearTimeout(t);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      const sy  = window.scrollY;
      const tot = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(sy > 55);
      setProgress(tot > 0 ? (sy / tot) * 100 : 0);

      let curr = 'hero';
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) curr = s.id;
      }
      setActiveSection(curr);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Film grain */}
      <div className="noise" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {!loaded && <Preloader key="pl" />}
      </AnimatePresence>

      {/* Persistent chrome */}
      <TopBar scrolled={scrolled} />
      <DotNav active={activeSection} />

      {/* Page content — fades in after preloader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <ScrollHelpers />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </motion.div>
    </>
  );
}
