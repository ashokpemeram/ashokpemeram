import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import SocialMedia from '../components/SocialMedia'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import useIsMobile from '../components/IsMobile'

const Home = () => {
    const isMobile = useIsMobile();
    return (
        <div className="page-container">
            <div className="app-layout">
                <main className="main-content">
                    <Hero />
                    <About />
                    <Projects />
                </main>
                <aside className="side-content">
                    {isMobile ? <>
                        <Skills />
                        <Experience />
                        <Education />
                        <SocialMedia />
                    </> : (
                        <><SocialMedia />
                            <Experience />
                            <Skills />
                            <Education /></>
                    )}

                </aside>
            </div>

            <style jsx>{`
                .app-layout {
                    display: flex;
                    flex-direction: row;
                    gap: 24px;
                    align-items: flex-start;
                }

                .main-content {
                    flex: 7;
                    min-width: 0;
                }

                .side-content {
                    flex: 3;
                    display: flex;
                    flex-direction: column;

                }

                @media (max-width: 1024px) {
                    .app-layout {
                        flex-direction: column;
                    }

                    .main-content, .side-content {
                        width: 100%;
                        flex: none;
                    }

                    .home-container {
                        padding: 1rem 16px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Home