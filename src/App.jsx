import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sidebar nav icons
import {
  User, Briefcase, GraduationCap, Zap, Mail, Home
} from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollHelpers from './components/ScrollHelpers';

const navItems = [
  { id: 'hero',       label: 'Accueil',     icon: Home },
  { id: 'about',      label: 'Profil',      icon: User },
  { id: 'experience', label: 'Expérience',  icon: Briefcase },
  { id: 'education',  label: 'Formation',   icon: GraduationCap },
  { id: 'skills',     label: 'Compétences', icon: Zap },
  { id: 'contact',    label: 'Contact',     icon: Mail },
];

function Sidebar({ activeSection, scrollProgress }) {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <a href="#hero" className="sidebar-logo" style={{ textDecoration: 'none' }}>
        M<span>.</span>
      </a>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span className="tooltip">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Socials */}
      <div className="sidebar-socials">
        <a
          href="https://www.linkedin.com/in/mohamedali72/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-social-link"
          title="LinkedIn"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.063 2.063 0 01-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="mailto:dalimagri99@gmail.com"
          className="sidebar-social-link"
          title="Email"
        >
          <Mail size={15} />
        </a>
      </div>
    </aside>
  );
}

function CursorGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div ref={glowRef} className="cursor-glow" />;
}

function ScrollProgress({ progress }) {
  return (
    <div
      className="scroll-line"
      style={{ width: `calc(${progress}% )` }}
    />
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      // Active section
      const sections = navItems.map(n => n.id);
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Cursor glow (desktop only) */}
      <CursorGlow />

      {/* Scroll progress bar */}
      <ScrollProgress progress={scrollProgress} />

      <div className="page-wrapper">
        <Sidebar activeSection={activeSection} scrollProgress={scrollProgress} />

        <main className="main-content">
          <ScrollHelpers />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}
