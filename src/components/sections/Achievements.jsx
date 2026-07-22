import React from 'react';

const achievements = [
  { title: 'PromptX Winner', category: 'Competition', year: '2025' },
  { title: 'Hackathon Finalist', category: 'Development', year: '2024' },
  { title: '2nd Runner-Up', category: 'Hackathon', year: '2025' },
  { title: 'Flipkart Grid Participant', category: 'Engineering', year: '2024' },
  { title: 'AI Projects Recognition', category: 'Innovation', year: '2025' },
  { title: 'Leadership Award', category: 'NSS', year: '2024' },
  { title: 'Open Source Contributor', category: 'Community', year: '2025' },
  { title: 'Academic Milestone', category: 'University', year: '2024' }
];

const Achievements = () => {
  return (
    <section id="achievements" className="w-full bg-deep-dark text-off-white py-32 px-6 md:px-12 border-t border-off-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-off-white/20 pb-8">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 06</span>
            <h2 className="text-5xl md:text-7xl font-serif">ACHIEVEMENTS</h2>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="border border-off-white/20 p-8 hover:bg-off-white hover:text-deep-dark transition-all duration-500 group flex flex-col justify-between aspect-square">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-opacity">
                  {item.category}
                </div>
                <h3 className="text-2xl font-serif leading-snug">{item.title}</h3>
              </div>
              <div className="text-accent font-serif italic text-xl text-right">
                {item.year}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
