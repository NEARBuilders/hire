import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Build DAO</h3>
            <p className="text-gray-400">
              Turning ideas into production-ready MVPs in weeks, not months.
            </p>
            <a
              href="https://github.com/builddao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/submit" className="text-gray-400 hover:text-white transition-colors">
                  Submit Project
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-400 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hire@nearbuilders.org" className="text-gray-400 hover:text-white transition-colors">
                hire@nearbuilders.org
                </a>
              </li>
              <li>
                <a href="https://nearbuilders.com/tg-builders" className="text-gray-400 hover:text-white transition-colors">
                  Telegram Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Build DAO. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}