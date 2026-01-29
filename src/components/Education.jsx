import { GraduationCap, Pencil, Plus } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      logo: "src/assets/GPREC.jpg",
      institution: "G.Pulla Reddy Engineering College",
      degree: "Bachelor of Technology - BTech, Computer Science",
      duration: "Aug 2023 - April 2026",
      grade: "7.23 CGPA",
      description: [
        "Focused on Advanced Data Structures and Algorithm Optimization.",
        "Participated in various technical workshops and hackathons.",
        "Member of the College Coding Club, actively contributing to peer learning sessions."
      ],
      id: 1
    },
    {
      logo: "src/assets/SVGP.jfif",
      institution: "Sri Venkateswara Govt Polytechnic College",
      degree: "Diploma in Computer Engineering",
      duration: "Dec 2020 - May 2023",
      grade: "77.57%",
      description: [
        "Specialized in Computer Hardware and Networking fundamentals.",
        "Consistently maintained a high academic standing throughout the 3-year program.",
        "Completed a final year project focused on simplified database management systems."
      ],
      id: 2
    }
  ];

  const isEduPage = window.location.pathname === "/education";

  return (
    <section id="education" style={{ marginBottom: "1rem" }}>
      <div className="card education-main-card">
        <div className="education-header-row">
          <h2 className="section-title education-section-title">Education</h2>
          <div className="education-header-right">
            <Plus className="header-icon" />
            <Pencil className="header-icon" />
          </div>
        </div>

        <div className="education-list">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="education-item">
              <div className="education-logo-container">
                <div className="education-placeholder-logo">
                  <img src={edu.logo} alt={edu.institution} style={{ width: "100%", height: "100%" }} />
                </div>
              </div>
              <div className="education-details">
                <h3 className="institution-name">{edu.institution}</h3>
                <p className="degree-name">{edu.degree}</p>
                <p className="education-duration">{edu.duration}</p>
                {edu.grade && <p className="education-grade">Grade: {edu.grade}</p>}

                {isEduPage && edu.description && (
                  <ul className="edu-description-list">
                    {edu.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {index < educationData.length - 1 && <hr className="education-divider" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-main-card {
          padding: 0;
          overflow: hidden;
        }

        .education-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 24px 12px 24px;
        }

        .education-section-title {
          margin: 0;
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.9);
          font-weight: 600;
        }

        .education-header-right {
          display: flex;
          gap: 20px;
        }

        .header-icon {
          cursor: pointer;
          color: rgba(0, 0, 0, 0.6);
          width: 24px;
          height: 24px;
        }

        .education-list {
          padding: 0 24px 24px 24px;
        }

        .education-item {
          display: flex;
          gap: 12px;
          padding: 12px 0;
        }

        .education-logo-container {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
        }

        .education-placeholder-logo {
          width: 100%;
          height: 100%;
          background-color: #f3f3f3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.6);
          border-radius: 4px;
        }

        .education-details {
          flex: 1;
        }

        .institution-name {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.9);
          margin: 0;
        }

        .degree-name {
          font-size: 0.9rem;
          color: rgba(0, 0, 0, 0.9);
          margin: 2px 0;
        }

        .education-duration {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.6);
          margin: 2px 0;
        }

        .education-grade {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.9);
          margin: 4px 0 0 0;
        }

        .edu-description-list {
          margin: 12px 0 0 18px;
          padding: 0;
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.9);
          line-height: 1.6;
        }

        .edu-description-list li {
          margin-bottom: 6px;
        }

        .education-divider {
          border: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          margin: 12px 0;
        }

        @media (max-width: 768px) {
          .education-header-row {
            padding: 16px;
          }
          .education-list {
            padding: 0 16px 16px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
