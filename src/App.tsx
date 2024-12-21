import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import Navigation from "./components/Navigation";

const Home = lazy(() => import("./pages/Home"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const BuilderPage = lazy(() => import("./pages/BuilderPage"));
const SubmitProject = lazy(() => import("./pages/SubmitProject"));
const Process = lazy(() => import("./pages/Process"));

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navigation />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/builder/:id" element={<BuilderPage />} />
            <Route path="/submit" element={<SubmitProject />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
