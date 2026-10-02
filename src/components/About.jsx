import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Rocket, Globe, Clock } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  LIVE TIMER — counts since Sep 2024
// ─────────────────────────────────────────────────────────────
const START = new Date('2024-09-01T09:00:00');

function LiveTimer() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = Date.now() - START;
      const days  = Math.floor(d / 86400000);
      const hours = Math.floor((d % 86400000) / 3600000);
      const mins  = Math.floor((d % 3600000)  / 60000);
      const secs  = Math.floor((d % 60000)    / 1000);
      setT(`${days}j ${String(hours).padStart(2,'0')}h ${String(mins).padStart(2,'0')}m ${String(secs).padStart(2,'0')}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      fontFamily: 'Space Mono, monospace', fontSize: '0.95rem',
      color: '#00ffd0', lineHeight: 1.2,
    }}>
      {t}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  COUNT-UP STAT
// ─────────────────────────────────────────────────────────────
function CountStat({ target, suffix = '+', label, color = '#7c3aed' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = Date.now();
    const update = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(update);
      else setCount(target);
    };
    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="card"
      style={{ padding: '1.75rem', textAlign: 'center', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle glow behind number */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 80, height: 80, borderRadius: '50%',
        background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
      <div className="syne" style={{
        fontSize: '2.6rem', fontWeight: 800, lineHeight: 1,
        background: `linear-gradient(135deg, #fff 0%, ${color}cc 100%)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        marginBottom: '0.4rem',
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.32)', fontWeight: 500 }}>{label}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  TRAITS
// ─────────────────────────────────────────────────────────────
const TRAITS = [
  { icon: <Globe size={18} />,    title: 'SaaS & Santé Digitale', desc: 'Architectures multi-tenant, RBAC, SSO Keycloak, plateformes nationales de santé.', color: '#7c3aed' },
  { icon: <Rocket size={18} />,   title: 'Backend & Frontend',    desc: 'Spring Boot + React.js — du service métier au pixel parfait.', color: '#00ffd0' },
  { icon: <Briefcase size={18} />, title: 'DevOps & Qualité',    desc: 'Docker, CI/CD GitLab, code maintenable, architectures propres.', color: '#a78bfa' },
];

// ─────────────────────────────────────────────────────────────
//  ABOUT
// ─────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="divider" />

      {/* Ambient */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Watermark */}
      <span className="watermark" style={{ left: '-2%', top: '10%' }}>01</span>

      <div style={{ maxWidth: 960, margin: '0 auto', paddingTop: '3.5rem', position: 'relative', zIndex: 1 }}>

        {/* Label + heading */}
        <motion.div className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Profil
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="syne"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '3rem' }}
        >
          Construire des produits qui ont<br />
          <span className="text-grad">un impact réel.</span>
        </motion.h2>

        {/* ── BENTO GRID ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bento bento-main"
          style={{ marginBottom: '1.25rem' }}
        >
          {/* Bio card */}
          <div className="b-bio card" style={{ padding: '2rem 2.25rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, fontSize: '1.02rem', marginBottom: '1.25rem' }}>
              <strong style={{ color: 'white', fontWeight: 600 }}>Ingénieur Logiciel Full-Stack</strong> avec plus de{' '}
              <span style={{ color: '#a78bfa', fontWeight: 500 }}>2 ans d'expérience</span> dans le développement de plateformes SaaS à grande échelle —
              principalement dans le domaine de la santé digitale.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Expert en intégration{' '}
              <span style={{ color: '#00ffd0' }}>SSO / Keycloak</span>, pipelines{' '}
              <span style={{ color: '#00ffd0' }}>CI/CD</span> et conteneurisation{' '}
              <span style={{ color: '#00ffd0' }}>Docker</span>.
              Passionné par les architectures propres et les produits à fort impact.
            </p>
          </div>

          {/* Timer card */}
          <div className="b-timer card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.6rem' }}>
                <span className="pulse-dot" style={{ position: 'relative' }} />
                En poste
              </span>
            </div>

            <div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem', fontFamily: 'Space Mono, monospace' }}>
                Temps en poste
              </div>
              <LiveTimer />
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.3rem' }}>Entreprise</div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>Infinity Management Group</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.15rem' }}>Tunis, Tunisie</div>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <div style={{
                width: '100%', height: 3, borderRadius: 4,
                background: 'rgba(255,255,255,0.05)',
                overflow: 'hidden',
              }}>
                <div style={{ height: '100%', width: '100%', background: 'linear-gradient(to right, #7c3aed, #00ffd0)', borderRadius: 4 }} />
              </div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.3rem', textAlign: 'right', fontFamily: 'Space Mono, monospace' }}>
                Sep 2024 → présent
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="b-stats">
            <CountStat target={2}  suffix="+ ans" label="d'expérience"  color="#7c3aed" />
            <CountStat target={10} suffix="+"     label="Projets livrés" color="#00ffd0" />
            <CountStat target={5}  suffix="+"     label="Solutions SaaS" color="#a78bfa" />
          </div>
        </motion.div>

        {/* ── TRAIT CARDS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem' }}>
          {TRAITS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="card"
              style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, ${t.color}60, transparent)` }} />

              <div style={{ width: 40, height: 40, borderRadius: '11px', background: `${t.color}14`, border: `1px solid ${t.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.color, marginBottom: '1rem' }}>
                {t.icon}
              </div>
              <h3 className="syne" style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'white' }}>
                {t.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .bento-main > div:last-child { grid-template-columns: 1fr !important; }
          #about div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
