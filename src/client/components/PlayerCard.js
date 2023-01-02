import React from 'react';
import { Card } from 'react-bootstrap';

function PlayerCard(props) {
  const { name, team, points, rebounds, assists, steals, blocks } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Card style={{ width: '18rem', padding: '1rem', border: '2px solid rgb(0, 255, 225)' }}>
        <Card.Body style={{color: "rgb(0, 255, 225)"}}>
          <Card.Title style={{color: "rgb(255, 86, 0)", fontSize: '1.5rem', fontWeight: 'bold' }}>{name}</Card.Title>
          <Card.Subtitle style={{color: "white"}} className="mb-2 text-muted">{team}</Card.Subtitle>
          <Card.Text style={{paddingTop:"1rem"}}>
            Points: {points}
            <br />
            Rebounds: {rebounds}
            <br />
            Assists: {assists}
            <br />
            Steals: {steals}
            <br />
            Blocks: {blocks}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PlayerCard;
