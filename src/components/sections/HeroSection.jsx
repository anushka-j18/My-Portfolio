import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-off-white px-6 md:px-12 py-20">
      
      {/* Background large text / grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <h1 className="text-[30vw] font-serif font-bold text-deep-dark tracking-tighter whitespace-nowrap">01</h1>
      </div>
      
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-10 mix-blend-overlay"></div>

      <div className="max-w-[1500px] w-full mx-auto relative z-10 flex flex-col xl:flex-row items-stretch justify-between gap-12 lg:gap-20">
        
        {/* Editorial Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden xl:flex flex-col justify-between w-48 shrink-0 border-r border-deep-dark/10 pr-6 py-8"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest-lg uppercase text-accent mb-8">Editor's Note</p>
            <ul className="space-y-4 text-sm font-medium text-deep-dark/70">
              <li>Final Year CSE Student</li>
              <li>Full-Stack MERN Developer</li>
              <li>AI Builder</li>
              <li>Hackathon</li>
              <li>NSS Press Lead</li>
              <li>Mystery Novel Reader</li>
              <li>Always Learning</li>
            </ul>
          </div>
          <div className="text-xs tracking-widest uppercase text-deep-dark/40 font-semibold">
            Vol. I — 2026
          </div>
        </motion.div>

        {/* Main Content & Cover Artwork */}
        <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Main Typography */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xs font-semibold tracking-widest-lg uppercase text-deep-dark/60 mb-6"
            >
              Issue 01 — 2026
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl font-serif mb-8 text-deep-dark"
            >
              ANUSHKA JOSHI
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-6xl md:text-8xl lg:text-display leading-[0.85] tracking-tight mb-10 font-serif"
            >
              CODE.<br/>
              <span className="italic text-accent">CURIOUS.</span><br/>
              FEARLESS.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-2 text-deep-dark/80 text-lg mb-8 font-medium"
            >
              <p>Computer Science Engineering Undergraduate</p>
              <p>Software Engineer</p>
              <p>AI Enthusiast</p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg text-deep-dark/60 max-w-md leading-relaxed mb-12"
            >
              Designing seamless experiences. Engineering scalable MERN systems. Building intelligent AI solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-6 text-sm font-semibold tracking-widest uppercase"
            >
              <a href="#projects" className="border-b border-deep-dark pb-1 hover:text-accent hover:border-accent transition-colors">
                [ View Projects ]
              </a>
              <a href="/resume.pdf" target="_blank" className="border-b border-deep-dark pb-1 hover:text-accent hover:border-accent transition-colors">
                [ Download Resume ]
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="mt-16 pt-8 border-t border-deep-dark/10 grid grid-cols-2 gap-y-8 gap-x-4 max-w-lg"
            >
              <div>
                <div className="text-3xl font-serif text-deep-dark mb-1">15+</div>
                <div className="text-[10px] tracking-widest uppercase font-semibold text-deep-dark/50">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-deep-dark mb-1">2x</div>
                <div className="text-[10px] tracking-widest uppercase font-semibold text-deep-dark/50">Hackathons</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-deep-dark mb-1">300+</div>
                <div className="text-[10px] tracking-widest uppercase font-semibold text-deep-dark/50">DSA Problems</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-deep-dark mb-1">2+</div>
                <div className="text-[10px] tracking-widest uppercase font-semibold text-deep-dark/50">Years of Coding</div>
              </div>
            </motion.div>
          </div>

          {/* Cover Artwork (Vogue style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="w-full lg:w-1/2 aspect-[3/4] relative overflow-hidden group bg-deep-dark/5"
          >
            {/* Portrait Image */}
            <img 
              src="/portrait.png" 
              alt="Anushka Joshi Portrait" 
              className="w-full h-full object-cover grayscale-[20%] contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-[1.5s] ease-out"
            />
            
            {/* Outline border to mimic magazine edge */}
            <div className="absolute inset-4 border border-deep-dark/10 pointer-events-none z-10"></div>
            
            {/* Magazine Barcode / Details placeholder */}
            <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1 opacity-50 z-20">
              <div className="w-16 h-8 bg-off-white/80 flex gap-0.5 p-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-full bg-deep-dark" style={{width: `${Math.random() * 4 + 1}px`, marginLeft: `${Math.random() * 2}px`}}></div>
                ))}
              </div>
              <span className="text-[8px] font-sans text-deep-dark bg-off-white/80 px-1">9 780201 379624</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
