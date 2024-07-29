import React, { useState } from "react";
import './ProfilePictureUpload.css';
import uploadImage from '../images/upload_image.png'

const ProfilePictureUpload = () => {
  // State to hold the uploaded image
  const [image, setImage] = useState(null);

  // Placeholder image URL
//   const placeholderImage = <img src={uploadImage} alt="" className="placeholderUploadImageIcon"/>

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image data to state
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  return (
    <div className="profile-picture-upload">
      <h2>Upload Profile Picture</h2>
      <div className="image-preview">
        <img
          src={image || uploadImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={handleImageUpload}
        style={{ display: 'none' }} // Hide the default input element
      />
      <button
        onClick={() => document.getElementById('fileInput').click()}
        className="upload-button"
      >
        Choose Image
      </button>
    </div>
  );
};

export default ProfilePictureUpload;
