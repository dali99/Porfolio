import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Ingénieur Logiciel",
    company: "Infinity Management Group",
    location: "Tunis, Tunisie",
    period: "Sep 2024 - Aujourd'hui",
    items: [
      "Back-office national de santé : Conception et développement d'un système centralisé (données de référence, RBAC).",
      "Application Cold Chain : Surveillance en temps réel des réfrigérateurs médicaux et notification automatique.",
      "Application EPharma : Gestion complète du circuit du médicament selon les exigences pharmaceutiques.",
      "Portail applicatif institutionnel : SSO & Keycloak, contrôle des permissions et traçabilité.",
      "EVax : Contribution à la plateforme nationale de vaccination."
    ]
  },
  {
    role: "Stagiaire Ingénieur Logiciel",
    company: "Infinity Management - Infinity Talents",
    location: "Tunis, Tunisie",
    period: "Fév 2024 - Sep 2024",
    items: [
      "Développement du back-office complet d'une plateforme e-learning : utilisateurs, formateurs, apprenants, notifications, etc."
    ]
  },
  {
    role: "Développeur Full-Stack (Temps partiel)",
    company: "Infinity Management Group",
    location: "Tunis, Tunisie",
    period: "Jun 2023 - Fév 2024",
    items: [
      "Site web corporate (infinitymgt.fr) sous WordPress : architecture du thème et optimisation.",
      "Application e-Hiring : gestion de recrutement, scoring automatisé et matching candidat-offres.",
      "Génération automatique de CV standardisés « Infinity » pour l'analyse comparative des profils."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2">Parcours</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Expérience Professionnelle</h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              <div className="absolute w-6 h-6 bg-zinc-950 border-2 border-brand-500 rounded-full -left-[13px] top-1 shadow-[0_0_10px_rgba(20,184,166,0.6)]" />
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-zinc-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-brand-400 text-lg">{exp.company} <span className="text-zinc-500 text-sm ml-2">{exp.location}</span></h4>
                  </div>
                  <span className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium w-max">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-zinc-400 flex items-start">
                      <span className="text-brand-500 mr-3 mt-1.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
