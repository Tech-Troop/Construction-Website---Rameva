// import React, { useState } from 'react';
// import './Dropdown.css';

// const Dropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="dropdown">
//             <button className="dropdown-toggle" onClick={toggleDropdown}>
//                 Choose Consultation Service
//             </button>
//             {isOpen && (
//                 <ul className="dropdown-menu">
//                     <li className="dropdown-item">Building Services</li>
//                     <li className="dropdown-item">Construction Services</li>
//                     <li className="dropdown-item">Plumbing Services</li>
//                     <li className="dropdown-item">Plumbing Services</li>
//                     <li className="dropdown-item">Plumbing Services</li>
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Dropdown;

import React from 'react';
import './Dropdown.css';

const Dropdown = ({ onSelectService }) => {
  const services = ["General Consultation", "Building Services", "Construction services", "Water systems", "Surveying Services"];

  const handleSelect = (service) => {
    onSelectService(service);
  };

  return (
    <select className="select-dropdown" onChange={(e) => handleSelect(e.target.value)}>
      <option value="" className='selectServiceText'>Select a service</option>
      {services.map((service, index) => (
        <option key={index} value={service}>
          {service}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
