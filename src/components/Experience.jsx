import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, Plus, Pencil, Briefcase } from 'lucide-react';
import stratosfy from "../../public/stratosfy.png";
import synxa from "../../public/synxa.png";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Stratosfy",
      role: "Research And Development Intern",
      type: "Internship",
      duration: "Dec 2025 - Present",
      totalTime: "",
      location: "Remote",
      description: [
        "Conducting research on emerging tech stacks and their potential application in current projects.",
        "Developing proof-of-concept prototypes for new product features using React and Node.js.",
        "Collaborating with the design and engineering teams to translate research findings into actionable insights."
      ],
      skills: "React, Node.js, Hardware Research",
      logo: stratosfy,
      id: 1
    },
    {
      company: "Synxa It Pvt Ltd",
      role: "Full Stack Developer",
      type: "Part-time",
      duration: "Jul 2023 - Jun 2025",
      totalTime: "2 yrs",
      location: "",
      description: [
        "Spearheaded the development of multiple full-stack web applications for diverse clients.",
        "Engineered scalable backend architectures using Express.js and MongoDB.",
        "Collaborated with cross-functional teams to ensure high-quality, performant, and user-centric web solutions.",
        "Implemented thorough unit and integration testing to maintain codebase stability and reliability."
      ],
      skills: "MERN Stack, Express.js, MongoDB, Unit Testing",
      logo: synxa,
      id: 2
    }
  ];

  const isExperiencePage = window.location.pathname === "/experience";

  return (
    <section id="experience" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <div className="card experience-main-card">
        <div className="experience-header-row">
          <div className="experience-header-left">
            <h2 className="section-title experience-section-title">Experience</h2>
          </div>
          <div className="experience-header-right">
            <Plus className="header-icon" />
            <Pencil className="header-icon" />
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={exp.id}>
              <div className="experience-item">
                <div className="experience-logo-container">
                  <div className={`company-logo-placeholder logo-${exp.logo.toLowerCase()}`}>
                    <img src={exp.logo} alt={exp.company} style={{ width: "100%", height: "100%" }} />
                  </div>
                </div>
                <div className="experience-info">
                  <div className="experience-title-row">
                    <h3 className="experience-role">{exp.role}</h3>
                    <Pencil size={18} className="item-edit-icon" />
                  </div>
                  <p className="experience-company">
                    {exp.company} · {exp.type}
                  </p>
                  <p className="experience-duration">
                    {exp.duration} · {exp.totalTime}
                  </p>
                  {exp.location && (
                    <p className="experience-location">{exp.location}</p>
                  )}
                  {isExperiencePage && exp.description && (
                    <ul className="experience-description-list">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {isExperiencePage && exp.skills && (
                    <div className="experience-skills">
                      <strong>Skills:</strong> {exp.skills}
                    </div>
                  )}
                </div>
              </div>
              {index < experiences.length - 1 && <hr className="experience-divider" />}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
                .experience-main-card {
                    padding: 0;
                    overflow: hidden;
                }

                .experience-header-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 24px;
                }

                .experience-header-left {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .experience-section-title {
                    margin: 0;
                    font-size: 1.25rem;
                    color: rgba(0, 0, 0, 0.9);
                }

                .header-icon {
                    cursor: pointer;
                    color: rgba(0, 0, 0, 0.6);
                    width: 24px;
                    height: 24px;
                }

                .experience-header-right {
                    display: flex;
                    gap: 20px;
                }

                .experience-list {
                    padding-bottom: 24px;
                }

                .experience-item {
                    display: flex;
                    gap: 12px;
                    padding: 12px 24px;
                }

                .experience-logo-container {
                    flex-shrink: 0;
                }

                .company-logo-placeholder {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1rem;
                    color: white;
                    border-radius: 4px;
                }

                .logo-sf { background: #0077b5; } /* Placeholder LinkedIn-like blue */
                .logo-sx { background: #006699; }

                .experience-info {
                    flex-grow: 1;
                }

                .experience-title-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .experience-role {
                    font-size: 1rem;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.9);
                    margin: 0 0 2px 0;
                }

                .item-edit-icon {
                    color: rgba(0, 0, 0, 0.6);
                    cursor: pointer;
                }

                .experience-company {
                    font-size: 0.875rem;
                    color: rgba(0, 0, 0, 0.9);
                    margin: 0 0 2px 0;
                }

                .experience-duration {
                    font-size: 0.875rem;
                    color: rgba(0, 0, 0, 0.6);
                    margin: 0 0 2px 0;
                }

                .experience-location {
                    font-size: 0.875rem;
                    color: rgba(0, 0, 0, 0.6);
                    margin: 0;
                }

                .experience-skills {
                    margin-top: 12px;
                    font-size: 0.875rem;
                    color: rgba(0, 0, 0, 0.9);
                    line-height: 1.5;
                }

                .experience-description-list {
                    margin: 8px 0 0 18px;
                    padding: 0;
                    font-size: 0.875rem;
                    color: rgba(0, 0, 0, 0.9);
                    line-height: 1.5;
                }

                .experience-description-list li {
                    margin-bottom: 4px;
                }

                .experience-divider {
                    border: 0;
                    border-top: 1px solid rgba(0, 0, 0, 0.08);
                    margin: 12px 24px;
                }

                @media (max-width: 768px) {
                    .experience-header-row {
                        padding: 16px;
                    }
                    .experience-item {
                        padding: 12px 16px;
                    }
                    .experience-divider {
                        margin: 12px 16px;
                    }
                }
            `}</style>
    </section>
  );
};

export default Experience;
