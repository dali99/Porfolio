import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "Diplôme d'Ingénieur -- Génie Informatique",
    school: "École Nationale d'Ingénieurs de Carthage",
    location: "Tunis, Tunisie",
    period: "Sep 2021 - Jun 2024",
    icon: <GraduationCap className="w-8 h-8 text-brand-400" />
  },
  {
    degree: "Cycle Préparatoire -- Mathématiques et Physique (MP)",
    school: "Faculté des Sciences de Monastir",
    location: "Monastir, Tunisie",
    period: "Sep 2019 - Jun 2021",
    icon: <BookOpen className="w-8 h-8 text-brand-400" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2">Académique</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Formation</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="glass-panel p-8 rounded-2xl h-full border-t border-t-zinc-700/50 hover:bg-zinc-800/50 transition-colors group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/10 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{item.degree}</h3>
                <h4 className="text-brand-300 text-lg mb-4">{item.school}</h4>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-zinc-400 flex items-center bg-zinc-900 px-3 py-1 rounded-md">{item.location}</span>
                  <span className="text-brand-500">{item.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
