import { Plus, Pencil, Gem, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      duration: "Dec 2025 - Jan 2026",
      description: "Build a Portfolio website for myself, which showcase my skills, projects and previous experiences. The platform features a clean, responsive design inspired by professional networking sites, emphasizing user experience and technical proficiency.",
      skills: "React.js, JavaScript, Framer Motion, and CSS3",
      media: [
        { id: 1, type: 'image', hasLink: false, thumbnail: "public/banner.png" },
        { id: 2, type: 'image', hasLink: true, thumbnail: "public/pic.png" }
      ]
    },
    {
      title: "Webortex E-commerce Platform",
      duration: "Jun 2025 - Nov 2025",
      description: "Developed a full-stack e-commerce solution with integrated payment gateways, real-time inventory tracking, and an intuitive admin dashboard for business management.",
      skills: "MERN Stack, Stripe API, Redux Toolkit, and AWS",
      media: [
        { id: 3, type: 'image', hasLink: true, thumbnail: "src/assets/banner.png" }
      ]
    },
    {
      title: "AI Sentiment Analyzer",
      duration: "Mar 2025 - May 2025",
      description: "An advanced natural language processing tool that analyzes large-scale social media data to determine consumer sentiment and identify emerging market trends.",
      skills: "Python, TensorFlow, NLTK, and Flask",
      media: [
        { id: 4, type: 'image', hasLink: false, thumbnail: "src/assets/banner.png" }
      ]
    },
    {
      title: "HealthSync Mobile Application",
      duration: "Jan 2025 - Mar 2025",
      description: "A comprehensive healthcare companion app featuring fitness tracking, medication reminders, and secure tele-health consultation portals for patients and doctors.",
      skills: "React Native, Firebase, and Redux Toolkit",
      media: [
        { id: 5, type: 'image', hasLink: true, thumbnail: "public/pic.png" }
      ]
    },
    {
      title: "CodeQuery Analytics Dashboard",
      duration: "Oct 2024 - Dec 2024",
      description: "A data-driven analytics platform designed for engineering managers to visualize team productivity, codebase health, and sprint progress through interactive charts.",
      skills: "React, D3.js, Node.js, and PostgreSQL",
      media: [
        { id: 6, type: 'image', hasLink: false, thumbnail: "src/assets/banner.png" }
      ]
    }
  ];

  const isProjectsPage = window.location.pathname === "/projects";
  const displayedProjects = isProjectsPage ? projects : projects.slice(0, 2);

  return (
    <section id="projects" style={{ marginBottom: "1rem" }}>
      <div className="card projects-main-card">
        {/* Header Section */}
        <div className="projects-header">
          <h2 className="section-title projects-title">Projects</h2>
          <div className="header-actions">
            <button className="action-btn" aria-label="Add project">
              <Plus size={24} />
            </button>
            <button className="action-btn" aria-label="Edit projects">
              <Pencil size={24} />
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="projects-content">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-wrapper">
              <div className="project-info">
                <h3 className="item-title">{project.title}</h3>
                <p className="item-subtitle">{project.duration}</p>

                <p className="item-description">
                  {project.description}
                </p>

                {/* Skills Section */}
                <div className="skills-row">
                  <div className="skills-icon-container">
                    <Gem size={18} />
                  </div>
                  <p className="skills-text">
                    <strong>Skills:</strong> {project.skills}
                  </p>
                </div>

                {/* Project Media Grid */}
                <div className="media-grid">
                  {project.media.map((media) => (
                    <div key={media.id} className="media-item">
                      <div className="media-frame">
                        <img
                          src={media.thumbnail}
                          alt={`${project.title} media`}
                          className="media-image"
                        />
                        {media.hasLink && (
                          <div className="link-badge">
                            <ExternalLink size={14} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {index < projects.length - 1 && <hr className="item-divider" />}
            </div>
          ))}
        </div>

        {/* Footer Action */}
        {!isProjectsPage && (
          <div className="projects-footer">
            <Link to="/projects" className="show-all-btn">
              Show all projects →
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .projects-main-card {
          padding: 0;
          overflow: hidden;
          background: #fff;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 24px 12px 24px;
        }

        .projects-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.9);
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 16px;
        }

        .action-btn {
          background: none;
          border: none;
          color: rgba(0, 0, 0, 0.6);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .action-btn:hover {
          background-color: rgba(0, 0, 0, 0.08);
          color: rgba(0, 0, 0, 0.9);
        }

        .projects-content {
          padding: 0 24px;
        }

        .project-wrapper {
          padding: 16px 0;
        }

        .item-title {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.9);
          margin: 0 0 2px 0;
        }

        .item-subtitle {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.6);
          margin: 0 0 16px 0;
        }

        .item-description {
          font-size: 0.9rem;
          color: rgba(0, 0, 0, 0.9);
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .skills-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 20px;
        }

        .skills-icon-container {
          color: rgba(0, 0, 0, 0.7);
          margin-top: 2px;
        }

        .skills-text {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.9);
          margin: 0;
          line-height: 1.4;
        }

        .media-grid {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .media-item {
          cursor: pointer;
          transition: transform 0.2s;
        }

        .media-item:hover {
          transform: translateY(-2px);
        }

        .media-frame {
          position: relative;
          width: 140px;
          height: 80px;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid #e0e0e0;
          background: #f8f8f8;
        }

        .media-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .link-badge {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: #fff;
          border-radius: 4px;
          padding: 4px;
          display: flex;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          color: rgba(0, 0, 0, 0.6);
        }

        .item-divider {
          border: 0;
          border-top: 1px solid #e0e0e0;
          margin: 24px 0 8px 0;
        }

        .projects-footer {
            border-top: 1px solid #e0e0e0;
            padding: 12px;
            text-align: center;
        }

        .show-all-btn {
            background: none;
            border: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            padding: 12px;
            border-radius: 4px;
            transition: background-color 0.2s;
            text-decoration: none;
            display: block;
        }

        .show-all-btn:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: rgba(0, 0, 0, 0.9);
        }

        @media (max-width: 768px) {
          .projects-header {
            padding: 16px 16px 8px 16px;
          }
          .projects-content {
            padding: 0 16px;
          }
          .media-grid {
            justify-content: center;
          }
          .media-frame {
            width: calc(50% - 6px);
            min-width: 130px;
            height: 90px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
