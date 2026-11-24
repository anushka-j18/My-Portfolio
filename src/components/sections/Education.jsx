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
    degree: 'Higher Secondary Education (Class XII)',
    location: 'Mumbai, Maharashtra',
  },
  {
    institution: 'Thakur Public School',
    degree: 'Secondary Education (Class X)',
    location: 'Mumbai, Maharashtra',
  },
];

const coursework = [
  'Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 
  'Computer Networks', 'Artificial Intelligence', 'Machine Learning', 'Software Engineering'
];

const Education = () => {
  return (
    <section id="education" className="w-full bg-off-white text-deep-dark py-32 px-6 md:px-12 border-t border-deep-dark/10">
      <div className="max-w-[1000px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 07</span>
          <h2 className="text-5xl md:text-7xl font-serif">EDUCATION</h2>
        </div>

        {/* Elegant Timeline */}
        <div className="flex flex-col items-center">
          {educationData.map((edu, index) => (
            <React.Fragment key={edu.institution}>
              {index > 0 && <div className="w-[1px] h-12 bg-deep-dark/20 my-8"></div>}
              {index === 0 && <div className="w-[1px] h-12 bg-deep-dark/20 mb-8"></div>}
              
              <div className="flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl font-serif mb-3">{edu.institution}</h3>
                <h4 className="text-lg md:text-xl font-medium text-deep-dark/60 uppercase tracking-widest mb-3">
                  {edu.degree}
                </h4>
                
                {edu.specialization && edu.duration && (
                  <p className="text-base md:text-lg font-serif italic text-accent mb-2">
                    {edu.specialization} • {edu.duration}
                  </p>
                )}
                
                <p className="text-sm md:text-base font-serif text-deep-dark/70">
                  {edu.location}
                  {edu.status && <span className="text-accent font-medium"> • {edu.status}</span>}
                </p>
              </div>
            </React.Fragment>
          ))}

          <div className="w-[1px] h-16 bg-deep-dark/20 my-12"></div>

          <h5 className="text-sm font-semibold tracking-widest uppercase text-deep-dark/40 mb-8 border-b border-deep-dark/20 pb-4 inline-block px-8">
            Relevant Coursework
          </h5>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
            {coursework.map(course => (
              <span key={course} className="px-6 py-2 border border-deep-dark/20 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors">
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
