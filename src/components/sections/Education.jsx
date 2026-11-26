import React from 'react';

const educationData = [
  {
    institution: 'Vellore Institute of Technology, Bhopal',
    degree: 'B.Tech in Computer Science & Engineering',
    cgpa: '7.92 / 10',
    duration: 'September 2023 – May 2027',
    location: 'Bhopal, Madhya Pradesh',
    status: 'Currently Pursuing',
  },
  {
    institution: 'Thakur College of Science and Commerce',
    degree: 'Class XII (Higher Secondary)',
    stream: 'Science',
    location: 'Mumbai, Maharashtra',
  },
  {
    institution: 'Thakur Public School',
    degree: 'Class X (Secondary School)',
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
          <h2 className="text-5xl md:text-6xl font-serif">EDUCATION</h2>
        </div>

        {/* Compact Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {educationData.map((edu, index) => (
            <div 
              key={edu.institution}
              className={`p-7 border rounded-sm flex flex-col justify-between transition-all ${
                index === 0 
                  ? 'border-accent/30 bg-accent/[0.02] shadow-sm' 
                  : 'border-deep-dark/10 bg-deep-dark/[0.01] hover:border-deep-dark/25'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-deep-dark/40 font-semibold">
                    0{index + 1}
                  </span>
                  {edu.status && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold px-2.5 py-0.5 bg-accent/5 rounded border border-accent/20">
                      {edu.status}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-serif font-semibold text-deep-dark mb-2 leading-snug">
                  {edu.institution}
                </h3>
                
                <p className="text-base font-serif text-deep-dark/90 font-medium mb-1">
                  {edu.degree}
                </p>

                {edu.stream && (
                  <p className="text-xs font-mono uppercase tracking-widest text-deep-dark/50 mb-2">
                    {edu.stream}
                  </p>
                )}

                {edu.cgpa && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/5 text-accent border border-accent/20 rounded text-xs font-mono font-semibold mt-3">
                    <span className="text-[10px] uppercase tracking-wider text-accent/70">CGPA:</span>
                    <span>{edu.cgpa}</span>
                  </div>
                )}
              </div>

              <div className="pt-5 mt-6 border-t border-deep-dark/10 text-xs font-mono text-deep-dark/60 flex flex-wrap justify-between items-center gap-2">
                <span>{edu.location}</span>
                {edu.duration && <span className="font-semibold text-accent">{edu.duration}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
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
