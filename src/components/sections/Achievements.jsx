import React, { useState } from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { 
    id: 1,
    title: 'PromptX Winner', 
    category: 'Competition', 
    year: '2025',
    detail: 'Winner of PromptX Hackathon by CSI chapter VIT Bhopal. Showcased exceptional AI prompt engineering and problem-solving skills.',
    date: 'March 2025',
    link: '#'
  },
  { 
    id: 2,
    title: 'Hackathon Finalist', 
    category: 'Development', 
    year: '2024',
    detail: 'Selected as a finalist in competitive hackathon. Developed a functional MVP addressing real-world challenges.',
    date: '2024',
    link: '#'
  },
  { 
    id: 3,
    title: '2nd Runner-Up', 
    category: 'Hackathon', 
    year: '2025',
    detail: '2nd Runner-Up at Linpack Intra-Club Hackathon. Built a high-performance E-Commerce architecture (XURVA).',
    date: 'Jan 2026',
    link: '#'
  },
  { 
    id: 4,
    title: 'Flipkart Grid Participant', 
    category: 'Engineering', 
    year: '2024',
    detail: 'Participated in Flipkart Grid 6.0 software development track, tackling complex engineering problem statements.',
    date: '2024',
    link: '#'
  },
  { 
    id: 5,
    title: 'AI Projects Recognition', 
    category: 'Innovation', 
    year: '2025',
    detail: 'Commended for developing impactful AI tools like Eval.AI and Histori.AI to streamline evaluation and education.',
    date: '2025',
    link: '#'
  },
  { 
    id: 6,
    title: 'NSS Leadership', 
    category: 'NSS', 
    year: '2024',
    detail: 'Press Lead for National Service Scheme (NSS). Organized 5+ major events and tree plantation drives.',
    date: '2024 - 2025',
    link: '#'
  },
  { 
    id: 7,
    title: 'Open Source Contributor', 
    category: 'Community', 
    year: '2025',
    detail: 'Consistently contributed to various open-source communities, focusing on React and modern web development.',
    date: '2025',
    link: '#'
  },
  { 
    id: 8,
    title: 'Academic Milestone', 
    category: 'University', 
    year: '2024',
    detail: 'Maintained excellent academic standing while balancing rigorous extracurricular projects and club leadership.',
    date: '2024',
    link: '#'
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
