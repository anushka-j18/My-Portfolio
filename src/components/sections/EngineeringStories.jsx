import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    note: '🏆 Internship Project • VolitionSphere IT Services LLP (1/05/2026 – 30/06/2026)',
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> Manual evaluation is time-consuming, inconsistent, and difficult to scale across large classrooms.{'\n\n'}
        Educational institutions spend countless hours manually evaluating handwritten answer sheets. AI Evaluation System streamlines this workflow by combining OCR, AI-assisted evaluation, and a role-based dashboard into a single platform that improves consistency, reduces manual effort, and provides actionable analytics for educators. Independently designed and developed as an internship project at VolitionSphere IT Services LLP with end-to-end full-stack ownership.
      </>
    ),
    tech: ['Next.js', 'React.js', 'Python', 'FastAPI', 'PostgreSQL', 'OCR', 'LLM APIs'],
    features: [
      'Automated answer-sheet text extraction using OCR',
      'AI-powered answer evaluation and grading',
      'Configurable grading modes',
      'Human review and verification workflow',
      'Teacher-oriented evaluation dashboard',
      'Validation using a collection of 100 test papers'
    ],
    timeline: { duration: '2 Months', period: '1/05/2026 – 30/06/2026' },
    challenges: [
      'Extracting handwritten answers reliably across varied handwriting styles',
      'Designing scalable evaluation workflows with automated fallback to human review',
      'Maintaining evaluation consistency through strict rubric-prompt engineering',
      'Managing large teacher allocations and batch CSV exports'
    ],
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
    note: '🏆 Selected for the InnovaHack Final Round',
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> LLM context windows quickly saturate during extended conversational sessions and multi-turn workflows, leading to excessive token consumption and memory degradation.{'\n\n'}
        Nucleus is a GenAI-powered context compression engine designed to optimize large language model context utilization through intelligent chunking and compression strategies. The engine scales supported context capacity from approximately 500 to 200,000 characters while preserving essential semantic memory through a high-performance FastAPI backend.
      </>
    ),
    tech: ['Python', 'FastAPI', 'LLMs', 'Embeddings', 'Pydantic'],
    features: [
      'Two-stage intelligent chunking and compression',
      'Optimized context management',
      'Capacity scaled from 500 to 200,000 characters',
      'Conversation history management within context window',
      'FastAPI-based backend architecture',
      'Comprehensive verification and testing'
    ],
    timeline: { duration: 'Hackathon', period: 'InnovaHack Finalist' },
    challenges: [
      'Preserving semantic continuity while compressing long conversational histories',
      'Balancing embedding lookups with ultra-low latency response requirements',
      'Handling arbitrary character length inputs safely with strict Pydantic schemas'
    ],
    VisualComponent: NucleusVisual,
  },
  {
    id: '03',
    title: 'FactForge',
    subtitle: 'AI-Powered Fact Verification System',
    filterCategories: ['AI / GenAI', 'Full Stack'],
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> Manual fact-checking of sprawling digital claims and unstructured information is labor-intensive, slow, and prone to subjective bias.{'\n\n'}
        FactForge is an intelligent multi-agent fact verification platform designed to research, analyze, verify, and synthesize information through coordinated AI agents. By orchestrating dedicated Research & Retrieval Agents and Verification & Detection Agents, it generates transparent confidence scores and structured audit logs for ingested content.
      </>
    ),
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Grok API', 'OCR'],
    features: [
      'Research and Retrieval Agent',
      'Verification and Detection Agent',
      'Information synthesis',
      'Confidence scoring mechanism',
      'Centralized orchestration and state management',
      'Transition tracking and structured logging',
      'OCR and local LLM integration exploration'
    ],
    timeline: { duration: 'Multi-Agent AI', period: 'Production Research' },
    challenges: [
      'Orchestrating concurrent agent tasks without race conditions or deadlocks',
      'Synthesizing conflicting evidentiary sources into calibrated confidence ratings',
      'Structured logging of agent transitions for real-time auditability'
    ],
    VisualComponent: FactForgeVisual,
  },
  {
    id: '04',
    title: 'XURVA',
    subtitle: 'High-Performance E-Commerce Platform',
    filterCategories: ['Full Stack'],
    note: '🏆 2nd Runner-Up • Linpack Intra-Club Hackathon',
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> Modern e-commerce platforms struggle with sluggish load times, atomic cart synchronization, and complex checkout friction.{'\n\n'}
        Built as a full-stack MERN application, this platform delivers a complete online shopping experience with product management, shopping cart functionality, backend APIs, and secure payment integration. Designed with scalability, performance, and user experience at its core, the project handles the complete order lifecycle from product discovery to checkout.
      </>
    ),
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    features: [
      'Product browsing and listing',
      'Shopping cart management',
      'REST API integration',
      'MongoDB database integration',
      'Stripe payment gateway integration',
      'Responsive user interface'
    ],
    timeline: { duration: '1 Month', period: 'Dec 2025 – Jan 2026' },
    challenges: [
      'Designing a scalable REST API architecture for product, order, and user management',
      'Implementing secure JWT authentication with protected routes and role-based access',
      'Integrating Stripe Checkout while ensuring reliable payment verification',
      'Maintaining inventory consistency during concurrent order placement'
    ],
    githubLink: 'https://github.com/anushka-j18/XURVA',
    liveLink: 'https://v0-e-commerce-website-v0.vercel.app/',
    VisualComponent: EcommerceVisual,
  },
  {
    id: '05',
    title: 'Study Planner',
    subtitle: 'Smart Study Planner Web App',
    filterCategories: ['Full Stack'],
    note: '🏆 PromptX Hackathon Winner',
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> PromptX Hackathon Challenge: Design and build a fully functional project under a strict 75-minute limit.{'\n\n'}
        A modern, intuitive study planner web app built with Next.js and React to help students manage classes, assignments, and deadlines with smart reminders. Includes an interactive weekly timetable with drag-and-drop, assignment tracker, built-in Pomodoro timer, and a grade calculator.
      </>
    ),
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: [
      'Interactive weekly timetable with drag-and-drop',
      'Assignment tracker',
      'Customizable reminders',
      'Pomodoro study timer',
      'Grade calculator'
    ],
    timeline: { duration: '75 Mins', period: 'Hackathon Event' },
    challenges: [
      'Designing and building a fully functional project within a strict 75-minute limit',
      'Implementing drag-and-drop for the weekly timetable quickly',
      'Integrating a built-in Pomodoro timer and assignment tracker seamlessly'
    ],
    githubLink: 'https://github.com/anushka-j18/Studyplannerr',
    liveLink: 'https://v0-study-planner-website-57.vercel.app/',
    VisualComponent: StudyPlannerVisual,
  },
  {
    id: '06',
    title: 'Histori.Ai',
    subtitle: 'AI-Powered Heritage & Monument Discovery',
    filterCategories: ['AI / GenAI', 'Computer Vision'],
    note: 'Role: Frontend Developer',
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> Historical tourism lacks engaging, real-time contextual information and intuitive visual representations of monuments on-site.{'\n\n'}
        An AI-powered heritage discovery platform that combines computer vision, interactive mapping, 3D visualization, and conversational AI to make monument exploration more engaging. By scanning a landmark, the AI instantly recognizes the location with 92% reported accuracy, providing rich historical context, interactive 3D monument visualizations, and smart itinerary planning.
      </>
    ),
    tech: ['Python', 'YOLOv8', 'React.js', 'Three.js', 'React Three Fiber', 'Google Maps API', 'OpenAI API'],
    features: [
      'AI-powered monument recognition using YOLOv8',
      'Reported monument detection accuracy of 92%',
      'Interactive smart map using Google Maps API',
      'AI-powered itinerary planning',
      'Interactive 3D monument visualization',
      'Conversational AI assistance'
    ],
    timeline: { duration: '2 Months', period: 'Feb 2026 – Apr 2026' },
    challenges: [
      'Rendering complex 3D monument meshes with minimal latency on web browsers',
      'Ensuring high accuracy across varying lighting conditions with YOLOv8',
      'Synchronizing Google Maps API routing with conversational itinerary prompts'
    ],
    VisualComponent: HistoriAiVisual,
  },
  {
    id: '07',
    title: 'OrthoScan',
    subtitle: 'AI-Based Orthopedic Image Analysis',
    filterCategories: ['AI / GenAI', 'Computer Vision'],
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> Medical imaging requires high-precision localization, rapid inference times, and portable model runtimes suitable for clinical evaluation.{'\n\n'}
        A computer vision-based project focused on orthopedic image analysis using object detection models and optimized ONNX inference. Designed to evaluate radiological scans with rapid inference and reliable localization for diagnostic exploration.
      </>
    ),
    tech: ['YOLOv7', 'ONNX', 'Python'],
    features: [
      'YOLOv7-based computer vision pipeline',
      'ONNX model integration',
      'Image inference and analysis',
      'Model deployment and optimization exploration'
    ],
    timeline: { duration: 'Computer Vision', period: 'Research MVP' },
    challenges: [
      'Exporting PyTorch weights to quantized ONNX format for accelerated CPU/GPU inference',
      'Pre-processing high-resolution radiographic scans with uniform normalization',
      'Evaluating precision boundaries for orthopedic joint and fracture localization'
    ],
    VisualComponent: OrthoScanVisual,
  },
  {
    id: '08',
    title: 'Badminton Score Counter',
    subtitle: 'A Simple and Responsive Score Counter',
    filterCategories: ['Full Stack'],
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> Players needed a lightweight, intuitive way to record scores, reset games, and adjust settings like points-to-win during casual and practice matches.{'\n\n'}
        A simple and responsive Badminton Score Counter built for quick and accurate match tracking. The app allows players to record scores, reset games, adjust settings such as points-to-win, and view match history with ease. Designed to be lightweight, intuitive, and ideal for both casual and practice matches.
      </>
    ),
    tech: ['v0', 'Vercel', 'React', 'Tailwind CSS'],
    features: [
      'Record scores and reset games',
      'Adjust points-to-win settings',
      'View match history with ease',
      'Responsive mobile-first design'
    ],
    timeline: { duration: '1 Day', period: 'Side Project' },
    challenges: [
      'Designing an intuitive and accessible UI for quick score recording',
      'Managing application state for match history and game resets'
    ],
    githubLink: 'https://github.com/anushka-j18/MatchMeter---Badminton-Score-Counter',
    liveLink: 'https://v0-badminton-score-counter.vercel.app/',
    VisualComponent: BadmintonVisual,
  }
];

const EngineeringStories = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.filterCategories.includes(selectedFilter);
  });

  return (
    <section id="projects" className="w-full bg-off-white text-deep-dark py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-deep-dark/20 pb-8 gap-6">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 03</span>
            <h2 className="text-5xl md:text-7xl font-serif">ENGINEERING<br/>STORIES</h2>
          </div>
          <p className="text-sm uppercase tracking-widest font-semibold text-deep-dark/40 max-w-xs text-right hidden md:block">
            Documenting the architecture and execution of complex systems.
          </p>
        </div>

        {/* Editorial Category Filter Tabs */}
        <div className="mb-24 flex flex-wrap items-center gap-6 md:gap-10 border-b border-deep-dark/10 pb-6 text-xs font-semibold tracking-widest uppercase">
          <span className="text-deep-dark/40">Category /</span>
          {FILTER_CATEGORIES.map(cat => {
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stories List */}
        <div className="flex flex-col gap-32">
          {filteredProjects.map((project, index) => {
            const Visual = project.VisualComponent;
            return (
              <div 
                key={project.id} 
                className={`flex flex-col gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                
                {/* Visual / Architecture Diagram */}
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-soft-gray relative group overflow-hidden border border-deep-dark/10">
                  <Visual />
                  <div className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase text-white/90 z-20 bg-deep-dark/70 px-2.5 py-1 rounded backdrop-blur-sm">
                    Fig. {project.id}
                  </div>
                </div>

                {/* Story Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center xl:px-12">
                  <div className="text-accent font-serif text-2xl italic mb-4">No. {project.id}</div>
                  <h3 className="text-4xl md:text-5xl font-serif mb-4 leading-none">{project.title}</h3>
                  <h4 className="text-lg font-medium text-deep-dark/60 mb-6 uppercase tracking-wide">{project.subtitle}</h4>
                  
                  {project.note && (
                    <p className="text-accent font-semibold text-xs font-mono uppercase tracking-widest mb-6">
                      {project.note}
                    </p>
                  )}

                  <p className="text-lg font-light text-deep-dark/80 leading-relaxed mb-8 whitespace-pre-line">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-deep-dark/10 pt-8">
                    <div>
                      <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-4">Tech Stack</h5>
                      <ul className="space-y-2 text-sm font-medium">
                        {project.tech.map(t => <li key={t}>{t}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-4">Key Features</h5>
                      <ul className="space-y-2 text-sm font-medium">
                        {project.features.map(f => <li key={f}>{f}</li>)}
                      </ul>
                    </div>
                    {project.timeline && (
                      <div>
                        <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-4">Timeline</h5>
                        <div className="space-y-3 text-sm font-medium">
                          <div>
                            <span className="block text-deep-dark/60 text-xs uppercase tracking-widest mb-1">Duration</span>
                            <span>{project.timeline.duration}</span>
                          </div>
                          <div className="text-deep-dark/80">
                            {project.timeline.period}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {project.challenges && (
                    <div className="mt-8 border-t border-deep-dark/10 pt-8">
                      <h5 className="text-xs font-semibold tracking-widest uppercase text-deep-dark/40 mb-4">Engineering Challenges</h5>
                      <ul className="space-y-2 text-sm font-medium text-deep-dark/80 list-disc list-outside ml-4">
                        {project.challenges.map(c => <li key={c} className="pl-1">{c}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-semibold tracking-widest uppercase border-b border-deep-dark pb-1 hover:text-accent hover:border-accent transition-colors"
                      >
                        View GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-semibold tracking-widest uppercase border-b border-accent pb-1 text-accent hover:opacity-80 transition-opacity"
                      >
                        Live Deployed Link
                      </a>
                    )}
                    {project.experienceLink && (
                      <a 
                        href={project.experienceLink} 
                        className="text-sm font-semibold tracking-widest uppercase border-b border-accent pb-1 text-accent hover:opacity-80 transition-opacity"
                      >
                        View in Experience Section →
                      </a>
                    )}
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
