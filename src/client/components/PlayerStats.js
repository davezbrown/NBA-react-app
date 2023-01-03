import React, { useState, useEffect } from 'react';

import {PlayerCard} from './PlayerCard';

const API_URL = 'https://www.balldontlie.io/api/v1/season_averages';

export default function PlayerStats(props) {
  const { playerId, name, team } = props;
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}?season=2022&player_ids[]=${playerId}`);
      const data = await response.json();
      setStats(data.data[0]);
    }
    fetchData();
  }, [playerId]);

  if (!stats) {
    return null;
  }

  console.log(stats)

  return (
    <PlayerCard
      name={name}
      team={team}
      points={stats.pts}
      rebounds={stats.reb}
      assists={stats.ast}
      steals={stats.stl}
      blocks={stats.blk}
    />
  );
}
