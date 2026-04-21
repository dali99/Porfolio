import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2">Profil</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">À propos de moi</h2>
          
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <p className="text-zinc-300 text-lg leading-relaxed relative z-10">
              <strong className="text-white">Ingénieur Logiciel Full-Stack</strong> avec plus de 2 ans d'expérience dans le développement de plateformes SaaS à grande échelle, 
              principalement dans le domaine de la santé digitale. Je possède une solide maîtrise du développement backend 
              (APIs REST, Spring Boot, Django) et frontend (React, Next.js).
            </p>
            
            <p className="text-zinc-300 text-lg leading-relaxed mt-6 relative z-10">
              J'ai acquis une expérience confirmée en intégration de solutions complexes comme <span className="text-brand-300">SSO/Keycloak</span>, 
              le déploiement via des <span className="text-brand-300">pipelines CI/CD</span> et l'utilisation de <span className="text-brand-300">Docker</span> 
              dans des environnements institutionnels nécessitant de fortes exigences de sécurité et de performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
