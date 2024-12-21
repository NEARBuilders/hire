import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Trophy, Lightbulb, Target } from "lucide-react";
import { PROJECTS } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-yellow-400 hover:text-yellow-300">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-300 text-lg mb-6">
              {project.fullDescription || project.description}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <Clock size={20} className="text-yellow-400" />
              <span className="text-gray-300">{project.timeframe}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.testimonial && (
              <blockquote className="border-l-4 border-yellow-400 pl-6 mb-8">
                <p className="text-lg italic text-gray-300 mb-2">
                  "{project.testimonial.text}"
                </p>
                <footer className="text-gray-400">
                  {project.testimonial.author} • {project.testimonial.role}
                </footer>
              </blockquote>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {project.challenges && (
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-400" size={24} />
                <h2 className="text-xl font-semibold">Challenges</h2>
              </div>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.solutions && (
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-yellow-400" size={24} />
                <h2 className="text-xl font-semibold">Solutions</h2>
              </div>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="text-gray-300">
                    • {solution}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.results && (
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-yellow-400" size={24} />
                <h2 className="text-xl font-semibold">Results</h2>
              </div>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="text-gray-300">
                    • {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
