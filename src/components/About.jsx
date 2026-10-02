import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Clock, Globe } from 'lucide-react';

// Live timer — counts since Sep 2024
function LiveTimer() {
  const start = new Date('2024-09-01T09:00:00');
  const [elapsed, setElapsed] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = now - start;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      setElapsed(
        `${days}j ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      fontFamily: 'Space Mono, monospace',
      fontSize: '0.85rem', color: '#22d3ee',
      background: 'rgba(34,211,238,0.06)',
      border: '1px solid rgba(34,211,238,0.15)',
      padding: '0.5rem 1rem', borderRadius: '10px',
    }}>
      <span className="live-dot" />
      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', marginRight: '0.25rem' }}>
        En poste depuis :
      </span>
      {elapsed}
    </div>
  );
}

const traits = [
  {
    icon: <Briefcase size={18} />,
    title: "Full-Stack Expert",
    desc: "Spring Boot & React.js — du backend métier au frontend élaboré.",
  },
  {
    icon: <Globe size={18} />,
    title: "SaaS & Santé Digitale",
    desc: "Architectures multi-tenant, RBAC, SSO Keycloak, plateformes nationales.",
  },
  {
    icon: <Rocket size={18} />,
    title: "DevOps & Qualité",
    desc: "Docker, CI/CD GitLab, code maintenable et architectures propres.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />

      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,95,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: '3rem' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-number"
          style={{ marginBottom: '1.5rem' }}
        >
          <span>01</span>
          <span>À propos de moi</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: '3rem',
            lineHeight: 1.1,
          }}
        >
          Construire des produits qui ont
          <br />
          <span className="text-gradient">un impact réel.</span>
        </motion.h2>

        {/* Live timer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '3rem' }}
        >
          <LiveTimer />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem',
            marginBottom: '4rem',
          }}
          className="about-grid"
        >
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong style={{ color: 'white', fontWeight: 600 }}>Ingénieur Logiciel Full-Stack</strong>{' '}
            avec plus de <span style={{ color: '#a29eff', fontWeight: 500 }}>2 ans d'expérience</span> dans
            le développement de plateformes SaaS à grande échelle — principalement dans le domaine de la
            santé digitale.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontSize: '1rem' }}>
            Je maîtrise le backend (Spring Boot, Django REST) et le frontend (React.js, Next.js),
            avec une expertise en intégration{' '}
            <span style={{ color: '#22d3ee' }}>SSO / Keycloak</span>, pipelines{' '}
            <span style={{ color: '#22d3ee' }}>CI/CD</span> et conteneurisation{' '}
            <span style={{ color: '#22d3ee' }}>Docker</span>.
          </p>
        </motion.div>

        {/* Trait cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {traits.map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass card-lift"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
              }}
            >
              <div style={{
                width: 40, height: 40,
                borderRadius: '10px',
                background: 'rgba(108,95,255,0.12)',
                border: '1px solid rgba(108,95,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#a29eff',
                marginBottom: '1rem',
              }}>
                {trait.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'white' }}>
                {trait.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                {trait.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
