import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Cover', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Toolkit', id: 'toolkit' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Education', id: 'education' },
  { label: 'Beyond Code', id: 'beyond' },
  { label: 'Contact', id: 'contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section Spy
      let current = '';
      for (let item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = item.id;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-off-white/90 backdrop-blur-md border-b border-deep-dark/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#hero" className="text-xl font-serif font-semibold tracking-wide hover:text-accent transition-colors z-50">
            ANUSHKA<span className="text-accent">.</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 xl:gap-8 text-xs font-semibold tracking-widest uppercase">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`relative py-2 transition-colors duration-300 hover:text-accent ${
                  activeSection === item.id ? 'text-accent' : 'text-deep-dark'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-sm font-semibold tracking-widest uppercase z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-deep-dark text-off-white flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-6 text-2xl font-serif">
              {navItems.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`hover:text-accent transition-colors ${activeSection === item.id ? 'text-accent' : 'text-off-white/70'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
