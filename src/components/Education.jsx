import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Diplôme d'Ingénieur — Génie Informatique",
    school: "École Nationale d'Ingénieurs de Carthage",
    shortSchool: "ENICarthage",
    location: "Tunis, Tunisie",
    period: "Sep 2021 – Jun 2024",
    icon: <GraduationCap className="w-7 h-7" />,
    color: "from-brand-500/15 to-teal-500/5",
    accent: "border-brand-500/40",
    highlight: "Ingénierie logicielle, systèmes distribués, bases de données.",
  },
  {
    degree: "Cycle Préparatoire — Mathématiques et Physique (MP)",
    school: "Faculté des Sciences de Monastir",
    shortSchool: "FSM",
    location: "Monastir, Tunisie",
    period: "Sep 2019 – Jun 2021",
    icon: <BookOpen className="w-7 h-7" />,
    color: "from-violet-500/15 to-purple-500/5",
    accent: "border-violet-500/40",
    highlight: "Mathématiques avancées, algorithmique, physique.",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="section-divider mb-0" />

      <div className="max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2 text-sm">Académique</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Formation</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={`glass-panel p-7 rounded-2xl h-full border ${item.accent} bg-gradient-to-br ${item.color} card-hover group`}>
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-zinc-800 group-hover:scale-105 transition-transform flex-shrink-0 text-brand-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">{item.degree}</h3>
                    <p className="text-brand-400 font-semibold text-sm mt-1">{item.shortSchool}</p>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{item.highlight}</p>

                {/* Footer */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/60">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Award className="w-3.5 h-3.5 text-brand-400" />
                    {item.school}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500 ml-auto">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
