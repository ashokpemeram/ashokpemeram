import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const certifications = [
        {
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            credentialUrl: "#"
        },
        {
            title: "MongoDB Certified Developer",
            issuer: "MongoDB University",
            date: "2023",
            credentialUrl: "#"
        },
        {
            title: "React - The Complete Guide",
            issuer: "Udemy",
            date: "2022",
            credentialUrl: "#"
        },
        {
            title: "Node.js Advanced Concepts",
            issuer: "Udemy",
            date: "2022",
            credentialUrl: "#"
        },
        {
            title: "Machine Learning Specialization",
            issuer: "Coursera - Stanford University",
            date: "2023",
            credentialUrl: "#"
        },
        {
            title: "Full Stack Web Development",
            issuer: "freeCodeCamp",
            date: "2021",
            credentialUrl: "#"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title">Certifications & Achievements</h2>

                <motion.div
                    ref={ref}
                    className="certifications-grid grid grid-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="card cert-card"
                            variants={cardVariants}
                            whileHover={{ x: 8, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)" }}
                        >
                            <div className="cert-header">
                                <div className="cert-icon">
                                    <Award size={24} />
                                </div>
                                <div className="cert-info">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                </div>
                            </div>

                            <div className="cert-footer">
                                <div className="cert-date">
                                    <Calendar size={16} />
                                    <span>{cert.date}</span>
                                </div>
                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                                    <span>View Credential</span>
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        .certifications-grid {
          margin-top: var(--spacing-lg);
        }

        .cert-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: var(--spacing-md);
        }

        .cert-header {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
        }

        .cert-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: var(--text-white);
          border-radius: var(--radius-md);
        }

        .cert-info {
          flex: 1;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .cert-issuer {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .cert-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-sm);
          border-top: 1px solid var(--border-color);
        }

        .cert-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .cert-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-blue);
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .cert-link:hover {
          color: var(--primary-blue-hover);
          gap: 0.75rem;
        }

        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }

          .cert-footer {
            flex-direction: column;
            gap: var(--spacing-sm);
            align-items: flex-start;
          }
        }
      `}</style>
        </section>
    );
};

export default Certifications;
