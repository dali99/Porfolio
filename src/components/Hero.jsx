import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  TYPEWRITER
// ─────────────────────────────────────────────────────────────
const ROLES = [
  'Ingénieur Full-Stack',
  'Architecte SaaS',
  'Développeur Spring Boot',
  'Expert React & Next.js',
];

function Typewriter() {
  const [idx,      setIdx]      = useState(0);
  const [text,     setText]     = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let t;
    if (!deleting && text.length < word.length) {
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 52);
    } else if (!deleting && text.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2600);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 24);
    } else {
      setDeleting(false);
      setIdx(p => (p + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span>
      <span style={{ color: 'rgba(255,255,255,0.38)' }}>{text}</span>
      <span style={{ color: '#7c3aed', fontWeight: 300, opacity: 0.9 }}>|</span>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAGNETIC BUTTON
// ─────────────────────────────────────────────────────────────
function MagBtn({ href, className, children, style }) {
  const wrap = useRef(null);

  const onMove = useCallback((e) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width  / 2;
    const y = e.clientY - r.top  - r.height / 2;
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
  }, []);

  const onLeave = useCallback(() => {
    if (wrap.current) wrap.current.style.transform = 'translate(0,0)';
  }, []);

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: 'inline-block', transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)', ...style }}
    >
      <a href={href} className={className}>{children}</a>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  FLOATING CODE SNIPPETS
// ─────────────────────────────────────────────────────────────
const CODE_LINES = [
  { text: 'const engineer = new FullStack();' },
  { text: '@SpringBootApplication',            },
  { text: 'docker compose up --build',         },
  { text: 'git push origin feat/saas-v3',      },
  { text: 'SELECT * FROM impact WHERE real=1', },
];

// ─────────────────────────────────────────────────────────────
//  PARTICLE CANVAS
// ─────────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas._w = w; canvas._h = h;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener('mousemove', onMouse);

    const W = () => canvas._w || canvas.width / dpr;
    const H = () => canvas._h || canvas.height / dpr;

    const N = Math.min(90, Math.floor((W() * H()) / 12000));
    const pts = Array.from({ length: N }, () => ({
      x:  Math.random() * W(),
      y:  Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r:  Math.random() * 1.2 + 0.4,
      cyan: Math.random() > 0.72,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      pts.forEach(p => {
        // Mouse repulsion
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 170 && d > 0) {
          const f = ((170 - d) / 170) * 0.9;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        // Speed cap + damping
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 2.2) { p.vx *= 2.2 / spd; p.vy *= 2.2 / spd; }
        p.vx *= 0.978; p.vy *= 0.978;
        p.x  += p.vx;  p.y  += p.vy;
        // Wrap
        if (p.x < -10) p.x = W() + 10; if (p.x > W() + 10) p.x = -10;
        if (p.y < -10) p.y = H() + 10; if (p.y > H() + 10) p.y = -10;
      });

      // Connections
      const LINK = 115;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(167,139,250,${(1 - d / LINK) * 0.22})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Dots
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.cyan ? 'rgba(0,255,208,0.75)' : 'rgba(167,139,250,0.75)';
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.82 }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────────────────────
export default function Hero() {
  const S = { // shared inline style shorthand
    abs: { position: 'absolute' },
  };

  return (
    <section
      id="hero"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#060609' }}
    >
      <ParticleCanvas />

      {/* Ambient glows */}
      <div style={{ ...S.abs, top: '8%',  left: '-2%', width: 760, height: 760, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.075) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div style={{ ...S.abs, bottom: '0', right: '-4%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,208,0.045) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Background watermark */}
      <span className="watermark" style={{ right: '-1%', bottom: '-5%' }}>00</span>

      {/* ── Main content ── */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1020, margin: '0 auto', padding: '9rem 3rem 4rem', width: '100%' }}>

        {/* Section label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          Ingénieur Logiciel Full-Stack
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.55 }}
          style={{ marginBottom: '2.25rem' }}
        >
          <span className="badge badge-cyan">
            <span className="pulse-dot" style={{ position: 'relative' }} />
            Disponible immédiatement
          </span>
        </motion.div>

        {/* Name — slide up from hidden overflow */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(3.8rem, 9vw, 8.5rem)',
          lineHeight: 0.93, letterSpacing: '-0.04em',
          marginBottom: '1.6rem',
        }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block', color: 'rgba(255,255,255,0.52)', fontWeight: 600 }}
            >
              Mohamedali
            </motion.span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-grad"
              style={{ display: 'block' }}
            >
              MAGRI
            </motion.span>
          </div>
        </h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.92, duration: 0.6 }}
          style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.45rem)', marginBottom: '2.25rem', height: '2rem', fontWeight: 400 }}
        >
          <Typewriter />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          style={{ maxWidth: 460, color: 'rgba(255,255,255,0.38)', lineHeight: 1.82, fontSize: '1rem', marginBottom: '3rem' }}
        >
          Conception et développement de plateformes SaaS scalables et de solutions de santé digitale.
          Architecture propre, code maintenable, impact réel.
        </motion.p>

        {/* CTAs — magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <MagBtn href="#experience" className="btn btn-violet">
            Voir mon parcours <ArrowRight size={15} />
          </MagBtn>
          <MagBtn href="#contact" className="btn btn-ghost">
            Me contacter
          </MagBtn>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.38, duration: 0.8 }}
          style={{ display: 'flex', gap: '3.5rem', marginTop: '5.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap' }}
        >
          {[['2+', "Ans d'expérience"], ['10+', 'Projets livrés'], ['5+', 'Solutions SaaS']].map(([v, l]) => (
            <div key={l}>
              <div className="syne" style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {v}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.3rem', fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating code blocks — desktop only */}
      <div className="hide-mobile" style={{ position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '0.8rem', pointerEvents: 'none', zIndex: 5 }}>
        {CODE_LINES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ opacity: { delay: 1.6 + i * 0.15, duration: 0.6 }, x: { delay: 1.6 + i * 0.15, duration: 0.6 } }}
            style={{ animation: `${i % 2 === 0 ? 'float-up' : 'float-down'} ${3.8 + i * 0.6}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
          >
            <div style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.66rem',
              color: 'rgba(167,139,250,0.42)',
              background: 'rgba(124,58,237,0.045)',
              border: '1px solid rgba(124,58,237,0.1)',
              padding: '0.48rem 0.85rem', borderRadius: '8px', whiteSpace: 'nowrap',
            }}>
              <span style={{ color: 'rgba(0,255,208,0.35)', marginRight: '0.4rem' }}>›</span>
              {item.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 10 }}
        data-hover
      >
        <span className="mono" style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
          <ArrowDown size={13} color="rgba(124,58,237,0.55)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
