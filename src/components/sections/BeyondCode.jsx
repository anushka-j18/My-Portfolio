import React from 'react';

const interests = [
  'Mystery Novels', 'Debating', 'Leadership', 'Dancing', 
  'Photography', 'Travelling', 'Hackathons', 'NSS'
];

const BeyondCode = () => {
  return (
    <section id="beyond" className="w-full bg-off-white text-deep-dark py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-deep-dark/20 pb-8">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 09</span>
            <h2 className="text-5xl md:text-7xl font-serif">BEYOND<br/>CODE</h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* Interests Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="border border-deep-dark/10 p-6 flex items-center justify-center text-center hover:bg-deep-dark hover:text-off-white transition-colors duration-500">
                <span className="font-serif text-xl md:text-2xl">{interest}</span>
              </div>
            ))}
          </div>

          {/* Personal Philosophy */}
          <div className="lg:w-1/2 bg-deep-dark text-off-white p-12 flex flex-col justify-center relative overflow-hidden group">
            
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative z-10">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-off-white/40 mb-12">Personal Philosophy</h3>
              
              <div className="space-y-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                <p>Stay curious.</p>
                <p className="italic text-accent">Build thoughtfully.</p>
                <p>Never stop learning.</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeyondCode;
