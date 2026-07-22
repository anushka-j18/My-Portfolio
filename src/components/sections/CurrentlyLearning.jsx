import React from 'react';

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="w-full bg-deep-dark text-off-white py-32 px-6 md:px-12 border-t border-off-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Section Header */}
          <div className="lg:w-1/3 shrink-0">
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 08</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-none mb-8">CURRENTLY<br/>LEARNING</h2>
            <p className="text-off-white/60 font-light text-lg">
              The engineering landscape shifts rapidly. Here is a snapshot of my current intellectual pursuits, reading list, and active research areas.
            </p>
          </div>

          {/* Magazine Article Layout */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 border-l border-off-white/20 pl-0 lg:pl-16">
            
            <div>
              <h3 className="text-2xl font-serif text-accent italic mb-6">Technical Pursuits</h3>
              <ul className="space-y-6">
                <li className="border-b border-off-white/10 pb-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">Advanced AI Agents</h4>
                  <p className="text-off-white/60 font-serif">Exploring autonomous systems and multi-agent frameworks.</p>
                </li>
                <li className="border-b border-off-white/10 pb-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">Large Language Models</h4>
                  <p className="text-off-white/60 font-serif">Fine-tuning, prompt engineering, and context window optimization.</p>
                </li>
                <li className="border-b border-off-white/10 pb-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">System Design</h4>
                  <p className="text-off-white/60 font-serif">Architecting distributed systems for high availability.</p>
                </li>
                <li className="border-b border-off-white/10 pb-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">Backend Scalability & Cloud</h4>
                  <p className="text-off-white/60 font-serif">Mastering modern cloud infrastructure and deployment pipelines.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-accent italic mb-6">Beyond The Screen</h3>
              <ul className="space-y-6">
                <li className="border-b border-off-white/10 pb-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">Mystery Novels</h4>
                  <p className="text-off-white/60 font-serif">Deconstructing intricate plots and logical puzzles.</p>
                </li>
                <li className="border-b border-off-white/10 pb-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">AI Research Papers</h4>
                  <p className="text-off-white/60 font-serif">Staying updated with the latest breakthroughs in machine learning.</p>
                </li>
                <li className="border-b border-off-white/10 pb-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">Creative Experiments</h4>
                  <p className="text-off-white/60 font-serif">Tinkering with generative art and unconventional UX paradigms.</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CurrentlyLearning;
