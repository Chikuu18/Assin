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

  return (
    <AuthenticationContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
