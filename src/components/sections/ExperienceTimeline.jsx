import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceTimeline = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

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
    <section id="experience" className="w-full bg-off-white text-deep-dark py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-center">
          <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 05</span>
          <h2 className="text-5xl md:text-7xl font-serif">PROFESSIONAL<br/>EXPERIENCE</h2>
        </div>

        {/* Unified Editorial Magazine Timeline */}
        <div className="relative border-l border-deep-dark/20 ml-4 md:ml-12">
          
          {/* 1. VolitionSphere IT Services LLP */}
          <div className="mb-20 pl-8 md:pl-16 relative">
            {/* Timeline Marker */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-deep-dark">Intern</h3>
              <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">
                1 May 2026 – 30 June 2026
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6">
              <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest">
                VOLITIONSPHERE IT SERVICES LLP • FULL-STACK AI-ASSISTED ANSWER-SHEET EVALUATION PLATFORM
              </h4>
              <span className="text-xs font-mono tracking-wider uppercase text-accent font-semibold">
                [ Solo Project • End-to-End Ownership ]
              </span>
            </div>

            <p className="font-serif text-lg leading-relaxed text-deep-dark/80 mb-8 max-w-4xl">
              Independently designed and developed a full-stack AI-assisted answer-sheet evaluation platform during my internship at VolitionSphere IT Services LLP. Took ownership of the project end-to-end, working independently across frontend development, backend implementation, MongoDB database design, feature development, AI integration, and application testing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-deep-dark/80 mb-8">
              <div>
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                  Responsibilities & Full-Stack Development
                </h5>
                <p className="font-serif text-lg leading-relaxed mb-6">
                  Solely developed the full-stack application, taking complete ownership of its implementation and end-to-end functionality. Built and integrated frontend and backend components using Next.js, React.js, and FastAPI.
                </p>
                
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                  Database Design & Backend APIs
                </h5>
                <p className="font-serif text-lg leading-relaxed">
                  Designed and implemented the MongoDB database, creating and managing collections and data structures for teachers, students, and application entities. Implemented backend functionality, RESTful APIs, and database operations.
                </p>
              </div>

              <div>
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                  AI & OCR Integration
                </h5>
                <p className="font-serif text-lg leading-relaxed mb-6">
                  Worked on OCR-based text extraction for processing and digitizing answer sheets. Implemented and integrated AI-assisted assessment workflows for automated evaluation.
                </p>
                
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">
                  Feature Implementation & Testing
                </h5>
                <p className="font-serif text-lg leading-relaxed">
                  Independently developed and integrated application features across different modules. Conducted application testing, identified bugs, resolved issues, and validated implemented features.
                </p>
              </div>
            </div>

            {/* Tech Stack and View Certificate */}
            <div className="pt-4 border-t border-deep-dark/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono uppercase tracking-widest text-deep-dark/60">
                <span className="font-semibold text-deep-dark/40 mr-2">TECH STACK:</span>
                <span>Python · FastAPI · Next.js · React.js · MongoDB · OCR · LLM APIs</span>
              </div>

              <button
                onClick={() => setIsCertModalOpen(true)}
                className="text-xs font-semibold tracking-widest uppercase border-b border-accent pb-0.5 text-accent hover:opacity-75 transition-opacity flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Certificate</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 2. Press Lead (NSS) */}
          <div className="mb-20 pl-8 md:pl-16 relative">
            {/* Timeline Marker */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-deep-dark">Press Lead</h3>
              <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">2024 - 2025</span>
            </div>
            
            <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest mb-6">
              NATIONAL SERVICE SCHEME (NSS) • COMMUNITY LEADERSHIP
            </h4>
            
            <ul className="list-disc list-outside ml-4 font-serif text-lg text-deep-dark/80 space-y-3">
              <li className="leading-relaxed pl-2">Prepared and published 5+ press reports covering university and community service initiatives.</li>
              <li className="leading-relaxed pl-2">Played an active role in a state-level government-supported tree plantation drive, contributing to environmental sustainability efforts.</li>
              <li className="leading-relaxed pl-2">Collaborated with multidisciplinary teams to organize and document large-scale social impact events.</li>
            </ul>
          </div>

          {/* 3. Event Management Team Member (LINPACK CLUB) */}
          <div className="mb-20 pl-8 md:pl-16 relative">
            {/* Timeline Marker */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-deep-dark">Event Management Team Member</h3>
              <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">2024 - PRESENT</span>
            </div>
            
            <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest mb-6">
              LINPACK CLUB • TECHNICAL CLUB MANAGEMENT
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-deep-dark/80">
              <div>
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Responsibilities</h5>
                <p className="font-serif text-lg leading-relaxed mb-6">
                  Planned and coordinated technical events by managing logistics, volunteer coordination, and ensuring smooth event execution.
                </p>
                
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Key Learnings</h5>
                <p className="font-serif text-lg leading-relaxed">
                  Strengthened leadership, teamwork, event planning, communication, and time management skills while working in a collaborative environment.
                </p>
              </div>

              <div>
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Impact & Highlights</h5>
                <p className="font-serif text-lg leading-relaxed mb-6">
                  Successfully contributed to the execution of 2 club events, enhancing participant engagement and overall event experience.
                </p>
                
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Key Achievements</h5>
                <ul className="list-disc list-inside font-serif text-lg space-y-1">
                  <li>Managed and executed 2 successful technical events from planning to completion.</li>
                  <li>Served as the event anchor (host) for one flagship club event, engaging the audience and coordinating stage proceedings.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Hackathon Participant & Builder */}
          <div className="mb-20 pl-8 md:pl-16 relative">
            {/* Timeline Marker */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-deep-dark">Hackathon Participant & Builder</h3>
              <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">2023 - 2026</span>
            </div>
            
            <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest mb-6">
              VARIOUS ORGANIZATIONS • RAPID PROTOTYPING & SYSTEM ARCHITECTURE
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-deep-dark/80">
              <div>
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Responsibilities</h5>
                <p className="font-serif text-lg leading-relaxed mb-6">
                  Architecting and developing rapid prototypes under strict deadlines.
                </p>
                
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Key Learnings</h5>
                <p className="font-serif text-lg leading-relaxed">
                  Rapid prototyping, system architecture under pressure, and effective pitching.
                </p>
              </div>

              <div>
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Impact</h5>
                <p className="font-serif text-lg leading-relaxed mb-6">
                  Built several MVP applications addressing real-world problems like education and sustainability.
                </p>
                
                <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-2">Achievements</h5>
                <ul className="list-disc list-inside font-serif text-lg space-y-1">
                  <li>2nd Runner-Up E-Commerce Platform</li>
                  <li>Hackathon Finalist</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* OFFICIAL VOLITIONSPHERE CERTIFICATE MODAL */}
      <AnimatePresence>
        {isCertModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertModalOpen(false)}
              className="absolute inset-0 bg-deep-dark/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 bg-off-white text-deep-dark w-full max-w-2xl border border-deep-dark/20 p-5 md:p-7 shadow-2xl overflow-y-auto max-h-[92vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-deep-dark/10 pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-deep-dark/50 block">
                    VolitionSphere IT Services LLP
                  </span>
                  <span className="text-base font-serif font-semibold text-deep-dark">
                    Official Internship Certificate
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="/volitionsphere-internship-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-widest uppercase border-b border-accent pb-0.5 text-accent hover:opacity-75 transition-opacity"
                  >
                    Open PDF ↗
                  </a>
                  <button
                    onClick={() => setIsCertModalOpen(false)}
                    className="text-xs font-mono uppercase tracking-widest text-deep-dark/60 hover:text-accent transition-colors cursor-pointer ml-2"
                  >
                    Close ✕
                  </button>
                </div>
              </div>

              {/* Certificate Image View */}
              <div className="bg-white border border-deep-dark/15 p-2 shadow-inner rounded-sm overflow-hidden flex items-center justify-center">
                <img
                  src="/volitionsphere-internship-certificate.png"
                  alt="VolitionSphere IT Services LLP Internship Certificate - Ms. Anushka Joshi"
                  className="w-full h-auto object-contain max-h-[72vh] shadow-sm"
                />
              </div>

              {/* Footer Credentials */}
              <div className="mt-3 pt-3 border-t border-deep-dark/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-deep-dark/60">
                <span>Ms. Anushka Joshi (23BCE10733) • VIT Bhopal</span>
                <span>Date of Issue: 30 June 2026</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ExperienceTimeline;
