import { Link } from "react-router-dom";
import { HardHat } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <HardHat size={32} className="text-yellow-400" />
            <span className="text-xl font-bold text-white">Build DAO</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/process"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Our Process
            </Link>
            <Link
              to="/submit"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-semibold text-gray-900 hover:opacity-90 transition-opacity"
            >
              Submit Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
