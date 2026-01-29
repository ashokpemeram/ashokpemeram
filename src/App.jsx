import { motion } from 'framer-motion';
import Education from './components/Education';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import SocialMedia from './components/SocialMedia';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ExperiencePage from './Pages/ExperiencePage';
import ProjectsPage from './Pages/ProjectsPage';
import EduPage from './Pages/EduPage';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EduPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <div className="app" style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '1rem', gap: '1rem' }}>
        <div style={{ minHeight: '100vh', height: 'auto', width: '70%', marginLeft: '8%', borderRadius: '10px' }}>
          <Hero />
          <About />
          <Projects />
          <Education />
          <Contact />
        </div>
        <div style={{ height: 'auto', width: '30%', marginRight: '8%', borderRadius: '10px' }}>
          <SocialMedia />
          <Experience />
        </div>
      </div> */}

      {/* Footer */}
      {/* <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              © {new Date().getFullYear()} Ashok Pemeram. Built with React, Framer Motion, and ❤️
            </p>
            <p className="footer-subtext">
              Full Stack Developer | MERN Stack Specialist | Founder @ Webortex
            </p>
          </div>
        </div>
      </footer> */}

      {/* Scroll to Top Button */}
      {/* {showScrollTop && (
        <motion.button
          className="scroll-top-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      <style jsx>{`
        .app {
          min-height: 100vh;
        }

        .footer {
          background: var(--bg-dark);
          color: var(--text-white);
          padding: var(--spacing-xl) 0;
          margin-top: var(--spacing-2xl);
        }

        .footer-content {
          text-align: center;
        }

        .footer-text {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--text-white);
        }

        .footer-subtext {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-blue);
          color: var(--text-white);
          border: none;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-lg);
          cursor: pointer;
          z-index: 1000;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          background: var(--primary-blue-hover);
          box-shadow: var(--shadow-hover);
        }

        @media (max-width: 768px) {
          .scroll-top-btn {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 48px;
            height: 48px;
          }

          .footer {
            padding: var(--spacing-lg) 0;
          }

          .footer-text {
            font-size: 0.9rem;
          }

          .footer-subtext {
            font-size: 0.8rem;
          }
        }
      `}</style> */}
    </div >
  );
}

export default App;
