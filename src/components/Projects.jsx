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
    title:    'Plateforme de Santé Digitale',
    subtitle: 'SaaS B2B · Ministère de la Santé',
    desc:     'Plateforme complète de gestion des structures et personnels de santé avec tableaux de bord analytiques en temps réel.',
    accent:   '#7c3aed',
    gradient: 'linear-gradient(135deg, #1a0a3d 0%, #2d1b69 50%, #0f172a 100%)',
    tags:     ['Spring Boot', 'React.js', 'PostgreSQL', 'Keycloak', 'Docker'],
    tasks: [
      "API RESTful scalable avec Spring Boot et architecture en couches (Controller → Service → Repository).",
      "Module de gestion des structures de santé : CRUD + hiérarchie organisationnelle.",
      "Intégration Keycloak pour SSO multi-applications et gestion RBAC des rôles.",
      "Tableaux de bord analytiques avec filtres dynamiques par région et gouvernorat.",
      "Pipeline CI/CD avec GitLab CI et conteneurisation Docker / Docker Compose.",
      "Optimisation PostgreSQL pour gérer +50 000 enregistrements.",
      "Formulaire multi-étapes pour la création des utilisateurs privés.",
    ],
  },
  {
    id:       2,
    num:      '02',
    title:    'Application de Gestion RH',
    subtitle: "Système Interne d'Entreprise",
    desc:     'Système RH avec suivi des présences, congés, évaluations de performances et rapports automatisés.',
    accent:   '#00ffd0',
    gradient: 'linear-gradient(135deg, #001a14 0%, #003d2e 50%, #0a1628 100%)',
    tags:     ['Django REST', 'React.js', 'MySQL', 'React Query', 'RBAC'],
    tasks: [
      "Architecture backend Django REST avec modèles normalisés et serializers.",
      "Workflow d'approbation des congés multi-niveaux avec notifications email.",
      "Module de suivi des présences avec intégration pointeuse RFID.",
      "Notifications automatiques avec Celery & Redis (emails + alertes temps réel).",
      "Interface React.js responsive avec gestion d'état React Query.",
      "Génération de rapports PDF mensuels avec WeasyPrint.",
      "Tests unitaires et d'intégration avec couverture > 85 %.",
    ],
  },
  {
    id:       3,
    num:      '03',
    title:    'Portail E-Commerce B2B',
    subtitle: 'Marketplace Multi-Vendeurs',
    desc:     'Plateforme B2B avec catalogue produits, gestion des commandes, paiements sécurisés et dashboard vendeur.',
    accent:   '#f59e0b',
    gradient: 'linear-gradient(135deg, #1a0e00 0%, #3d2000 50%, #1a0a0a 100%)',
    tags:     ['Next.js', 'Spring Boot', 'PostgreSQL', 'Stripe', 'Docker'],
    tasks: [
      "Architecture microservices Spring Boot : catalogue, commande, paiement.",
      "Frontend Next.js avec SSR pour l'optimisation SEO.",
      "Intégration Stripe pour paiements en ligne et gestion des webhooks.",
      "Recherche avancée avec filtres produits (prix, catégorie, fournisseur).",
      "Dashboard vendeur personnalisé avec analytiques des ventes.",
      "Système de reviews et notations avec modération automatique.",
      "Optimisation des images avec Cloudinary et lazy loading.",
    ],
  },
  {
    id:       4,
    num:      '04',
    title:    'Surveillance Réseau',
    subtitle: 'Outil DevOps & Monitoring',
    desc:     'Dashboard de surveillance réseau temps réel avec alertes automatiques, historique des métriques et visualisation Grafana.',
    accent:   '#a78bfa',
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a1035 50%, #050508 100%)',
    tags:     ['Python', 'React.js', 'WebSocket', 'Grafana', 'Docker'],
    tasks: [
      "Agents Python de collecte des métriques réseau en temps réel.",
      "Architecture WebSocket pour les mises à jour live côté client.",
      "Intégration Grafana pour les tableaux de bord de visualisation.",
      "Système d'alertes configurable par e-mail et Slack.",
      "Stockage des métriques dans InfluxDB avec rétention configurable.",
      "Dashboard React.js avec graphiques interactifs Chart.js.",
      "Déploiement conteneurisé Docker Compose, monitoring inclus.",
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
function ProjectCard({ project, index, onClick }) {
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
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
        height: 200, background: project.gradient, position: 'relative', overflow: 'hidden',
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

        {/* Project number */}
        <div style={{
          position: 'absolute', top: '1rem', left: '1.25rem',
          fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
          color: `${project.accent}80`, letterSpacing: '0.2em',
        }}>
          {project.num}
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
      <div style={{ padding: '1.5rem 1.75rem' }}>
        <div style={{ fontSize: '0.67rem', fontFamily: 'Space Mono, monospace', color: project.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
          {project.subtitle}
        </div>
        <h3 className="syne" style={{ fontWeight: 800, fontSize: '1.18rem', color: 'white', marginBottom: '0.6rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, marginBottom: '1.2rem' }}>
          {project.desc}
        </p>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem', maxWidth: 280, lineHeight: 1.65 }}>
            Cliquez sur un projet pour découvrir les tâches réalisées en détail.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => openModal(i)}
            />
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
        @media (max-width: 640px) {
          #projects div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

