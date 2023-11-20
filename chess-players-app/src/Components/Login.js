import React from 'react';
import { useAuthentication } from '../Context/AuthenticationContext';

const Login = () => {
  const { login } = useAuthentication();

  const handleLogin = () => {
    // Perform login logic, e.g., show a login form
    login();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
