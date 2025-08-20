import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Roadmap from './pages/Roadmap';
import GoalSet from './pages/GoalSet';
import MachineLearning from './pages/MachineLearning';
import Webdevelopment from './pages/Webdevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import Cybersecurity from './pages/Cybersecurity';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/goalset" element={<GoalSet />} />
        
        {/* Roadmap routes */}
        <Route path="/web-development" element={<Webdevelopment />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;