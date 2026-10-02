// ScrollHelpers - smooth scroll behavior utility
import { useEffect } from 'react';

export default function ScrollHelpers() {
  useEffect(() => {
    // Intercept anchor clicks for smooth scroll
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
