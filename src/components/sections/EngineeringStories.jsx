import React from 'react';

const projects = [
  {
    id: '01',
    title: 'Eval.AI',
    subtitle: 'AI-Powered Answer Sheet Evaluation System',
    description: (
      <>
        <span className="text-accent font-semibold">PROBLEM:</span> Manual evaluation is time-consuming, inconsistent, and difficult to scale across large classrooms.{'\n\n'}Educational institutions spend countless hours manually evaluating handwritten answer sheets. Eval.AI streamlines this workflow by combining OCR, AI-assisted evaluation, and a role-based dashboard into a single platform that improves consistency, reduces manual effort, and provides actionable analytics for educators.
      </>
    ),
    tech: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'OCR'],
    features: ['Teacher dashboard', 'AI evaluation', 'OCR', 'Digital checking', 'Analytics', 'CSV allocation', 'Admin dashboard'],
    timeline: { duration: '3 Months', period: 'May 2026 - July 2026' },
    challenges: [
      'Extracting handwritten answers reliably',
      'Designing scalable evaluation workflows',
      'Maintaining evaluation consistency',
      'Managing large teacher allocations'
    ],
    githubLink: 'https://github.com/anushka-j18/AI-EVALUATION-SYSTEM',
    liveLink: 'https://ai-evaluation-system-1mz4.vercel.app/',
  },
  {
    id: '02',
    title: 'Histori.AI',
    subtitle: 'AI-powered Historical Landmark Recognition Platform',
    description: 'An intelligent platform that transforms how users interact with historical sites. By simply scanning a landmark, the AI instantly recognizes the location and provides rich historical context, interactive 3D experiences, and smart itinerary planning.',
    tech: ['React', 'FastAPI', 'MongoDB', 'TensorFlow / YOLO', 'Google Maps API'],
    features: ['AI landmark recognition', 'Interactive historical information', 'Smart itinerary planning', '3D experiences', 'Map integration'],
    timeline: { duration: '2 Months', period: 'Feb 2026 - Apr 2026' },
    challenges: [
      'Optimizing YOLO models for mobile devices',
      'Ensuring high accuracy across varying lighting conditions',
      'Processing 3D assets with minimal latency',
      'Syncing local cache for offline capabilities'
    ],
  },
  {
    id: '03',
    title: 'E-commerce XURVA',
    subtitle: 'High-Performance E-Commerce Platform',
    description: 'Built as a full-stack MERN application, this platform delivers a complete online shopping experience with secure authentication, product and inventory management, payment gateway integration, and an intuitive admin dashboard. Designed with scalability, performance, and user experience at its core, the project demonstrates modern web development practices while handling the complete order lifecycle from product discovery to checkout.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Stripe API'],
    features: ['Secure user authentication & authorization', 'Product catalog with search & filtering', 'Shopping cart & wishlist', 'Stripe payment integration', 'Order & inventory management', 'Admin dashboard for products & orders', 'Fully responsive user interface'],
    note: '🏆 2nd Runner-Up • Linpack Intra-Club Hackathon',
    timeline: { duration: '1 Month', period: 'Dec 2025 - Jan 2026' },
    challenges: [
      'Designing a scalable REST API architecture for product, order, and user management.',
      'Implementing secure JWT authentication with protected routes and role-based access.',
      'Integrating Stripe Checkout while ensuring reliable payment verification.',
      'Maintaining inventory consistency during concurrent order placement.',
      'Optimizing API calls and frontend rendering to improve overall application performance.'
    ],
    githubLink: 'https://github.com/anushka-j18/XURVA',
    liveLink: 'https://v0-e-commerce-website-v0.vercel.app/'
  }
];

const EngineeringStories = () => {
  return (
    <section id="projects" className="w-full bg-off-white text-deep-dark py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-deep-dark/20 pb-8">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-4 block">Section 03</span>
            <h2 className="text-5xl md:text-7xl font-serif">ENGINEERING<br/>STORIES</h2>
          </div>
          <p className="text-sm uppercase tracking-widest font-semibold text-deep-dark/40 max-w-xs text-right hidden md:block">
            Documenting the architecture and execution of complex systems.
          </p>
        </div>

        {/* Stories List */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
              
              {/* Image Placeholder */}
              <div className="w-full lg:w-1/2 aspect-[4/3] bg-soft-gray relative group overflow-hidden">
                 <div className="absolute inset-0 bg-deep-dark/5 group-hover:bg-deep-dark/0 transition-colors duration-700 flex items-center justify-center">
                   <span className="text-lg font-serif text-deep-dark/30">[ Feature Image / Architecture Diagram ]</span>
                 </div>
                 <div className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase text-deep-dark/40">Fig. {project.id}</div>
              </div>

              {/* Story Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center xl:px-12">
                <div className="text-accent font-serif text-2xl italic mb-4">No. {project.id}</div>
                <h3 className="text-4xl md:text-5xl font-serif mb-4 leading-none">{project.title}</h3>
                <h4 className="text-lg font-medium text-deep-dark/60 mb-8 uppercase tracking-wide">{project.subtitle}</h4>
                
                <p className="text-lg font-light text-deep-dark/80 leading-relaxed mb-8 whitespace-pre-line">
                  {project.description}
                </p>
                
                {project.note && (
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-8">
                    {project.note}
                  </p>
                )}

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

                <div className="mt-10 flex gap-6">
                  <a href={project.githubLink || "#"} target={project.githubLink ? "_blank" : "_self"} rel="noopener noreferrer" className="text-sm font-semibold tracking-widest uppercase border-b border-deep-dark pb-1 hover:text-accent hover:border-accent transition-colors">View GitHub</a>
                  <a href={project.liveLink || "#"} target={project.liveLink ? "_blank" : "_self"} rel="noopener noreferrer" className="text-sm font-semibold tracking-widest uppercase border-b border-accent pb-1 text-accent hover:opacity-80 transition-opacity">Live Deployed Link</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngineeringStories;
