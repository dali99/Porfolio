import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Plateforme de Santé Digitale",
    subtitle: "SaaS B2B — Ministère de la Santé",
    description: "Plateforme complète de gestion des structures et personnels de santé avec tableaux de bord analytiques en temps réel.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    tech: ["Spring Boot", "React.js", "PostgreSQL", "Keycloak", "Docker"],
    color: "from-teal-600 to-cyan-700",
    tasks: [
      "Conception et implémentation d'une API RESTful scalable avec Spring Boot",
      "Développement du module de gestion des structures de santé (CRUD, hiérarchie organisationnelle)",
      "Intégration de Keycloak pour l'authentification SSO et la gestion RBAC des rôles",
      "Création de tableaux de bord analytiques avec filtres dynamiques par région/gouvernorat",
      "Mise en place d'un pipeline CI/CD avec GitHub Actions et Docker",
      "Optimisation des requêtes PostgreSQL pour gérer +50 000 enregistrements",
      "Développement du formulaire multi-étapes pour la création des utilisateurs privés",
    ]
  },
  {
    id: 2,
    title: "Application de Gestion RH",
    subtitle: "Système Interne d'Entreprise",
    description: "Système de gestion des ressources humaines avec suivi des présences, congés et évaluations des performances.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    tech: ["Django REST", "React.js", "MySQL", "React Query", "RBAC"],
    color: "from-violet-600 to-purple-700",
    tasks: [
      "Architecture complète du backend Django REST avec modèles de données normalisés",
      "Implémentation du système de gestion des congés avec workflow d'approbation multi-niveaux",
      "Développement du module de suivi des présences avec intégration pointeuse RFID",
      "Création d'un système de notifications email automatiques avec Celery & Redis",
      "Interface React.js responsive avec gestion d'état via React Query",
      "Génération de rapports PDF mensuels avec WeasyPrint",
      "Tests unitaires et d'intégration avec couverture > 85%",
    ]
  },
  {
    id: 3,
    title: "Portail E-Commerce B2B",
    subtitle: "Marketplace Multi-Vendeurs",
    description: "Plateforme de commerce en ligne B2B avec catalogue produits, gestion des commandes et paiements sécurisés.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "Stripe", "Docker"],
    color: "from-orange-600 to-rose-600",
    tasks: [
      "Architecture microservices avec Spring Boot pour les services de catalogue, commande et paiement",
      "Développement du frontend Next.js avec SSR pour l'optimisation SEO",
      "Intégration de Stripe pour les paiements en ligne avec webhooks",
      "Système de recherche avancée avec filtres produits (prix, catégorie, fournisseur)",
      "Gestion multi-vendeurs avec tableau de bord vendeur personnalisé",
      "Système de reviews et notations avec modération automatique",
      "Optimisation du chargement des images avec Cloudinary et lazy loading",
    ]
  },
  {
    id: 4,
    title: "Application de Surveillance Réseau",
    subtitle: "Outil DevOps & Monitoring",
    description: "Dashboard de surveillance réseau en temps réel avec alertes automatiques et historique des métriques.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tech: ["Python", "React.js", "WebSocket", "Grafana", "Docker"],
    color: "from-slate-600 to-zinc-700",
    tasks: [
      "Développement d'agents Python pour la collecte des métriques réseau en temps réel",
      "Mise en place d'une architecture WebSocket pour les mises à jour temps réel côté client",
      "Intégration de Grafana pour les tableaux de bord de visualisation",
      "Système d'alertes configurable par e-mail et Slack",
      "Stockage des métriques historiques dans InfluxDB avec rétention configurable",
      "Dashboard React.js responsive avec graphiques interactifs Chart.js",
      "Déploiement conteneurisé avec Docker Compose, monitoring inclus",
    ]
  }
];

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Image */}
          <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden rounded-t-2xl`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-sm font-medium text-white/70 mb-1">{project.subtitle}</span>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content */}
          <div className="p-6">
            <p className="text-zinc-400 mb-6">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-800 text-brand-400 rounded-full text-xs font-semibold border border-brand-500/30">
                  {t}
                </span>
              ))}
            </div>

            {/* Tasks */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-400 inline-block"></span>
                Tâches réalisées
              </h4>
              <ul className="space-y-3">
                {project.tasks.map((task, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 text-zinc-300 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    {task}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-brand-400 font-semibold tracking-widest uppercase mb-2">Portfolio</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Projets Réalisés</h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Cliquez sur un projet pour découvrir les tâches réalisées en détail.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10"
            >
              {/* Project Image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white/90 rounded text-xs font-medium">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white/60 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-brand-400 font-semibold tracking-wide uppercase mb-1">{project.subtitle}</p>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mt-1 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-brand-400 transition-colors" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                  {project.tasks.length} tâches réalisées
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
