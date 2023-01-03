import React, { useState, useEffect } from 'react';

import PlayerStats from './PlayerStats';

const API_URL = 'https://www.balldontlie.io/api/v1/players';

export const GetPlayer = (props) => {
  const { name } = props;
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}?search=${name}`);
      const data = await response.json();
      setPlayer(data.data[0]);
    }
    fetchData();
  }, [name]);

  if (!player) {
    return null;
  }

  return (
    <PlayerStats
      playerId={player.id}
      name={player.first_name + ' ' + player.last_name}
      team={player.team.full_name}
    />
  );
}
