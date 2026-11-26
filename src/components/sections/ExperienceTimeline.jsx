import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceTimeline = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCertModalOpen(false);
        setIsAppointmentModalOpen(false);
      }
    };
    if (isCertModalOpen || isAppointmentModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCertModalOpen, isAppointmentModalOpen]);

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
            
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
              <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest">
                VOLITIONSPHERE IT SERVICES LLP • FULL-STACK AI EVALUATION PLATFORM
              </h4>
              <span className="text-xs font-mono tracking-wider uppercase text-accent font-semibold">
                [ Solo Project • End-to-End Ownership ]
              </span>
            </div>

            {/* Concise 1-2 sentence overview */}
            <p className="font-serif text-lg leading-relaxed text-deep-dark/80 mb-6 max-w-4xl">
              Independently designed, developed, and tested a full-stack AI answer-sheet evaluation platform with complete solo ownership across frontend, backend APIs, and database architecture.
            </p>
            
            {/* 4 Impactful Responsibilities Bullets */}
            <ul className="space-y-3 font-serif text-lg text-deep-dark/85 mb-8 max-w-4xl">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">Full-Stack Development:</strong> Solely built the application end-to-end using Next.js, React.js, and FastAPI, delivering seamless teacher workflows and evaluation interfaces.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">MongoDB Database Design:</strong> Architected collections and data schemas for teachers, students, and evaluation records with optimized queries and RESTful APIs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">AI & OCR Integration:</strong> Integrated OCR extraction pipelines with LLM APIs to automate rubric-based handwritten answer-sheet grading.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">Feature Development & Testing:</strong> Built role-based teacher review workflows with manual score overrides, and conducted testing across 100 test papers to validate accuracy.
                </span>
              </li>
            </ul>

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
              <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">2024 – 2025</span>
            </div>
            
            <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest mb-6">
              NATIONAL SERVICE SCHEME (NSS) • COMMUNITY LEADERSHIP
            </h4>
            
            <ul className="space-y-3 font-serif text-lg text-deep-dark/85 max-w-4xl">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>Published 5+ official press reports covering university initiatives and social outreach programs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>Organized media documentation and volunteer coordination for state-level tree plantation drives.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>Collaborated with multidisciplinary teams to organize and document large-scale campus community events.</span>
              </li>
            </ul>
          </div>

          {/* 3. Event Management & Club Leadership (LINPACK CLUB) */}
          <div className="mb-20 pl-8 md:pl-16 relative">
            {/* Timeline Marker */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-deep-dark">Linpack Club – Event Management</h3>
              <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">
                September 2024 – March 2025
              </span>
            </div>
            
            <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest mb-6">
              TECHNICAL CLUB MANAGEMENT & EVENT LEADERSHIP
            </h4>
            
            <ul className="space-y-3 font-serif text-lg text-deep-dark/85 mb-8 max-w-4xl">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">Two-Day Event Anchoring (Dec 2024):</strong> Served as main stage anchor and host for the two-day flagship club event, driving audience engagement and directing real-time stage proceedings.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">Event Planning & Execution (Feb 2026):</strong> Managed task planning, operational progression, and on-ground volunteer coordination for a major technical club event.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">Team Coordination & Logistics:</strong> Oversaw cross-functional communication, logistics scheduling, and real-time operational troubleshooting.
                </span>
              </li>
            </ul>

            {/* Key Skills Badges */}
            <div className="mb-8">
              <div className="text-[10px] font-mono uppercase tracking-widest text-deep-dark/50 mb-2 font-semibold">
                Demonstrated Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Event Planning & Management',
                  'Public Speaking & Anchoring',
                  'Leadership & Coordination',
                  'Task Management',
                  'Event Execution',
                  'Team Coordination',
                  'Problem Solving'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-deep-dark/5 text-deep-dark/80 px-2.5 py-1 rounded border border-deep-dark/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Appointment Letter Action Bar */}
            <div className="pt-4 border-t border-deep-dark/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono uppercase tracking-widest text-deep-dark/60">
                <span className="font-semibold text-deep-dark/40 mr-2">APPOINTMENT:</span>
                <span>Core Member (Event Management Team) · Academic Year 2024–25</span>
              </div>

              <button
                onClick={() => setIsAppointmentModalOpen(true)}
                className="text-xs font-semibold tracking-widest uppercase border-b border-accent pb-0.5 text-accent hover:opacity-75 transition-opacity flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Appointment Letter</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 4. Hackathon Participant & Builder */}
          <div className="mb-20 pl-8 md:pl-16 relative">
            {/* Timeline Marker */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-3"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-deep-dark">Hackathon Participant & Builder</h3>
              <span className="text-sm font-semibold tracking-widest uppercase text-accent shrink-0">2023 – 2026</span>
            </div>
            
            <h4 className="text-sm md:text-base font-medium text-deep-dark/60 uppercase tracking-widest mb-6">
              RAPID PROTOTYPING & SYSTEM ARCHITECTURE
            </h4>
            
            <ul className="space-y-3 font-serif text-lg text-deep-dark/85 max-w-4xl">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">PromptX Hackathon Winner:</strong> Designed, built, and deployed the Smart Study Planner MVP in under 75 minutes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">2nd Runner-Up at Linpack Hackathon:</strong> Developed XURVA, a high-performance full-stack MERN e-commerce architecture with Stripe checkout.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-xs mt-1.5 shrink-0">✦</span>
                <span>
                  <strong className="font-semibold text-deep-dark">InnovaHack Finalist:</strong> Built Nucleus, a high-throughput GenAI context compression engine scaling context capacity to 200,000 characters.
                </span>
              </li>
            </ul>
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

      {/* OFFICIAL LINPACK CLUB APPOINTMENT LETTER MODAL */}
      <AnimatePresence>
        {isAppointmentModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAppointmentModalOpen(false)}
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
                    Linpack Club • VIT Bhopal
                  </span>
                  <span className="text-base font-serif font-semibold text-deep-dark">
                    Official Appointment Letter
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="/linpack-appointment-letter.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-widest uppercase border-b border-accent pb-0.5 text-accent hover:opacity-75 transition-opacity"
                  >
                    Open PDF ↗
                  </a>
                  <button
                    onClick={() => setIsAppointmentModalOpen(false)}
                    className="text-xs font-mono uppercase tracking-widest text-deep-dark/60 hover:text-accent transition-colors cursor-pointer ml-2"
                  >
                    Close ✕
                  </button>
                </div>
              </div>

              {/* Appointment Letter Image View */}
              <div className="bg-white border border-deep-dark/15 p-2 shadow-inner rounded-sm overflow-hidden flex items-center justify-center">
                <img
                  src="/linpack-appointment-letter.jpg"
                  alt="Linpack Club Appointment Letter - Core Member Event Management Team - Anushka Joshi"
                  className="w-full h-auto object-contain max-h-[72vh] shadow-sm"
                />
              </div>

              {/* Footer Credentials */}
              <div className="mt-3 pt-3 border-t border-deep-dark/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-deep-dark/60">
                <span>Anushka Joshi (23BCE10733) • Core Member</span>
                <span>Issued: 10th Sep 2024 • Academic Year 2024–25</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ExperienceTimeline;
