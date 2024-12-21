import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Builder } from "../data/builders";

interface BuilderProfileProps extends Builder {}

export default function BuilderProfile({
  id,
  name,
  role,
  image,
  skills,
  projects,
  social,
}: BuilderProfileProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-colors">
      <Link to={`/builder/${id}`} className="block mb-4">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-gray-400">{role}</p>
          </div>
        </div>
      </Link>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">
          Notable Projects
        </h4>
        <ul className="text-sm text-gray-400">
          {projects.map((project) => (
            <li key={project} className="mb-1">
              • {project}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        {social.github && (
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        )}
        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
