import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Inline Icons for crisp rendering and zero external icon failure
const Icons = {
  Award: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.396 1.156l-1.042 3.864 2.87 2.656a1 1 0 01-.557 1.708l-3.957.575-1.767 3.593a1 1 0 01-1.794 0l-1.767-3.593-3.957-.575a1 1 0 01-.557-1.708l2.87-2.656-1.042-3.864a1 1 0 011.396-1.156l1.599.8L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  ),
  Check: () => (
    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  FileText: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Close: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
    </svg>
  ),
  Code: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Database: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

// Additional Leadership / Club experiences
const otherExperiences = [
  {
    role: 'Press Lead',
    organization: 'National Service Scheme (NSS)',
    period: '2024 - 2025',
    category: 'Community Leadership',
    bullets: [
      'Prepared and published 5+ press reports covering university and community service initiatives.',
      'Played an active role in a state-level government-supported tree plantation drive, contributing to environmental sustainability efforts.',
      'Collaborated with multidisciplinary teams to organize and document large-scale social impact events.',
    ],
  },
  {
    role: 'Event Management Team Member',
    organization: 'LINPACK CLUB',
    period: '2024 - Present',
    category: 'Technical Club Management',
    responsibilities:
      'Planned and coordinated technical events by managing logistics, volunteer coordination, and ensuring smooth event execution.',
    impact:
      'Successfully contributed to the execution of 2 club events, enhancing participant engagement and overall event experience.',
    learnings:
      'Strengthened leadership, teamwork, event planning, communication, and time management skills while working in a collaborative environment.',
    achievements: [
      'Managed and executed 2 successful technical events from planning to completion.',
      'Served as the event anchor (host) for one flagship club event, engaging the audience and coordinating stage proceedings.',
    ],
  },
  {
    role: 'Hackathon Participant & Builder',
    organization: 'Various Organizations',
    period: '2023 - 2026',
    category: 'Hackathons & Rapid MVPs',
    responsibilities: 'Architecting and developing rapid prototypes under strict deadlines.',
    impact: 'Built several MVP applications addressing real-world problems like education and sustainability.',
    learnings: 'Rapid prototyping, system architecture under pressure, and effective pitching.',
    achievements: ['2nd Runner-Up E-Commerce Platform', 'Hackathon Finalist'],
  },
];

const ExperienceTimeline = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCertModalOpen(false);
    };
    if (isCertModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCertModalOpen]);

  return (
    <section id="experience" className="w-full bg-off-white text-deep-dark py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-deep-dark/20 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase">
                Section 05
              </span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-deep-dark/50 text-xs font-mono uppercase tracking-widest">
                Career & Impact
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-none tracking-tight">
              PROFESSIONAL<br />EXPERIENCE
            </h2>
          </div>
          <div className="max-w-md text-left md:text-right">
            <p className="text-xs uppercase tracking-widest font-semibold text-deep-dark/50 leading-relaxed">
              Demonstrated engineering ownership across production systems, database architecture, and AI-assisted workflows.
            </p>
          </div>
        </div>

        {/* PRIMARY FEATURED EXPERIENCE: VolitionSphere IT Services LLP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="bg-white border-2 border-accent/20 rounded-sm shadow-[0_8px_32px_rgba(122,31,43,0.06)] hover:border-accent/40 transition-colors duration-300 overflow-hidden">
            
            {/* Top Accent Bar */}
            <div className="h-1.5 w-full bg-accent" />

            <div className="p-8 md:p-12 lg:p-14">
              
              {/* Header Metadata */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-deep-dark/10 pb-6 mb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest bg-accent text-off-white px-3 py-1 rounded font-semibold">
                      Featured Internship
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded font-semibold flex items-center gap-1.5">
                      <Icons.Award />
                      <span>Solo Project • End-to-End Ownership</span>
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-serif text-deep-dark tracking-tight">
                    VolitionSphere IT Services LLP
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-deep-dark/70 mt-2 font-medium">
                    <span className="text-accent font-semibold">Role: Intern</span>
                    <span className="w-1 h-1 rounded-full bg-deep-dark/30" />
                    <span className="font-mono text-xs md:text-sm">Duration: 1 May 2026 – 30 June 2026</span>
                  </div>
                </div>

                {/* View Certificate Action Button */}
                <div className="shrink-0 pt-2 lg:pt-0">
                  <button
                    onClick={() => setIsCertModalOpen(true)}
                    className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold tracking-widest uppercase bg-deep-dark text-off-white hover:bg-accent transition-colors rounded-sm shadow-sm cursor-pointer group"
                  >
                    <Icons.FileText />
                    <span>View Certificate</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Prominent Project Banner */}
              <div className="bg-deep-dark/[0.02] border border-deep-dark/10 rounded-sm p-6 mb-8">
                <div className="text-[10px] font-mono uppercase tracking-widest text-deep-dark/40 mb-1">
                  Primary Engineering Assignment
                </div>
                <h4 className="text-2xl md:text-3xl font-serif text-deep-dark mb-3">
                  Full-Stack AI-Assisted Answer-Sheet Evaluation Platform
                </h4>
                <p className="text-base md:text-lg font-light text-deep-dark/80 leading-relaxed">
                  Independently designed and developed a full-stack AI-assisted answer-sheet evaluation platform during my internship at VolitionSphere IT Services LLP. Took ownership of the project end-to-end, working independently across frontend development, backend implementation, MongoDB database design, feature development, AI integration, and application testing.
                </p>
              </div>

              {/* Core Pillars / Responsibilities Grid */}
              <div className="mb-10">
                <h5 className="text-xs font-semibold tracking-widest-lg uppercase text-accent mb-6">
                  Key Engineering Responsibilities & Contributions
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Pillar 1: Full-Stack Engineering */}
                  <div className="bg-white border border-deep-dark/10 p-5 rounded-sm hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center mb-3">
                      <Icons.Code />
                    </div>
                    <h6 className="font-serif text-lg font-semibold text-deep-dark mb-2">
                      Full-Stack Engineering
                    </h6>
                    <p className="text-sm text-deep-dark/70 leading-relaxed font-light">
                      Built and integrated frontend and backend components to deliver the complete application. Solely developed the full-stack architecture, taking ownership of its implementation and end-to-end functionality.
                    </p>
                  </div>

                  {/* Pillar 2: MongoDB Database Design */}
                  <div className="bg-white border border-deep-dark/10 p-5 rounded-sm hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center mb-3">
                      <Icons.Database />
                    </div>
                    <h6 className="font-serif text-lg font-semibold text-deep-dark mb-2">
                      MongoDB Database Design
                    </h6>
                    <p className="text-sm text-deep-dark/70 leading-relaxed font-light">
                      Designed and implemented the MongoDB database, creating and managing collections and structured schemas for teachers, students, and core application entities.
                    </p>
                  </div>

                  {/* Pillar 3: Feature & Backend APIs */}
                  <div className="bg-white border border-deep-dark/10 p-5 rounded-sm hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center mb-3">
                      <Icons.FileText />
                    </div>
                    <h6 className="font-serif text-lg font-semibold text-deep-dark mb-2">
                      Feature Implementation
                    </h6>
                    <p className="text-sm text-deep-dark/70 leading-relaxed font-light">
                      Independently developed and integrated application features across different modules. Implemented backend functionality, RESTful APIs, and transactional database operations.
                    </p>
                  </div>

                  {/* Pillar 4: Testing & AI Workflows */}
                  <div className="bg-white border border-deep-dark/10 p-5 rounded-sm hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center mb-3">
                      <Icons.ShieldCheck />
                    </div>
                    <h6 className="font-serif text-lg font-semibold text-deep-dark mb-2">
                      Testing & AI Evaluation
                    </h6>
                    <p className="text-sm text-deep-dark/70 leading-relaxed font-light">
                      Conducted rigorous application testing, identified bugs, and resolved issues. Worked on OCR-based text extraction and implemented AI-assisted assessment workflows for automated evaluation.
                    </p>
                  </div>

                </div>
              </div>

              {/* Structured Checklist of All Contributions */}
              <div className="border-t border-deep-dark/10 pt-8 mb-8">
                <h5 className="text-[11px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-4">
                  Detailed Verification & Delivery Highlights
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-deep-dark/80">
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>Independent Project Development:</strong> Solely developed the full-stack application, taking complete ownership of its implementation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>Full-Stack Engineering:</strong> Built and integrated frontend and backend components to deliver the complete application.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>Database Architecture:</strong> Designed MongoDB collections and data structures for teachers, students, and application entities.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>Feature Implementation:</strong> Independently developed and integrated application features across modular services.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>Backend & APIs:</strong> Implemented backend functionality, RESTful APIs, and efficient database operations.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>Testing & Debugging:</strong> Conducted end-to-end application testing, identified bugs, resolved issues, and validated features.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>OCR Integration:</strong> Worked on OCR-based text extraction for processing and digitizing handwritten answer sheets.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icons.Check />
                    <span><strong>AI-Assisted Evaluation:</strong> Implemented and integrated AI-assisted assessment workflows for automated grading.</span>
                  </div>
                </div>
              </div>

              {/* Technology Stack Badges */}
              <div className="border-t border-deep-dark/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h5 className="text-[11px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-2.5">
                    Technology Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'FastAPI', 'Next.js', 'React.js', 'MongoDB', 'OCR', 'LLM APIs'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-medium text-deep-dark bg-deep-dark/[0.04] border border-deep-dark/10 px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-deep-dark/40 block">
                    Verification Status
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center md:justify-end gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Official Certificate Available
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ADDITIONAL LEADERSHIP & COMMUNITY TIMELINE */}
        <div className="mt-16">
          <div className="mb-12 border-b border-deep-dark/10 pb-4">
            <span className="text-xs font-semibold tracking-widest-lg uppercase text-deep-dark/40 block">
              Additional Leadership & Extracurricular Impact
            </span>
          </div>

          <div className="relative border-l border-deep-dark/20 ml-4 md:ml-12">
            {otherExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-16 pl-8 md:pl-16 relative"
              >
                {/* Timeline Marker */}
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3" />

                <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-baseline mb-3">
                  <h3 className="text-2xl md:text-3xl font-serif text-deep-dark">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <h4 className="text-base font-medium text-deep-dark/60 uppercase tracking-widest">
                    {exp.organization}
                  </h4>
                  <span className="w-1 h-1 rounded-full bg-deep-dark/30" />
                  <span className="text-xs font-mono text-deep-dark/40 uppercase">
                    {exp.category}
                  </span>
                </div>

                {exp.bullets ? (
                  <ul className="list-disc list-outside ml-4 font-serif text-lg text-deep-dark/80 space-y-2.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="leading-relaxed pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-deep-dark/80 bg-white/60 p-6 rounded border border-deep-dark/5">
                    <div>
                      <h5 className="text-[10px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                        Responsibilities
                      </h5>
                      <p className="font-serif text-base leading-relaxed mb-4 text-deep-dark/80">
                        {exp.responsibilities}
                      </p>

                      <h5 className="text-[10px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                        Key Learnings
                      </h5>
                      <p className="font-serif text-base leading-relaxed text-deep-dark/80">
                        {exp.learnings}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                        Impact & Highlights
                      </h5>
                      <p className="font-serif text-base leading-relaxed mb-4 text-deep-dark/80">
                        {exp.impact}
                      </p>

                      <h5 className="text-[10px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                        Key Achievements
                      </h5>
                      <ul className="list-disc list-inside font-serif text-base text-deep-dark/80 space-y-1">
                        {exp.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* OFFICIAL INTERNSHIP CERTIFICATE MODAL */}
      <AnimatePresence>
        {isCertModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertModalOpen(false)}
              className="absolute inset-0 bg-deep-dark/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 bg-off-white w-full max-w-3xl rounded-sm shadow-2xl border border-deep-dark/20 overflow-hidden max-h-[90vh] flex flex-col"
            >
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-deep-dark text-off-white border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Icons.ShieldCheck />
                  <span className="text-xs font-mono uppercase tracking-widest text-white/90">
                    Official Internship Credential
                  </span>
                </div>
                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="p-1 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Certificate Modal"
                >
                  <Icons.Close />
                </button>
              </div>

              {/* Certificate Document Canvas */}
              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="border-[6px] border-double border-accent/40 p-8 md:p-12 bg-white relative text-center shadow-inner">
                  
                  {/* Decorative Corner Seals */}
                  <div className="text-xs font-mono tracking-widest uppercase text-deep-dark/40 mb-2">
                    VolitionSphere IT Services LLP
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif text-deep-dark mb-2">
                    Certificate of Internship
                  </h3>
                  
                  <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />

                  <p className="text-xs font-mono tracking-widest uppercase text-deep-dark/60 mb-2">
                    This is proudly presented to
                  </p>

                  <h4 className="text-3xl md:text-5xl font-serif text-accent italic mb-6">
                    Anushka
                  </h4>

                  <p className="font-serif text-base md:text-lg text-deep-dark/80 max-w-xl mx-auto leading-relaxed mb-6">
                    in recognition of the successful completion of an engineering internship at <strong className="font-semibold text-deep-dark">VolitionSphere IT Services LLP</strong> as an <strong className="font-semibold text-deep-dark">Intern</strong> from <strong className="font-semibold text-deep-dark">1 May 2026 to 30 June 2026</strong>.
                  </p>

                  {/* Highlight Box inside Certificate */}
                  <div className="bg-deep-dark/[0.03] border border-deep-dark/10 p-5 rounded max-w-lg mx-auto text-left mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-deep-dark/40 block mb-1">
                      Project Delivered with End-to-End Ownership
                    </span>
                    <span className="font-serif text-lg font-semibold text-deep-dark block mb-2">
                      Full-Stack AI-Assisted Answer-Sheet Evaluation Platform
                    </span>
                    <p className="text-xs text-deep-dark/70 font-light leading-relaxed">
                      Independently designed and developed across Full-Stack Engineering, MongoDB Database Design, Feature Implementation, Testing, OCR-based text extraction, and AI assessment workflows.
                    </p>
                  </div>

                  {/* Signatures & Verification */}
                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-deep-dark/10 text-xs font-mono text-deep-dark/60">
                    <div>
                      <span className="block font-semibold text-deep-dark">Duration</span>
                      <span className="text-[11px]">1 May 2026 – 30 June 2026</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-deep-dark">Issuing Authority</span>
                      <span className="text-[11px]">VolitionSphere IT Services LLP</span>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="mt-8 pt-4 flex items-center justify-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 py-2 px-4 rounded border border-emerald-200 w-fit mx-auto">
                    <Icons.ShieldCheck />
                    <span>Verified Official Internship Completion</span>
                  </div>

                </div>

                {/* Direct Action Links */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-deep-dark/60">
                  <span>To view or attach a PDF copy: place file in <code className="bg-deep-dark/5 px-2 py-0.5 rounded text-deep-dark">public/volitionsphere-internship-certificate.pdf</code></span>
                  <div className="flex gap-3">
                    <a
                      href="/volitionsphere-internship-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-deep-dark text-white rounded hover:bg-accent transition-colors font-sans text-xs font-semibold tracking-wider uppercase"
                    >
                      <span>Open Document</span>
                      <Icons.ExternalLink />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ExperienceTimeline;
