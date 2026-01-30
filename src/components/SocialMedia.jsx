import { Pencil, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const SocialMedia = () => {
    const socialItems = [
        {
            title: "Profile language",
            subtitle: "English"
        },
        {
            title: "E-mail",
            subtitle: "ashokpemeram@gmail.com"
        },
        {
            title: "Mobile Number",
            subtitle: "+91 9515461257"
        }
    ];

    const socialLinks = [
        {
            icon: <Github size={20} />,
            url: "https://github.com/ashokq",
            label: "GitHub"
        },
        {
            icon: <Linkedin size={20} />,
            url: "https://linkedin.com/in/ashokpemeram",
            label: "LinkedIn"
        },
        {
            icon: <Instagram size={20} />,
            url: "https://instagram.com/ashokpemeram",
            label: "Instagram"
        },
        {
            icon: <Mail size={20} />,
            url: "mailto:ashokpemeram@gmail.com",
            label: "Email"
        }
    ];

    return (
        <section id="social-media" style={{}}>
            <div className="card social-card" style={{ padding: '0' }}>
                {socialItems.map((item, index) => (
                    <div key={index}>
                        <div className="social-item">
                            <div className="social-item-content">
                                <h3 className="social-item-title">{item.title}</h3>
                                <p className="social-item-subtitle">{item.subtitle}</p>
                            </div>
                            <button className="edit-icon-btn">
                                <Pencil size={20} className="edit-icon" />
                            </button>
                        </div>
                        <hr className="social-divider" />
                    </div>
                ))}

                <div className="social-links-section">
                    <h3 className="social-links-title">Social Links</h3>
                    <div className="social-links-grid">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-item"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .social-card {
                    overflow: hidden;
                }

                .social-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 16px 24px;
                    transition: background-color 0.2s;
                }

                .social-item:hover {
                    background-color: rgba(0, 0, 0, 0.03);
                }

                .social-item-content {
                    flex: 1;
                }

                .social-item-title {
                    font-size: 1rem;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.9);
                    margin: 0 0 4px 0;
                }

                .social-item-subtitle {
                    font-size: 0.875rem;
                    color: rgba(0, 0, 0, 0.6);
                    margin: 0;
                }

                .edit-icon-btn {
                    background: none;
                    border: none;
                    padding: 8px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 12px;
                    color: rgba(0, 0, 0, 0.6);
                    transition: all 0.2s;
                }

                .edit-icon-btn:hover {
                    background-color: rgba(0, 0, 0, 0.08);
                    color: rgba(0, 0, 0, 0.9);
                }

                .social-divider {
                    border: 0;
                    border-top: 1px solid rgba(0, 0, 0, 0.08);
                    margin: 0;
                    width: calc(100% - 48px);
                    margin-left: 24px;
                }

                .social-links-section {
                    padding: 16px 24px;
                }

                .social-links-title {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.9);
                    margin-bottom: 12px;
                }

                .social-links-grid {
                    display: flex;
                    gap: 16px;
                }

                .social-link-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #f3f2ef;
                    color: rgba(0, 0, 0, 0.6);
                    transition: all 0.2s;
                }

                .social-link-item:hover {
                    background-color: #e0e0e0;
                    color: #0a66c2;
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .social-item {
                        padding: 12px 16px;
                    }
                    .social-divider {
                        width: calc(100% - 32px);
                        margin-left: 16px;
                    }
                    .social-links-section {
                        padding: 12px 16px;
                    }
                }
            `}</style>
        </section>
    );
};

export default SocialMedia;
