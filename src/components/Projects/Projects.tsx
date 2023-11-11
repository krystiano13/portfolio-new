import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <main>
            <h1>My Projects</h1>
            <div className="ProjectsWrapper">
                <ul className="ProjectList"></ul>
                <div className="ProjectShowcase"></div>
            </div>
        </main>
    )
}

export { Projects }