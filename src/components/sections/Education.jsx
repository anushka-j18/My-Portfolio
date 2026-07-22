import React from 'react';

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
          <div className="w-[1px] h-16 bg-deep-dark/20 mb-8"></div>
          
          <h3 className="text-3xl md:text-5xl font-serif mb-4">VIT Bhopal University</h3>
          <h4 className="text-xl font-medium text-deep-dark/60 uppercase tracking-widest mb-4">Bachelor of Technology</h4>
          <p className="text-lg font-serif italic text-accent mb-12">Computer Science Engineering • Expected Graduation: 2027</p>

          <div className="w-[1px] h-16 bg-deep-dark/20 mb-12"></div>

          <h5 className="text-sm font-semibold tracking-widest uppercase text-deep-dark/40 mb-8 border-b border-deep-dark/20 pb-4 inline-block px-8">Relevant Coursework</h5>
          
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
