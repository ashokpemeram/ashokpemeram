import { Home, User, Briefcase, Code, GraduationCap, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <User size={24} />, label: "About", path: "/about" },
    { icon: <Briefcase size={24} />, label: "Experience", path: "/experience" },
    { icon: <Code size={24} />, label: "Projects", path: "/projects" },
    { icon: <GraduationCap size={24} />, label: "Education", path: "/education" },
    { icon: <Mail size={24} />, label: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link">
            <div className="logo-box">
              <span className="logo-text">AP</span>
            </div>
          </Link>
          <div className="search-bar">
            <h2 className="nav-title">Ashok Pemeram</h2>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-right desktop-nav">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
                <Link to={item.path}>
                  <div className="nav-icon">{item.icon}</div>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <div className="mobile-nav-icon">{item.icon}</div>
                    <span className="mobile-nav-label">{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          height: 56px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .navbar-container {
          width: 100%;
          max-width: var(--container-max);
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-box {
          background: #0a66c2;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }

        .logo-box:hover {
          transform: scale(1.05);
        }

        .logo-text {
          color: white;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -1px;
        }

        .nav-title {
          font-size: 20px;
          font-weight: 700;
          color: #000;
          margin: 0;
        }

        .search-bar {
          height: 34px;
          width: auto; /* Adjusted for title */
          display: flex;
          align-items: center;
          padding-top: 0; /* Removed padding-top */
        }

        .navbar-right.desktop-nav {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .nav-links {
          display: flex;
          list-style: none;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          height: 100%;
          min-width: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .nav-item a {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #666;
          transition: all 0.2s;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .nav-item:hover a {
          background: rgba(0,0,0,0.04);
          color: #000;
        }

        .nav-item.active a {
          color: #0a66c2;
        }

        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #0a66c2;
        }

        .nav-icon {
          height: 24px;
          display: flex;
          align-items: center;
          margin-bottom: 2px;
        }

        .nav-label {
          font-size: 12px;
          font-weight: 500;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #000;
          padding: 4px;
          z-index: 1001;
        }

        /* Mobile Overlay Styles */
        .mobile-nav-overlay {
          position: fixed;
          top: 64px;
          left: 0;
          width: 100%;
          height: calc(100vh - 64px);
          background: #fff;
          z-index: 999;
          padding: 24px;
          overflow-y: auto;
        }

        .mobile-nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-nav-item a {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #f8f9fa;
          border-radius: 12px;
          text-decoration: none;
          color: #333;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .mobile-nav-item.active a {
          background: #eef3f8;
          color: #0a66c2;
          border-color: #0a66c2;
        }

        .mobile-nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .mobile-nav-label {
          font-size: 18px;
          font-weight: 600;
        }

        @media (max-width: 850px) {
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .navbar-container {
            padding: 0 16px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
