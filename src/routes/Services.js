//services.js
import React from "react";
import "./Services.css";
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

function Services() {
  return (
    <div>
      <div className="servicepageHeader">
        <div className="headerContent">
          <span className="bestServiceText">WE PROVIDE THE BEST SERVICES</span>
          <span className="HeroText">We are here to make your dreams come true</span>
        </div>
        <div className="headerpicsdiv">
          <img src={house3} className="house3"/>
          <img src={house1} className="house1"/>
          <img src={house2} className="house2"/>
        </div>
      </div>
      <div className="servicepageContent">
        <div className="servicepageContentheader">Our Services</div>
      <div className="serviceCards">
        <div className="serviceCard1">
          {" "}
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
        <div className="serviceCard4">
          <div>
            <img
              src={img4}
              alt="StructuralDesign"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">STRUCTURAL DESIGN & CIVIL ENGINEERING SERVICES</span> <br />
          <span className="serviceCardText">Innovative structural design and civil engineering services for safe,
          efficient, and modern infrastructure. We bring your vision to life
          with expert planning and execution.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard5">
          <div>
            <img
              src={img5}
              alt="welding&Fabrication"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">WELDING & FABRICTION OF PIPES</span> <br />
          <span className="serviceCardText">Precision welding and pipe fabrication services ensuring seamless
          integration and long-lasting performance. Our skilled welders
          guarantee the highest quality in every joint and connection.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard6">
          <div>
            <img
              src={img6}
              alt="designServices"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">DESIGN SERVICES & PROJECT MANAGEMENT</span> <br />
          <span className="serviceCardText">Expert design services and project management for successful, timely,
          and budget-friendly project completion. We turn your ideas into
          reality with meticulous planning and execution.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard7">
          <div>
            <img
              src={img7}
              alt="surveyingServices"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">SURVEYING SERVICES-land,hydrographic etc</span> <br />
          <span className="serviceCardText">Accurate land and hydrographic surveying services for detailed and
          reliable mapping and analysis. Our advanced technology ensures precise
          measurements and comprehensive reports.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard8">
          <div>
            <img
              src={img8}
              alt="buildingRenovation"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">BUILDING RENOVATION AND REFURBISHMENT</span>
          <br />
          <span className="serviceCardText">Top-notch building renovation and refurbishment to revitalize and
          enhance your property's value and appeal. We transform spaces with
          quality craftsmanship and innovative solutions.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard9">
          <div>
            <img
              src={img9}
              alt="boreholdDrilling"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">BOREHOLE DRILLING, CONSTRUCTION & MECHANISATION</span>
          <br />
          <span className="serviceCardText">Professional borehole drilling, construction, and mechanization for
          reliable and sustainable water solutions. Our services ensure
          efficient and long-lasting water access for your needs.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard10">
          <div>
            <img
              src={img10}
              alt="technicalServices"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">TECHNICAL RELATED SERVICES & REPORTING</span>
          <br />
          <span className="serviceCardText">Comprehensive technical services and reporting for informed
          decision-making and project success. We provide detailed analysis and
          expert recommendations to support your objectives.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard11">
          <div>
            <img
              src={img11}
              alt="installationofBoosterpumps"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">INSTALLATION OF BOOSTER STATION PUMPS & PIPE FITTINGS</span>
          <br />
          <span className="serviceCardText">Expert installation of booster station pumps and pipe fittings for
          efficient water flow management. Our solutions enhance water pressure
          and system reliability.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard12">
          <div>
            <img
              src={img12}
              alt="waterSystems"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">WATER SYSTEMS</span> <br />
          <span className="serviceCardText">Reliable water systems installation and maintenance for consistent and
          clean water supply. We ensure your water systems are efficient, safe,
          and durable.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard13">
          <div>
            <img src={img13} alt="HDPE&PVC" className="BuildingConstruction" />
          </div>
          <span className="cardTitle">HDPE AND PVC</span>
          <br />
          <span className="serviceCardText">Professional HDPE and PVC pipe laying services ensuring durability and
          leak-free connections. Our experienced team delivers precision and
          reliability in every installation.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard14">
          <div>
            <img
              src={img14}
              alt="pipelinedesign&Reservoirs"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">PIPELINE DESIGN AND RESERVOIRS</span> <br />
          <span className="serviceCardText">Innovative pipeline design and reservoir construction for efficient
          water storage and distribution. We create robust systems tailored to
          your specific requirements.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard15">
          <div>
            <img
              src={img15}
              alt="PressureTesting"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">PRESSURE TESTING AND STERILIZATION OF PIPELINES</span>
          <br />
          <span className="serviceCardText">Ensure pipeline integrity with thorough pressure testing and
          sterilization services. Our rigorous processes guarantee safety and
          compliance with industry standards.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
        <div className="serviceCard16">
          <div>
            <img
              src={img16}
              alt="WaterpumpInstallation"
              className="BuildingConstruction"/>
          </div>
          <span className="cardTitle">WATER PUMP INSTALLATION AND ALIGNMENT</span>
          <br />
          <span className="serviceCardText">Precision water pump installation and alignment for optimal
          performance and longevity. Our expert technicians ensure your pumps
          operate efficiently and reliably.</span>
          <div>
                <button type="read More" className='readMoreButton'><span className='readMore'>Read More</span></button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Services;
