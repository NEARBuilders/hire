import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Builders from '../components/Builders';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Projects />
      <Builders />
    </div>
  );
}