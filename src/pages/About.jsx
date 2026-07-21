import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1000px] mx-auto px-6 md:px-12 py-24 min-h-screen"
    >
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <div className="text-xs font-semibold tracking-widest-lg uppercase text-accent mb-6">
            LETTER FROM THE EDITOR
          </div>
          <h2 className="text-5xl font-serif leading-tight mb-8">
            Notes on <br/>
            <span className="italic">craft.</span>
          </h2>
          <div className="w-16 h-[1px] bg-deep-dark/20 mb-8"></div>
          <img 
            src="https://images.unsplash.com/photo-1544168190-79c15427015f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Anushka" 
            className="w-full aspect-[3/4] object-cover grayscale mb-6"
          />
          <p className="text-sm uppercase tracking-widest text-deep-dark/50">Issue 01 Contributor</p>
        </div>
        
        <div className="w-full md:w-2/3 prose prose-lg prose-neutral">
          <p className="text-xl font-light leading-relaxed mb-6">
            I've always believed that the best software feels like reading a well-crafted mystery novel—every piece perfectly placed, leading the user effortlessly from one revelation to the next, until the conclusion feels both surprising and utterly inevitable.
          </p>
          <p className="text-base text-deep-dark/80 leading-relaxed mb-12">
            As a final-year Computer Science student, my journey hasn't just been about algorithms and architecture. It's been about communication. Whether I'm on the debate stage carefully constructing an argument, or writing a React component to handle complex state, the core challenge is the same: how do we convey complex ideas with absolute clarity and undeniable elegance?
          </p>
          
          <div className="my-16 border-l-4 border-accent pl-8 py-2">
            <h3 className="text-4xl font-serif leading-tight italic text-deep-dark">
              "We don't just write code; we choreograph experiences."
            </h3>
          </div>
          
          <p className="text-base text-deep-dark/80 leading-relaxed mb-6">
            When I'm not dissecting the latest web frameworks, you'll probably find me dancing—a discipline that has taught me more about rhythm, timing, and seamless transitions than any UX course ever could. I bring that same sense of flow into my frontend development.
          </p>
          <p className="text-base text-deep-dark/80 leading-relaxed mb-12">
            I love meeting people, debating ideas, and finding the elegant center of a chaotic problem. This portfolio is a curated collection of those explorations. 
          </p>
          
          <div className="mt-16">
            <p className="font-serif text-2xl italic">Yours,</p>
            <p className="font-serif text-4xl mt-4">Anushka</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
