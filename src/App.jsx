import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/Background/Background';
import Services from './Components/Services/Services';
import Title from './Components/Title/Title';
import AboutUs from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import ProjectDetails from './Components/Projects/ProjectDetails';

const Home = () => (
  <>
    <Background />
    <AboutUs />
    <Title />
    <Services />
    <Projects />
    <Contact />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        // Scroll to the specified section smoothly
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the DOM is rendered
      }
    }
  }, [location]);

  // Regular expression to match the ProjectDetails route with dynamic project ID
  const isProjectDetailsPage = /^\/projects\/\d+$/.test(location.pathname);

  return (
    <>
      {/* Conditionally render the Navbar only if not on the ProjectDetails page */}
      {!isProjectDetailsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;



