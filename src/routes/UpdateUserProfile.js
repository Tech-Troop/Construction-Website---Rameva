// src/components/UserProfile.js

import React, { useState } from 'react';
import './UpdateUserProfile.css';

const UserProfile = () => {
  // State to hold user profile data
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
  });

  // State to handle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State to hold form data
  const [formData, setFormData] = useState(user);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setFormData(user); // Reset form data to current user data
  };

  // Save updated profile data
  const saveProfile = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <div className="profile-item">
          <label>First Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.firstName}</span>
          )}
        </div>
        <div className="profile-item">
          <label>Last Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.lastName}</span>
          )}
        </div>
        <div className="profile-item">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>
        <div className="profile-item">
          <label>Phone:</label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.phone}</span>
          )}
        </div>
        <div className="profile-item">
          <label>Address:</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.address}</span>
          )}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={saveProfile} className="save-btn">Save</button>
              <button onClick={toggleEdit} className="cancel-btn">Cancel</button>
            </>
          ) : (
            <button onClick={toggleEdit} className="edit-btn">Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
