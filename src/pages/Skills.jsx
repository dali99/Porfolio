import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages de Programmations",
            skills: [
                { name: "JavaScript", level: "Advanced" },
                { name: "Python", level: "Advanced" },
                { name: "Java", level: "Advanced" },
                { name: "C++", level: "Intermediate" },
                { name: "C", level: "Intermediate" }
            ]
        },
        {
            title: "Frameworks & Tools",
            skills: [
                { name: "ReactJS", level: "Advanced" },
                { name: "Spring boot", level: "Advanced" },
                { name: "Django REST framework", level: "Advanced" },
                { name: "WordPress", level: "Intermediate" }
            ]
        },
        {
            title: "Bases de données & DevOps",
            skills: [
                { name: "MySQL", level: "Advanced" },
                { name: "Postgresql", level: "Advanced" },
                { name: "DOCKER", level: "Intermediate" },
                { name: "Git / Github / Gitlab", level: "Advanced" },
                { name: "CI/CD", level: "Intermediate" }
            ]
        },
        {
            title: "Langues",
            skills: [
                { name: "Français", level: "Expert" },
                { name: "Anglais", level: "Advanced" }
            ]
        }
    ];

    return (
        <Section title="Technical Expertise" subtitle="A transparent overview of my technical capabilities.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <Card className="p-6 h-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center justify-between group">
                                        <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                                            {skill.name}
                                        </span>
                                        <Badge color={
                                            skill.level === "Expert" ? "purple" :
                                                skill.level === "Advanced" ? "blue" :
                                                    "green"
                                        }>
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
