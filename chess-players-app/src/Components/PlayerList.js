// /src/components/PlayerList.js
import React, { useState, useEffect } from 'react';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch the list of top players from your FastAPI backend
    fetch('http://localhost:8000/top-players') // Update the URL based on your FastAPI setup
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching players:', error));
  }, []);

  return (
    <div>
      <h2>Top Chess Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.username}>
            <strong>{player.username}</strong> - Rating: {player.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
