import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/portfolio/ProjectCard';
import ContsructionPic from '../images/portfolio_images/contruction_pic.jpg';
import projects from '../components/portfolio/ProjectData'
import './ProjectsHome.css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="hero-container">
      </div>
      <h1 className="portfolio-title-text">OUR PROJECTS</h1>
      <div className="project-grids">
        {projects.map((project, index) => (
          <Link to={`/portfolio/${index}`} key={index}>
            <ProjectCard
              image={project.image}
              title={project.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
