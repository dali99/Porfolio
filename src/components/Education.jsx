import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Diplôme d'Ingénieur",
    field: "Génie Informatique",
    school: "École Nationale d'Ingénieurs de Carthage",
    shortSchool: "ENICarthage",
    location: "Tunis, Tunisie",
    period: "Sep 2021 – Jun 2024",
    icon: <GraduationCap size={24} />,
    color: '#6c5fff',
    highlight: "Ingénierie logicielle, systèmes distribués, bases de données.",
    tags: ['Systèmes Distribués', 'Génie Logiciel', 'BDD'],
  },
  {
    degree: "Cycle Préparatoire",
    field: "Mathématiques et Physique (MP)",
    school: "Faculté des Sciences de Monastir",
    shortSchool: "FSM",
    location: "Monastir, Tunisie",
    period: "Sep 2019 – Jun 2021",
    icon: <BookOpen size={24} />,
    color: '#22d3ee',
    highlight: "Mathématiques avancées, algorithmique, physique.",
    tags: ['Mathématiques', 'Algorithmique', 'Physique'],
  }
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />

      <div style={{
        position: 'absolute', top: '20%', right: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,95,255,0.07) 0%, transparent 70%)',
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
          <span>03</span>
          <span>Formation Académique</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: '3.5rem', lineHeight: 1.15,
          }}
        >
          Les bases qui font{' '}
          <span className="text-gradient">la différence.</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass card-lift"
              style={{
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Color accent top border */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(to right, ${item.color}60, ${item.color}20, transparent)`,
              }} />

              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: '14px',
                background: `${item.color}15`,
                border: `1px solid ${item.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: item.color,
                marginBottom: '1.5rem',
              }}>
                {item.icon}
              </div>

              {/* Degree */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: item.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  {item.degree}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'white', lineHeight: 1.2 }}>
                  {item.field}
                </h3>
              </div>

              {/* School */}
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {item.school}
              </div>

              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {item.highlight}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {item.tags.map((tag, i) => (
                  <span key={i} style={{
                    padding: '0.25rem 0.6rem', borderRadius: '6px',
                    fontSize: '0.7rem', fontWeight: 600,
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}20`,
                    color: item.color,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                  <MapPin size={11} /> {item.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                  <Calendar size={11} /> {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #education .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
