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

// Inline Icons for maximum reliability and styling fidelity
const Icons = {
  Github: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  ChevronDown: ({ expanded }) => (
    <svg className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Check: () => (
    <svg className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Award: () => (
    <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.396 1.156l-1.042 3.864 2.87 2.656a1 1 0 01-.557 1.708l-3.957.575-1.767 3.593a1 1 0 01-1.794 0l-1.767-3.593-3.957-.575a1 1 0 01-.557-1.708l2.87-2.656-1.042-3.864a1 1 0 011.396-1.156l1.599.8L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  ),
  Filter: () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
};

const FILTER_CATEGORIES = [
  'All',
  'AI / GenAI',
  'Full Stack',
  'Computer Vision',
  'Backend Engineering',
];

const projectsData = [
  {
    id: '01',
    slug: 'ai-evaluation-system',
    title: 'AI-Powered Answer Sheet Evaluation System',
    shortTitle: 'AI Evaluation System',
    category: 'AI / Full Stack Development',
    badge: 'Internship Project • VolitionSphere IT Services LLP',
    duration: '1/05/2026 – 30/06/2026',
    role: 'Intern (Solo Developer)',
    filterCategories: ['AI / GenAI', 'Full Stack'],
    description:
      'An AI-powered digital evaluation platform that automates answer-sheet assessment using OCR and Large Language Models while maintaining a human-in-the-loop review process. Independently designed and developed as an internship project at VolitionSphere IT Services LLP.',
    tech: ['Next.js', 'React.js', 'Python', 'FastAPI', 'PostgreSQL', 'OCR', 'LLM APIs'],
    features: [
      'Automated answer-sheet text extraction using OCR.',
      'AI-powered answer evaluation and grading.',
      'Configurable grading modes.',
      'Human review and verification workflow.',
      'Teacher-oriented evaluation dashboard.',
      'Validation using a collection of 100 test papers.',
    ],
    timeline: { duration: '2 Months', period: '1/05/2026 – 30/06/2026' },
    challenges: [
      'Extracting handwritten answers reliably across varied handwriting styles.',
      'Designing scalable evaluation workflows with automated fallback to human review.',
      'Maintaining evaluation consistency through strict rubric-prompt engineering.',
      'Managing large teacher allocations and batch CSV exports.',
    ],
    metrics: [
      { label: 'Internship', value: 'VolitionSphere LLP' },
      { label: 'Duration', value: '1/05/2026 – 30/06/2026' },
      { label: 'Role & Ownership', value: 'Intern (Solo Project)' },
      { label: 'Validation Set', value: '100 Test Papers' },
    ],
    experienceLink: '#experience',
    githubLink: 'https://github.com/anushka-j18/AI-EVALUATION-SYSTEM',
    liveLink: 'https://ai-evaluation-system-1mz4.vercel.app/',
    VisualComponent: AiEvaluationVisual,
  },
  {
    id: '02',
    slug: 'nucleus-context-compression',
    title: 'Nucleus – GenAI Context Compression Engine',
    shortTitle: 'Nucleus Engine',
    category: 'Generative AI / Backend Engineering',
    filterCategories: ['AI / GenAI', 'Backend Engineering'],
    description:
      'A GenAI-powered context compression engine designed to optimize large language model context utilization through intelligent chunking and compression strategies.',
    tech: ['Python', 'FastAPI', 'LLMs', 'Embeddings', 'Pydantic'],
    features: [
      'Two-stage intelligent chunking and compression.',
      'Optimized context management.',
      'Increased supported context capacity from approximately 500 to 200,000 characters.',
      'Conversation history management within the context window.',
      'FastAPI-based backend architecture.',
      'Comprehensive verification and testing.',
    ],
    achievement: 'Selected for the InnovaHack final round',
    metrics: [
      { label: 'Context Expansion', value: '500 → 200k chars' },
      { label: 'Chunking Stages', value: '2-Stage Semantic' },
      { label: 'Status', value: 'InnovaHack Finalist' },
    ],
    challenges: [
      'Preserving semantic continuity while compressing long conversational histories.',
      'Balancing embedding lookups with ultra-low latency response requirements.',
      'Handling arbitrary character length inputs safely with strict Pydantic schemas.',
    ],
    githubLink: null,
    liveLink: null,
    VisualComponent: NucleusVisual,
  },
  {
    id: '03',
    slug: 'factforge-multi-agent',
    title: 'FactForge – AI-Powered Fact Verification System',
    shortTitle: 'FactForge',
    category: 'Multi-Agent AI / Full Stack Development',
    filterCategories: ['AI / GenAI', 'Full Stack'],
    description:
      'An intelligent multi-agent fact verification platform designed to research, analyze, verify, and synthesize information through coordinated AI agents.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Grok API', 'OCR'],
    features: [
      'Research and Retrieval Agent.',
      'Verification and Detection Agent.',
      'Information synthesis.',
      'Confidence scoring mechanism.',
      'Centralized orchestration and state management.',
      'Transition tracking and structured logging.',
      'OCR and local LLM integration exploration.',
    ],
    metrics: [
      { label: 'Agent Topology', value: 'Multi-Agent Swarm' },
      { label: 'Inference Engine', value: 'Grok API + Local LLM' },
      { label: 'Verification', value: 'Confidence Scoring' },
    ],
    challenges: [
      'Orchestrating concurrent agent tasks without race conditions or deadlocks.',
      'Synthesizing conflicting evidentiary sources into calibrated confidence ratings.',
      'Structured logging of agent transitions for real-time auditability.',
    ],
    githubLink: null,
    liveLink: null,
    VisualComponent: FactForgeVisual,
  },
  {
    id: '04',
    slug: 'full-stack-ecommerce',
    title: 'Full-Stack E-Commerce Platform',
    shortTitle: 'XURVA E-Commerce',
    category: 'Full Stack Development',
    filterCategories: ['Full Stack'],
    description:
      'A full-stack e-commerce application designed to provide a seamless online shopping experience with product management, shopping cart functionality, backend APIs, and secure payment integration.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    features: [
      'Product browsing and listing.',
      'Shopping cart management.',
      'REST API integration.',
      'MongoDB database integration.',
      'Stripe payment gateway integration.',
      'Responsive user interface.',
    ],
    achievement: '2nd Runner-Up – Linpack Hackathon',
    timeline: { duration: '1 Month', period: 'Dec 2025 - Jan 2026' },
    metrics: [
      { label: 'Payment Gateway', value: 'Stripe API' },
      { label: 'Recognition', value: '2nd Runner-Up' },
      { label: 'Architecture', value: 'Full-Stack MERN' },
    ],
    challenges: [
      'Designing a scalable REST API architecture for product, order, and user management.',
      'Implementing secure JWT authentication with protected routes and role-based access.',
      'Integrating Stripe Checkout while ensuring reliable payment verification.',
      'Maintaining inventory consistency during concurrent order placement.',
    ],
    githubLink: 'https://github.com/anushka-j18/XURVA',
    liveLink: 'https://v0-e-commerce-website-v0.vercel.app/',
    VisualComponent: EcommerceVisual,
  },
  {
    id: '05',
    slug: 'smart-study-planner',
    title: 'Smart Study Planner',
    shortTitle: 'Study Planner',
    category: 'Full Stack / Productivity',
    filterCategories: ['Full Stack'],
    description:
      'A modern, intuitive study planner web app built with Next.js and React to help students manage classes, assignments, and deadlines with smart reminders. Built during the PromptX Hackathon to design and build a functional MVP in 75 minutes.',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: [
      'Interactive weekly timetable with drag-and-drop.',
      'Assignment tracker.',
      'Built-in Pomodoro study timer.',
      'Customizable reminders.',
      'Grade calculator.',
    ],
    achievement: 'PromptX Hackathon Winner',
    timeline: { duration: '75 Mins', period: 'PromptX Hackathon' },
    metrics: [
      { label: 'Build Duration', value: '75 Minutes' },
      { label: 'Award', value: 'Hackathon Winner' },
      { label: 'Database', value: 'Supabase / Postgres' },
    ],
    challenges: [
      'Architecting and delivering a fully functional prototype under a strict 75-minute limit.',
      'Implementing drag-and-drop timetable reordering smoothly with modern state handling.',
      'Integrating Pomodoro countdown state with background audio notifications.',
    ],
    githubLink: 'https://github.com/anushka-j18/Studyplannerr',
    liveLink: 'https://v0-study-planner-website-57.vercel.app/',
    VisualComponent: StudyPlannerVisual,
  },
  {
    id: '06',
    slug: 'histori-ai',
    title: 'Histori.Ai – AI-Powered Heritage & Monument Discovery',
    shortTitle: 'Histori.Ai',
    category: 'AI / Computer Vision / Travel Technology',
    filterCategories: ['AI / GenAI', 'Computer Vision'],
    description:
      'An AI-powered heritage discovery platform that combines computer vision, interactive mapping, 3D visualization, and conversational AI to make monument exploration more engaging.',
    tech: ['Python', 'YOLOv8', 'React.js', 'Three.js', 'React Three Fiber', 'Google Maps API', 'OpenAI API'],
    features: [
      'AI-powered monument recognition using YOLOv8.',
      'Reported monument detection accuracy of 92%.',
      'Interactive smart map using Google Maps API.',
      'AI-powered itinerary planning.',
      'Interactive 3D monument visualization.',
      'Conversational AI assistance.',
    ],
    role: 'Frontend Developer',
    timeline: { duration: '2 Months', period: 'Feb 2026 - Apr 2026' },
    metrics: [
      { label: 'Model Accuracy', value: '92% Reported' },
      { label: 'Role', value: 'Frontend Developer' },
      { label: '3D Graphics', value: 'Three.js / R3F' },
    ],
    challenges: [
      'Rendering complex 3D monument meshes with minimal latency on mobile browsers.',
      'Syncing Google Maps geolocation markers with real-time camera recognition targets.',
      'Integrating conversational AI guidance alongside interactive visual canvas.',
    ],
    githubLink: null,
    liveLink: null,
    VisualComponent: HistoriAiVisual,
  },
  {
    id: '07',
    slug: 'orthoscan-image-analysis',
    title: 'OrthoScan – AI-Based Orthopedic Image Analysis',
    shortTitle: 'OrthoScan',
    category: 'Machine Learning / Computer Vision',
    filterCategories: ['AI / GenAI', 'Computer Vision'],
    description:
      'A computer vision-based project focused on orthopedic image analysis using object detection models and optimized ONNX inference.',
    tech: ['YOLOv7', 'ONNX', 'Python'],
    features: [
      'YOLOv7-based computer vision pipeline.',
      'ONNX model integration.',
      'Image inference and analysis.',
      'Model deployment and optimization exploration.',
    ],
    metrics: [
      { label: 'Vision Model', value: 'YOLOv7' },
      { label: 'Runtime Engine', value: 'ONNX Optimized' },
      { label: 'Domain', value: 'Orthopedic CV' },
    ],
    challenges: [
      'Exporting PyTorch weights to quantized ONNX format for accelerated CPU/GPU inference.',
      'Pre-processing high-resolution radiographic scans with uniform aspect ratio normalization.',
      'Exploration of deployment containerization for edge inference.',
    ],
    githubLink: null,
    liveLink: null,
    VisualComponent: OrthoScanVisual,
  },
  {
    id: '08',
    slug: 'badminton-score-counter',
    title: 'Badminton Score Counter',
    shortTitle: 'MatchMeter',
    category: 'Full Stack Development',
    filterCategories: ['Full Stack'],
    description:
      'A simple and responsive Badminton Score Counter built for quick and accurate match tracking with customizable game settings, score resets, and match history viewing.',
    tech: ['React.js', 'Tailwind CSS', 'v0', 'Vercel'],
    features: [
      'Record scores and reset games.',
      'Adjust points-to-win settings.',
      'View match history with ease.',
      'Lightweight, mobile-first responsive design.',
    ],
    timeline: { duration: '1 Day', period: 'Side Project' },
    metrics: [
      { label: 'Deployment', value: 'Vercel Continuous' },
      { label: 'UI Speed', value: 'Instant Touch' },
      { label: 'Platform', value: 'Mobile-First' },
    ],
    challenges: [
      'Designing an intuitive and accessible UI for quick touch score recording during matches.',
      'Managing lightweight client-side state for match history and game resets.',
    ],
    githubLink: 'https://github.com/anushka-j18/MatchMeter---Badminton-Score-Counter',
    liveLink: 'https://v0-badminton-score-counter.vercel.app/',
    VisualComponent: BadmintonVisual,
  },
];

const EngineeringStories = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.filterCategories.includes(selectedFilter);
  });

  return (
    <section id="projects" className="w-full bg-off-white text-deep-dark py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-deep-dark/20 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase">
                Section 03
              </span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-deep-dark/50 text-xs font-mono uppercase tracking-widest">
                Selected Works (2025–2026)
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-none tracking-tight">
              ENGINEERING<br />STORIES
            </h2>
          </div>
          <div className="max-w-md text-left md:text-right">
            <p className="text-xs uppercase tracking-widest font-semibold text-deep-dark/50 leading-relaxed">
              Documenting the architecture, models, and execution of production systems across AI, Generative Engines, Full-Stack Applications, and Computer Vision.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mb-16 flex flex-wrap items-center gap-2 md:gap-3 border-b border-deep-dark/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-deep-dark/40 mr-2 shrink-0">
            <Icons.Filter />
            <span>Filter:</span>
          </div>
          {FILTER_CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.filterCategories.includes(cat)).length;
            const isActive = selectedFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`group relative px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-deep-dark text-off-white shadow-sm'
                    : 'bg-deep-dark/5 text-deep-dark/70 hover:bg-deep-dark/10 hover:text-deep-dark'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'bg-deep-dark/10 text-deep-dark/60 group-hover:bg-deep-dark/20'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Stream */}
        <motion.div layout className="flex flex-col gap-24 md:gap-32">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isExpanded = !!expandedProjects[project.id];
              const Visual = project.VisualComponent;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border border-deep-dark/10 rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-shadow duration-500 overflow-hidden"
                >
                  {/* Card Main Body */}
                  <div className="p-6 md:p-10 lg:p-12">
                    <div
                      className={`flex flex-col lg:flex-row gap-10 xl:gap-14 ${
                        index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                      } items-stretch`}
                    >
                      {/* Left/Right Visual Diagram Frame */}
                      <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="relative group overflow-hidden rounded-sm flex-1">
                          <Visual />
                          <div className="absolute top-3 left-3 z-20 bg-deep-dark/80 backdrop-blur-md text-off-white px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase rounded">
                            Fig. {project.id}
                          </div>
                        </div>

                        {/* Quick Metrics Bar below visual */}
                        {project.metrics && (
                          <div className={`grid ${project.metrics.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-3'} gap-2 mt-3 pt-3 border-t border-deep-dark/10 text-center`}>
                            {project.metrics.map((m, idx) => (
                              <div key={idx} className="bg-deep-dark/[0.02] p-2 rounded border border-deep-dark/5">
                                <span className="block text-[9px] font-mono uppercase text-deep-dark/40 tracking-wider">
                                  {m.label}
                                </span>
                                <span className="text-xs font-semibold text-deep-dark truncate block mt-0.5">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right/Left Story Content */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div>
                          {/* Eyebrow & Badges */}
                          <div className="flex flex-wrap items-center gap-2.5 mb-4">
                            <span className="text-accent font-serif text-2xl italic">
                              No. {project.id}
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-deep-dark/40 bg-deep-dark/5 px-2.5 py-1 rounded">
                              {project.category}
                            </span>

                            {project.badge && (
                              <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded">
                                {project.badge}
                              </span>
                            )}

                            {project.duration && (
                              <span className="text-xs font-mono font-medium text-deep-dark/70 bg-deep-dark/5 px-2.5 py-1 rounded">
                                {project.duration}
                              </span>
                            )}

                            {project.achievement && (
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded">
                                <Icons.Award />
                                <span>{project.achievement}</span>
                              </span>
                            )}

                            {project.role && (
                              <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded">
                                Role: {project.role}
                              </span>
                            )}
                          </div>

                          {/* Title & Subtitle */}
                          <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight text-deep-dark">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-base md:text-lg font-light text-deep-dark/80 leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* Tech Stack Chips */}
                          <div className="mb-6">
                            <h5 className="text-[11px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-2.5">
                              Technologies & Tools
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs font-mono text-deep-dark/80 bg-deep-dark/[0.04] hover:bg-deep-dark/[0.08] transition-colors border border-deep-dark/10 px-2.5 py-1 rounded"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features Preview (Initial 3 highlights) */}
                          <div className="border-t border-deep-dark/10 pt-5 mb-6">
                            <h5 className="text-[11px] font-semibold tracking-widest uppercase text-deep-dark/40 mb-3">
                              Core Architecture Highlights
                            </h5>
                            <ul className="space-y-2 text-sm text-deep-dark/80">
                              {project.features.slice(0, 3).map((feat, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <Icons.Check />
                                  <span className="leading-snug">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Interactive Expand Toggle & Links */}
                        <div className="pt-6 border-t border-deep-dark/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
                          {/* Expandable Toggle Button */}
                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent hover:text-accent/80 transition-colors py-2 cursor-pointer"
                          >
                            <span>{isExpanded ? 'Hide Technical Details' : 'View Full Architecture & Specs'}</span>
                            <Icons.ChevronDown expanded={isExpanded} />
                          </button>

                          {/* Action Links */}
                          <div className="flex items-center gap-3">
                            {project.githubLink ? (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-widest uppercase border border-deep-dark/20 text-deep-dark hover:border-accent hover:text-accent transition-colors rounded-sm"
                              >
                                <Icons.Github />
                                <span>GitHub</span>
                              </a>
                            ) : null}

                            {project.liveLink ? (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase bg-accent text-off-white hover:bg-deep-dark transition-colors rounded-sm shadow-sm"
                              >
                                <span>Live Demo</span>
                                <Icons.ExternalLink />
                              </a>
                            ) : null}

                            {!project.githubLink && !project.liveLink && (
                              <span className="text-[11px] font-mono text-deep-dark/40 bg-deep-dark/5 px-3 py-1.5 rounded">
                                Architecture Documentation
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Technical Details Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden border-t border-deep-dark/10 mt-8 pt-8"
                        >
                          <div className="bg-deep-dark/[0.02] p-6 md:p-8 rounded border border-deep-dark/5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                              {/* Full Features Breakdown */}
                              <div>
                                <h4 className="text-xs font-semibold tracking-widest-lg uppercase text-accent mb-4 flex items-center gap-2">
                                  <span>All Engineered Features</span>
                                  <span className="text-[10px] font-mono text-deep-dark/40">
                                    ({project.features.length})
                                  </span>
                                </h4>
                                <ul className="space-y-2.5 text-sm text-deep-dark/80">
                                  {project.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                      <Icons.Check />
                                      <span className="leading-relaxed">{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Engineering Challenges & Timeline */}
                              <div className="space-y-6">
                                {project.challenges && (
                                  <div>
                                    <h4 className="text-xs font-semibold tracking-widest-lg uppercase text-accent mb-3">
                                      Engineering Challenges & Solutions
                                    </h4>
                                    <ul className="space-y-2 text-sm text-deep-dark/80 list-disc list-outside ml-4">
                                      {project.challenges.map((c, i) => (
                                        <li key={i} className="leading-relaxed pl-1 font-serif text-base">
                                          {c}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {project.timeline && (
                                  <div className="pt-4 border-t border-deep-dark/10 flex items-center justify-between text-xs font-mono text-deep-dark/60">
                                    <span>TIMELINE: {project.timeline.duration}</span>
                                    <span>{project.timeline.period}</span>
                                  </div>
                                )}

                                {project.experienceLink && (
                                  <div className="pt-3 flex justify-end">
                                    <a
                                      href={project.experienceLink}
                                      className="text-xs font-semibold tracking-widest uppercase border-b border-accent pb-0.5 text-accent hover:opacity-75 transition-opacity"
                                    >
                                      View Internship Details in Experience Section →
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Section Footer / Callout */}
        <div className="mt-20 pt-10 border-t border-deep-dark/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="font-serif text-xl italic text-deep-dark/80">
              "Building scalable systems at the intersection of Generative AI, Computer Vision, and Modern Full-Stack Architecture."
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold tracking-widest uppercase bg-deep-dark text-off-white px-6 py-3 hover:bg-accent transition-colors rounded-sm shrink-0"
          >
            Discuss a Project →
          </a>
        </div>

      </div>
    </section>
  );
};

export default EngineeringStories;
