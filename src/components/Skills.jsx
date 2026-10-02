import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Backend',
    color: '#6c5fff',
    skills: ['Java', 'Spring Boot', 'Django REST', 'APIs RESTful', 'Microservices', 'Python'],
  },
  {
    label: 'Frontend',
    color: '#22d3ee',
    skills: ['React.js', 'Next.js', 'JavaScript', 'React Query', 'Tailwind CSS'],
  },
  {
    label: 'DevOps',
    color: '#a29eff',
    skills: ['Docker', 'CI/CD Pipelines', 'GitLab CI', 'Git', 'GitHub'],
  },
  {
    label: 'Bases de données',
    color: '#f59e0b',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    label: 'Sécurité & Auth',
    color: '#34d399',
    skills: ['Keycloak', 'SSO', 'OAuth2', 'RBAC'],
  },
  {
    label: 'Concepts',
    color: '#f472b6',
    skills: ['Architecture Propre', 'SaaS Multi-tenant', 'Agile / Scrum', 'C', 'C++', 'WordPress'],
  },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />

      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,95,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: '3rem' }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-number"
          style={{ marginBottom: '1.5rem' }}
        >
          <span>04</span>
          <span>Compétences Techniques</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: '1rem', lineHeight: 1.15,
          }}
        >
          Mon arsenal{' '}
          <span className="text-gradient">technique.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '3.5rem', fontSize: '0.95rem' }}
        >
          Survolez une catégorie pour explorer les technologies.
        </motion.p>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
        >
          <button
            onClick={() => setActive(null)}
            style={{
              padding: '0.4rem 1rem', borderRadius: '8px',
              fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
              background: active === null ? 'rgba(108,95,255,0.2)' : 'transparent',
              border: `1px solid ${active === null ? 'rgba(108,95,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
              color: active === null ? '#a29eff' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.2s',
            }}
          >
            Tout
          </button>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              style={{
                padding: '0.4rem 1rem', borderRadius: '8px',
                fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                background: active === i ? `${cat.color}18` : 'transparent',
                border: `1px solid ${active === i ? `${cat.color}40` : 'rgba(255,255,255,0.07)'}`,
                color: active === i ? cat.color : 'rgba(255,255,255,0.4)',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass card-lift"
              style={{
                borderRadius: '16px',
                padding: '1.5rem',
                opacity: active !== null && active !== i ? 0.35 : 1,
                transition: 'opacity 0.3s ease',
                cursor: 'default',
                borderColor: active === i ? `${cat.color}30` : undefined,
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="skill-category-header">
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: cat.color,
                  boxShadow: `0 0 12px ${cat.color}80`,
                }} />
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: cat.color, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {cat.label}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: j * 0.04 }}
                    className="hex-skill"
                    style={{
                      borderColor: active === i ? `${cat.color}25` : undefined,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #skills > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
