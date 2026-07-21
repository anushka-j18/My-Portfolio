import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const FeaturePage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/projects" />;

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pb-32"
    >
      {/* Hero Banner */}
      <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-dark/30 mix-blend-multiply"></div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 -mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-off-white p-8 md:p-16 border-t-[12px] border-accent shadow-2xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <p className="text-xs font-semibold tracking-widest-lg uppercase text-accent">
              {project.eyebrow}
            </p>
            <p className="text-xs tracking-widest uppercase text-deep-dark/50">
              ISSUE NO. {project.issue}
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight mb-6">
            {project.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-deep-dark/70 mb-12 max-w-2xl">
            {project.subhead}
          </h2>
          
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-deep-dark mb-16 pb-8 border-b border-deep-dark/10">
            <span className="font-semibold">{project.byline.split('|')[0].trim()}</span>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span className="text-deep-dark/60">{project.byline.split('|')[1].trim()}</span>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span className="text-deep-dark/60">{project.techStack}</span>
          </div>

          <div className="prose prose-lg prose-neutral max-w-none space-y-12 columns-1 md:columns-2 gap-12">
            <div className="break-inside-avoid">
              <p className="text-sm tracking-widest uppercase text-accent font-semibold mb-4">The Problem</p>
              <p className="text-base leading-relaxed text-deep-dark/80">{project.problem}</p>
            </div>
            
            <div className="break-inside-avoid">
              <p className="text-sm tracking-widest uppercase text-accent font-semibold mb-4">The Approach</p>
              <p className="text-base leading-relaxed text-deep-dark/80">{project.approach}</p>
            </div>
          </div>
        </motion.div>
        
        {/* Pull Quote Section */}
        <div className="my-24 px-8 md:px-16 border-l-4 border-accent">
          <h3 className="text-4xl md:text-5xl font-serif leading-tight italic text-deep-dark">
            {project.pullQuote}
          </h3>
        </div>

        <div className="max-w-[800px] mx-auto prose prose-lg prose-neutral">
          <p className="text-sm tracking-widest uppercase text-accent font-semibold mb-4">The Outcome</p>
          <p className="text-xl font-light leading-relaxed mb-16">{project.outcome}</p>
        </div>
        
        <div className="mt-32 pt-16 border-t border-deep-dark/10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-4 text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors">
            ← Back to Contents
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturePage;
