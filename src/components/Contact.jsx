import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Prêt à collaborer ?</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            Toujours ouvert aux nouvelles opportunités, projets SaaS intéressants et défis techniques motivants. 
            N'hésitez pas à me contacter.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:dalimagri99@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)] w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              dalimagri99@gmail.com
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mohamedali72/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-semibold transition-all border border-zinc-700 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.063 2.063 0 01-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            
            <a 
              href="tel:+21694395323"
              className="flex items-center gap-3 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-semibold transition-all border border-zinc-700 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 text-zinc-400" />
              +216 94 395 323
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-24 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Mohamedali MAGRI. Déployé sur Vercel.</p>
      </div>
    </section>
  );
}
