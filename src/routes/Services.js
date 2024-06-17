//services.js
import React from "react";
import "./Services.css";
import img1 from "../images/Buildingconstruction.png";
import img2 from "../images/BuildingServices.png";
import img3 from "../images/CivilConstruction.png";
import img4 from "../images/StructuralDesign_CivilEngineering.png";
import img5 from "../images/Welding_Fabrication_pipe.png";
import img6 from "../images/project-management.png";
import img7 from "../images/SurveyingServices.png";
import img8 from "../images/BuildingRenovation.png";
import img9 from "../images/BoreholeDrilling.png";
import img10 from "../images/technical-support.png";
import img11 from "../images/BoosterPump.png";
import img12 from "../images/waterSystems.png";
import img13 from "../images/pvc-pipe.png";
import img14 from "../images/pipeline.png";
import img15 from "../images/pressureTesting.png";
import img16 from "../images/pumpInstallationAlignment.png";

function Services() {
  return (
    <div className="servicesContainer">
      <div className="introContainer">All Services ──</div>

      <div className="serviceCards">
        <div className="serviceCard1">
          {" "}
          <div>
            <img
              src={img1}
              alt="BuildingConstruction"
              className="BuildingConstruction"/>
          </div>
          <span className="title">BUILDING CONSTRUCTION</span> <br />
          Expert building construction delivering robust, sustainable, and
          aesthetically pleasing structures. Our quality craftsmanship and
          attention to detail ensure your project is built to last.
        </div>
        <div className="serviceCard2">
          <div>
            <img
              src={img2}
              alt="buildingServices"
              className="BuildingConstruction"/>
          </div>
          <span className="title">BUILDING SERVICES</span> <br />
          Comprehensive building services ensuring optimal functionality,
          safety, and comfort for your property. From maintenance to upgrades,
          we handle it all with precision and care.
        </div>
        <div className="serviceCard3">
          <div>
            <img
              src={img3}
              alt="civilConstruction"
              className="BuildingConstruction"/>
          </div>
          <span className="title">CIVIL CONSTRUCTION</span> <br />
          Civil construction solutions from roads to bridges, providing
          reliability and durability in every project. Our experienced team
          ensures your infrastructure is built to the highest standards.
        </div>
        <div className="serviceCard4">
          <div>
            <img
              src={img4}
              alt="StructuralDesign"
              className="BuildingConstruction"/>
          </div>
          <span className="title">STRUCTURAL DESIGN & CIVIL ENGINEERING SERVICES</span> <br />
          Innovative structural design and civil engineering services for safe,
          efficient, and modern infrastructure. We bring your vision to life
          with expert planning and execution.
        </div>
        <div className="serviceCard5">
          <div>
            <img
              src={img5}
              alt="welding&Fabrication"
              className="BuildingConstruction"/>
          </div>
          <span className="title">WELDING & FABRICTION OF PIPES</span> <br />
          Precision welding and pipe fabrication services ensuring seamless
          integration and long-lasting performance. Our skilled welders
          guarantee the highest quality in every joint and connection.
        </div>
        <div className="serviceCard6">
          <div>
            <img
              src={img6}
              alt="designServices"
              className="BuildingConstruction"/>
          </div>
          <span className="title">DESIGN SERVICES & PROJECT MANAGEMENT</span> <br />
          Expert design services and project management for successful, timely,
          and budget-friendly project completion. We turn your ideas into
          reality with meticulous planning and execution.
        </div>
        <div className="serviceCard7">
          <div>
            <img
              src={img7}
              alt="surveyingServices"
              className="BuildingConstruction"/>
          </div>
          <span className="title">SURVEYING SERVICES-land,hydrographic etc</span> <br />
          Accurate land and hydrographic surveying services for detailed and
          reliable mapping and analysis. Our advanced technology ensures precise
          measurements and comprehensive reports.
        </div>
        <div className="serviceCard8">
          <div>
            <img
              src={img8}
              alt="buildingRenovation"
              className="BuildingConstruction"/>
          </div>
          <span className="title">BUILDING RENOVATION AND REFURBISHMENT</span>
          <br />
          Top-notch building renovation and refurbishment to revitalize and
          enhance your property's value and appeal. We transform spaces with
          quality craftsmanship and innovative solutions.
        </div>
        <div className="serviceCard9">
          <div>
            <img
              src={img9}
              alt="boreholdDrilling"
              className="BuildingConstruction"/>
          </div>
          <span className="title">BOREHOLE DRILLING, CONSTRUCTION & MECHANISATION</span>
          <br />
          Professional borehole drilling, construction, and mechanization for
          reliable and sustainable water solutions. Our services ensure
          efficient and long-lasting water access for your needs.
        </div>
        <div className="serviceCard10">
          <div>
            <img
              src={img10}
              alt="technicalServices"
              className="BuildingConstruction"/>
          </div>
          <span className="title">TECHNICAL RELATED SERVICES & REPORTING</span>
          <br />
          Comprehensive technical services and reporting for informed
          decision-making and project success. We provide detailed analysis and
          expert recommendations to support your objectives.
        </div>
        <div className="serviceCard11">
          <div>
            <img
              src={img11}
              alt="installationofBoosterpumps"
              className="BuildingConstruction"/>
          </div>
          <span className="title">INSTALLATION OF BOOSTER STATION PUMPS & PIPE FITTINGS</span>
          <br />
          Expert installation of booster station pumps and pipe fittings for
          efficient water flow management. Our solutions enhance water pressure
          and system reliability.
        </div>
        <div className="serviceCard12">
          <div>
            <img
              src={img12}
              alt="waterSystems"
              className="BuildingConstruction"/>
          </div>
          <span className="title">WATER SYSTEMS</span> <br />
          Reliable water systems installation and maintenance for consistent and
          clean water supply. We ensure your water systems are efficient, safe,
          and durable.
        </div>
        <div className="serviceCard13">
          <div>
            <img src={img13} alt="HDPE&PVC" className="BuildingConstruction" />
          </div>
          <span className="title">HDPE AND PVC</span>
          <br />
          Professional HDPE and PVC pipe laying services ensuring durability and
          leak-free connections. Our experienced team delivers precision and
          reliability in every installation.
        </div>
        <div className="serviceCard14">
          <div>
            <img
              src={img14}
              alt="pipelinedesign&Reservoirs"
              className="BuildingConstruction"/>
          </div>
          <span className="title">PIPELINE DESIGN AND RESERVOIRS</span> <br />
          Innovative pipeline design and reservoir construction for efficient
          water storage and distribution. We create robust systems tailored to
          your specific requirements.
        </div>
        <div className="serviceCard15">
          <div>
            <img
              src={img15}
              alt="PressureTesting"
              className="BuildingConstruction"/>
          </div>
          <span className="title">PRESSURE TESTING AND STERILIZATION OF PIPELINES</span>
          <br />
          Ensure pipeline integrity with thorough pressure testing and
          sterilization services. Our rigorous processes guarantee safety and
          compliance with industry standards.
        </div>
        <div className="serviceCard16">
          <div>
            <img
              src={img16}
              alt="WaterpumpInstallation"
              className="BuildingConstruction"/>
          </div>
          <span className="title">WATER PUMP INSTALLATION AND ALIGNMENT</span>
          <br />
          Precision water pump installation and alignment for optimal
          performance and longevity. Our expert technicians ensure your pumps
          operate efficiently and reliably.
        </div>
      </div>
    </div>
  );
}

export default Services;
