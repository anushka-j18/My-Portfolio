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
              'm a Computer Science undergraduate at VIT Bhopal with a passion for building software that solves real-world problems. I enjoy working across the full stack, developing backend systems, and exploring how AI can make applications smarter and more useful.
            </p>

            <p>
              I've independently built a full-stack AI-assisted answer-sheet evaluation platform during my internship at VolitionSphere, and explored ideas ranging from multi-agent fact verification to GenAI context compression. I enjoy taking ownership of projects, from designing databases and building APIs to implementing features and testing complete workflows.
            </p>

            <p>
              Beyond development, I've participated in competitive hackathons, earned recognition at PromptX and Linpack, and taken up leadership responsibilities through technical clubs and community initiatives. I'm always curious to learn, experiment with new technologies, and turn ideas into working solutions.
            </p>

            <p className="text-xl italic text-off-white/90">
              I believe good engineering comes from curiosity, consistency, and the willingness to build.
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
