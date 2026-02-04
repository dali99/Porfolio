import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            DevPortfolio
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.name}
                                    {location.pathname === item.path && (
                                        <motion.div
                                            layoutId="navbar-underline"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
