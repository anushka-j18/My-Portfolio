import React from 'react';
import { motion } from 'framer-motion';

const EditorsNote = () => {
  return (
    <section id="about" className="relative w-full bg-deep-dark text-off-white py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4">Section 02</span>
          <h2 className="text-5xl md:text-7xl font-serif">EDITOR'S NOTE</h2>
          <div className="w-12 h-[1px] bg-off-white/30 mt-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Portrait Image */}
          <div className="w-full lg:w-5/12 aspect-[4/5] relative group shrink-0 bg-off-white/5">
            <img 
              src="/portrait.png" 
              alt="Anushka Joshi" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-off-white/10 -z-10"></div>
          </div>

          {/* Article Text */}
          <div className="flex-1 flex flex-col gap-6 text-lg font-light text-off-white/80 leading-relaxed font-serif">
            
            <p className="text-2xl leading-normal text-off-white">
              <span className="text-6xl float-left mr-4 mt-2 font-bold text-accent leading-none">I</span>
              build production-grade software that bridges robust engineering with applied intelligence—transforming complex technical challenges into scalable, human-centered systems.
            </p>

            <p>
              My focus spans end-to-end full-stack architectures (React, Next.js, FastAPI, Node.js), scalable database design (MongoDB, PostgreSQL), and intelligent AI workflows. From independently building an AI-assisted evaluation platform as an intern at VolitionSphere to developing multi-agent fact verification systems and context compression engines, I take pride in taking projects from architecture to deployment.
            </p>

            <p>
              Beyond the terminal, I channel this drive into competitive hackathons (PromptX Winner, Linpack 2nd Runner-Up), technical club leadership at Linpack Club, and community initiatives as NSS Press Lead. I believe relentless curiosity and disciplined execution are the foundations of great engineering.
            </p>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-off-white/10">
              <p className="font-serif text-2xl italic text-off-white">Anushka Joshi</p>
              <p className="text-xs tracking-widest uppercase text-off-white/40 mt-1">Full-Stack Engineer & AI Builder</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsNote;
