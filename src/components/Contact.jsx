import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "dalimagri99@gmail.com",
    href: "mailto:dalimagri99@gmail.com",
    color: "from-brand-600/20 to-brand-500/5",
    border: "border-brand-500/30 hover:border-brand-400/60",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.063 2.063 0 01-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "/in/mohamedali72",
    href: "https://www.linkedin.com/in/mohamedali72/",
    color: "from-blue-600/20 to-blue-500/5",
    border: "border-blue-500/30 hover:border-blue-400/60",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Téléphone",
    value: "+216 94 395 323",
    href: "tel:+21694395323",
    color: "from-emerald-600/20 to-emerald-500/5",
    border: "border-emerald-500/30 hover:border-emerald-400/60",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Localisation",
    value: "Tunis, Tunisie",
    href: null,
    color: "from-rose-500/20 to-rose-400/5",
    border: "border-rose-400/30 hover:border-rose-400/50",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Ambient glows */}
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-brand-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-64 h-64 bg-brand-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2 text-sm">Contact</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
            Prêt à collaborer ?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Toujours ouvert aux nouvelles opportunités et défis techniques. N'hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((link, i) => {
            const Wrapper = link.href ? 'a' : 'div';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Wrapper
                  href={link.href}
                  target={link.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl border ${link.border} glass-panel transition-all duration-300 ${link.href ? 'hover:-translate-y-0.5 cursor-pointer group' : ''} bg-gradient-to-br ${link.color}`}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-800 text-brand-400 flex-shrink-0 group-hover:bg-zinc-700 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium mb-0.5">{link.label}</div>
                    <div className="text-zinc-100 font-medium text-sm">{link.value}</div>
                  </div>
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          {/* <a
            href="mailto:dalimagri99@gmail.com"
            className="btn-primary flex items-center gap-2 text-base"
          >
            <Send className="w-4 h-4" />
            Envoyer un message
          </a> */}
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 text-center border-t border-zinc-800/60">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Mohamedali MAGRI &mdash; Construit avec React & Vite
          </p>
        </div>
      </div>
    </section>
  );
}
