import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';

// Pages
import CoverPage from './pages/CoverPage';
import About from './pages/About';
import ProjectsIndex from './pages/ProjectsIndex';
import FeaturePage from './pages/FeaturePage';
import Toolkit from './pages/Toolkit';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CoverPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsIndex />} />
        <Route path="/projects/:id" element={<FeaturePage />} />
        <Route path="/toolkit" element={<Toolkit />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-accent selection:text-white flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
