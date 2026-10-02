import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';

const experiences = [
  {
    role: "Ingénieur Logiciel",
    company: "Infinity Management Group",
    location: "Tunis, Tunisie",
    period: "Sep 2024 – Aujourd'hui",
    current: true,
    color: '#6c5fff',
    items: [
      "Back-office national de santé : système centralisé avec données de référence et RBAC.",
      "Application Cold Chain : surveillance temps réel des réfrigérateurs médicaux + alertes automatiques.",
      "Application EPharma : circuit complet du médicament selon les exigences pharmaceutiques.",
      "Portail applicatif institutionnel : SSO & Keycloak, permissions, traçabilité.",
      "EVax : contribution à la plateforme nationale de vaccination.",
    ]
  },
  {
    role: "Stagiaire Ingénieur Logiciel",
    company: "Infinity Management · Infinity Talents",
    location: "Tunis, Tunisie",
    period: "Fév – Sep 2024",
    current: false,
    color: '#22d3ee',
    items: [
      "Développement du back-office complet d'une plateforme e-learning : utilisateurs, formateurs, apprenants, notifications.",
    ]
  },
  {
    role: "Développeur Full-Stack · Temps partiel",
    company: "Infinity Management Group",
    location: "Tunis, Tunisie",
    period: "Juin 2023 – Fév 2024",
    current: false,
    color: '#a29eff',
    items: [
      "Site web corporate (infinitymgt.fr) sous WordPress : architecture du thème et optimisation.",
      "Application e-Hiring : gestion de recrutement, scoring automatisé et matching candidat-offres.",
      "Génération automatique de CV standardisés « Infinity » pour l'analyse comparative des profils.",
    ]
  }
];

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />

      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
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
          <span>02</span>
          <span>Expérience Professionnelle</span>
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
          Ce que j'ai{' '}
          <span className="text-gradient">construit jusqu'ici.</span>
        </motion.h2>

        {/* Timeline accordion */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '5px', top: '8px', bottom: '8px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(108,95,255,0.6), rgba(34,211,238,0.3), rgba(255,255,255,0.05))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: '-1px',
                  width: 12, height: 12, borderRadius: '50%',
                  border: `2px solid ${exp.color}`,
                  background: exp.current ? `${exp.color}33` : '#060609',
                  boxShadow: exp.current ? `0 0 16px ${exp.color}55` : 'none',
                  marginTop: '1.5rem',
                }}>
                  {exp.current && (
                    <div style={{
                      position: 'absolute', inset: '2px',
                      borderRadius: '50%', background: exp.color,
                      animation: 'pulse-dot 2s infinite',
                    }} />
                  )}
                </div>

                {/* Card */}
                <div
                  className="glass card-lift"
                  style={{
                    borderRadius: '16px', overflow: 'hidden',
                    borderColor: expanded === index ? `${exp.color}30` : 'rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setExpanded(expanded === index ? -1 : index)}
                >
                  {/* Header */}
                  <div style={{
                    padding: '1.5rem 1.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '1rem',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                            Actuel
                          </span>
                        )}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: exp.color }}>
                          {exp.company}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <MapPin size={11} /> {exp.location}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Calendar size={11} /> {exp.period}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>

                  {/* Expanded items */}
                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          padding: '0 1.75rem 1.75rem',
                          borderTop: `1px solid ${exp.color}18`,
                          marginTop: 0,
                        }}>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.25rem' }}>
                            {exp.items.map((item, i) => (
                              <li key={i} style={{
                                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                                color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6,
                              }}>
                                <span style={{
                                  width: 6, height: 6, borderRadius: '50%',
                                  background: exp.color, flexShrink: 0, marginTop: '0.55rem',
                                }} />
                                {item}
                              </li>
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
