import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LayoutTemplate, ShieldCheck, Terminal, Server } from 'lucide-react';

const skillCategories = [
  {
    title: "Langages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Java", "JavaScript", "Python", "C", "C++"]
  },
  {
    title: "Frameworks & Biblio",
    icon: <LayoutTemplate className="w-6 h-6" />,
    skills: ["Spring Boot", "Django REST", "React.js", "Next.js", "React Query", "WordPress"]
  },
  {
    title: "Bases de données",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MySQL"]
  },
  {
    title: "DevOps & Outils",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Docker", "Git", "GitHub", "GitLab", "CI/CD Pipelines"]
  },
  {
    title: "Authentification",
    icon: <ShieldCheck className="w-6 h-6" />,
    skills: ["Keycloak", "SSO", "OAuth2", "RBAC"]
  },
  {
    title: "Concepts",
    icon: <Server className="w-6 h-6" />,
    skills: ["APIs RESTful", "Microservices", "Plateformes SaaS", "Agile/Scrum"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2">Expertise</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Compétences Techniques</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="glass-panel p-6 rounded-2xl h-full border border-zinc-800 hover:border-brand-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-500/10 text-brand-400 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-zinc-800/80 text-zinc-300 rounded-lg text-sm font-medium hover:text-white hover:bg-zinc-700 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
