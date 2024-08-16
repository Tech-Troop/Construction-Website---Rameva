// src/components/UserProfile.js

import React, { useState } from 'react';
import styles from './UserProfile.module.css'; // Import the CSS module
import ProfilePictureUpload from '../components/ProfilePictureUpload';
import './UpdateUserProfile.css'

const UserProfile = () => {
  // State to hold user profile data
  const [user, setUser] = useState({
    firstName: 'User',
    lastName: 'Surname',
    email: 'useremail@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, Ghana',
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
    <div className={styles.userProfileContainer}>
      <h2 className={styles.profileHeader}>User Profile</h2>
     <div className='changeUserProfilegrid'>
        <div className='profilepictureUploaddiv'>
          <ProfilePictureUpload/>
        </div> 
        <div className={styles.profileCard}>
          <div className={styles.profileItem}>
            <label className={styles.profileLabel}>First Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={styles.profileInput}
              />
            ) : (
              <span className={styles.profileValue}>{user.firstName}</span>
            )}
          </div>
          <div className={styles.profileItem}>
            <label className={styles.profileLabel}>Last Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={styles.profileInput}
              />
            ) : (
              <span className={styles.profileValue}>{user.lastName}</span>
            )}
          </div>
          
          <div className={styles.profileItem}>
            <label className={styles.profileLabel}>Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.profileInput}
              />
            ) : (
              <span className={styles.profileValue}>{user.email}</span>
            )}
          </div>
          <div className={styles.profileItem}>
            <label className={styles.profileLabel}>Phone:</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.profileInput}
              />
            ) : (
              <span className={styles.profileValue}>{user.phone}</span>
            )}
          </div>
          <div className={styles.profileItem}>
            <label className={styles.profileLabel}>Address:</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={styles.profileInput}
              />
            ) : (
              <span className={styles.profileValue}>{user.address}</span>
            )}
          </div>
          <div className={styles.profileActions}>
            {isEditing ? (
              <>
                <button onClick={saveProfile} className={`${styles.button} ${styles.saveBtn}`}>Save</button>
                <button onClick={toggleEdit} className={`${styles.button} ${styles.cancelBtn}`}>Cancel</button>
              </>
            ) : (
              <button onClick={toggleEdit} className={`${styles.button} ${styles.editBtn}`}>Edit Profile</button>
            )}
          </div>
        </div> 
     </div>
     
    </div>
  );
};

export default UserProfile;
