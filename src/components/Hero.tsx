import { ArrowRight, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MGgtNTlWMWg1OXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <HardHat size={64} className="text-yellow-400 animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build Your MVP
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text"> Fast & Right</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
            Join the decentralized builder community turning ideas into production-ready MVPs in weeks, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/submit"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-semibold text-gray-900 flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Submit Your Project <ArrowRight size={20} />
            </Link>
            <Link
              to="/process"
              className="px-8 py-4 bg-white/10 rounded-lg font-semibold text-white hover:bg-white/20 transition-colors"
            >
              View Our Process
            </Link>
          </div>
          
          <div className="mt-16 px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400">
            Trusted by 100+ founders • Average MVP delivery: 3 days
          </div>
        </div>
      </div>
    </div>
  );
}