import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';

const EXP = [
  {
    role:    'Ingénieur Logiciel',
    company: 'Infinity Management Group',
    loc:     'Tunis, Tunisie',
    period:  "Sep 2024 – Aujourd'hui",
    current: true,
    accent:  '#7c3aed',
    items: [
      "Back-office national de santé : système centralisé avec données de référence et RBAC.",
      "Application Cold Chain : surveillance temps réel des réfrigérateurs médicaux + alertes automatiques.",
      "Application EPharma : circuit complet du médicament selon les exigences pharmaceutiques.",
      "Portail applicatif institutionnel : SSO & Keycloak, gestion des permissions et traçabilité.",
      "EVax : contribution à la plateforme nationale de vaccination.",
    ],
  },
  {
    role:    'Stagiaire Ingénieur Logiciel',
    company: 'Infinity Management · Infinity Talents',
    loc:     'Tunis, Tunisie',
    period:  'Fév – Sep 2024',
    current: false,
    accent:  '#00ffd0',
    items: [
      "Back-office complet d'une plateforme e-learning : utilisateurs, formateurs, apprenants, notifications.",
    ],
  },
  {
    role:    'Développeur Full-Stack · Temps partiel',
    company: 'Infinity Management Group',
    loc:     'Tunis, Tunisie',
    period:  'Juin 2023 – Fév 2024',
    current: false,
    accent:  '#a78bfa',
    items: [
      "Site web corporate (infinitymgt.fr) sous WordPress : architecture thème et optimisation.",
      "Application e-Hiring : recrutement, scoring automatisé et matching candidat-offres.",
      "Génération automatique de CV standardisés « Infinity » pour l'analyse comparative des profils.",
    ],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="divider" />

      <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,208,0.045) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <span className="watermark" style={{ right: '-2%', top: '5%' }}>02</span>

      <div style={{ maxWidth: 960, margin: '0 auto', paddingTop: '3.5rem', position: 'relative', zIndex: 1 }}>

        <motion.div className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Parcours
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="syne"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '3.5rem' }}
        >
          Ce que j'ai{' '}
          <span className="text-grad">construit jusqu'ici.</span>
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2.25rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '5px', top: 10, bottom: 10, width: 1,
            background: 'linear-gradient(to bottom, rgba(124,58,237,0.7), rgba(0,255,208,0.3), rgba(255,255,255,0.04))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {EXP.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: -27, top: 22,
                  width: 11, height: 11, borderRadius: '50%',
                  border: `2px solid ${exp.accent}`,
                  background: exp.current ? `${exp.accent}30` : '#060609',
                  boxShadow: exp.current ? `0 0 14px ${exp.accent}66` : 'none',
                  zIndex: 2,
                }}>
                  {exp.current && (
                    <div style={{
                      position: 'absolute', inset: '2px',
                      borderRadius: '50%', background: exp.accent,
                      animation: 'pulse-ring 2s ease-out infinite',
                    }} />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`exp-card${open === i ? ' open' : ''}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{ borderLeftColor: open === i ? `${exp.accent}30` : undefined }}
                >
                  {/* ── Header ── */}
                  <div className="exp-header">
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
                        <h3 className="syne" style={{ fontWeight: 700, fontSize: '1.08rem', color: 'white' }}>{exp.role}</h3>
                        {exp.current && <span className="badge badge-cyan" style={{ fontSize: '0.6rem' }}>Actuel</span>}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: exp.accent }}>{exp.company}</span>
                        <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.28)', display: 'flex', alignItems: 'center', gap: '0.28rem' }}>
                          <MapPin size={10} /> {exp.loc}
                        </span>
                        <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.28)', display: 'flex', alignItems: 'center', gap: '0.28rem' }}>
                          <Calendar size={10} /> {exp.period}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      style={{ color: 'rgba(255,255,255,0.28)', flexShrink: 0 }}
                    >
                      <ChevronDown size={17} />
                    </motion.div>
                  </div>

                  {/* ── Expanded body ── */}
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 1.75rem 1.75rem', borderTop: `1px solid ${exp.accent}14`, paddingTop: '1.2rem' }}>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {exp.items.map((item, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.05, duration: 0.3 }}
                                style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.48)', fontSize: '0.88rem', lineHeight: 1.65 }}
                              >
                                <span style={{ width: 5, height: 5, borderRadius: '50%', background: exp.accent, flexShrink: 0, marginTop: '0.55rem' }} />
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
