// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticationProvider } from './Components/Auth';
import ErrorBoundary from './Components/ErrorBoundry';
import Dashboard from './Components/Dashboard';
import PlayerDetails from './Components/PlayerDetails';

function App() {
  return (
    <Router>
      <AuthenticationProvider>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/players/:id" element={<PlayerDetails />} />
          </Routes>
        </ErrorBoundary>
      </AuthenticationProvider>
    </Router>
  );
}

export default App;
