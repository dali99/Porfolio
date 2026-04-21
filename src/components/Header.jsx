import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Profil', href: '#about' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Formation', href: '#education' },
  // { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 shadow-xl shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
      style={scrolled ? {
        background: 'rgba(9,9,11,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(63,63,70,0.4)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative group"
        >
          <span className="text-xl font-extrabold tracking-tight text-white">
            M<span className="text-brand-400">.</span>Magri
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-400 group-hover:w-full transition-all duration-300 rounded" />
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg group"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-all duration-200" />
            </a>
          ))}
          {/* <a
            href="#contact"
            className="ml-3 btn-primary text-sm py-2 px-5"
          >
            Embauchez-moi
          </a> */}
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(9,9,11,0.95)', borderBottom: '1px solid rgba(63,63,70,0.4)' }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white py-3 border-b border-zinc-800/50 last:border-0 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              {/* <a href="#contact" className="mt-4 btn-primary text-center">
                Embauchez-moi
              </a> */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
