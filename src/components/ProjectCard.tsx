import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "../data/projects";

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
  timeframe,
  testimonial,
}: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`} className="block">
      <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 transition-colors">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>

          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} className="text-gray-500" />
            <span className="text-sm text-gray-400">{timeframe}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {testimonial && (
            <blockquote className="border-l-2 border-yellow-500 pl-4 mt-4">
              <p className="text-gray-400 italic mb-2">{testimonial.text}</p>
              <footer className="text-sm text-gray-500">
                {testimonial.author} • {testimonial.role}
              </footer>
            </blockquote>
          )}
        </div>
      </div>
    </Link>
  );
}
