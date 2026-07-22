import React from 'react';

const experiences = [
  {
    role: 'Press Lead & Event Management Volunteer',
    organization: 'NSS',
    period: '2023 - Present',
    responsibilities: 'Spearheaded press and media communications. Organized large-scale events and campaigns.',
    impact: 'Increased community engagement and expanded outreach through effective media strategy.',
    learnings: 'Advanced public speaking, crisis management, and cross-functional team leadership.',
    achievements: ['Organized 5+ major events', 'Featured in local university press']
  },
  {
    role: 'Frontend Developer',
    organization: 'Linpack Club',
    period: '2024 - Present',
    responsibilities: 'Developing interactive user interfaces for club projects and internal tools.',
    impact: 'Improved the user experience of the main portal, resulting in higher member engagement.',
    learnings: 'Mastered React ecosystem and collaborative Git workflows in a team environment.',
    achievements: ['Built the new club website', 'Mentored junior developers']
  },
  {
    role: 'Hackathon Participant & Builder',
    organization: 'Various Organizations',
    period: '2023 - 2026',
    responsibilities: 'Architecting and developing rapid prototypes under strict deadlines.',
    impact: 'Built several MVP applications addressing real-world problems like education and sustainability.',
    learnings: 'Rapid prototyping, system architecture under pressure, and effective pitching.',
    achievements: ['2nd Runner-Up E-Commerce Platform', 'Hackathon Finalist']
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="w-full bg-off-white text-deep-dark py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-center">
          <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 05</span>
          <h2 className="text-5xl md:text-7xl font-serif">PROFESSIONAL<br/>EXPERIENCE</h2>
        </div>

        {/* Magazine Timeline */}
        <div className="relative border-l border-deep-dark/20 ml-4 md:ml-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-20 pl-8 md:pl-16 relative">
              {/* Timeline Marker */}
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3"></div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline mb-6">
                <h3 className="text-3xl md:text-4xl font-serif text-deep-dark">{exp.role}</h3>
                <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">{exp.period}</span>
              </div>
              
              <h4 className="text-xl font-medium text-deep-dark/60 uppercase tracking-widest mb-8">{exp.organization}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-deep-dark/80">
                <div>
                  <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Responsibilities</h5>
                  <p className="font-serif text-lg leading-relaxed mb-6">{exp.responsibilities}</p>
                  
                  <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Key Learnings</h5>
                  <p className="font-serif text-lg leading-relaxed">{exp.learnings}</p>
                </div>
                <div>
                  <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Impact</h5>
                  <p className="font-serif text-lg leading-relaxed mb-6">{exp.impact}</p>
                  
                  <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Achievements</h5>
                  <ul className="list-disc list-inside font-serif text-lg">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
