import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, GitBranch } from 'lucide-react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const About = () => {
    const features = [
        {
            icon: <Code2 className="w-8 h-8 text-blue-600" />,
            title: "Clean Code",
            description: "I prioritize readability, maintainability, and scalability. Every line of code has a purpose."
        },
        {
            icon: <Rocket className="w-8 h-8 text-blue-600" />,
            title: "Performance First",
            description: "Optimizing for core web vitals and smooth 60fps animations is standard practice, not an afterthought."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Collaborative",
            description: "Experienced in code reviews, mentoring, and agile methodology. Communication is key."
        },
        {
            icon: <GitBranch className="w-8 h-8 text-blue-600" />,
            title: "Git Workflow",
            description: "Proficient in complex git flows, CI/CD pipelines, and maintaining a clean truck-based development."
        }
    ];

    return (
        <Section title="About Me" subtitle="More than just code — creating value through technology.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Profil Professionnel
                    </h3>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            Ingénieur Logiciel Full-Stack spécialisé en développement backend et frontend de plateformes SaaS, avec une expérience significative sur des projets nationaux de santé digitale.
                        </p>
                        <p>
                            Ayant évolué de stagiaire à ingénieur à temps plein chez Infinity Management, j'ai contribué à la conception, au développement et au support de solutions applicatives critiques à fort impact, en mettant l'accent sur la scalabilité, la sécurité et la performance.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 border border-blue-200 flex items-center justify-center overflow-hidden">
                        <img src="/photo.jpeg" alt="Mohamedali MAGRI" className="w-[150px] h-[150px] object-cover rounded-full border-4 border-white shadow-xl" />
                    </div>
                </motion.div>
            </div>

            <div className="mt-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Expérience Professionnelle</h3>
                <div className="space-y-12">
                    <div className="relative pl-8 border-l-2 border-blue-100">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                        <div className="flex flex-wrap justify-between items-baseline mb-2">
                            <h4 className="text-xl font-bold text-gray-900">Infinity Management Group — Ingénieur Logiciel</h4>
                            <span className="text-blue-600 font-semibold">09/2024 – Present</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li><strong>Back-office national de santé</strong>: Conception et développement d'un système centralisé de gestion des utilisateurs, structures de santé et référentiels métier.</li>
                            <li><strong>Application Cold Chain</strong>: Développement d'une application dédiée à la gestion des réfrigérateurs médicaux et suivi des pannes.</li>
                            <li><strong>Application EPharma</strong>: Implémentation de fonctionnalités de gestion complète du circuit du médicament.</li>
                            <li><strong>Portail applicatif institutionnel</strong>: Développement d'un portail centralisé avec gestion SSO et Keycloak.</li>
                            <li><strong>EVax - Plateforme nationale de vaccination</strong>: Contribution à l'évolution de la plateforme nationale.</li>
                        </ul>
                    </div>

                    <div className="relative pl-8 border-l-2 border-blue-100">
                        <div className="absolute w-4 h-4 bg-blue-200 rounded-full -left-[9px] top-1"></div>
                        <div className="flex flex-wrap justify-between items-baseline mb-2">
                            <h4 className="text-xl font-bold text-gray-900">Infinity Management — Stagiaire Ingénieur Logiciel</h4>
                            <span className="text-gray-500">02/2024 – 09/2024</span>
                        </div>
                        <p className="text-gray-600">Développement du back-office d'une plateforme e-learning : gestion des utilisateurs, rôles, formateurs et apprenants.</p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-blue-100">
                        <div className="absolute w-4 h-4 bg-blue-200 rounded-full -left-[9px] top-1"></div>
                        <div className="flex flex-wrap justify-between items-baseline mb-2">
                            <h4 className="text-xl font-bold text-gray-900">Infinity Management Group — Developpeur Fullstack (Part Time)</h4>
                            <span className="text-gray-500">06/2023 – 02/2024</span>
                        </div>
                        <p className="text-gray-600">Développement d'une application e-Hiring dédiée à la gestion du département RH, couvrant le processus de recrutement.</p>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Formation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6">
                        <h4 className="text-lg font-bold text-gray-900">Diplôme d'ingénieur en Genie informatique</h4>
                        <p className="text-blue-600 font-medium">École Nationale D'ingénieurs de Carthage</p>
                        <p className="text-gray-500 text-sm">09/2021 – 06/2024 | Tunis, Tunisie</p>
                    </Card>
                    <Card className="p-6">
                        <h4 className="text-lg font-bold text-gray-900">Cycle préparatoire (MP)</h4>
                        <p className="text-blue-600 font-medium">Faculté des Sciences de Monastir</p>
                        <p className="text-gray-500 text-sm">09/2019 – 06/2021 | Monastir, Tunisie</p>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default About;
