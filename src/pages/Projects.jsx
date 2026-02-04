import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

const projects = [
    {
        id: 1,
        title: "Back-office national de santé",
        subtitle: "Système centralisé de gestion de la santé",
        stack: ["ReactJS", "Spring boot", "Postgresql", "DOCKER"],
        context: "Conception et développement d'un système centralisé de gestion des utilisateurs, des structures de santé et des référentiels métier.",
        problem: "Besoin d'une plateforme unifiée pour la gestion des médicaments, dépôts, fournisseurs et données critiques.",
        solution: "Mise en place d'une architecture robuste assurant la traçabilité et la conformité des données de santé.",
        challenges: "Gestion de gros volumes de données et interopérabilité entre différentes structures.",
        githubUrl: "#",
        demoUrl: "#",
        image: "/api/placeholder/600/400"
    },
    {
        id: 2,
        title: "Application Cold Chain",
        subtitle: "Gestion de la chaîne du froid médicale",
        stack: ["ReactJS", "Spring boot", "MySQL", "IoT Integration"],
        context: "Développement d'une application dédiée à la gestion des réfrigérateurs médicaux et au suivi des pannes.",
        problem: "Surveillance manuelle inefficace des équipements thermosensibles.",
        solution: "Surveillance automatique des équipements et notification en temps réel des incidents.",
        challenges: "Garantir la sécurité des produits thermosensibles par une surveillance sans faille.",
        githubUrl: "#",
        demoUrl: "#",
        image: "/api/placeholder/600/400"
    },
    {
        id: 3,
        title: "Application EPharma",
        subtitle: "Gestion du circuit du médicament",
        stack: ["ReactJS", "Django REST framework", "Postgresql"],
        context: "Implémentation de fonctionnalités de gestion complète du circuit du médicament.",
        problem: "Logique métier complexe liée aux exigences du domaine pharmaceutique.",
        solution: "Système de validation des demandes, entrées/sorties de stocks et dispensation.",
        challenges: "Adaptation du système aux normes strictes de la santé publique.",
        githubUrl: "#",
        demoUrl: "#",
        image: "/api/placeholder/600/400"
    },
    {
        id: 4,
        title: "Portail applicatif institutionnel",
        subtitle: "Accès centralisé et SSO",
        stack: ["ReactJS", "Keycloak", "SSO", "Gateway"],
        context: "Développement d'un portail centralisé permettant aux utilisateurs d'accéder aux applications autorisées.",
        problem: "Multiplicité des identifiants et manque de contrôle d'accès unifié.",
        solution: "Intégration de Keycloak pour le SSO, assurant sécurité et traçabilité.",
        challenges: "Gestion granulaire des permissions et rôles utilisateurs.",
        githubUrl: "#",
        demoUrl: "#",
        image: "/api/placeholder/600/400"
    },
    {
        id: 5,
        title: "EVax - Plateforme de vaccination",
        subtitle: "Digitalisation des processus de vaccination",
        stack: ["JavaScript", "Python", "Postgresql", "Web Services"],
        context: "Contribution à l'évolution de la plateforme nationale de vaccination.",
        problem: "Nécessité de gérer une vaccination à l'échelle nationale avec fiabilité.",
        solution: "Digitalisation et fiabilisation des processus liés à la vaccination.",
        challenges: "Haute disponibilité et scalabilité pour supporter des pics de charge.",
        githubUrl: "#",
        demoUrl: "#",
        image: "/api/placeholder/600/400"
    }
];

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="flex flex-col h-full">
            <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-md">{project.title}</h3>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-4 font-medium">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(tech => (
                        <Badge key={tech} color="blue">{tech}</Badge>
                    ))}
                </div>

                <div className="flex-grow space-y-4">
                    <div>
                        <span className="font-semibold text-gray-900 block text-sm uppercase tracking-wide">Context</span>
                        <p className="text-gray-600 text-sm mt-1">{project.context}</p>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 space-y-4 border-t border-gray-100 mt-4">
                                <div>
                                    <span className="font-semibold text-gray-900 block text-sm uppercase tracking-wide text-red-600">Problem & Challenges</span>
                                    <p className="text-gray-600 text-sm mt-1">{project.problem}</p>
                                    <p className="text-gray-500 text-sm mt-1 italic">&quot;{project.challenges}&quot;</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900 block text-sm uppercase tracking-wide text-green-600">Solution</span>
                                    <p className="text-gray-600 text-sm mt-1">{project.solution}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex space-x-3">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center transition-colors focus:outline-none"
                    >
                        {isOpen ? 'Show Less' : 'View Case Study'}
                        {isOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                    </button>
                </div>
            </div>
        </Card>
    );
};

const Projects = () => {
    return (
        <Section title="Featured Projects" subtitle="Real-world problems resolved with robust implementation.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
