import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PlayerList from './PlayerList';
import PlayerDetails from './PlayerDetails';
import Login from './Login';


const Dashboard = () => {
  // Simple authentication logic (replace with your actual authentication mechanism)
  const isAuthenticated = true;

  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/players">Players</NavLink>
          {isAuthenticated ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>

        <Route path="/login" component={Login} />
        <Route path="/players" exact component={PlayerList} />
        <Route path="/players/:id" component={PlayerDetails} />
      </div>
    </Router>
  );
};

export default Dashboard;
