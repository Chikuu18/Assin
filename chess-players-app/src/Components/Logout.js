// src/components/Logout.js
import React from 'react';
import { useAuthentication } from '../Components/Auth';

const Logout = () => {
  const { logout } = useAuthentication();

  const handleLogout = () => {
    // Perform logout logic, e.g., clear session
    logout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
