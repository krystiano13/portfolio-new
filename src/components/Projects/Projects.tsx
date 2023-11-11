import React from 'react';
import { ProjectsData } from "./ProjectsData.ts";
import './Projects.css';

const Projects = () => {
    return (
        <main>
            <h1>My Projects</h1>
            <div className="ProjectsWrapper">
                <ul className="ProjectList">
                    {
                        ProjectsData.map(item => (
                            <li key={item.id}>{ item.name }</li>
                        ))
                    }
                </ul>
                <div className="ProjectShowcase"></div>
            </div>
        </main>
    )
}

export { Projects }