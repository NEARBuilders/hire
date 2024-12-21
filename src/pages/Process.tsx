import { ArrowLeft, Code, Cpu, FileSearch, Rocket, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: FileSearch,
    title: "Requirements Analysis",
    description: "We work closely with you to understand your project needs, goals, and technical requirements.",
    duration: "2-3 days"
  },
  {
    icon: Users,
    title: "Team Assembly",
    description: "We assign the perfect team of developers and designers based on your project's needs.",
    duration: "1 day"
  },
  {
    icon: Settings,
    title: "Architecture Design",
    description: "Our team designs a scalable architecture that meets your current and future needs.",
    duration: "2-3 days"
  },
  {
    icon: Code,
    title: "Development Sprint",
    description: "Rapid development with daily updates and weekly demos to ensure we're on track.",
    duration: "2-3 weeks"
  },
  {
    icon: Cpu,
    title: "Testing & QA",
    description: "Rigorous testing to ensure your MVP is production-ready and bug-free.",
    duration: "2-3 days"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "We handle the deployment and provide documentation for your team.",
    duration: "1-2 days"
  }
];

export default function Process() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Build Process</h1>
          <p className="text-gray-300 text-lg mb-12">
            We've streamlined our development process to deliver high-quality MVPs in weeks, not months.
            Here's how we turn your idea into reality.
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl">
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-400/10 p-3 rounded-lg">
                    <step.icon className="text-yellow-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Building?</h2>
            <p className="text-gray-300 mb-6">
              Our process is designed to get your MVP to market as quickly as possible while maintaining the highest quality standards.
            </p>
            <Link
              to="/submit"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-semibold text-gray-900 hover:opacity-90 transition-opacity"
            >
              Submit Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}