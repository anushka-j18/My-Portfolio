import React from 'react';

const toolkitData = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL']
  },
  {
    category: 'AI / ML',
    skills: ['TensorFlow', 'YOLO', 'OCR']
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman']
  },
  {
    category: 'Cloud',
    skills: ['Supabase', 'Vercel', 'Render']
  },
  {
    category: 'Soft Skills',
    skills: ['Leadership', 'Communication', 'Problem Solving', 'Adaptability', 'Teamwork', 'Public Speaking', 'Debating']
  }
];

const EngineeringToolkit = () => {
  return (
    <section id="toolkit" className="w-full bg-deep-dark text-off-white py-32 px-6 md:px-12 border-t border-off-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-off-white/20 pb-8">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 04</span>
            <h2 className="text-5xl md:text-7xl font-serif">ENGINEERING<br/>TOOLKIT</h2>
          </div>
        </div>

        {/* Editorial Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
          {toolkitData.map((group, index) => (
            <div key={index} className="flex flex-col border-t border-off-white/10 pt-4">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-off-white/40 mb-6">{group.category}</h3>
              <ul className="space-y-3 font-serif text-xl md:text-2xl text-off-white">
                {group.skills.map(skill => (
                  <li key={skill} className="hover:text-accent transition-colors duration-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngineeringToolkit;
