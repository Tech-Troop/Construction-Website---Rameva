import React from "react";
import "../../routes/Portfolio.css";

const ProjectCard = ({ image, title }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-details">
        <h3 className="project-card-title">{title}</h3>
        <div> 
          <button className="project-card-button">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;