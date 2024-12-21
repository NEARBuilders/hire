import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { BUILDERS } from "../data/builders";

export default function BuilderPage() {
  const { id } = useParams();
  const builder = BUILDERS.find((b) => b.id === id);

  if (!builder) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Builder not found</h1>
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
          Back to Builders
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <img
                src={builder.image}
                alt={builder.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h1 className="text-3xl font-bold text-center mb-2">
                {builder.name}
              </h1>
              <p className="text-yellow-400 text-center mb-6">{builder.role}</p>

              <div className="flex justify-center gap-4 mb-8">
                {builder.social.github && (
                  <a
                    href={builder.social.github}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                )}
                {builder.social.linkedin && (
                  <a
                    href={builder.social.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {builder.social.twitter && (
                  <a
                    href={builder.social.twitter}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {builder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {builder.bio && (
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-300">{builder.bio}</p>
              </div>
            )}

            {builder.experience && (
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="text-yellow-400" size={24} />
                  <h2 className="text-2xl font-semibold">Experience</h2>
                </div>
                <ul className="space-y-3">
                  {builder.experience.map((exp, index) => (
                    <li key={index} className="text-gray-300">
                      • {exp}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {builder.achievements && (
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-yellow-400" size={24} />
                  <h2 className="text-2xl font-semibold">Achievements</h2>
                </div>
                <ul className="space-y-3">
                  {builder.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
