import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsIndex = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-24"
    >
      <div className="mb-20">
        <h2 className="text-sm font-semibold tracking-widest-lg uppercase text-accent mb-4">TABLE OF CONTENTS</h2>
        <h1 className="text-6xl md:text-8xl font-serif leading-none">The Features.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`}
            className="group block"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={project.heroImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-off-white text-deep-dark px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                  No. {project.issue}
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">{project.eyebrow}</p>
                <h3 className="text-3xl font-serif leading-tight mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-deep-dark/70 line-clamp-2">{project.subhead}</p>
                <div className="mt-auto pt-6 flex items-center justify-between text-xs tracking-widest uppercase border-t border-deep-dark/10">
                  <span className="text-deep-dark/50">Read Story</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsIndex;
