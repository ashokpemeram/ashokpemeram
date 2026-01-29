import React from 'react'
import Projects from '../components/Projects'

const ProjectsPage = () => {
    return (
        <div>
            <div className="app" style={{ width: '80%', paddingTop: '1rem', marginLeft: '10%', marginRight: '10%', borderRadius: '10px' }}>
                <Projects />
            </div>
        </div>
    )
}

export default ProjectsPage;