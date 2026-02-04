import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

import HeroScene from '../components/3d/HeroScene';

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            {/* 3D Scene Background */}
            <HeroScene />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 min-h-[90vh] flex flex-col justify-center relative z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl pointer-events-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Mohamedali MAGRI <br />
                        <span className="text-blue-600">Ingénieur logiciel</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                        Ingénieur Logiciel Full-Stack spécialisé en développement backend et frontend de plateformes SaaS, avec une expérience significative sur des projets nationaux de santé digitale.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/cv.pdf"
                            download
                            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download CV
                        </a>
                        <button className="flex items-center px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            View Projects
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>

                    <div className="mt-12 flex items-center space-x-6">
                        <a href="https://github.com/Mohamedali-MAGRI" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/mohamedali72/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:mohamedali.magri@enicarucar.tn" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
