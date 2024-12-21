import { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-4');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      );

      const cards = projectsRef.current.querySelectorAll('.project-card');
      cards.forEach((card) => observer.observe(card));

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-gray-400 mb-12">Discover some of our recent MVP success stories</p>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card opacity-0 translate-y-4 transition-all duration-500 ease-out"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}