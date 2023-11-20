import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
  const { id } = useParams();
  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    // Fetch player details from the backend when the component mounts
    const fetchPlayerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/player/${id}/details`);
        const data = await response.json();
        setPlayerDetails(data);
      } catch (error) {
        console.error('Error fetching player details:', error);
      }
    };

    fetchPlayerDetails();
  }, [id]);

  if (!playerDetails) {
    return <p>Loading player details...</p>;
  }

  return (
    <div>
      <h2>Player Details</h2>
      <p>Username: {playerDetails.username}</p>
      <p>Rating: {playerDetails.rating}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlayerDetails;
