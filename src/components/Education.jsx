import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  3D TILT CARD
// ─────────────────────────────────────────────────────────────
function TiltCard({ children, style }) {
  const ref = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const onMove = useCallback((e) => {
    if (isMobile) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top)  / r.height;
    const rX = (y - 0.5) * -16;
    const rY = (x - 0.5) *  16;
    el.style.transform = `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.025,1.025,1.025)`;
    el.style.boxShadow = `0 30px 80px rgba(0,0,0,0.65), 0 0 50px rgba(124,58,237,0.12), ${rY * -1.2}px ${rX * 1.2}px 30px rgba(0,0,0,0.2)`;
  }, [isMobile]);

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    ref.current.style.boxShadow = 'none';
  }, []);

  return (
    <div
      ref={ref}
      className="tilt edu-card-inner"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────
const EDU = [
  {
    degree: "Diplôme d'Ingénieur",
    field:  "Génie Informatique",
    school: "École Nationale d'Ingénieurs de Carthage",
    short:  "ENICarthage",
    loc:    "Tunis, Tunisie",
    period: "Sep 2021 – Jun 2024",
    icon:   <GraduationCap size={26} />,
    accent: '#7c3aed',
    tags:   ['Systèmes Distribués', 'Génie Logiciel', 'Bases de données'],
    desc:   "Ingénierie logicielle, systèmes distribués, bases de données avancées.",
  },
  {
    degree: "Cycle Préparatoire",
    field:  "Mathématiques et Physique (MP)",
    school: "Faculté des Sciences de Monastir",
    short:  "FSM",
    loc:    "Monastir, Tunisie",
    period: "Sep 2019 – Jun 2021",
    icon:   <BookOpen size={26} />,
    accent: '#00ffd0',
    tags:   ['Mathématiques', 'Algorithmique', 'Physique'],
    desc:   "Mathématiques avancées, algorithmique, physique appliquée.",
  },
];

// ─────────────────────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section id="education" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="divider" />

      <div style={{ position: 'absolute', top: '20%', right: '0', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <span className="watermark" style={{ left: '-1%', bottom: '0%' }}>04</span>

      <div style={{ maxWidth: 960, margin: '0 auto', paddingTop: '3.5rem', position: 'relative', zIndex: 1 }}>

        <motion.div className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Académique
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="syne"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '3.5rem' }}
        >
          Les bases qui font{' '}
          <span className="text-grad">la différence.</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {EDU.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.18 }}
            >
              <TiltCard>
                {/* Top gradient accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(to right, ${item.accent}, ${item.accent}50, transparent)`,
                }} />

                <div style={{ padding: '2.25rem' }}>
                  {/* Icon */}
                  <div style={{
                    width: 54, height: 54, borderRadius: '14px',
                    background: `${item.accent}14`, border: `1px solid ${item.accent}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.accent, marginBottom: '1.6rem',
                  }}>
                    {item.icon}
                  </div>

                  {/* Degree */}
                  <div style={{ fontSize: '0.67rem', fontWeight: 700, color: item.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem', fontFamily: 'Space Mono, monospace' }}>
                    {item.degree}
                  </div>
                  <h3 className="syne" style={{ fontWeight: 800, fontSize: '1.25rem', color: 'white', lineHeight: 1.2, marginBottom: '0.6rem' }}>
                    {item.field}
                  </h3>

                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.36)', lineHeight: 1.65, marginBottom: '1.4rem' }}>
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {item.tags.map((tag, j) => (
                      <span key={j} style={{
                        padding: '0.22rem 0.6rem', borderRadius: '6px',
                        fontSize: '0.68rem', fontWeight: 600,
                        background: `${item.accent}10`, border: `1px solid ${item.accent}20`,
                        color: item.accent,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ paddingTop: '1.1rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.74rem', color: 'rgba(255,255,255,0.3)' }}>
                      <MapPin size={10} /> {item.loc}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.74rem', color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>
                      <Calendar size={10} /> {item.period}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #education div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
