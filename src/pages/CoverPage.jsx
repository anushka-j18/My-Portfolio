import React from 'react';
import { motion } from 'framer-motion';

const CoverPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[calc(100vh-80px)] w-full px-6 md:px-12 flex flex-col justify-center"
    >
      <div className="max-w-[1500px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pb-12 relative">
        
        {/* Sidebar (Left on XL screens) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden xl:flex flex-col gap-6 w-48 text-sm font-medium tracking-wide text-deep-dark/60 border-l border-deep-dark/20 pl-6 shrink-0"
        >
          <p>Computer Science student.</p>
          <p>Professional bug fixer.</p>
          <p>Reads murder mysteries.</p>
          <p>Believes curiosity is a superpower.</p>
        </motion.div>

        {/* Main Text Content */}
        <div className="w-full lg:w-5/12 xl:w-1/3 flex flex-col items-start z-10 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs font-semibold tracking-widest-lg uppercase text-accent mb-6"
          >
            Issue 01 — 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-display lg:text-display-lg leading-[0.9] tracking-tight mb-8"
          >
            CODE. <br />
            <span className="italic">CURIOUS.</span><br />
            FEARLESS.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl font-light text-deep-dark/70 max-w-md leading-relaxed"
          >
            Engineering elegant solutions at the intersection of aesthetic design and raw performance.
          </motion.p>

          {/* Mobile/Tablet Sidebar (shows when xl sidebar is hidden) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="xl:hidden flex flex-col gap-3 mt-12 text-sm font-medium text-deep-dark/60 border-l border-deep-dark/20 pl-4"
          >
            <p>Computer Science student.</p>
            <p>Professional bug fixer.</p>
            <p>Reads murder mysteries.</p>
            <p>Believes curiosity is a superpower.</p>
          </motion.div>
        </div>
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] relative overflow-hidden"
        >
          <img 
            src="/vogue_initials.png" 
            alt="AJ Vogue Initials" 
            className="w-full h-full object-cover hover:scale-105 transition-all duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 border border-deep-dark/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoverPage;
