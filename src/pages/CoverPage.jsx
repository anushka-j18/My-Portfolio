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
      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-16 pb-12">
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
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
            className="text-7xl md:text-display lg:text-display-lg leading-[0.9] tracking-tight mb-8"
          >
            THE <br />
            <span className="italic">DIGITAL</span><br />
            CANVAS.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl font-light text-deep-dark/70 max-w-md leading-relaxed"
          >
            Engineering elegant solutions at the intersection of aesthetic design and raw performance.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] relative overflow-hidden"
        >
          <img 
            src="/cover.png" 
            alt="Abstract Cover" 
            className="w-full h-full object-cover grayscale-[30%] contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 border border-deep-dark/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoverPage;
