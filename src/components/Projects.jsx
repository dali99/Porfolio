import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id:       1,
    num:      '01',
    badge:    'En production',
    title:    'Back-office National de Sant\u00e9',
    subtitle: 'SaaS National \u00b7 Minist\u00e8re de la Sant\u00e9',
    desc:     'Gestion centralis\u00e9e des utilisateurs, structures de sant\u00e9 et r\u00e9f\u00e9rentiels m\u00e9tier pour une plateforme SaaS nationale.',
    accent:   '#7c3aed',
    gradient: 'linear-gradient(135deg, #1a0a3d 0%, #2d1b69 50%, #0f172a 100%)',
    tags:     ['Spring Boot', 'React.js', 'PostgreSQL', 'Keycloak', 'Docker', 'CI/CD'],
    tasks: [
      "Gestion centralis\u00e9e des utilisateurs, structures de sant\u00e9 et r\u00e9f\u00e9rentiels m\u00e9tier d'une plateforme SaaS nationale.",
      "API RESTful scalable avec Spring Boot et architecture en couches (Controller \u2192 Service \u2192 Repository).",
      "Module de gestion des structures de sant\u00e9 : CRUD + hi\u00e9rarchie organisationnelle compl\u00e8te.",
      "Int\u00e9gration Keycloak pour SSO multi-applications et gestion RBAC des r\u00f4les.",
      "Tableaux de bord analytiques avec filtres dynamiques par r\u00e9gion et gouvernorat.",
      "Pipeline CI/CD avec GitLab CI et conteneurisation Docker / Docker Compose.",
      "Optimisation des requ\u00eates PostgreSQL pour g\u00e9rer +50\u202f000 enregistrements.",
    ],
  },
  {
    id:       2,
    num:      '02',
    badge:    'En production',
    title:    'Cold Chain',
    subtitle: 'Surveillance M\u00e9dicale Temps R\u00e9el',
    desc:     'Supervision temps r\u00e9el des r\u00e9frig\u00e9rateurs m\u00e9dicaux avec suivi des pannes et notification automatique des incidents critiques.',
    accent:   '#00ffd0',
    gradient: 'linear-gradient(135deg, #001a14 0%, #00302a 50%, #0a1628 100%)',
    tags:     ['Django REST', 'React.js', 'WebSocket', 'PostgreSQL', 'Docker'],
    tasks: [
      "Supervision temps r\u00e9el avec suivi des pannes et notification automatique des incidents.",
      "Architecture WebSocket pour les alertes instantan\u00e9es c\u00f4t\u00e9 client sans polling.",
      "Tableau de bord cartographique des \u00e9quipements r\u00e9frig\u00e9rants avec statut en direct.",
      "Syst\u00e8me d'alertes configurables par seuil de temp\u00e9rature et type d'incident.",
      "Module de rapport d'incidents avec historique et export PDF.",
      "Backend Django REST avec endpoints optimis\u00e9s pour les donn\u00e9es de capteurs.",
      "D\u00e9ploiement conteneuris\u00e9 Docker avec monitoring inclus.",
    ],
  },
  {
    id:       3,
    num:      '03',
    badge:    'En production',
    title:    'EPharmacie',
    subtitle: 'Circuit du M\u00e9dicament \u00b7 Logique Pharmaceutique',
    desc:     'Circuit complet du m\u00e9dicament (demandes, validation, stock, inventaire, dispensation), conforme aux exigences pharmaceutiques nationales.',
    accent:   '#f59e0b',
    gradient: 'linear-gradient(135deg, #1a0e00 0%, #3d2000 50%, #1a0a0a 100%)',
    tags:     ['Spring Boot', 'API REST', 'React.js', 'PostgreSQL', 'RBAC'],
    tasks: [
      "Circuit complet du m\u00e9dicament : demandes, validation, stock, inventaire, dispensation.",
      "Logique m\u00e9tier conforme aux exigences pharmaceutiques r\u00e9glementaires nationales.",
      "Module de gestion des stocks avec alertes de p\u00e9remption et rupture.",
      "Workflow de validation multi-niveaux pour les demandes de m\u00e9dicaments.",
      "Interface de dispensation avec historique patient et contr\u00f4le des doublons.",
      "API REST document\u00e9e Swagger pour l'int\u00e9gration avec les syst\u00e8mes externes.",
      "Gestion RBAC fine : pharmacien, responsable stock, m\u00e9decin prescripteur.",
    ],
  },
  {
    id:       4,
    num:      '04',
    badge:    'En production',
    title:    'Portail SSO Institutionnel',
    subtitle: 'Authentification Centralis\u00e9e \u00b7 Keycloak',
    desc:     'Portail SSO centralis\u00e9 avec acc\u00e8s par r\u00f4les et tra\u00e7abilit\u00e9 compl\u00e8te pour toutes les applications de la plateforme nationale de sant\u00e9.',
    accent:   '#a78bfa',
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a1035 50%, #050508 100%)',
    tags:     ['Keycloak', 'SSO', 'OAuth2', 'RBAC', 'Spring Boot', 'React.js'],
    tasks: [
      "Portail SSO centralis\u00e9 avec Keycloak : acc\u00e8s unifi\u00e9 \u00e0 toutes les applications.",
      "Gestion des permissions par r\u00f4les (RBAC) avec h\u00e9ritage et d\u00e9l\u00e9gation.",
      "Tra\u00e7abilit\u00e9 compl\u00e8te des connexions, actions et acc\u00e8s par application.",
      "Int\u00e9gration OAuth2  Connect pour les applications tierces.",
      "Interface d'administration des utilisateurs et des droits par realm Keycloak.",
    ],
  },
  {
    id:       5,
    num:      '05',
    badge:    'Autres projets',
    title:    'Plateforme e-Learning',
    subtitle: 'Formation en Ligne \u00b7 Infinity Talents',
    desc:     'Back-office complet d\u2019une plateforme e-learning : gestion des r\u00f4les, programmes, notifications e-mail et contenus p\u00e9dagogiques.',
    accent:   '#34d399',
    gradient: 'linear-gradient(135deg, #001a0e 0%, #003320 50%, #050a0e 100%)',
    tags:     ['Django REST', 'React.js', 'MySQL', 'React Query', 'Celery'],
    tasks: [
      "Back-office complet : gestion des r\u00f4les, programmes et contenus p\u00e9dagogiques.",
      "Gestion des utilisateurs : apprenants, formateurs, administrateurs avec RBAC.",
      "Notifications e-mail automatiques : inscription, rappels, validation de cours.",
      "Moteur de progression des apprenants avec statistiques et certificats.",
      "Interface de cr\u00e9ation de cours avec \u00e9diteur rich-text et upload de m\u00e9dias.",
      "Syst\u00e8me de quiz avec correction automatique et g\u00e9n\u00e9ration de r\u00e9sultats.",
      "Workforce : gestion des temps, pr\u00e9sences et paie (module annexe).",
    ],
  },
  {
    id:       6,
    num:      '06',
    badge:    'Autres projets',
    title:    'e-Hiring & infinitymgt.fr',
    subtitle: 'Recrutement Auto. \u00b7 Site Vitrine WordPress',
    desc:     'Scoring automatis\u00e9 et matching candidats-offres avec CV standardis\u00e9s. Site vitrine WordPress du groupe Infinity Management.',
    accent:   '#f472b6',
    gradient: 'linear-gradient(135deg, #1a0010 0%, #3d0025 50%, #0a050a 100%)',
    tags:     ['Django REST', 'React.js', 'API Backend', 'WordPress', 'Python'],
    tasks: [
      "e-Hiring : scoring automatis\u00e9 et matching candidats-offres selon crit\u00e8res m\u00e9tier.",
      "G\u00e9n\u00e9ration automatique de CV standardis\u00e9s par candidat pour l'analyse comparative.",
      "Algorithme de matching multi-crit\u00e8res (comp\u00e9tences, exp\u00e9rience, localisation).",
      "Tableau de bord recruteur avec pipeline de candidatures et statuts.",
      "Site corporate infinitymgt.fr : site vitrine WordPress d'un groupe international.",
      "Architecture th\u00e8me WordPress sur-mesure avec optimisation des performances.",
      "Int\u00e9gration de contenus dynamiques et r\u00e9f\u00e9rencement SEO multilingue.",
    ],
  },
  {
    id:       7,
    num:      '07',
    badge:    'Autres projets',
    title:    'Workforce',
    subtitle: 'Gestion des Temps & Pr\u00e9sences',
    desc:     'Application web de gestion des temps et de pr\u00e9sence des employ\u00e9s : suivi des pointages, validation des heures et traitement de la paie.',
    accent:   '#38bdf8',
    gradient: 'linear-gradient(135deg, #001220 0%, #002a45 50%, #050a10 100%)',
    tags:     ['Spring Boot', 'React.js', 'PostgreSQL', 'RBAC', 'Docker'],
    wide:     true,
    tasks: [
      "Application web compl\u00e8te de gestion des temps et de pr\u00e9sence des employ\u00e9s.",
      "Syst\u00e8me de pointage en temps r\u00e9el avec interface tactile et authentification par badge.",
      "Validation des heures par les managers avec workflow d'approbation et commentaires.",
      "Calcul automatique de la paie : heures normales, suppl\u00e9mentaires, absences et cong\u00e9s.",
      "Tableau de bord RH : vue hebdomadaire/mensuelle des pr\u00e9sences par \u00e9quipe.",
      "G\u00e9n\u00e9ration de bulletins de paie et exports CSV pour les logiciels comptables.",
      "Gestion des plannings : affectation des employ\u00e9s aux shifts avec contr\u00f4le des chevauchements.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
//  PROJECT MODAL
// ─────────────────────────────────────────────────────────────
function Modal({ project, onClose, onPrev, onNext, total, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 800,
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.93, y: 24 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 680,
          maxHeight: '90vh', overflowY: 'auto',
          borderRadius: 24,
          background: '#0c0c12',
          border: `1px solid ${project.accent}25`,
          boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 60px ${project.accent}15`,
          position: 'relative',
        }}
      >
        {/* ── Gradient header ── */}
        <div style={{
          height: 180, background: project.gradient,
          borderRadius: '24px 24px 0 0',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '1.75rem',
        }}>
          {/* Animated mesh overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.3,
            backgroundImage: `radial-gradient(circle at 30% 50%, ${project.accent}40 0%, transparent 60%),
                              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)`,
          }} />
          {/* Subtle grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Badge */}
            {project.badge && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.7rem', padding: '0.22rem 0.65rem', borderRadius: '20px', background: project.badge === 'En production' ? 'rgba(0,255,208,0.12)' : 'rgba(167,139,250,0.12)', border: `1px solid ${project.badge === 'En production' ? 'rgba(0,255,208,0.3)' : 'rgba(167,139,250,0.3)'}` }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: project.badge === 'En production' ? '#00ffd0' : '#a78bfa', boxShadow: `0 0 6px ${project.badge === 'En production' ? '#00ffd0' : '#a78bfa'}` }} />
                <span style={{ fontSize: '0.6rem', fontFamily: 'Space Mono, monospace', fontWeight: 700, color: project.badge === 'En production' ? '#00ffd0' : '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {project.badge}
                </span>
              </div>
            )}
            <div style={{ fontSize: '0.65rem', fontFamily: 'Space Mono, monospace', color: `${project.accent}cc`, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              {project.num} / {String(total).padStart(2,'0')} · {project.subtitle}
            </div>
            <h3 className="syne" style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: '2rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            {project.desc}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{
                padding: '0.28rem 0.75rem', borderRadius: '7px',
                fontSize: '0.72rem', fontWeight: 700,
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}28`,
                color: project.accent,
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Tasks */}
          <div style={{ marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: project.accent, boxShadow: `0 0 8px ${project.accent}` }} />
              <span className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                Tâches réalisées
              </span>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {project.tasks.map((task, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.055, duration: 0.3 }}
                  style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.52)', fontSize: '0.88rem', lineHeight: 1.6 }}
                >
                  <CheckCircle2 size={14} style={{ color: project.accent, flexShrink: 0, marginTop: 3 }} />
                  {task}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Navigation ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <button
            onClick={onPrev}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none', padding: '0.5rem 0.75rem', borderRadius: '8px', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
          >
            <ChevronLeft size={15} /> Précédent
          </button>

          {/* Dot indicators */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {PROJECTS.map((_, i) => (
              <span key={i} style={{ width: i === idx ? 18 : 6, height: 6, borderRadius: 4, background: i === idx ? project.accent : 'rgba(255,255,255,0.15)', transition: 'all 0.3s' }} />
            ))}
          </div>

          <button
            onClick={onNext}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none', padding: '0.5rem 0.75rem', borderRadius: '8px', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
          >
            Suivant <ChevronRight size={15} />
          </button>
        </div>

        {/* ── Close button ── */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
        >
          <X size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROJECT CARD
// ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick, wide }) {
  const cardRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.5), ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onClick={onClick}
      onMouseMove={onMouseMove}
      data-hover
      style={{
        borderRadius: 20,
        border: `1px solid rgba(255,255,255,0.07)`,
        background: 'rgba(255,255,255,0.025)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
        '--mx': '50%', '--my': '50%',
        display: wide ? 'flex' : 'block',
        flexDirection: 'row',
        height: wide ? 220 : 'auto',
      }}
      className="project-card"
    >
      {/* Mouse-follow spotlight */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0,
        background: `radial-gradient(280px circle at var(--mx) var(--my), ${project.accent}10 0%, transparent 70%)`,
        transition: 'opacity 0.3s',
      }} className="card-spotlight" />

      {/* ── Visual header ── */}
      <div style={{
        height: wide ? '100%' : 200,
        width:  wide ? '35%'  : '100%',
        flexShrink: 0,
        background: project.gradient,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />

        {/* Glow orb */}
        <div style={{
          position: 'absolute', top: '20%', left: '15%',
          width: 140, height: 140, borderRadius: '50%',
          background: `radial-gradient(circle, ${project.accent}30 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }} />

        {/* Project number + badge */}
        <div style={{ position: 'absolute', top: '1rem', left: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: `${project.accent}80`, letterSpacing: '0.2em' }}>
            {project.num}
          </span>
          {project.badge && (
            <span style={{
              fontSize: '0.55rem', fontFamily: 'Space Mono, monospace', fontWeight: 700,
              padding: '0.18rem 0.5rem', borderRadius: '20px', letterSpacing: '0.08em', textTransform: 'uppercase',
              background: project.badge === 'En production' ? 'rgba(0,255,208,0.15)' : 'rgba(167,139,250,0.15)',
              border: `1px solid ${project.badge === 'En production' ? 'rgba(0,255,208,0.35)' : 'rgba(167,139,250,0.35)'}`,
              color: project.badge === 'En production' ? '#00ffd0' : '#a78bfa',
            }}>
              {project.badge}
            </span>
          )}
        </div>

        {/* Arrow icon */}
        <div style={{
          position: 'absolute', top: '1rem', right: '1.25rem',
          width: 34, height: 34, borderRadius: '50%',
          background: 'rgba(0,0,0,0.4)',
          border: `1px solid ${project.accent}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: project.accent,
          transition: 'all 0.3s',
        }} className="card-arrow">
          <ArrowUpRight size={15} />
        </div>

        {/* Tech pills bottom */}
        <div style={{
          position: 'absolute', bottom: '1rem', left: '1.25rem',
          display: 'flex', flexWrap: 'wrap', gap: '0.4rem',
        }}>
          {project.tags.slice(0, 3).map((t, i) => (
            <span key={i} style={{
              padding: '0.2rem 0.6rem', borderRadius: '6px',
              fontSize: '0.65rem', fontWeight: 600,
              background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
              border: `1px solid ${project.accent}25`, color: 'rgba(255,255,255,0.75)',
            }}>
              {t}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span style={{ padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.65rem', background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.4)' }}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: wide ? '2rem 2.5rem' : '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: wide ? 'center' : 'flex-start' }}>
        <div style={{ fontSize: '0.67rem', fontFamily: 'Space Mono, monospace', color: project.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
          {project.subtitle}
        </div>
        <h3 className="syne" style={{ fontWeight: 800, fontSize: wide ? '1.55rem' : '1.18rem', color: 'white', marginBottom: '0.6rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
          {project.desc}
        </p>

        {/* Tags — show all in wide mode */}
        {wide && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {project.tags.map((t, i) => (
              <span key={i} style={{
                padding: '0.22rem 0.65rem', borderRadius: '7px',
                fontSize: '0.7rem', fontWeight: 600,
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}25`,
                color: project.accent,
              }}>{t}</span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)' }}>
            <CheckCircle2 size={12} style={{ color: project.accent }} />
            {project.tasks.length} tâches réalisées
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: project.accent, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Voir le détail <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROJECTS SECTION
// ─────────────────────────────────────────────────────────────
export default function Projects() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openModal  = (i) => setSelectedIdx(i);
  const closeModal = () => setSelectedIdx(null);
  const goPrev = () => setSelectedIdx(i => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const goNext = () => setSelectedIdx(i => (i + 1) % PROJECTS.length);

  return (
    <section id="projects" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="divider" />

      {/* Ambient */}
      <div style={{ position: 'absolute', top: '30%', left: '-5%', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.055) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,208,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <span className="watermark" style={{ right: '-2%', top: '5%' }}>03</span>

      <div style={{ maxWidth: 960, margin: '0 auto', paddingTop: '3.5rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}
        >
          <h2 className="syne" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08 }}>
            Projets <span className="text-grad">réalisés.</span>
          </h2>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontFamily: 'Space Mono, monospace', color: '#00ffd0' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ffd0', boxShadow: '0 0 8px #00ffd0' }} /> 4 en production
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontFamily: 'Space Mono, monospace', color: '#a78bfa' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 8px #a78bfa' }} /> 3 autres projets
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', lineHeight: 1.55 }}>
              Cliquez pour voir le détail.
            </p>
          </div>
        </motion.div>

        {/* Grid — 3 cols desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.1rem' }} className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div key={project.id} style={project.wide ? { gridColumn: '1 / -1' } : {}}>
              <ProjectCard
                project={project}
                index={i}
                onClick={() => openModal(i)}
                wide={project.wide}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <Modal
            key={selectedIdx}
            project={PROJECTS[selectedIdx]}
            idx={selectedIdx}
            total={PROJECTS.length}
            onClose={closeModal}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>

      {/* Card hover styles */}
      <style>{`
        .project-card { cursor: none; }
        .project-card:hover {
          border-color: rgba(255,255,255,0.14) !important;
          transform: translateY(-5px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.5);
        }
        .project-card:hover .card-spotlight { opacity: 1 !important; }
        .project-card:hover .card-arrow {
          background: rgba(124,58,237,0.2) !important;
          border-color: rgba(124,58,237,0.5) !important;
          transform: rotate(45deg);
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

