import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────
const CATS = [
  { label: 'Backend',        color: '#7c3aed', skills: ['Java', 'Spring Boot', 'Django REST', 'Python', 'APIs RESTful', 'Microservices'] },
  { label: 'Frontend',       color: '#00ffd0', skills: ['React.js', 'Next.js', 'JavaScript', 'React Query', 'Tailwind CSS'] },
  { label: 'DevOps',         color: '#a78bfa', skills: ['Docker', 'CI/CD Pipelines', 'GitLab CI', 'Git', 'GitHub'] },
  { label: 'Bases de données', color: '#fbbf24', skills: ['PostgreSQL', 'MySQL'] },
  { label: 'Sécurité',       color: '#34d399', skills: ['Keycloak', 'SSO', 'OAuth2', 'RBAC'] },
  { label: 'Concepts',       color: '#f472b6', skills: ['Architecture Propre', 'SaaS Multi-tenant', 'Agile / Scrum', 'C', 'C++'] },
];

// ─── marquee rows ─────────────────────────────────────────────
const ALL_SKILLS_1 = [
  'Java', 'Spring Boot', 'React.js', 'Docker', 'PostgreSQL',
  'Keycloak', 'Next.js', 'Django REST', 'CI/CD', 'SSO',
  'Git', 'Python', 'Microservices', 'OAuth2',
];
const ALL_SKILLS_2 = [
  'RBAC', 'MySQL', 'GitLab CI', 'React Query', 'Tailwind CSS',
  'Architecture Propre', 'SaaS', 'Agile', 'Scrum', 'JavaScript',
  'C++', 'APIs RESTful', 'WordPress', 'Docker Compose',
];

function MarqueeRow({ items, dir }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className={`marquee-track ${dir === 'left' ? 'go-left' : 'go-right'}`}>
        {doubled.map((s, i) => (
          <span key={i} className="marquee-item">{s}</span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────────────────────
export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="divider" />

      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <span className="watermark" style={{ right: '-2%', top: '5%' }}>05</span>

      <div style={{ maxWidth: 960, margin: '0 auto', paddingTop: '3.5rem', position: 'relative', zIndex: 1 }}>

        <motion.div className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Expertise
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="syne"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '3.5rem' }}
        >
          Mon arsenal{' '}
          <span className="text-grad">technique.</span>
        </motion.h2>

        {/* ── MARQUEE ROWS ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ marginBottom: '4rem', marginLeft: '-3rem', marginRight: '-3rem' }}
        >
          <MarqueeRow items={ALL_SKILLS_1} dir="left"  />
          <MarqueeRow items={ALL_SKILLS_2} dir="right" />
        </motion.div>

        {/* ── CATEGORY FILTER ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '1.25rem' }}
        >
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem', fontFamily: 'Space Mono, monospace' }}>
            // Survolez une catégorie
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            <button
              onClick={() => setHovered(null)}
              style={{
                padding: '0.38rem 1rem', borderRadius: '8px',
                fontSize: '0.78rem', fontWeight: 600, border: 'none',
                background: hovered === null ? 'rgba(124,58,237,0.18)' : 'transparent',
                border: `1px solid ${hovered === null ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.07)'}`,
                color: hovered === null ? '#a78bfa' : 'rgba(255,255,255,0.38)',
                transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
              }}
            >
              Tout
            </button>
            {CATS.map((cat, i) => (
              <button
                key={i}
                onClick={() => setHovered(hovered === i ? null : i)}
                style={{
                  padding: '0.38rem 1rem', borderRadius: '8px',
                  fontSize: '0.78rem', fontWeight: 600, border: 'none',
                  background: hovered === i ? `${cat.color}18` : 'transparent',
                  border: `1px solid ${hovered === i ? `${cat.color}40` : 'rgba(255,255,255,0.07)'}`,
                  color: hovered === i ? cat.color : 'rgba(255,255,255,0.38)',
                  transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── SKILL GRID ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {CATS.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card"
              style={{
                padding: '1.6rem',
                borderRadius: '16px',
                opacity: hovered !== null && hovered !== i ? 0.32 : 1,
                borderColor: hovered === i ? `${cat.color}28` : undefined,
                transition: 'opacity 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: cat.color, boxShadow: `0 0 10px ${cat.color}80`, flexShrink: 0 }} />
                <span className="mono" style={{ fontSize: '0.72rem', fontWeight: 700, color: cat.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {cat.label}
                </span>
              </div>

              {/* Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="skill-pill"
                    style={{ borderColor: hovered === i ? `${cat.color}20` : undefined }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #skills div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
