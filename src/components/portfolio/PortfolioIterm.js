// src/routes/PortfolioItem.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import projects from "../../components/portfolio/ProjectData";
import ContsructionPic from "../../images/portfolio_images/contruction_pic.jpg";
import rightArrow from "../../images/portfolio_images/right-arrow.png";
import leftArrow from "../../images/portfolio_images/left-arrow.png";
import "../../routes/Portfolio.css";
import { motion } from 'framer-motion';

const PortfolioItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToPreviousProject = () => {
    const previousId = parseInt(id) - 1;
    if (previousId >= 0) {
      navigate(`/portfolio/${previousId}`);
    }
  };

  const goToNextProject = () => {
    const nextId = parseInt(id) + 1;
    if (nextId < projects.length) {
      navigate(`/portfolio/${nextId}`);
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div>
        <div className="hero-container">
          <img src={ContsructionPic} alt="" className="hero-pic" />
          <h1 className="hero-text">Portfolio</h1>
        </div>
        <h2>Project not found</h2>
      </div>
    );
  }

  const previousId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;

  return (
    <div className="project-item">
      <div className="hero-container">
        <img src={ContsructionPic} alt="" className="hero-pic" />
        <h1 className="portfolio-item-hero-text">{project.title}</h1>
      </div>

      <div className="portfolio-item-content">
        <div className="portfolio-item-text">
            <h3 className="project-description-text">Project Description</h3>
          <p>{project.description}</p>
        </div>
            <motion.img
            src={project.image}
            className="portfolio-item-image"
            alt={project.title}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
      </div>


      <div className="navigation-arrows">
        <div className="arrow-wrapper">
          {previousId >= 0 && (
            <img
              src={leftArrow}
              className="arrow left-arrow"
              onClick={goToPreviousProject}
              alt=""
            ></img>
          )}
        </div>

        <div className="arrow-wrapper">
          {nextId <= projects.length - 1 && (
            <img
              src={rightArrow}
              className="arrow right-arrow"
              onClick={goToNextProject}
              alt=""
            ></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
