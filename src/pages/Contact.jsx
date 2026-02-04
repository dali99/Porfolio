import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for reaching out! (Demo Only)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Section title="Get In Touch" subtitle="Open for opportunities, collaborations, and technical discussions." centered>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="prose prose-lg text-gray-600">
                        <p>
                            I&apos;m currently available for freelance projects or full-time roles.
                            If you&apos;re looking for a developer who cares about architecture, performance, and user experience, let&apos;s talk.
                        </p>
                    </div>

                    <Card className="p-6 space-y-4">
                        <a href="mailto:mohamedali.magri@enicarucar.tn" className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                            <Mail className="w-6 h-6" />
                            <span className="font-medium">mohamedali.magri@enicarucar.tn</span>
                        </a>
                        <a href="https://www.linkedin.com/in/mohamedali-magri/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                            <Linkedin className="w-6 h-6" />
                            <span className="font-medium">Mohamedali MAGRI</span>
                        </a>
                        <a href="https://github.com/Mohamedali-MAGRI" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                            <Github className="w-6 h-6" />
                            <span className="font-medium">Mohamedali MAGRI</span>
                        </a>
                    </Card>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                    placeholder="Hi, I'd like to discuss a potential project..."
                                />
                            </div>
                            <Button type="submit" variant="primary" className="w-full">
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
