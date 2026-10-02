import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const LINKS = [
  {
    icon:  <Mail size={20} />,
    label: 'Email',
    value: 'dalimagri99@gmail.com',
    href:  'mailto:dalimagri99@gmail.com',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.063 2.063 0 01-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: '/in/mohamedali72',
    href:  'https://www.linkedin.com/in/mohamedali72/',
    color: '#0ea5e9',
  },
  {
    icon:  <Phone size={20} />,
    label: 'Téléphone',
    value: '+216 94 395 323',
    href:  'tel:+21694395323',
    color: '#00ffd0',
  },
  {
    icon:  <MapPin size={20} />,
    label: 'Localisation',
    value: 'Tunis, Tunisie',
    href:  null,
    color: '#f472b6',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 3rem 5rem', position: 'relative', overflow: 'hidden' }}>
      <div className="divider" />

      {/* Glows */}
      <div style={{ position: 'absolute', bottom: '-10%', left: '15%', width: 650, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '5%', right: '-5%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,208,0.045) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <span className="watermark" style={{ right: '-2%', top: '5%' }}>06</span>

      <div style={{ maxWidth: 960, margin: '0 auto', paddingTop: '3.5rem', position: 'relative', zIndex: 1 }}>

        <motion.div className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Contact
        </motion.div>

        {/* ── Big CTA heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4.5rem' }}
        >
          <h2 className="syne" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.02, marginBottom: '1.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.82)' }}>Prêt à</span>{' '}
            <span className="text-grad">collaborer ?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 480 }}>
            Toujours ouvert aux nouvelles opportunités, défis techniques et projets ambitieux.
            N'hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* ── Contact cards grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '4rem' }}>
          {LINKS.map((link, i) => {
            const Wrap = link.href ? 'a' : 'div';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
              >
                <Wrap
                  href={link.href}
                  target={link.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  {/* Icon */}
                  <div style={{
                    width: 46, height: 46, borderRadius: '13px', flexShrink: 0,
                    background: `${link.color}12`, border: `1px solid ${link.color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: link.color,
                  }}>
                    {link.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="mono" style={{ fontSize: '0.66rem', color: 'rgba(255,255,255,0.28)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.22rem' }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.78)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {link.value}
                    </div>
                  </div>

                  {/* Arrow */}
                  {link.href && (
                    <ArrowRight size={15} style={{ color: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />
                  )}
                </Wrap>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA button ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '7rem' }}
        >
          <a
            href="mailto:dalimagri99@gmail.com"
            className="btn btn-violet"
            style={{ fontSize: '1.05rem', padding: '1.1rem 2.8rem', borderRadius: '14px' }}
          >
            <Mail size={18} />
            Envoyer un message
          </a>
        </motion.div>

        {/* ── Footer ── */}
        <div className="footer-bar">
          <span>© {new Date().getFullYear()} Mohamedali MAGRI</span>
          <span className="mono" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.12)' }}>
            React · Vite · Framer Motion
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
