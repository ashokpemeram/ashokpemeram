import { motion } from 'framer-motion';
import pic from "../../public/pic.png";
import resume from "../../public/Ashok_Pemeram.pdf";
import banner from "../../public/banner.png";
import { Link } from 'react-router-dom';
import useIsMobile from './IsMobile';
import { MapPin, Mail, Github, Linkedin, Download, MessageCircle, Briefcase } from 'lucide-react';

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <section id="home" className="hero-section">
      {/* Cover Banner */}
      <div className="cover-banner">
        <img src={banner} alt="Profile" width={"100%"} height={isMobile ? 150 : 200} />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Profile Photo */}
          <motion.div
            className="profile-photo-wrapper"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="profile-photo">
              <img src={pic} alt="Profile" width={isMobile ? 130 : 160} height={isMobile ? 130 : 160} />
            </div>
          </motion.div>

          {/* Hero Info */}
          <motion.div
            className="hero-info"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="hero-name">Ashok Pemeram</h1>
            <h2 className="hero-headline">R&D Intern @Stratosfy | MERN Developer @SynxaIt | Full Stack Developer | MERN Expert | Understanding Data Strctures and algorithms | Exploring AWS & AIML</h2>
            {/* <p className="hero-tagline">Building scalable web applications with modern technologies</p> */}

            <div className="hero-meta">
              <div className="meta-item">
                <MapPin className="icon" />
                <span>Kurnool, Andhra Pradesh, India</span>
              </div>
              {/* <div className="meta-item">
                <Briefcase className="icon" />
                <span>Intermediate Developer</span>
              </div> */}
            </div>

            {/* Social Links */}


            {/* Action Buttons */}
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary hero-btn">
                <MessageCircle className="icon" size={16} />
                Contact Me
              </Link>
              <a href={resume} download className="btn btn-secondary hero-btn">
                <Download className="icon" size={16} />
                Download Resume
              </a>
              <a href="#projects" className="btn btn-white hero-btn">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          background: var(--bg-white);
          border-radius: 10px;
        }

        .cover-banner {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          border-radius: 10px 10px 0 0;
        }

        .cover-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(10, 102, 194, 0.9) 0%,
            rgba(55, 143, 233, 0.8) 50%,
            rgba(102, 126, 234, 0.9) 100%
          );
        }

        .hero-content {
          position: relative;
          padding-bottom: var(--spacing-xl);
        }

        .profile-photo-wrapper {
          position: relative;
          margin-top: -80px;
          margin-bottom: var(--spacing-md);
        }

        .profile-photo {
          width: 160px;
          height: 160px;
          border-radius: var(--radius-full);
          border: 5px solid var(--bg-white);
          background: var(--bg-white);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .profile-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%);
          color: var(--text-white);
          font-size: 3rem;
          font-weight: 700;
        }

        .hero-info {
          max-width: 800px;
        }

        .hero-name {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .hero-headline {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .hero-tagline {
          font-size: 1rem;
          color: var(--text-tertiary);
          margin-bottom: var(--spacing-md);
        }

        .hero-meta {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-lg);
          flex-wrap: wrap;
        }

        .hero-btn {
          height: 36px;
          padding: 0 16px;
          border-radius: 18px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          white-space: nowrap;
        }

        .btn-primary {
          background: #0a66c2;
          color: white;
          border: none;
        }

        .btn-secondary {
          border: 1px solid #0a66c2;
          color: #0a66c2;
          background: transparent;
        }

        .btn-white {
          border: 1px solid #666;
          color: #666;
          background: transparent;
        }

        @media (max-width: 768px) {
          .cover-banner {
            height: 140px;
          }

          .profile-photo {
            width: 130px;
            height: 130px;
            border-width: 4px;
          }

          .profile-photo-wrapper {
            margin-top: -65px;
          }

          .hero-name {
            font-size: 1.75rem;
          }

          .hero-headline {
            font-size: 0.95rem;
          }

          .hero-actions {
            flex-direction: column;
            gap: 12px;
          }

          .hero-btn {
            width: 100%;
            height: 42px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
