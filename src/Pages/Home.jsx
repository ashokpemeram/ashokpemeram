import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import SocialMedia from '../components/SocialMedia'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

const Home = () => {
    return (
        <div>
            <div className="app" style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '1rem', gap: '1rem' }}>
                <div style={{ minHeight: '100vh', height: 'auto', width: '70%', marginLeft: '8%', borderRadius: '10px' }}>
                    <Hero />
                    <About />
                    <Projects />

                </div>
                <div style={{ height: 'auto', width: '30%', marginRight: '8%', borderRadius: '10px' }}>
                    <SocialMedia />
                    <Experience />
                    <Skills />
                    <Education />
                </div>
            </div>
        </div>
    )
}

export default Home