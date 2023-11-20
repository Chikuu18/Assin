// src/Components/Auth.js
import React, { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Perform authentication logic, e.g., check credentials
    setAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic
    setAuthenticated(false);
  };

  const contextValue = { authenticated, login, logout };

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      'useAuthentication must be used within an AuthenticationProvider'
    );
  }

  return context;
};
