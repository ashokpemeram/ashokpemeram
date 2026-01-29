import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Lightbulb, Target, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Passionate about building scalable web applications and delivering high-performance digital solutions, I specialize in React.js, Node.js, Express.js, MongoDB, Java and Python. With over a year of experience in full-stack development, I have successfully designed and developed dynamic web platforms, e-commerce solutions, and innovative applications.

🔹 Technical Skills:
✔ Frontend: React.js, HTML, CSS, JavaScript, Material UI, Framer Motion
✔ Backend: Node.js, Express.js, MongoDB
✔ DSA & Problem-Solving: Beginner to intermediate level in Data Structures & Algorithms (DSA), 
 continuously improving problem-solving skills.

Beyond development, I have a keen interest in AI & ML, always seeking to expand my knowledge and work on innovative projects. Recently, I’ve been exploring machine learning, and voice recognition to integrate AI-driven features into applications.

💡 Let’s Connect! Whether it's collaborating on projects, discussing tech trends, or exploring new opportunities, feel free to reach out.`;

  const previewText = fullText.slice(0, 350) + "...";

  return (
    <section id="about" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <div>
        <div className="card">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            {window.location.pathname === "/about" ?
              <p className='about-intro'>{fullText}</p> :
              <p className="about-intro">
                {isExpanded ? fullText : previewText}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="see-more-btn"
                >
                  {isExpanded ? "see less" : "see more"}
                </button>
              </p>}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          line-height: 1.5;
        }

        .about-intro {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.5;
          position: relative;
          white-space: pre-line;
        }

        .see-more-btn {
          background: none;
          border: none;
          color: #0a66c2;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          margin-left: 8px;
          font-family: inherit;
          font-size: 1rem;
          display: inline;
        }

        .see-more-btn:hover {
          text-decoration: underline;
        }

        .about-intro strong {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .about-intro {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
