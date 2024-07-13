import React from 'react';
import { useLocation } from 'react-router-dom';

const Appointment = () => {
  const location = useLocation();
  const { email, username } = location.state || {};

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      {/* Add appointment dashboard content here */}
    </div>
  );
};

export default Appointment;
