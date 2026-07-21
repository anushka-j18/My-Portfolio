import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-off-white/90 backdrop-blur-md border-b border-deep-dark/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-semibold tracking-wide">
          ANUSHKA<span className="text-accent">.</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium tracking-widest uppercase">
          <Link to="/about" className={`hover:text-accent transition-colors ${location.pathname === '/about' ? 'text-accent' : 'text-deep-dark'}`}>About</Link>
          <Link to="/projects" className={`hover:text-accent transition-colors ${location.pathname.includes('/projects') ? 'text-accent' : 'text-deep-dark'}`}>Projects</Link>
          <Link to="/toolkit" className={`hover:text-accent transition-colors ${location.pathname === '/toolkit' ? 'text-accent' : 'text-deep-dark'}`}>Toolkit</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
