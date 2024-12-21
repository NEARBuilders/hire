import { ArrowLeft, CheckCircle, Clock, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function SubmitProject() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Submit Your Project</h1>
            <p className="text-gray-300 text-lg mb-8">
              Ready to turn your idea into reality? Fill out the form below and
              our team will get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="Enter your project name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="Describe your project and its goals"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline
                </label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white">
                  <option value="">Select desired timeline</option>
                  <option value="2-weeks">2 weeks</option>
                  <option value="4-weeks">4 weeks</option>
                  <option value="6-weeks">6 weeks</option>
                  <option value="custom">Custom timeline</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-semibold text-gray-900 hover:opacity-90 transition-opacity"
              >
                Submit Project
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">
                Why Choose Build DAO?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-yellow-400 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                    <p className="text-gray-300">
                      Most MVPs are delivered within 2-4 weeks
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle
                    className="text-yellow-400 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-300">
                      Built by experienced developers with proven track records
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Rocket className="text-yellow-400 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Launch Ready</h3>
                    <p className="text-gray-300">
                      Production-ready code with deployment support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Recent Success Stories
              </h2>
              <div className="space-y-4">
                <blockquote className="border-l-2 border-yellow-400 pl-4">
                  <p className="text-gray-300 italic mb-2">
                    "Build DAO delivered our DeFi platform in just 3 weeks.
                    Exceptional quality and communication."
                  </p>
                  <footer className="text-sm text-gray-400">
                    - Alex K., DeFi Startup Founder
                  </footer>
                </blockquote>
                <blockquote className="border-l-2 border-yellow-400 pl-4">
                  <p className="text-gray-300 italic mb-2">
                    "The team's expertise in web3 helped us launch faster than
                    expected. Highly recommended!"
                  </p>
                  <footer className="text-sm text-gray-400">
                    - Sarah M., NFT Marketplace Creator
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
