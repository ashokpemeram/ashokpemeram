import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="contact-subtitle text-center">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="card">
                <h3 className="form-title">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      required
                      placeholder="Your message..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                    <Send size={20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="card contact-info-card">
                <h3 className="info-title">Contact Information</h3>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <Mail size={20} />
                    </div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <a href="mailto:ashokpemeram@gmail.com">ashokpemeram@gmail.com</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="info-content">
                      <h4>Location</h4>
                      <p>Kurnool, Andhra Pradesh, India</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Linkedin size={20} />
                    </div>
                    <div className="info-content">
                      <h4>LinkedIn</h4>
                      <a href="https://linkedin.com/in/ashokpemeram" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/ashokpemeram
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Github size={20} />
                    </div>
                    <div className="info-content">
                      <h4>GitHub</h4>
                      <a href="https://github.com/ashokpemeram" target="_blank" rel="noopener noreferrer">
                        github.com/ashokpemeram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="cta-box">
                  <h4>Let's Build Something Amazing!</h4>
                  <p>
                    I'm always open to discussing new projects, creative ideas, or opportunities
                    to be part of your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--bg-main);
        }

        .contact-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .form-title,
        .info-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: var(--spacing-sm);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-info-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .info-item {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
        }

        .info-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-gray-light);
          color: var(--primary-blue);
          border-radius: var(--radius-md);
        }

        .info-content h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .info-content p,
        .info-content a {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .info-content a {
          color: var(--primary-blue);
          text-decoration: none;
        }

        .info-content a:hover {
          text-decoration: underline;
        }

        .cta-box {
          margin-top: auto;
          padding: var(--spacing-lg);
          background: linear-gradient(135deg, rgba(10, 102, 194, 0.05) 0%, rgba(55, 143, 233, 0.05) 100%);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--primary-blue);
        }

        .cta-box h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .cta-box p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
