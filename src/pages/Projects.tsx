import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import { revealElements } from '../utils/animations';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | LUXE Windows';
    
    const cleanupReveal = revealElements();
    
    return () => {
      cleanupReveal();
    };
  }, []);
  
  return (
    <main>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Featured <span className="text-amber-500">Projects</span>
            </h1>
            <p className="text-xl text-stone-300">
              Discover how our luxury window solutions have transformed residential and commercial spaces across the country.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-stone-950/80">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="reveal">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section 
        className="py-24 relative bg-stone-900/80"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg)'
          }}
        ></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Start Your <span className="text-amber-500">Project?</span>
            </h2>
            <p className="text-lg text-stone-300 mb-8">
              Our team of window design specialists is ready to bring your vision to life. Contact us today to discuss your project requirements.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;