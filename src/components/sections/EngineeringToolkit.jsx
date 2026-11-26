import React from 'react';

const toolkitData = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL']
  },
  {
    category: 'AI / ML & Vision',
    skills: ['TensorFlow', 'YOLO (v7/v8)', 'ONNX', 'OCR', 'LLM APIs']
  },
  {
    category: 'Cloud & Platforms',
    skills: ['Supabase', 'Vercel', 'Render']
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman']
  },
  {
    category: 'Leadership & Strengths',
    skills: ['Event Planning', 'Public Speaking & Anchoring', 'Team Leadership', 'Problem Solving']
  }
];

const EngineeringToolkit = () => {
  return (
    <section id="toolkit" className="w-full bg-deep-dark text-off-white py-28 px-6 md:px-12 border-t border-off-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-off-white/20 pb-6 gap-4">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-3 block">Section 04</span>
            <h2 className="text-5xl md:text-6xl font-serif">ENGINEERING<br/>TOOLKIT</h2>
          </div>
          <p className="text-xs uppercase tracking-widest font-semibold text-off-white/40 max-w-xs text-right hidden md:block">
            Categorized technical capabilities & tooling.
          </p>
        </div>

        {/* Compact Categorized Badge Groupings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolkitData.map((group, index) => (
            <div 
              key={index} 
              className="border border-off-white/10 p-5 rounded-sm bg-off-white/[0.02] hover:border-off-white/25 transition-colors"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-off-white/10">
                <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                  {group.category}
                </h3>
                <span className="text-[10px] font-mono text-off-white/30">
                  {group.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-xs font-mono bg-off-white/5 text-off-white/90 px-2.5 py-1 rounded border border-off-white/10 hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngineeringToolkit;
