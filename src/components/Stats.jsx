import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Briefcase, Code, GitBranch } from 'lucide-react';

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        {
            icon: <Briefcase size={32} />,
            value: 4,
            suffix: "+",
            label: "Years Experience",
            color: "#0A66C2"
        },
        {
            icon: <Code size={32} />,
            value: 50,
            suffix: "+",
            label: "Projects Completed",
            color: "#667eea"
        },
        {
            icon: <Award size={32} />,
            value: 15,
            suffix: "+",
            label: "Technologies Mastered",
            color: "#764ba2"
        },
        {
            icon: <GitBranch size={32} />,
            value: 500,
            suffix: "+",
            label: "GitHub Contributions",
            color: "#378fe9"
        }
    ];

    return (
        <section id="stats" className="section stats-section">
            <div className="container">
                <h2 className="section-title text-center">Achievements & Stats</h2>

                <motion.div
                    ref={ref}
                    className="stats-grid grid grid-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} isInView={isInView} />
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        .stats-section {
          background: var(--bg-white);
        }

        .stats-grid {
          margin-top: var(--spacing-lg);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

const StatCard = ({ stat, index, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const duration = 2000; // 2 seconds
        const startValue = 0;
        const endValue = stat.value;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, stat.value]);

    return (
        <motion.div
            className="card stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)" }}
        >
            <div className="stat-icon" style={{ background: stat.color }}>
                {stat.icon}
            </div>
            <div className="stat-value">
                {count}{stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>

            <style jsx>{`
        .stat-card {
          text-align: center;
          padding: var(--spacing-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-sm);
          background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 249, 250, 1) 100%);
        }

        .stat-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-lg);
          color: var(--text-white);
          margin-bottom: var(--spacing-sm);
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .stat-card {
            padding: var(--spacing-lg);
          }

          .stat-icon {
            width: 64px;
            height: 64px;
          }

          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
        </motion.div>
    );
};

export default Stats;
