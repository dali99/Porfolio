import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Ingénieur Logiciel",
    company: "Infinity Management Group",
    location: "Tunis, Tunisie",
    period: "Sep 2024 – Aujourd'hui",
    current: true,
    items: [
      "Back-office national de santé : Conception et développement d'un système centralisé (données de référence, RBAC).",
      "Application Cold Chain : Surveillance en temps réel des réfrigérateurs médicaux et notification automatique.",
      "Application EPharma : Gestion complète du circuit du médicament selon les exigences pharmaceutiques.",
      "Portail applicatif institutionnel : SSO & Keycloak, contrôle des permissions et traçabilité.",
      "EVax : Contribution à la plateforme nationale de vaccination.",
    ]
  },
  {
    role: "Stagiaire Ingénieur Logiciel",
    company: "Infinity Management · Infinity Talents",
    location: "Tunis, Tunisie",
    period: "Fév – Sep 2024",
    current: false,
    items: [
      "Développement du back-office complet d'une plateforme e-learning : utilisateurs, formateurs, apprenants, notifications, etc.",
    ]
  },
  {
    role: "Développeur Full-Stack · Temps partiel",
    company: "Infinity Management Group",
    location: "Tunis, Tunisie",
    period: "Juin 2023 – Fév 2024",
    current: false,
    items: [
      "Site web corporate (infinitymgt.fr) sous WordPress : architecture du thème et optimisation.",
      "Application e-Hiring : gestion de recrutement, scoring automatisé et matching candidat-offres.",
      "Génération automatique de CV standardisés « Infinity » pour l'analyse comparative des profils.",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="section-divider mb-0" />

      <div className="max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2 text-sm">Parcours</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Expérience Professionnelle</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-brand-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-5 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  exp.current
                    ? 'border-brand-400 bg-brand-500/20 shadow-[0_0_15px_rgba(20,184,166,0.5)]'
                    : 'border-zinc-600 bg-zinc-900'
                  }`}>
                  {exp.current && <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />}
                </div>

                <div className="glass-panel rounded-2xl p-6 md:p-8 card-hover">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="badge text-[11px]">Actuel</span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        <span className="flex items-center gap-1 text-brand-400 font-medium">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-zinc-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/80 rounded-full text-zinc-400 text-xs font-medium w-max flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2.5">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
