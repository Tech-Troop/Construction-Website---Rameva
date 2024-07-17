//services.js
import React from "react";

import house1 from "../images/house1.jpg"
import house2 from "../images/house2.jpeg"
import house3 from "../images/house3.jpeg"
import img1 from "../images/skyscraper.png";
import img2 from "../images/building.png";
import img3 from "../images/civil-engineering.png";
import img4 from "../images/structural design.png";
import img5 from "../images/welding.png";
import img6 from "../images/project-management.png";
import img7 from "../images/surveying.png";
import img8 from "../images/renovation.png";
import img9 from "../images/borehole_drill.png";
import img10 from "../images/technical-support.png";
import img11 from "../images/booster.png";
import img12 from "../images/water_systems.png";
import img13 from "../images/pvc_hdpe.png";
import img14 from "../images/pipeline.png";
import img15 from "../images/pressure-meter.png";
import img16 from "../images/pump.png";

function ServiceHome() {
  return (
    <div>
    
      <div className="servicepageContent">
        <div className="servicepageContentheader">Our Services</div>
      <div className="serviceCards">
        <div className="serviceCard1">
        
          <div>
          <img
              src={img1}
              alt="BuildingConstruction"
              className="BuildingConstruction"/>
          </div>
          
          <span className="cardTitle">BUILDING CONSTRUCTION</span> <br />
          <span className="serviceCardText">Expert building construction delivering robust, sustainable, and
          aesthetically pleasing structures. Our quality craftsmanship and
          attention to detail ensure your project is built to last.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard2">
          <div>
            <img
              src={img2}
              alt="buildingServices"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">BUILDING SERVICES</span> <br />
          <span className="serviceCardText">Comprehensive building services ensuring optimal functionality,
          safety, and comfort for your property. From maintenance to upgrades,
          we handle it all with precision and care.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard3">
          <div>
            <img
              src={img3}
              alt="civilConstruction"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">CIVIL CONSTRUCTION</span> <br />
          <span className="serviceCardText">Civil construction solutions from roads to bridges, providing
          reliability and durability in every project. Our experienced team
          ensures your infrastructure is built to the highest standards.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
      
        </div>
      </div>
      </div>
    
  );
}
export default ServiceHome;
