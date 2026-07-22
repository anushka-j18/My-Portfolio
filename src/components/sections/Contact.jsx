import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-deep-dark text-off-white pt-32 pb-12 px-6 md:px-12 min-h-screen flex flex-col justify-between">
      <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-center">
        
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-accent text-sm font-semibold tracking-widest-lg uppercase mb-8 block">End of Issue 01</span>
          
          <h2 className="text-6xl md:text-8xl lg:text-[140px] leading-[0.85] font-serif tracking-tight mb-16">
            LET'S BUILD<br/>
            <span className="italic text-accent">SOMETHING</span><br/>
            MEANINGFUL.
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-lg font-serif">
            <div>
              <p className="text-sm font-sans font-semibold tracking-widest uppercase text-off-white/40 mb-2">Location</p>
              <p>Bhopal, India</p>
            </div>
            <div>
              <p className="text-sm font-sans font-semibold tracking-widest uppercase text-off-white/40 mb-2">Availability</p>
              <p>Open for Opportunities</p>
            </div>
            <div>
              <p className="text-sm font-sans font-semibold tracking-widest uppercase text-off-white/40 mb-2">Inquiries</p>
              <a href="mailto:hello@example.com" className="hover:text-accent transition-colors">hello@example.com</a>
            </div>
          </div>
        </div>

      </div>

      {/* Minimal Footer */}
      <footer className="max-w-[1400px] mx-auto w-full border-t border-off-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-semibold tracking-widest uppercase text-off-white/40">
          © 2026 Anushka Joshi. All rights reserved.
        </p>
        
        <div className="flex gap-8 text-sm font-semibold tracking-widest uppercase">
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">GitHub</a>
          <a href="/resume.pdf" target="_blank" className="hover:text-accent transition-colors">Resume</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
