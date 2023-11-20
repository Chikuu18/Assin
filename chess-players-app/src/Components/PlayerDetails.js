import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
  const { id } = useParams();
  const [playerDetails, setPlayerDetails] = useState({});

  useEffect(() => {
    // Fetch player details based on id from the API
    fetch(`http://localhost:8000/players/${id}`)
      .then((response) => response.json())
      .then((data) => setPlayerDetails(data))
      .catch((error) => console.error('Error fetching player details:', error));
  }, [id]);

  return (
    <div>
      <h2>Player Details</h2>
      <p>Display details for player with ID: {id}</p>
      {/* Render player details */}
      <pre>{JSON.stringify(playerDetails, null, 2)}</pre>
    </div>
  );
};

export default PlayerDetails;
