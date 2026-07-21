import React from 'react';
import { motion } from 'framer-motion';

const Toolkit = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 min-h-screen"
    >
      <div className="mb-20 border-b-2 border-deep-dark pb-8">
        <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight">The Appendix.</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* The Toolkit Sidebar */}
        <div className="lg:col-span-4 lg:border-r border-deep-dark/20 lg:pr-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-semibold tracking-widest-lg uppercase text-accent">THE TOOLKIT</h2>
            <div className="flex-grow h-[1px] bg-deep-dark/20"></div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl italic mb-4 text-deep-dark/80">Languages</h3>
              <ul className="space-y-2 text-sm font-medium tracking-wide uppercase">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>HTML / CSS</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl italic mb-4 text-deep-dark/80">Frameworks</h3>
              <ul className="space-y-2 text-sm font-medium tracking-wide uppercase">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js / Express</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl italic mb-4 text-deep-dark/80">Architecture</h3>
              <ul className="space-y-2 text-sm font-medium tracking-wide uppercase">
                <li>RESTful APIs</li>
                <li>Headless CMS</li>
                <li>Server-Side Rendering</li>
                <li>Database Design (SQL/NoSQL)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accolades & News */}
        <div className="lg:col-span-4 lg:border-r border-deep-dark/20 lg:pr-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-semibold tracking-widest-lg uppercase text-accent">ACCOLADES</h2>
            <div className="flex-grow h-[1px] bg-deep-dark/20"></div>
          </div>
          
          <div className="space-y-10">
            <div className="group">
              <p className="text-xs tracking-widest uppercase text-deep-dark/50 mb-2">October 2025</p>
              <h3 className="font-serif text-xl mb-2">First Place — Global Hackathon</h3>
              <p className="text-sm text-deep-dark/70 leading-relaxed">Architected a real-time collaborative platform within 48 hours, recognized for technical execution and UX elegance.</p>
            </div>
            
            <div className="group">
              <p className="text-xs tracking-widest uppercase text-deep-dark/50 mb-2">August 2025</p>
              <h3 className="font-serif text-xl mb-2">AWS Certified Developer</h3>
              <p className="text-sm text-deep-dark/70 leading-relaxed">Demonstrated proficiency in developing, deploying, and debugging cloud-based applications.</p>
            </div>
            
            <div className="group">
              <p className="text-xs tracking-widest uppercase text-deep-dark/50 mb-2">May 2024</p>
              <h3 className="font-serif text-xl mb-2">Best Design Award — University Symposium</h3>
              <p className="text-sm text-deep-dark/70 leading-relaxed">Awarded for an interactive data visualization project mapping urban accessibility.</p>
            </div>
          </div>
        </div>

        {/* Masthead / Contact */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-semibold tracking-widest-lg uppercase text-accent">MASTHEAD</h2>
            <div className="flex-grow h-[1px] bg-deep-dark/20"></div>
          </div>
          
          <div className="bg-deep-dark text-off-white p-10 flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl mb-6">Contact.</h2>
            <p className="text-sm font-light text-off-white/70 mb-12 leading-relaxed">
              Available for freelance opportunities, open source collaborations, and discussions about typography.
            </p>
            
            <div className="space-y-6 w-full">
              <a href="mailto:hello@example.com" className="block text-lg border-b border-off-white/20 pb-4 hover:border-accent hover:text-accent transition-colors">
                hello@example.com
              </a>
              <a href="#" className="block text-lg border-b border-off-white/20 pb-4 hover:border-accent hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-lg border-b border-off-white/20 pb-4 hover:border-accent hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="#" className="block text-lg border-b border-off-white/20 pb-4 hover:border-accent hover:text-accent transition-colors">
                Twitter
              </a>
            </div>
            
            <p className="mt-16 text-xs tracking-widest uppercase text-off-white/30">
              © 2026 Anushka. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Toolkit;
