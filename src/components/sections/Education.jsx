import React from 'react';

const educationData = [
  {
    institution: 'VIT Bhopal University',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science and Engineering',
    duration: 'September 2023 – May 2027',
    location: 'Bhopal, Madhya Pradesh',
    status: 'Currently Pursuing',
  },
  {
    institution: 'Thakur College of Science and Commerce',
    degree: 'Higher Secondary Certificate (Class XII)',
    specialization: 'Science Stream',
    location: 'Mumbai, Maharashtra',
  },
  {
    institution: 'Thakur Public School',
    degree: 'Secondary School Certificate (Class X)',
    specialization: 'General Studies',
    location: 'Mumbai, Maharashtra',
  },
];

const coursework = [
  'Data Structures & Algorithms', 
  'Operating Systems', 
  'DBMS', 
  'Computer Networks', 
  'Artificial Intelligence', 
  'Machine Learning', 
  'Software Engineering'
];

const Education = () => {
  return (
    <section id="education" className="w-full bg-off-white text-deep-dark py-28 px-6 md:px-12 border-t border-deep-dark/10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-3 block">Section 07</span>
          <h2 className="text-5xl md:text-6xl font-serif">ACADEMIC BACKGROUND</h2>
        </div>

        {/* Compact Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {educationData.map((edu, index) => (
            <div 
              key={edu.institution}
              className={`p-6 border rounded-sm flex flex-col justify-between transition-colors ${
                index === 0 
                  ? 'border-accent/30 bg-accent/[0.02]' 
                  : 'border-deep-dark/10 bg-deep-dark/[0.01] hover:border-deep-dark/25'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-deep-dark/50 font-semibold">
                    0{index + 1}
                  </span>
                  {edu.status && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold px-2 py-0.5 bg-accent/5 rounded border border-accent/20">
                      {edu.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-semibold text-deep-dark mb-1 leading-snug">
                  {edu.institution}
                </h3>
                
                <h4 className="text-xs font-mono font-medium text-deep-dark/70 uppercase tracking-wider mb-3">
                  {edu.degree}
                </h4>

                {edu.specialization && (
                  <p className="text-sm font-serif text-deep-dark/80 mb-2">
                    {edu.specialization}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-deep-dark/10 text-xs font-mono text-deep-dark/60 flex flex-wrap justify-between gap-2">
                <span>{edu.location}</span>
                {edu.duration && <span className="font-semibold text-accent">{edu.duration}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Relevant Coursework */}
        <div className="border-t border-deep-dark/10 pt-10 text-center">
          <h5 className="text-xs font-mono font-semibold tracking-widest uppercase text-deep-dark/40 mb-5">
            Relevant Coursework & Core Domains
          </h5>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {coursework.map(course => (
              <span 
                key={course} 
                className="text-xs font-mono px-3 py-1 bg-deep-dark/5 text-deep-dark/80 rounded border border-deep-dark/10 hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
