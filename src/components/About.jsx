import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Shield, Coffee } from 'lucide-react';

const stats = [
  { icon: <Briefcase className="w-5 h-5" />, value: "2+", label: "Années d'expérience" },
  { icon: <Rocket className="w-5 h-5" />, value: "10+", label: "Projets livrés" },
  { icon: <Shield className="w-5 h-5" />, value: "5+", label: "Solutions SaaS" },
  { icon: <Coffee className="w-5 h-5" />, value: "∞", label: "Cafés consommés" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Section top divider */}
      <div className="section-divider mb-0" />
      
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2 text-sm">Profil</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">À propos de moi</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Main bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden h-full card-hover">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-600/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative z-10 space-y-5">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  <strong className="text-white font-semibold">Ingénieur Logiciel Full-Stack</strong> avec plus de{' '}
                  <span className="text-brand-300 font-medium">2 ans d'expérience</span> dans le développement de plateformes SaaS à grande échelle,
                  principalement dans le domaine de la santé digitale.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Je maîtrise le développement backend (Spring Boot, Django REST) et frontend (React.js, Next.js),
                  avec une expertise confirmée en intégration SSO/
                  <span className="text-brand-300 font-medium">Keycloak</span>, pipelines{' '}
                  <span className="text-brand-300 font-medium">CI/CD</span> et conteneurisation{' '}
                  <span className="text-brand-300 font-medium">Docker</span>.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Passionné par les architectures propres, les défis techniques complexes et les produits qui ont un impact réel sur les utilisateurs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="glass-panel rounded-2xl p-5 text-center card-hover group"
              >
                <div className="flex justify-center mb-3 text-brand-400 group-hover:text-brand-300 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-400 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
