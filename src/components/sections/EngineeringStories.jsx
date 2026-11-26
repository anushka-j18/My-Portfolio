import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AiEvaluationVisual,
  NucleusVisual,
  FactForgeVisual,
  EcommerceVisual,
  StudyPlannerVisual,
  HistoriAiVisual,
  OrthoScanVisual,
  BadmintonVisual,
} from './ProjectVisuals';

const FILTER_CATEGORIES = [
  'All',
  'AI / GenAI',
  'Full Stack',
  'Computer Vision',
  'Backend Engineering',
];

const projects = [
  {
    id: '01',
    title: 'AI Evaluation System',
    subtitle: 'AI-Powered Answer Sheet Evaluation System',
    filterCategories: ['AI / GenAI', 'Full Stack'],
    note: '🏆 VolitionSphere Internship • Solo Project',
    description:
      'Full-stack AI platform automating handwritten answer-sheet evaluation using OCR and LLMs, featuring role-based teacher review workflows and verified scoring.',
    tech: ['Next.js', 'React.js', 'FastAPI', 'Python', 'MongoDB', 'OCR', 'LLM APIs'],
    highlights: [
      'Solo full-stack development with end-to-end ownership across frontend, backend APIs, and MongoDB schemas.',
      'Automated OCR extraction pipeline and rubric-driven LLM scoring validated on 100 test papers.',
      'Role-based teacher dashboard with manual score verification, feedback overrides, and batch export.'
    ],
    extendedFeatures: [
      'Configurable grading modes tailored for various subject rubrics.',
      'Automated fallback mechanisms ensuring human review on low-confidence extractions.'
    ],
    challenges: [
      'Extracting handwritten answers reliably across diverse handwriting styles.',
      'Strict rubric prompt engineering to prevent model hallucination and grading drift.',
      'Architecting scalable MongoDB collections for teachers, students, and evaluation records.'
    ],
    timeline: { duration: '2 Months', period: '1 May 2026 – 30 June 2026' },
    githubLink: 'https://github.com/anushka-j18/AI-EVALUATION-SYSTEM',
    liveLink: 'https://ai-evaluation-system-1mz4.vercel.app/',
    experienceLink: '#experience',
    VisualComponent: AiEvaluationVisual,
  },
  {
    id: '02',
    title: 'Nucleus',
    subtitle: 'GenAI Context Compression Engine',
    filterCategories: ['AI / GenAI', 'Backend Engineering'],
    note: '🏆 InnovaHack Finalist',
    description:
      'High-performance context compression engine that optimizes LLM token efficiency and memory retention through two-stage intelligent semantic chunking.',
    tech: ['Python', 'FastAPI', 'LLMs', 'Embeddings', 'Pydantic'],
    highlights: [
      'Scaled supported context capacity from ~500 to 200,000 characters while preserving critical semantic context.',
      'Engineered two-stage semantic chunking and embedding retrieval validated with strict Pydantic models.',
      'Selected as a Finalist in the InnovaHack hackathon among competitive nationwide submissions.'
    ],
    extendedFeatures: [
      'Intelligent conversation history management within tight LLM context windows.',
      'FastAPI-based async architecture designed for high-throughput batch compression.'
    ],
    challenges: [
      'Preserving semantic continuity while compressing long conversational histories.',
      'Balancing embedding lookups with ultra-low latency response requirements.'
    ],
    timeline: { duration: 'Hackathon', period: 'InnovaHack Finalist' },
    VisualComponent: NucleusVisual,
  },
  {
    id: '03',
    title: 'FactForge',
    subtitle: 'AI-Powered Fact Verification System',
    filterCategories: ['AI / GenAI', 'Full Stack'],
    note: 'Multi-Agent AI Architecture',
    description:
      'Autonomous multi-agent platform coordinating specialized AI agents to cross-examine digital claims, analyze evidence, and generate transparent confidence ratings.',
    tech: ['Next.js', 'React.js', 'FastAPI', 'Python', 'PostgreSQL', 'Grok API', 'OCR'],
    highlights: [
      'Multi-agent architecture coordinating dedicated Retrieval, Verification, and Synthesis agents.',
      'Automated evidence cross-referencing generating calibrated, objective confidence ratings.',
      'Centralized orchestration state machine with transition tracking and structured audit logging.'
    ],
    extendedFeatures: [
      'Local LLM inference and OCR exploration for offline document fact-checking.',
      'Conflict resolution algorithms for reconciling contradictory source claims.'
    ],
    challenges: [
      'Orchestrating concurrent agent tasks without race conditions or state desynchronization.',
      'Synthesizing conflicting evidentiary sources into calibrated confidence ratings.'
    ],
    timeline: { duration: 'Multi-Agent AI', period: 'Research & Production' },
    VisualComponent: FactForgeVisual,
  },
  {
    id: '04',
    title: 'XURVA',
    subtitle: 'High-Performance E-Commerce Platform',
    filterCategories: ['Full Stack'],
    note: '🏆 2nd Runner-Up • Linpack Hackathon',
    description:
      'Production-grade MERN shopping platform built with atomic inventory management, JWT user authentication, and secure Stripe payment processing.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    highlights: [
      'Complete end-to-end MERN architecture managing product catalog, inventory state, and order lifecycles.',
      'Integrated Stripe Checkout with secure webhook verification and atomic inventory updates.',
      'Awarded 2nd Runner-Up at the Linpack Intra-Club Hackathon for architecture and responsive UX.'
    ],
    extendedFeatures: [
      'JWT authentication with secure HTTP-only cookies and role-based route guards.',
      'Optimistic UI state updates for immediate cart and checkout feedback.'
    ],
    challenges: [
      'Designing a scalable REST API architecture for concurrent order placement.',
      'Maintaining absolute database consistency during active checkout sessions.'
    ],
    timeline: { duration: '1 Month', period: 'Dec 2025 – Jan 2026' },
    githubLink: 'https://github.com/anushka-j18/XURVA',
    liveLink: 'https://v0-e-commerce-website-v0.vercel.app/',
    VisualComponent: EcommerceVisual,
  },
  {
    id: '05',
    title: 'Study Planner',
    subtitle: 'Smart Student Productivity Web App',
    filterCategories: ['Full Stack'],
    note: '🏆 PromptX Hackathon Winner (75 Mins)',
    description:
      'Intuitive academic scheduling platform featuring interactive drag-and-drop weekly timetables, built-in Pomodoro timers, and automated grade calculations.',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    highlights: [
      'Designed, built, and deployed end-to-end within a strict 75-minute hackathon challenge.',
      'Interactive weekly timetable with drag-and-drop rescheduling and assignment tracking.',
      'Won 1st Place at the PromptX Hackathon organized by the CSI chapter.'
    ],
    extendedFeatures: [
      'Customizable reminder notifications and Pomodoro study timer sessions.',
      'Supabase PostgreSQL integration with real-time state synchronization.'
    ],
    challenges: [
      'Delivering a fully responsive, bug-free web application under high time pressure.',
      'Implementing fluid drag-and-drop timetable reordering without layout glitches.'
    ],
    timeline: { duration: '75 Mins', period: 'PromptX Hackathon Winner' },
    githubLink: 'https://github.com/anushka-j18/Studyplannerr',
    liveLink: 'https://v0-study-planner-website-57.vercel.app/',
    VisualComponent: StudyPlannerVisual,
  },
  {
    id: '06',
    title: 'Histori.Ai',
    subtitle: 'AI-Powered Heritage & Monument Discovery',
    filterCategories: ['AI / GenAI', 'Computer Vision'],
    note: 'Role: Frontend Developer • 92% Accuracy',
    description:
      'Heritage exploration platform combining YOLOv8 computer vision for instant monument recognition with interactive 3D visualizations and AI itinerary guides.',
    tech: ['React.js', 'Three.js', 'Python', 'YOLOv8', 'Google Maps API', 'OpenAI API'],
    highlights: [
      'Engineered interactive 3D monument visualizations using React Three Fiber and Three.js.',
      'Integrated custom YOLOv8 model achieving 92% monument detection accuracy.',
      'Connected Google Maps routing with OpenAI conversational assistance for smart itineraries.'
    ],
    extendedFeatures: [
      'Optimized high-poly 3D mesh rendering for seamless mobile and desktop frame rates.',
      'Context-aware conversational bot delivering localized historical trivia on demand.'
    ],
    challenges: [
      'Rendering complex 3D monument meshes with minimal latency on mobile browsers.',
      'Ensuring high detection reliability across diverse outdoor lighting conditions.'
    ],
    timeline: { duration: '2 Months', period: 'Feb 2026 – Apr 2026' },
    VisualComponent: HistoriAiVisual,
  },
  {
    id: '07',
    title: 'OrthoScan',
    subtitle: 'AI-Based Orthopedic Image Analysis',
    filterCategories: ['AI / GenAI', 'Computer Vision'],
    note: 'Computer Vision & ONNX Optimization',
    description:
      'Radiological computer vision pipeline utilizing YOLOv7 and optimized ONNX runtime for rapid, high-precision orthopedic radiographic analysis.',
    tech: ['Python', 'YOLOv7', 'ONNX Runtime', 'OpenCV'],
    highlights: [
      'YOLOv7 object detection pipeline trained for localized radiographic fracture detection.',
      'Optimized PyTorch model export to ONNX runtime for rapid, low-latency CPU/GPU inference.',
      'Standardized medical image pre-processing and contrast normalization pipeline.'
    ],
    extendedFeatures: [
      'Benchmarked inference speed across raw PyTorch vs. quantized ONNX models.',
      'Evaluated precision-recall curves on challenging radiographic joint scans.'
    ],
    challenges: [
      'Exporting PyTorch weights to quantized ONNX format for accelerated inference.',
      'Evaluating precision boundaries for orthopedic joint and fracture localization.'
    ],
    timeline: { duration: 'Computer Vision', period: 'Research MVP' },
    VisualComponent: OrthoScanVisual,
  },
  {
    id: '08',
    title: 'Badminton Score Counter',
    subtitle: 'Responsive Match-Tracking Web App',
    filterCategories: ['Full Stack'],
    note: 'Side Project • MatchMeter',
    description:
      'Clean, responsive scorekeeping application built for effortless match tracking, customizable points-to-win rules, and instant game resets.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Touch-friendly interface optimized for rapid courtside mobile score entry.',
      'Customizable match rules including sudden death, points-to-win, and set histories.',
      'Zero-latency client-side state management with instant game resets.'
    ],
    extendedFeatures: [
      'Complete historical set record keeping and score summary view.',
      'Lightweight, responsive layout tested across mobile viewports.'
    ],
    challenges: [
      'Designing an intuitive and accessible UI for quick score recording under physical activity.',
      'Managing application state cleanly for match history and game resets.'
    ],
    timeline: { duration: '1 Day', period: 'Side Project' },
    githubLink: 'https://github.com/anushka-j18/MatchMeter---Badminton-Score-Counter',
    liveLink: 'https://v0-badminton-score-counter.vercel.app/',
    VisualComponent: BadmintonVisual,
  }
];

const EngineeringStories = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleDetails = (id) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.filterCategories.includes(selectedFilter);
  });

  return (
    <section id="projects" className="w-full bg-off-white text-deep-dark py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-deep-dark/20 pb-8 gap-6">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 03</span>
            <h2 className="text-5xl md:text-7xl font-serif">ENGINEERING<br/>STORIES</h2>
          </div>
          <p className="text-sm uppercase tracking-widest font-semibold text-deep-dark/40 max-w-xs text-right hidden md:block">
            Documenting the architecture and execution of complex systems.
          </p>
        </div>

        {/* Editorial Category Filter Tabs */}
        <div className="mb-20 flex flex-wrap items-center gap-6 md:gap-10 border-b border-deep-dark/10 pb-6 text-xs font-semibold tracking-widest uppercase">
          <span className="text-deep-dark/40">Category /</span>
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`relative py-1 transition-colors cursor-pointer ${
                  isActive ? 'text-accent font-bold' : 'text-deep-dark/60 hover:text-deep-dark'
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="filterIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stories List */}
        <div className="flex flex-col gap-24">
          {filteredProjects.map((project, index) => {
            const Visual = project.VisualComponent;
            const isExpanded = !!expandedProjects[project.id];

            return (
              <div 
                key={project.id} 
                className={`flex flex-col gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                
                {/* Visual / Architecture Diagram */}
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-soft-gray relative group overflow-hidden border border-deep-dark/10">
                  <Visual />
                  <div className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase text-white/90 z-20 bg-deep-dark/70 px-2.5 py-1 rounded backdrop-blur-sm">
                    Fig. {project.id}
                  </div>
                </div>

                {/* Story Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center xl:px-8">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-accent font-serif text-2xl italic">No. {project.id}</span>
                    {project.note && (
                      <span className="text-[11px] font-mono tracking-wider uppercase text-accent font-semibold px-2.5 py-0.5 bg-accent/5 rounded border border-accent/20">
                        {project.note}
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif mb-1 leading-tight">{project.title}</h3>
                  <h4 className="text-xs md:text-sm font-medium text-deep-dark/60 mb-4 uppercase tracking-wider">{project.subtitle}</h4>

                  {/* Crisp 2-line description */}
                  <p className="text-base text-deep-dark/80 leading-relaxed mb-5 font-serif">
                    {project.description}
                  </p>

                  {/* Compact Tech Badges */}
                  <div className="mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-deep-dark/50 mb-2 font-semibold">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="text-xs font-mono bg-deep-dark/5 text-deep-dark/80 px-2 py-0.5 rounded border border-deep-dark/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top 3 Key Highlights */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-deep-dark/50 mb-2 font-semibold">
                      Key Technical Highlights
                    </div>
                    <ul className="space-y-2 text-sm text-deep-dark/85 font-serif">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 leading-snug">
                          <span className="text-accent font-bold text-xs mt-0.5 shrink-0">✦</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-deep-dark/10 pt-4 mb-6 space-y-4"
                      >
                        {project.extendedFeatures && (
                          <div>
                            <h5 className="text-[10px] font-mono uppercase tracking-widest text-deep-dark/50 mb-1.5 font-semibold">
                              Additional Features
                            </h5>
                            <ul className="list-disc list-outside ml-4 text-xs font-serif text-deep-dark/80 space-y-1">
                              {project.extendedFeatures.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.challenges && (
                          <div>
                            <h5 className="text-[10px] font-mono uppercase tracking-widest text-deep-dark/50 mb-1.5 font-semibold">
                              Engineering Challenges Tackled
                            </h5>
                            <ul className="list-disc list-outside ml-4 text-xs font-serif text-deep-dark/80 space-y-1">
                              {project.challenges.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.timeline && (
                          <div className="text-xs font-mono text-deep-dark/60 pt-2 border-t border-deep-dark/5 flex flex-wrap gap-4">
                            <span><strong className="text-deep-dark/80">Duration:</strong> {project.timeline.duration}</span>
                            <span><strong className="text-deep-dark/80">Timeline:</strong> {project.timeline.period}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-deep-dark/10">
                    <button
                      onClick={() => toggleDetails(project.id)}
                      className="text-xs font-semibold tracking-widest uppercase border-b border-deep-dark/40 pb-0.5 text-deep-dark/80 hover:text-accent hover:border-accent transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      <span>{isExpanded ? '▴' : '▾'}</span>
                    </button>

                    <div className="flex items-center gap-5">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs font-semibold tracking-widest uppercase border-b border-deep-dark pb-0.5 hover:text-accent hover:border-accent transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs font-semibold tracking-widest uppercase border-b border-accent pb-0.5 text-accent hover:opacity-80 transition-opacity"
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {project.experienceLink && (
                        <a 
                          href={project.experienceLink} 
                          className="text-xs font-semibold tracking-widest uppercase border-b border-accent pb-0.5 text-accent hover:opacity-80 transition-opacity"
                        >
                          Experience →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EngineeringStories;
