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
          <div className="flex-1 flex flex-col gap-8 text-lg font-light text-off-white/80 leading-relaxed font-serif">
            
            <p className="text-2xl leading-normal text-off-white">
              <span className="text-6xl float-left mr-4 mt-2 font-bold text-accent leading-none">I</span>
              didn't start programming because I wanted to write code—I started because I wanted to build things that solve real problems.
            </p>

            <p>
              Today, that curiosity has evolved into building full-stack applications with the MERN stack and experimenting with AI to create smarter software. I enjoy working across the entire development process—from designing backend architectures and APIs to crafting responsive user experiences that make technology feel effortless.
            </p>

            <p>
              Every project is an opportunity to learn something new. Whether it's integrating AI models, optimizing application performance, or collaborating during hackathons, I'm driven by the challenge of turning complex ideas into practical solutions.
            </p>

            <p>
              When I'm away from my laptop, you'll usually find me leading NSS initiatives, participating in hackathons, debating, or immersed in a good mystery novel. I believe curiosity isn't just a personality trait—it's the foundation of great engineering.
            </p>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-off-white/10">
              <p className="font-serif text-2xl italic text-off-white">Anushka Joshi</p>
              <p className="text-xs tracking-widest uppercase text-off-white/40 mt-2">Editor-in-Chief / Engineer</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsNote;
