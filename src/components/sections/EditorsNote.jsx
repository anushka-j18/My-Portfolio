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
          
          {/* Portrait Placeholder */}
          <div className="w-full lg:w-5/12 aspect-[4/5] relative group shrink-0">
            <div className="absolute inset-0 bg-off-white/5 flex items-center justify-center">
              <span className="text-xl font-serif text-off-white/30">[ Editorial Portrait ]</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-off-white/10 -z-10"></div>
          </div>

          {/* Article Text */}
          <div className="flex-1 flex flex-col gap-8 text-lg font-light text-off-white/80 leading-relaxed font-serif">
            
            <p className="text-2xl leading-normal text-off-white">
              <span className="text-6xl float-left mr-4 mt-2 font-bold text-accent leading-none">E</span>
              ngineering was never just about code for me—it was about constructing logic that breathes. From the moment I wrote my first script, I was captivated by the sheer power of turning abstract ideas into tangible reality.
            </p>

            <p>
              As a Computer Science student at VIT Bhopal University, my journey hasn't been a linear path of standard curriculum. It's been a chaotic, thrilling dive into the unknown, fueled by hackathons, late-night debugging sessions, and an insatiable curiosity about how things work.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-8 border-l-2 border-accent pl-8 py-2">
              <p className="text-3xl font-serif italic text-off-white leading-snug">
                "I believe the best software doesn't just function—it feels inevitable. It lives at the precise intersection of mathematical logic and human intuition."
              </p>
            </blockquote>

            <p>
              My fascination with Artificial Intelligence grew out of a desire to build systems that don't just compute, but comprehend. Whether I'm designing AI agents that automate complex workflows or architecting robust backend infrastructures, my goal is always to create intelligent software that feels seamless.
            </p>

            <p>
              But a great product is more than its backend. I have a deep appreciation for beautiful, thoughtful software. I approach frontend engineering with a designer's eye, believing that aesthetic elegance and technical performance are not mutually exclusive—they are deeply intertwined.
            </p>

            <p>
              Beyond the IDE, you'll find me leading teams, debating passionately, volunteering with NSS, or unraveling a good mystery novel. Curiosity is my superpower, and it drives everything I build.
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
