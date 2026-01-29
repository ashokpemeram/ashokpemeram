import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Cloud, Cpu, Palette, Plus, Pencil } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette size={18} />,
      skills: ["React", "JavaScript", "HTML5 & CSS3", "Tailwind CSS", "Flutter"]
    },
    {
      title: "Backend",
      icon: <Server size={18} />,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: <Database size={18} />,
      skills: ["MongoDB", "Firebase"]
    },
    {
      title: "Languages",
      icon: <Code2 size={18} />,
      skills: ["JavaScript", "Java"]
    },
    {
      title: "Tools & Concepts",
      icon: <Cloud size={18} />,
      skills: ["Postman", "Github", "Git", "Figma", "Scrum"]
    },
  ];

  return (
    <section id="skills" style={{ marginBottom: "1rem" }}>
      <div className="card skills-main-card">
        <div className="skills-header">
          <h2 className="section-title skills-title">Skills</h2>
          <div className="header-actions">
            <Plus size={20} className="header-icon" />
            <Pencil size={20} className="header-icon" />
          </div>
        </div>

        <div className="skills-content" ref={ref}>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon-box">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">
                    {skill}{idx < category.skills.length - 1 ? " · " : ""}
                  </span>
                ))}
              </div>
              {index < skillCategories.length - 1 && <hr className="category-divider" />}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
                .skills-main-card {
                    padding: 0;
                    overflow: hidden;
                }

                .skills-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 24px 12px 24px;
                }

                .skills-title {
                    margin: 0;
                    font-size: 1.15rem;
                    color: rgba(0, 0, 0, 0.9);
                    font-weight: 600;
                }

                .header-actions {
                    display: flex;
                    gap: 16px;
                }

                .header-icon {
                    cursor: pointer;
                    color: rgba(0, 0, 0, 0.6);
                    transition: color 0.2s;
                }

                .header-icon:hover {
                    color: rgba(0, 0, 0, 0.9);
                }

                .skills-content {
                    padding: 0 24px 24px 24px;
                }

                .skill-category {
                    padding: 12px 0;
                }

                .category-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 6px;
                }

                .category-icon-box {
                    color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                }

                .category-title {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.9);
                    margin: 0;
                }

                .skill-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                    color: rgba(0, 0, 0, 0.7);
                    font-size: 0.875rem;
                    line-height: 1.5;
                }

                .skill-item {
                    white-space: nowrap;
                }

                .category-divider {
                    border: 0;
                    border-top: 1px solid rgba(0, 0, 0, 0.08);
                    margin: 12px 0 0 0;
                }

                @media (max-width: 768px) {
                    .skills-header {
                        padding: 16px 16px 8px 16px;
                    }
                    .skills-content {
                        padding: 0 16px 16px 16px;
                    }
                }
            `}</style>
    </section>
  );
};

export default Skills;
