import { Home, User, Briefcase, Code, GraduationCap, Mail, Grid, PlayCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <User size={24} />, label: "About", path: "/about" },
    { icon: <Briefcase size={24} />, label: "Experience", path: "/experience" },
    { icon: <Code size={24} />, label: "Projects", path: "/projects" },
    { icon: <GraduationCap size={24} />, label: "Education", path: "/education" },
    { icon: <Mail size={24} />, label: "Contact", path: "/contact" },
  ];

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
            <h2 style={{ fontSize: '18px', color: '#000' }}>Ashok Pemeram</h2>
          </div>
        </div>

        <div className="navbar-right">
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
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: 52px;
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          transition: transform 0.3s;
        }

        .navbar-container {
          width: 100%;
          max-width: 1128px;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .logo-box {
          background: #0a66c2;
          width: 34px;
          height: 34px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          color: white;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -1px;
        }

        .search-bar {
          // background: #edf3f8;
          height: 34px;
          width: 280px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-top: 15px;
        }

        .search-icon {
          color: #666;
        }

        .search-bar input {
          background: none;
          border: none;
          outline: none;
          font-size: 0.9rem;
          color: rgba(0,0,0,0.9);
          width: 100%;
        }

        .navbar-right {
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
          min-width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
        }

        .nav-item a {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: rgba(0, 0, 0, 0.6);
          transition: color 0.2s;
        }

        .nav-item:hover a, .nav-item.active a {
          color: rgba(0, 0, 0, 0.9);
        }

        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #000;
        }

        .nav-icon {
          height: 24px;
          display: flex;
          align-items: center;
        }

        .nav-label {
          font-size: 12px;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .arrow-down {
          font-size: 8px;
        }

        @media (max-width: 1024px) {
          .search-bar {
            width: 180px;
          }
          .nav-item {
            min-width: 60px;
          }
        }

        @media (max-width: 768px) {
          .nav-label {
            display: none;
          }
          .nav-item {
            min-width: 48px;
          }
          .search-bar {
            width: 40px;
            padding: 0;
            justify-content: center;
          }
          .search-bar input {
            display: none;
          }
          .divider, .nav-business {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
