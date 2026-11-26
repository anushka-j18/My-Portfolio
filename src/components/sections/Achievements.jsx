import React, { useState } from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { 
    id: 1,
    title: 'PromptX Winner', 
    category: 'Competition', 
    year: '2025',
    detail: '1st Place Winner at PromptX Hackathon (CSI chapter). Designed, built, and deployed the Smart Study Planner MVP in 75 minutes.',
    date: 'March 2025',
    link: '#'
  },
  { 
    id: 2,
    title: 'InnovaHack Finalist', 
    category: 'Development', 
    year: '2024',
    detail: 'Selected as Finalist at InnovaHack. Engineered Nucleus, a high-throughput GenAI context compression engine scaling to 200k characters.',
    date: '2024',
    link: '#'
  },
  { 
    id: 3,
    title: '2nd Runner-Up', 
    category: 'Hackathon', 
    year: '2026',
    detail: '2nd Runner-Up at Linpack Intra-Club Hackathon. Architected XURVA, a high-performance full-stack MERN e-commerce platform with Stripe.',
    date: 'Jan 2026',
    link: '#'
  },
  { 
    id: 4,
    title: 'Flipkart GRId 6.0', 
    category: 'Engineering', 
    year: '2024',
    detail: 'Participated in Flipkart GRId 6.0 software development track, tackling large-scale system engineering problem statements.',
    date: '2024',
    link: '#'
  },
  { 
    id: 5,
    title: 'Solo Internship Platform', 
    category: 'Industry', 
    year: '2026',
    detail: 'Solely built and deployed an AI-assisted handwritten evaluation platform for VolitionSphere IT Services LLP across 100 test papers.',
    date: 'May – Jun 2026',
    link: '#experience'
  },
  { 
    id: 6,
    title: 'Linpack Leadership', 
    category: 'Club Leadership', 
    year: '2024 – 2025',
    detail: 'Core Member of Event Management Team. Anchored 2-day flagship club event and managed on-ground event planning and execution.',
    date: '2024 – 2025',
    link: '#experience'
  },
  { 
    id: 7,
    title: 'NSS Press Lead', 
    category: 'Community', 
    year: '2024 – 2025',
    detail: 'Published 5+ media reports for university and community service, organizing state-level environmental and tree plantation drives.',
    date: '2024 – 2025',
    link: '#experience'
  },
  { 
    id: 8,
    title: 'Academic Milestone', 
    category: 'Academics', 
    year: '2023 – 2027',
    detail: 'Maintaining strong academic standing in B.Tech Computer Science & Engineering at VIT Bhopal while actively building and leading.',
    date: 'VIT Bhopal',
    link: '#education'
  }
];

const AchievementCard = ({ item, isFlipped, onClick }) => {
  return (
    <div 
      className="relative w-full aspect-square cursor-pointer group"
      style={{ perspective: '1000px' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ scale: isFlipped ? 1 : 1.02, y: isFlipped ? 0 : -4 }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 border border-off-white/20 p-8 flex flex-col justify-between bg-deep-dark group-hover:border-off-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-500"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-opacity duration-300">
              {item.category}
            </div>
            <h3 className="text-2xl font-serif leading-snug">{item.title}</h3>
          </div>
          <div className="text-accent font-serif italic text-xl text-right">
            {item.year}
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 border border-deep-dark/10 p-8 flex flex-col justify-between bg-off-white text-deep-dark"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <div>
            <h3 className="text-xl font-serif text-accent mb-2">🏆 {item.title}</h3>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50">
              Achievement
            </div>
            <p className="text-sm font-medium leading-relaxed opacity-90">
              {item.detail}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-xs font-serif italic opacity-70 font-semibold">
              {item.date}
            </div>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                if(item.link === '#') e.preventDefault();
                e.stopPropagation();
              }}
              className="text-xs font-semibold tracking-widest uppercase border-b border-deep-dark/20 pb-1 self-start hover:text-accent hover:border-accent transition-colors text-deep-dark/80"
            >
              Certificate Link
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Achievements = () => {
  const [flippedId, setFlippedId] = useState(null);

  const handleCardClick = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <section id="achievements" className="w-full bg-deep-dark text-off-white py-32 px-6 md:px-12 border-t border-off-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-off-white/20 pb-8">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 06</span>
            <h2 className="text-5xl md:text-7xl font-serif">ACHIEVEMENTS</h2>
          </div>
          <p className="text-sm uppercase tracking-widest font-semibold text-off-white/40 max-w-xs text-right hidden md:block">
            Click cards to view details.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <AchievementCard 
              key={item.id} 
              item={item} 
              isFlipped={flippedId === item.id}
              onClick={() => handleCardClick(item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
