import React from 'react';

const UserProfile = () => {
  // Simulated user profile data
  const userProfileData = {
    username: 'Sarvesh',
    email: 'sarvesh@example.com',
    // Add more profile data as needed
  };

  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        <li>
          <strong>Username:</strong> {userProfileData.username}
        </li>
        <li>
          <strong>Email:</strong> {userProfileData.email}
        </li>
        {/* Add more profile data as needed */}
      </ul>
    </div>
  );
};

export default UserProfile;
