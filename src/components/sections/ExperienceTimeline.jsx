import React from 'react';

const experiences = [
  {
    role: 'Press Lead',
    organization: 'National Service Scheme (NSS)',
    period: '2024 - 2025',
    bullets: [
      'Prepared and published 5+ press reports covering university and community service initiatives.',
      'Played an active role in a state-level government-supported tree plantation drive, contributing to environmental sustainability efforts.',
      'Collaborated with multidisciplinary teams to organize and document large-scale social impact events.'
    ]
  },
  {
    role: 'Event Management Team Member',
    organization: 'LINPACK CLUB',
    period: '2024 - Present',
    responsibilities: 'Planned and coordinated technical events by managing logistics, volunteer coordination, and ensuring smooth event execution.',
    impact: 'Successfully contributed to the execution of 2 club events, enhancing participant engagement and overall event experience.',
    learnings: 'Strengthened leadership, teamwork, event planning, communication, and time management skills while working in a collaborative environment.',
    achievements: [
      'Managed and executed 2 successful technical events from planning to completion.',
      'Served as the event anchor (host) for one flagship club event, engaging the audience and coordinating stage proceedings.'
    ]
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
              
              {exp.bullets ? (
                <ul className="list-disc list-outside ml-4 font-serif text-lg text-deep-dark/80 space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed pl-2">{bullet}</li>
                  ))}
                </ul>
              ) : (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
