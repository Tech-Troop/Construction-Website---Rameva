import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUserProfile = ({ email }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/update-profile', { email, username });
      navigate('/appointment-dashboard', { state: { email, username } });
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  return (
    <div>
      <span>Congrats on successfully registering as a customer at RAMEVA_Consult</span>
      <br />
      <span>Just a few more steps and then you're done</span>
      <div className='userProfileform'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleUpdate}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              readOnly
              required
            />
          </label>
          <br />
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
