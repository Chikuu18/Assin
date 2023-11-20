import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlayerList = () => {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    // Fetch top 50 chess players from the API
    fetch('http://localhost:8000/top-players')
      .then((response) => response.json())
      .then((data) => setTopPlayers(data))
      .catch((error) => console.error('Error fetching top players:', error));
  }, []);

  return (
    <div>
      <h2>Top 50 Chess Players</h2>
      <ul>
        {topPlayers.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
