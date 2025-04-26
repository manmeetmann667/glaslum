import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showVideo, setShowVideo] = useState(false);
  
  return (
    <div className="card h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover object-center transition-transform duration-700 hover:scale-110"
        />
        {project.videoUrl && (
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center bg-stone-950/40 hover:bg-stone-950/60 transition-colors duration-300"
            aria-label={`Play video for ${project.title}`}
          >
            <span className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
              <Play size={24} className="text-stone-950 ml-1" />
            </span>
          </button>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-stone-900/95 to-stone-950/95">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-medium text-stone-50">
            {project.title}
          </h3>
          <span className="text-amber-500 text-sm">{project.completed}</span>
        </div>
        <div className="mb-4 text-stone-400 font-medium">
          {project.location}
        </div>
        <p className="text-stone-300 mb-4 flex-grow">
          {project.description}
        </p>
      </div>
      
      {/* Video Modal */}
      {showVideo && project.videoUrl && (
        <div className="fixed inset-0 bg-stone-950/95 flex items-center justify-center z-50 p-4 md:p-8">
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 text-stone-300 hover:text-amber-500 transition-colors duration-300"
            aria-label="Close video"
          >
            <X size={24} />
          </button>
          <div className="w-full max-w-4xl mx-auto">
            <div className="video-container">
              <iframe
                src={project.videoUrl}
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute top-0 left-0 w-full h-full"
                title={project.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;