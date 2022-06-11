import React from 'react';
import Project from './Project';
import ProjectsData from './ProjectsData';

const Projects = () => {
  return (
    <section className="container-fluid project" id="projects">
    <div className="container">
      <div className="row">
        <h1>.recent works</h1>
        <div className="projects-list">
            {
                ProjectsData.map((project, i) => { 
                    return <Project 
                                key={i} 
                                projectname={project.name} 
                                projectDetails={project.details} 
                            />
                })
            }
        </div>
      </div>
    </div>
  </section> 
  )
}

export default Projects