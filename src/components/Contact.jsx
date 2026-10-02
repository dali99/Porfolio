import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "dalimagri99@gmail.com",
    href: "mailto:dalimagri99@gmail.com",
    color: '#6c5fff',
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.063 2.063 0 01-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "/in/mohamedali72",
    href: "https://www.linkedin.com/in/mohamedali72/",
    color: '#0ea5e9',
  },
  {
    icon: <Phone size={20} />,
    label: "Téléphone",
    value: "+216 94 395 323",
    href: "tel:+21694395323",
    color: '#34d399',
  },
  {
    icon: <MapPin size={20} />,
    label: "Localisation",
    value: "Tunis, Tunisie",
    href: null,
    color: '#f472b6',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 3rem 5rem', position: 'relative', overflow: 'hidden' }}>
      <div className="section-divider" />

      {/* Ambient glows */}
      <div style={{
        position: 'absolute', bottom: '-5%', left: '20%',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,95,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: 350, height: 350, borderRadius: '50%',
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
          <span>05</span>
          <span>Contact</span>
        </motion.div>

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900, letterSpacing: '-0.04em',
            lineHeight: 1.05, marginBottom: '1.5rem',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>Prêt à</span>{' '}
            <span className="text-gradient">collaborer ?</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem',
            lineHeight: 1.7, maxWidth: 520,
          }}>
            Toujours ouvert aux nouvelles opportunités, défis techniques et
            projets ambitieux. N'hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '4rem' }}>
          {contactLinks.map((link, i) => {
            const Wrapper = link.href ? 'a' : 'div';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Wrapper
                  href={link.href}
                  target={link.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-card"
                  style={{ display: 'flex' }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                    background: `${link.color}15`,
                    border: `1px solid ${link.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: link.color,
                  }}>
                    {link.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                      {link.value}
                    </div>
                  </div>
                  {link.href && (
                    <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0, alignSelf: 'center' }} />
                  )}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '6rem' }}
        >
          <a href="mailto:dalimagri99@gmail.com" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
            <Mail size={18} />
            Envoyer un message
          </a>
        </motion.div>

        {/* Footer */}
        <div className="footer-line" />
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Mohamedali MAGRI
          </span>
          <span style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.72rem', color: 'rgba(255,255,255,0.15)',
          }}>
            React · Vite · Framer Motion
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
